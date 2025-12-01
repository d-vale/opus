import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = new Database(path.join(__dirname, '../opus.db'));

// Enable foreign keys
db.pragma('foreign_keys = ON');

// Initialize database schema first
function createTables() {
  // Users table
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      name TEXT NOT NULL,
      password TEXT NOT NULL,
      role TEXT DEFAULT 'user' CHECK(role IN ('user', 'admin')),
      created_at TEXT DEFAULT (datetime('now'))
    )
  `);

  // Resources table
  db.exec(`
    CREATE TABLE IF NOT EXISTS resources (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      category TEXT NOT NULL,
      visual TEXT NOT NULL,
      description TEXT NOT NULL,
      link TEXT NOT NULL,
      rating INTEGER DEFAULT 0,
      tags TEXT NOT NULL,
      featured INTEGER DEFAULT 0,
      status TEXT DEFAULT 'approved' CHECK(status IN ('pending', 'approved', 'rejected')),
      submitted_by TEXT,
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (submitted_by) REFERENCES users(id) ON DELETE SET NULL
    )
  `);

  // Articles table
  db.exec(`
    CREATE TABLE IF NOT EXISTS articles (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      author TEXT NOT NULL,
      date TEXT NOT NULL,
      excerpt TEXT NOT NULL,
      content TEXT NOT NULL,
      image TEXT NOT NULL,
      resources TEXT NOT NULL,
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now'))
    )
  `);

  // Favorites table
  db.exec(`
    CREATE TABLE IF NOT EXISTS favorites (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id TEXT NOT NULL,
      resource_id TEXT NOT NULL,
      created_at TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
      FOREIGN KEY (resource_id) REFERENCES resources(id) ON DELETE CASCADE,
      UNIQUE(user_id, resource_id)
    )
  `);

  // History table (for tracking viewed resources)
  db.exec(`
    CREATE TABLE IF NOT EXISTS history (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id TEXT NOT NULL,
      resource_id TEXT NOT NULL,
      viewed_at TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
      FOREIGN KEY (resource_id) REFERENCES resources(id) ON DELETE CASCADE
    )
  `);

  // Submissions table (for pending resource submissions)
  db.exec(`
    CREATE TABLE IF NOT EXISTS submissions (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      category TEXT NOT NULL,
      visual TEXT NOT NULL,
      description TEXT NOT NULL,
      link TEXT NOT NULL,
      tags TEXT NOT NULL,
      submitted_by TEXT NOT NULL,
      status TEXT DEFAULT 'pending' CHECK(status IN ('pending', 'approved', 'rejected')),
      admin_notes TEXT,
      created_at TEXT DEFAULT (datetime('now')),
      reviewed_at TEXT,
      reviewed_by TEXT,
      FOREIGN KEY (submitted_by) REFERENCES users(id) ON DELETE CASCADE,
      FOREIGN KEY (reviewed_by) REFERENCES users(id) ON DELETE SET NULL
    )
  `);
}

// Create tables immediately
createTables();

// Initialize database and prepare statements
export function initializeDatabase() {
  console.log('✅ Database initialized successfully');
}

// Prepared statements for common operations
export const queries = {
  // Users
  createUser: db.prepare(`
    INSERT INTO users (id, email, name, password, role)
    VALUES (?, ?, ?, ?, ?)
  `),

  getUserByEmail: db.prepare(`
    SELECT * FROM users WHERE email = ?
  `),

  getUserById: db.prepare(`
    SELECT id, email, name, role, created_at FROM users WHERE id = ?
  `),

  // Resources
  getAllResources: db.prepare(`
    SELECT * FROM resources WHERE status = 'approved' ORDER BY created_at DESC
  `),

  getResourceById: db.prepare(`
    SELECT * FROM resources WHERE id = ? AND status = 'approved'
  `),

  getResourcesByCategory: db.prepare(`
    SELECT * FROM resources WHERE category = ? AND status = 'approved' ORDER BY created_at DESC
  `),

  getFeaturedResources: db.prepare(`
    SELECT * FROM resources WHERE featured = 1 AND status = 'approved' ORDER BY rating DESC LIMIT 6
  `),

  createResource: db.prepare(`
    INSERT INTO resources (id, title, category, visual, description, link, rating, tags, featured, status, submitted_by)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `),

  // Articles
  getAllArticles: db.prepare(`
    SELECT * FROM articles ORDER BY date DESC
  `),

  getArticleById: db.prepare(`
    SELECT * FROM articles WHERE id = ?
  `),

  createArticle: db.prepare(`
    INSERT INTO articles (id, title, author, date, excerpt, content, image, resources)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `),

  updateArticle: db.prepare(`
    UPDATE articles
    SET title = ?, author = ?, date = ?, excerpt = ?, content = ?, image = ?, resources = ?, updated_at = datetime('now')
    WHERE id = ?
  `),

  deleteArticle: db.prepare(`
    DELETE FROM articles WHERE id = ?
  `),

  // Favorites
  addFavorite: db.prepare(`
    INSERT INTO favorites (user_id, resource_id) VALUES (?, ?)
  `),

  removeFavorite: db.prepare(`
    DELETE FROM favorites WHERE user_id = ? AND resource_id = ?
  `),

  getUserFavorites: db.prepare(`
    SELECT r.* FROM resources r
    INNER JOIN favorites f ON r.id = f.resource_id
    WHERE f.user_id = ? AND r.status = 'approved'
    ORDER BY f.created_at DESC
  `),

  isFavorite: db.prepare(`
    SELECT COUNT(*) as count FROM favorites WHERE user_id = ? AND resource_id = ?
  `),

  // History
  addToHistory: db.prepare(`
    INSERT INTO history (user_id, resource_id) VALUES (?, ?)
  `),

  getUserHistory: db.prepare(`
    SELECT DISTINCT r.*, h.viewed_at
    FROM resources r
    INNER JOIN history h ON r.id = h.resource_id
    WHERE h.user_id = ? AND r.status = 'approved'
    ORDER BY h.viewed_at DESC
    LIMIT 50
  `),

  clearUserHistory: db.prepare(`
    DELETE FROM history WHERE user_id = ?
  `),

  // Submissions
  createSubmission: db.prepare(`
    INSERT INTO submissions (id, title, category, visual, description, link, tags, submitted_by)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `),

  getAllSubmissions: db.prepare(`
    SELECT s.*, u.name as submitter_name, u.email as submitter_email
    FROM submissions s
    LEFT JOIN users u ON s.submitted_by = u.id
    ORDER BY s.created_at DESC
  `),

  getPendingSubmissions: db.prepare(`
    SELECT s.*, u.name as submitter_name, u.email as submitter_email
    FROM submissions s
    LEFT JOIN users u ON s.submitted_by = u.id
    WHERE s.status = 'pending'
    ORDER BY s.created_at ASC
  `),

  approveSubmission: db.prepare(`
    UPDATE submissions
    SET status = 'approved', reviewed_at = datetime('now'), reviewed_by = ?, admin_notes = ?
    WHERE id = ?
  `),

  rejectSubmission: db.prepare(`
    UPDATE submissions
    SET status = 'rejected', reviewed_at = datetime('now'), reviewed_by = ?, admin_notes = ?
    WHERE id = ?
  `),
};

export default db;
