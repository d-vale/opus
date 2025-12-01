import type { Article } from '../types';

interface BlogPageProps {
  articles: Article[];
  onNavigate: (page: string, data?: any) => void;
}

export default function BlogPage({ articles, onNavigate }: BlogPageProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="titre-primaire mb-4">Blog Opus</h1>
        <p className="text-secondaire text-lg">
          Découvrez nos sélections, conseils et tendances du design
        </p>
      </div>

      {/* Featured Article */}
      {articles.length > 0 && (
        <div
          onClick={() => onNavigate('article', { article: articles[0] })}
          className="mb-12 cursor-pointer group"
        >
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="h-64 md:h-auto">
                <img
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="text-sm text-muted mb-2">
                  {articles[0].author} • {new Date(articles[0].date).toLocaleDateString('fr-FR')}
                </div>
                <h2 className="text-3xl font-bold mb-4 group-hover:underline">
                  {articles[0].title}
                </h2>
                <p className="text-secondaire mb-6">{articles[0].excerpt}</p>
                <div className="link-primary">
                  Lire l'article
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.slice(1).map((article) => (
          <div
            key={article.id}
            onClick={() => onNavigate('article', { article })}
            className="card cursor-pointer group"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <div className="text-xs text-muted mb-2">
                {article.author} • {new Date(article.date).toLocaleDateString('fr-FR')}
              </div>
              <h3 className="titre-section mb-3 group-hover:underline">
                {article.title}
              </h3>
              <p className="text-secondaire text-sm mb-4">{article.excerpt}</p>
              <div className="link-primary text-sm">
                Lire l'article
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {articles.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📝</div>
          <h3 className="titre-section mb-2">Bientôt disponible</h3>
          <p className="text-secondaire">De nouveaux articles arrivent prochainement</p>
        </div>
      )}
    </div>
  );
}
