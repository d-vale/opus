import express from 'express';
import cors from 'cors';
import { initializeDatabase, queries } from './database.js';
import { seedDatabase } from './seed.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from dist folder (React build)
app.use(express.static(path.join(__dirname, '../dist')));

// Initialize database
initializeDatabase();

// Seed database with initial data if empty
seedDatabase();

// Routes

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Opus API is running' });
});

// Auth routes
app.post('/api/auth/register', (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user exists
    const existingUser = queries.getUserByEmail.get(email);
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    // Create user (in production, hash the password!)
    const userId = Math.random().toString(36).substr(2, 9);
    queries.createUser.run(userId, email, name, password, 'user');

    const user = queries.getUserById.get(userId);
    res.json({ user });
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ error: 'Registration failed' });
  }
});

app.post('/api/auth/login', (req, res) => {
  try {
    const { email, password } = req.body;

    const user: any = queries.getUserByEmail.get(email);
    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;
    res.json({ user: userWithoutPassword });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Login failed' });
  }
});

// Resources routes
app.get('/api/resources', (req, res) => {
  try {
    const resources = queries.getAllResources.all();
    res.json(resources.map(r => ({
      ...r,
      tags: JSON.parse(r.tags as string),
      featured: Boolean(r.featured),
    })));
  } catch (error) {
    console.error('Get resources error:', error);
    res.status(500).json({ error: 'Failed to fetch resources' });
  }
});

app.get('/api/resources/featured', (req, res) => {
  try {
    const resources = queries.getFeaturedResources.all();
    res.json(resources.map(r => ({
      ...r,
      tags: JSON.parse(r.tags as string),
      featured: Boolean(r.featured),
    })));
  } catch (error) {
    console.error('Get featured resources error:', error);
    res.status(500).json({ error: 'Failed to fetch featured resources' });
  }
});

app.get('/api/resources/:id', (req, res) => {
  try {
    const resource: any = queries.getResourceById.get(req.params.id);
    if (!resource) {
      return res.status(404).json({ error: 'Resource not found' });
    }
    res.json({
      ...resource,
      tags: JSON.parse(resource.tags),
      featured: Boolean(resource.featured),
    });
  } catch (error) {
    console.error('Get resource error:', error);
    res.status(500).json({ error: 'Failed to fetch resource' });
  }
});

app.get('/api/resources/category/:category', (req, res) => {
  try {
    const resources = queries.getResourcesByCategory.all(req.params.category);
    res.json(resources.map(r => ({
      ...r,
      tags: JSON.parse(r.tags as string),
      featured: Boolean(r.featured),
    })));
  } catch (error) {
    console.error('Get resources by category error:', error);
    res.status(500).json({ error: 'Failed to fetch resources' });
  }
});

// Articles routes
app.get('/api/articles', (req, res) => {
  try {
    const articles = queries.getAllArticles.all();
    res.json(articles.map(a => ({
      ...a,
      resources: JSON.parse(a.resources as string),
    })));
  } catch (error) {
    console.error('Get articles error:', error);
    res.status(500).json({ error: 'Failed to fetch articles' });
  }
});

app.get('/api/articles/:id', (req, res) => {
  try {
    const article: any = queries.getArticleById.get(req.params.id);
    if (!article) {
      return res.status(404).json({ error: 'Article not found' });
    }
    res.json({
      ...article,
      resources: JSON.parse(article.resources),
    });
  } catch (error) {
    console.error('Get article error:', error);
    res.status(500).json({ error: 'Failed to fetch article' });
  }
});

// Admin: Create article
app.post('/api/admin/articles', (req, res) => {
  try {
    const { title, author, date, excerpt, content, image, resources } = req.body;
    const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    queries.createArticle.run(
      id,
      title,
      author,
      date,
      excerpt,
      content,
      image,
      JSON.stringify(resources)
    );

    res.json({ id, message: 'Article created successfully' });
  } catch (error) {
    console.error('Create article error:', error);
    res.status(500).json({ error: 'Failed to create article' });
  }
});

// Admin: Update article
app.put('/api/admin/articles/:id', (req, res) => {
  try {
    const { title, author, date, excerpt, content, image, resources } = req.body;

    queries.updateArticle.run(
      title,
      author,
      date,
      excerpt,
      content,
      image,
      JSON.stringify(resources),
      req.params.id
    );

    res.json({ message: 'Article updated successfully' });
  } catch (error) {
    console.error('Update article error:', error);
    res.status(500).json({ error: 'Failed to update article' });
  }
});

// Admin: Delete article
app.delete('/api/admin/articles/:id', (req, res) => {
  try {
    queries.deleteArticle.run(req.params.id);
    res.json({ message: 'Article deleted successfully' });
  } catch (error) {
    console.error('Delete article error:', error);
    res.status(500).json({ error: 'Failed to delete article' });
  }
});

// Favorites routes
app.post('/api/favorites', (req, res) => {
  try {
    const { userId, resourceId } = req.body;
    queries.addFavorite.run(userId, resourceId);
    res.json({ message: 'Added to favorites' });
  } catch (error: any) {
    if (error.code === 'SQLITE_CONSTRAINT') {
      return res.status(400).json({ error: 'Already in favorites' });
    }
    console.error('Add favorite error:', error);
    res.status(500).json({ error: 'Failed to add favorite' });
  }
});

app.delete('/api/favorites', (req, res) => {
  try {
    const { userId, resourceId } = req.body;
    queries.removeFavorite.run(userId, resourceId);
    res.json({ message: 'Removed from favorites' });
  } catch (error) {
    console.error('Remove favorite error:', error);
    res.status(500).json({ error: 'Failed to remove favorite' });
  }
});

app.get('/api/favorites/:userId', (req, res) => {
  try {
    const favorites = queries.getUserFavorites.all(req.params.userId);
    res.json(favorites.map(r => ({
      ...r,
      tags: JSON.parse(r.tags as string),
      featured: Boolean(r.featured),
    })));
  } catch (error) {
    console.error('Get favorites error:', error);
    res.status(500).json({ error: 'Failed to fetch favorites' });
  }
});

// History routes
app.post('/api/history', (req, res) => {
  try {
    const { userId, resourceId } = req.body;
    queries.addToHistory.run(userId, resourceId);
    res.json({ message: 'Added to history' });
  } catch (error) {
    console.error('Add to history error:', error);
    res.status(500).json({ error: 'Failed to add to history' });
  }
});

app.get('/api/history/:userId', (req, res) => {
  try {
    const history = queries.getUserHistory.all(req.params.userId);
    res.json(history.map(r => ({
      ...r,
      tags: JSON.parse(r.tags as string),
      featured: Boolean(r.featured),
    })));
  } catch (error) {
    console.error('Get history error:', error);
    res.status(500).json({ error: 'Failed to fetch history' });
  }
});

app.delete('/api/history/:userId', (req, res) => {
  try {
    queries.clearUserHistory.run(req.params.userId);
    res.json({ message: 'History cleared' });
  } catch (error) {
    console.error('Clear history error:', error);
    res.status(500).json({ error: 'Failed to clear history' });
  }
});

// Submissions routes
app.post('/api/submissions', (req, res) => {
  try {
    const { title, category, visual, description, link, tags, userId } = req.body;
    const id = Math.random().toString(36).substr(2, 9);

    queries.createSubmission.run(
      id,
      title,
      category,
      visual,
      description,
      link,
      JSON.stringify(tags),
      userId
    );

    res.json({ id, message: 'Submission created successfully' });
  } catch (error) {
    console.error('Create submission error:', error);
    res.status(500).json({ error: 'Failed to create submission' });
  }
});

// Admin: Get all submissions
app.get('/api/admin/submissions', (req, res) => {
  try {
    const submissions = queries.getAllSubmissions.all();
    res.json(submissions.map(s => ({
      ...s,
      tags: JSON.parse(s.tags as string),
    })));
  } catch (error) {
    console.error('Get submissions error:', error);
    res.status(500).json({ error: 'Failed to fetch submissions' });
  }
});

// Admin: Get pending submissions
app.get('/api/admin/submissions/pending', (req, res) => {
  try {
    const submissions = queries.getPendingSubmissions.all();
    res.json(submissions.map(s => ({
      ...s,
      tags: JSON.parse(s.tags as string),
    })));
  } catch (error) {
    console.error('Get pending submissions error:', error);
    res.status(500).json({ error: 'Failed to fetch pending submissions' });
  }
});

// Admin: Approve submission
app.post('/api/admin/submissions/:id/approve', (req, res) => {
  try {
    const { adminId, notes } = req.body;

    // Get submission details
    const submission: any = queries.getPendingSubmissions.all().find((s: any) => s.id === req.params.id);
    if (!submission) {
      return res.status(404).json({ error: 'Submission not found' });
    }

    // Create resource from submission
    const resourceId = Math.random().toString(36).substr(2, 9);
    queries.createResource.run(
      resourceId,
      submission.title,
      submission.category,
      submission.visual,
      submission.description,
      submission.link,
      0, // initial rating
      submission.tags,
      0, // not featured
      'approved',
      submission.submitted_by
    );

    // Mark submission as approved
    queries.approveSubmission.run(adminId, notes || '', req.params.id);

    res.json({ message: 'Submission approved and resource created' });
  } catch (error) {
    console.error('Approve submission error:', error);
    res.status(500).json({ error: 'Failed to approve submission' });
  }
});

// Admin: Reject submission
app.post('/api/admin/submissions/:id/reject', (req, res) => {
  try {
    const { adminId, notes } = req.body;

    queries.rejectSubmission.run(adminId, notes || '', req.params.id);

    res.json({ message: 'Submission rejected' });
  } catch (error) {
    console.error('Reject submission error:', error);
    res.status(500).json({ error: 'Failed to reject submission' });
  }
});

// Fallback: Serve React app for all non-API routes (SPA routing)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Opus API server running on http://localhost:${PORT}`);
  console.log(`📊 Database: opus.db`);
});
