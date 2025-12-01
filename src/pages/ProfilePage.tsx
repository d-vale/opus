import type { Resource } from '../types';
import ResourceCard from '../components/ResourceCard';

interface ProfilePageProps {
  resources: Resource[];
  favorites: string[];
  history: string[];
  onFavorite: (id: string) => void;
}

export default function ProfilePage({ resources, favorites, history, onFavorite }: ProfilePageProps) {
  const favoriteResources = resources.filter((r) => favorites.includes(r.id));
  const historyResources = resources.filter((r) => history.includes(r.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-gray-900 to-black text-white rounded-2xl p-8 mb-12">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-black text-3xl font-bold">
            U
          </div>
          <div>
            <h1 className="titre-secondaire mb-2">Mon Profil</h1>
            <p className="text-gray-300">Gérez vos ressources favorites et votre historique</p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="text-3xl mb-2">❤️</div>
          <div className="text-3xl font-bold mb-1">{favorites.length}</div>
          <div className="text-secondaire">Favoris</div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="text-3xl mb-2">👁️</div>
          <div className="text-3xl font-bold mb-1">{history.length}</div>
          <div className="text-secondaire">Consultées</div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="text-3xl mb-2">📝</div>
          <div className="text-3xl font-bold mb-1">0</div>
          <div className="text-secondaire">Soumises</div>
        </div>
      </div>

      {/* Favorites Section */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="titre-secondaire">Mes favoris</h2>
          {favorites.length > 0 && (
            <button
              onClick={() => favorites.forEach((id) => onFavorite(id))}
              className="link-secondary text-sm"
            >
              Tout supprimer
            </button>
          )}
        </div>

        {favoriteResources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteResources.map((resource) => (
              <ResourceCard
                key={resource.id}
                resource={resource}
                onFavorite={onFavorite}
                isFavorite={true}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-xl">
            <div className="text-6xl mb-4">❤️</div>
            <h3 className="titre-section mb-2">Aucun favori pour le moment</h3>
            <p className="text-secondaire">
              Cliquez sur le cœur des ressources pour les ajouter à vos favoris
            </p>
          </div>
        )}
      </section>

      {/* History Section */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="titre-secondaire">Historique</h2>
        </div>

        {historyResources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {historyResources.slice(0, 6).map((resource) => (
              <ResourceCard
                key={resource.id}
                resource={resource}
                onFavorite={onFavorite}
                isFavorite={favorites.includes(resource.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-xl">
            <div className="text-6xl mb-4">👁️</div>
            <h3 className="titre-section mb-2">Aucun historique</h3>
            <p className="text-secondaire">
              Vos ressources consultées apparaîtront ici
            </p>
          </div>
        )}
      </section>

      {/* My Resources Section */}
      <section>
        <h2 className="titre-secondaire mb-6">Mes ressources soumises</h2>
        <div className="text-center py-12 bg-gray-50 rounded-xl">
          <div className="text-6xl mb-4">📝</div>
          <h3 className="titre-section mb-2">Aucune ressource soumise</h3>
          <p className="text-secondaire mb-6">
            Partagez vos découvertes avec la communauté
          </p>
          <button className="btn-primary">
            Soumettre une ressource
          </button>
        </div>
      </section>
    </div>
  );
}
