import type { Resource, Category } from '../types';
import ResourceCard from '../components/ResourceCard';

interface HomePageProps {
  resources: Resource[];
  onNavigate: (page: string, data?: any) => void;
  onFavorite: (id: string) => void;
  favorites: string[];
}

export default function HomePage({ resources, onNavigate, onFavorite, favorites }: HomePageProps) {
  const featuredResources = resources.filter((r) => r.featured);

  const categories: { name: Category; icon: string }[] = [
    { name: 'Typographies', icon: '🔤' },
    { name: 'Colorimétrie', icon: '🎨' },
    { name: 'Illustrations', icon: '🎭' },
    { name: 'UI Kits / Components', icon: '🧩' },
    { name: 'Logos / Icônes', icon: '⭐' },
    { name: 'Templates / Interfaces', icon: '📱' },
    { name: 'Outils IA', icon: '🤖' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="titre-primaire mb-6">
              Les meilleures ressources<br />
              <span className="text-secondaire">pour designers</span>
            </h1>
            <p className="text-xl text-secondaire mb-8">
              Découvrez une collection soigneusement sélectionnée de ressources gratuites et premium
              pour vos projets de design graphique et UI/UX.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button
                onClick={() => onNavigate('categories')}
                className="btn-primary"
              >
                Explorer les ressources
              </button>
              <button
                onClick={() => onNavigate('submit')}
                className="btn-secondary"
              >
                Soumettre une ressource
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="titre-secondaire mb-8">Parcourir par catégorie</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => onNavigate('category', { category: category.name })}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 text-center group"
            >
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <div className="text-sm font-medium text-gray-900">{category.name}</div>
            </button>
          ))}
        </div>
      </section>

      {/* Featured Resources */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <div className="flex justify-between items-center mb-8">
          <h2 className="titre-secondaire">Ressources à la une</h2>
          <button
            onClick={() => onNavigate('categories')}
            className="link-primary text-sm"
          >
            Voir tout →
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredResources.map((resource) => (
            <ResourceCard
              key={resource.id}
              resource={resource}
              onFavorite={onFavorite}
              isFavorite={favorites.includes(resource.id)}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-black text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Opus en chiffres</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">{resources.length}+</div>
              <div className="text-gray-400">Ressources</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">7</div>
              <div className="text-gray-400">Catégories</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-gray-400">Gratuit</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl p-12 text-center">
          <h2 className="titre-secondaire mb-4">Vous connaissez une ressource géniale ?</h2>
          <p className="text-secondaire mb-6 max-w-2xl mx-auto">
            Partagez vos découvertes avec la communauté et aidez les autres designers à trouver les meilleurs outils.
          </p>
          <button
            onClick={() => onNavigate('submit')}
            className="btn-primary"
          >
            Soumettre une ressource
          </button>
        </div>
      </section>
    </div>
  );
}
