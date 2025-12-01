import type { Resource } from '../types';
import { useState } from 'react';

interface ResourceCardProps {
  resource: Resource;
  onFavorite?: (id: string) => void;
  isFavorite?: boolean;
}

export default function ResourceCard({ resource, onFavorite, isFavorite }: ResourceCardProps) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="card group">
      {/* Image */}
      <div className="relative h-48 bg-gray-200 overflow-hidden">
        {!imageError ? (
          <img
            src={resource.visual}
            alt={resource.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={handleImageError}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
            <span className="text-4xl font-bold text-gray-400">{resource.title[0]}</span>
          </div>
        )}

        {/* Favorite button */}
        {onFavorite && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onFavorite(resource.id);
            }}
            className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-md"
          >
            <svg
              className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
              fill={isFavorite ? 'currentColor' : 'none'}
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        )}

        {/* Featured badge */}
        {resource.featured && (
          <div className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full font-medium">
            ⭐ Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title & Category */}
        <div className="mb-2">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{resource.title}</h3>
          <span className="text-xs text-gray-500">{resource.category}</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{resource.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {resource.tags.map((tag) => (
            <span
              key={tag}
              className={`text-xs px-2 py-1 rounded-full ${
                tag === 'Gratuit'
                  ? 'bg-green-100 text-green-700'
                  : tag === 'Payant'
                  ? 'bg-red-100 text-red-700'
                  : tag === 'Freemium'
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-purple-100 text-purple-700'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Rating & Link */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < resource.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                }`}
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-2 text-sm text-gray-600">{resource.rating}/5</span>
          </div>

          <a
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-black hover:underline"
            onClick={(e) => e.stopPropagation()}
          >
            Visiter →
          </a>
        </div>
      </div>
    </div>
  );
}
