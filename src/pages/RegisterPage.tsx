import { useState } from 'react';

interface RegisterPageProps {
  onNavigate: (page: string) => void;
  onRegister: (name: string, email: string, password: string) => void;
}

export default function RegisterPage({ onNavigate, onRegister }: RegisterPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Veuillez remplir tous les champs');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      return;
    }

    if (formData.password.length < 6) {
      setError('Le mot de passe doit contenir au moins 6 caractères');
      return;
    }

    // Simulation d'inscription
    onRegister(formData.name, formData.email, formData.password);
    onNavigate('home');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="titre-secondaire mb-2">Créer un compte</h1>
          <p className="text-secondaire">
            Rejoignez la communauté Opus et commencez à sauvegarder vos ressources favorites
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-8">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              {error}
            </div>
          )}

          {/* Name */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nom complet *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                setError('');
              }}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="Jean Dupont"
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                setError('');
              }}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="votre@email.com"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mot de passe *
            </label>
            <input
              type="password"
              required
              value={formData.password}
              onChange={(e) => {
                setFormData({ ...formData, password: e.target.value });
                setError('');
              }}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="••••••••"
            />
            <p className="text-xs text-muted mt-1">
              Minimum 6 caractères
            </p>
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirmer le mot de passe *
            </label>
            <input
              type="password"
              required
              value={formData.confirmPassword}
              onChange={(e) => {
                setFormData({ ...formData, confirmPassword: e.target.value });
                setError('');
              }}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="••••••••"
            />
          </div>

          {/* Terms */}
          <div className="mb-6">
            <label className="flex items-start">
              <input
                type="checkbox"
                required
                className="mt-1 mr-2"
              />
              <span className="text-sm text-secondaire">
                J'accepte les{' '}
                <button type="button" className="link-primary">
                  conditions d'utilisation
                </button>{' '}
                et la{' '}
                <button type="button" className="link-primary">
                  politique de confidentialité
                </button>
              </span>
            </label>
          </div>

          {/* Submit */}
          <button type="submit" className="btn-primary w-full mb-4">
            Créer mon compte
          </button>

          {/* Login link */}
          <p className="text-center text-sm text-secondaire">
            Déjà un compte ?{' '}
            <button
              type="button"
              onClick={() => onNavigate('login')}
              className="link-primary"
            >
              Se connecter
            </button>
          </p>
        </form>

        {/* Back to home */}
        <div className="mt-6 text-center">
          <button
            onClick={() => onNavigate('home')}
            className="link-secondary text-sm"
          >
            ← Retour à l'accueil
          </button>
        </div>
      </div>
    </div>
  );
}
