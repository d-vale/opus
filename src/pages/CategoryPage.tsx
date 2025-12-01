import type { Resource, Category } from '../types';
import ResourceCard from '../components/ResourceCard';

interface CategoryPageProps {
  category: Category;
  resources: Resource[];
  onFavorite: (id: string) => void;
  favorites: string[];
  onNavigate: (page: string) => void;
}

export default function CategoryPage({ category, resources, onFavorite, favorites, onNavigate }: CategoryPageProps) {
  const categoryResources = resources.filter((r) => r.category === category);

  const categoryInfo: Record<Category, { description: string; icon: string }> = {
    'Typographies': {
      description: 'Découvrez les meilleures sources de polices pour vos projets web et print.',
      icon: '🔤'
    },
    'Colorimétrie': {
      description: 'Trouvez l\'inspiration et créez des palettes de couleurs harmonieuses.',
      icon: '🎨'
    },
    'Illustrations': {
      description: 'Illustrations libres de droits et personnalisables pour tous vos besoins.',
      icon: '🎭'
    },
    'UI Kits / Components': {
      description: 'Kits d\'interface et composants prêts à l\'emploi pour accélérer votre workflow.',
      icon: '🧩'
    },
    'Logos / Icônes': {
      description: 'Bibliothèques d\'icônes et ressources pour vos logos et éléments visuels.',
      icon: '⭐'
    },
    'Templates / Interfaces': {
      description: 'Templates et exemples d\'interfaces pour inspirer vos créations.',
      icon: '📱'
    },
    'Outils IA': {
      description: 'Outils alimentés par l\'IA pour automatiser et améliorer votre workflow créatif.',
      icon: '🤖'
    },
  };

  const info = categoryInfo[category];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back button */}
      <button
        onClick={() => onNavigate('categories')}
        className="link-secondary mb-6"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Retour aux catégories
      </button>


      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-6xl">{info.icon}</span>
          <div>
            <h1 className="titre-primaire">{category}</h1>
            <p className="text-secondaire mt-2">{info.description}</p>
          </div>
        </div>
        <div className="mt-4">
          <span className="text-secondaire">
            {categoryResources.length} ressource{categoryResources.length > 1 ? 's' : ''} disponible{categoryResources.length > 1 ? 's' : ''}
          </span>
        </div>
      </div>

      {/* Resources Grid */}
      {categoryResources.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryResources.map((resource) => (
            <ResourceCard
              key={resource.id}
              resource={resource}
              onFavorite={onFavorite}
              isFavorite={favorites.includes(resource.id)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📦</div>
          <h3 className="titre-section mb-2">Aucune ressource pour le moment</h3>
          <p className="text-secondaire mb-6">Cette catégorie sera bientôt enrichie</p>
          <button
            onClick={() => onNavigate('submit')}
            className="btn-primary"
          >
            Soumettre une ressource
          </button>
        </div>
      )}
    </div>
  );
}
