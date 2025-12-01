import { useState } from 'react';
import type { Category, Tag } from '../types';

interface SubmitPageProps {
  onNavigate: (page: string) => void;
}

export default function SubmitPage({ onNavigate }: SubmitPageProps) {
  const [formData, setFormData] = useState({
    title: '',
    category: '' as Category | '',
    link: '',
    description: '',
    tags: [] as Tag[],
  });
  const [submitted, setSubmitted] = useState(false);

  const categories: Category[] = [
    'Typographies',
    'Colorimétrie',
    'Illustrations',
    'UI Kits / Components',
    'Logos / Icônes',
    'Templates / Interfaces',
    'Outils IA',
  ];

  const tags: Tag[] = ['Gratuit', 'Payant', 'Freemium', 'Open source'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onNavigate('home');
    }, 2000);
  };

  const toggleTag = (tag: Tag) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter((t) => t !== tag)
        : [...prev.tags, tag],
    }));
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="text-6xl mb-6">✅</div>
        <h2 className="titre-secondaire mb-4">Merci pour votre contribution !</h2>
        <p className="text-secondaire mb-8">
          Votre ressource a été soumise avec succès. Nous l'examinerons prochainement.
        </p>
        <button onClick={() => onNavigate('home')} className="btn-primary">
          Retour à l'accueil
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="titre-primaire mb-4">Soumettre une ressource</h1>
        <p className="text-secondaire">
          Partagez vos ressources préférées avec la communauté. Tous les champs sont requis.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-8">
        {/* Title */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nom de la ressource *
          </label>
          <input
            type="text"
            required
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            placeholder="Ex: Google Fonts"
          />
        </div>

        {/* Category */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Catégorie *
          </label>
          <select
            required
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value as Category })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          >
            <option value="">Sélectionnez une catégorie</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Link */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Lien URL *
          </label>
          <input
            type="url"
            required
            value={formData.link}
            onChange={(e) => setFormData({ ...formData, link: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            placeholder="https://example.com"
          />
        </div>

        {/* Description */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description *
          </label>
          <textarea
            required
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none"
            placeholder="Décrivez brièvement cette ressource..."
          />
          <p className="text-xs text-muted mt-1">
            2-3 phrases sur l'utilité et les avantages de cette ressource
          </p>
        </div>

        {/* Tags */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tags *
          </label>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => toggleTag(tag)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  formData.tags.includes(tag)
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Submit */}
        <div className="flex gap-4">
          <button type="submit" className="btn-primary flex-1">
            Soumettre la ressource
          </button>
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="btn-secondary"
          >
            Annuler
          </button>
        </div>
      </form>
    </div>
  );
}
