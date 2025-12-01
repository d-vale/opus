import { useState } from 'react';
import type { Resource, Category } from '../types';
import ResourceCard from '../components/ResourceCard';

interface CategoriesPageProps {
  resources: Resource[];
  onFavorite: (id: string) => void;
  favorites: string[];
}

export default function CategoriesPage({ resources, onFavorite, favorites }: CategoriesPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: Category[] = [
    'Typographies',
    'Colorimétrie',
    'Illustrations',
    'UI Kits / Components',
    'Logos / Icônes',
    'Templates / Interfaces',
    'Outils IA',
  ];

  const filteredResources = resources.filter((resource) => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="titre-primaire mb-4">Toutes les ressources</h1>
        <p className="text-secondaire">
          Explorez notre collection complète de {resources.length} ressources soigneusement sélectionnées
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Rechercher une ressource..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />
          <svg
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedCategory === 'all'
                ? 'bg-black text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Toutes
          </button>
          {categories.map((category) => {
            const count = resources.filter((r) => r.category === category).length;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Results count */}
      <div className="mb-6">
        <p className="text-secondaire">
          {filteredResources.length} ressource{filteredResources.length > 1 ? 's' : ''} trouvée{filteredResources.length > 1 ? 's' : ''}
        </p>
      </div>

      {/* Resources Grid */}
      {filteredResources.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
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
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="titre-section mb-2">Aucune ressource trouvée</h3>
          <p className="text-secondaire">Essayez de modifier vos critères de recherche</p>
        </div>
      )}
    </div>
  );
}
