import type { Article, Resource } from '../types';
import ResourceCard from '../components/ResourceCard';

interface ArticlePageProps {
  article: Article;
  resources: Resource[];
  onNavigate: (page: string) => void;
  onFavorite: (id: string) => void;
  favorites: string[];
}

export default function ArticlePage({ article, resources, onNavigate, onFavorite, favorites }: ArticlePageProps) {
  const articleResources = resources.filter((r) => article.resources.includes(r.id));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back button */}
      <button
        onClick={() => onNavigate('blog')}
        className="link-secondary mb-8"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Retour au blog
      </button>

      {/* Article Header */}
      <article>
        <header className="mb-8">
          <div className="text-sm text-muted mb-4">
            {article.author} • {new Date(article.date).toLocaleDateString('fr-FR', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}
          </div>
          <h1 className="titre-primaire mb-6">{article.title}</h1>
        </header>

        {/* Featured Image */}
        <div className="mb-8 rounded-2xl overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-secondaire leading-relaxed mb-6">{article.excerpt}</p>
          <div className="text-primaire leading-relaxed whitespace-pre-line">
            {article.content}
          </div>
        </div>

        {/* Related Resources */}
        {articleResources.length > 0 && (
          <div className="border-t pt-12">
            <h2 className="titre-secondaire mb-6">Ressources mentionnées</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articleResources.map((resource) => (
                <ResourceCard
                  key={resource.id}
                  resource={resource}
                  onFavorite={onFavorite}
                  isFavorite={favorites.includes(resource.id)}
                />
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
