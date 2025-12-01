import { queries } from './database.js';
import { resources } from '../src/data/resources.js';
import { articles } from '../src/data/articles.js';

export function seedDatabase() {
  try {
    // Check if database is already seeded
    const existingResources = queries.getAllResources.all();
    if (existingResources.length > 0) {
      console.log('ℹ️  Database already seeded, skipping...');
      return;
    }

    console.log('🌱 Seeding database...');

    // Seed resources
    resources.forEach((resource) => {
      queries.createResource.run(
        resource.id,
        resource.title,
        resource.category,
        resource.visual,
        resource.description,
        resource.link,
        resource.rating,
        JSON.stringify(resource.tags),
        resource.featured ? 1 : 0,
        'approved',
        null // no submitter for seed data
      );
    });

    console.log(`✅ Seeded ${resources.length} resources`);

    // Seed articles
    articles.forEach((article) => {
      queries.createArticle.run(
        article.id,
        article.title,
        article.author,
        article.date,
        article.excerpt,
        article.content,
        article.image,
        JSON.stringify(article.resources)
      );
    });

    console.log(`✅ Seeded ${articles.length} articles`);

    // Create default admin user
    const adminId = 'admin-default';
    try {
      queries.createUser.run(
        adminId,
        'admin@opus.com',
        'Admin',
        'admin123', // In production, this should be hashed!
        'admin'
      );
      console.log('✅ Created default admin user (email: admin@opus.com, password: admin123)');
    } catch (error: any) {
      if (error.code === 'SQLITE_CONSTRAINT') {
        console.log('ℹ️  Admin user already exists');
      } else {
        throw error;
      }
    }

    console.log('🎉 Database seeding completed!');
  } catch (error) {
    console.error('❌ Seeding error:', error);
    throw error;
  }
}
