import { useState } from 'react';

interface LoginPageProps {
  onNavigate: (page: string) => void;
  onLogin: (email: string, password: string) => void;
}

export default function LoginPage({ onNavigate, onLogin }: LoginPageProps) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError('Veuillez remplir tous les champs');
      return;
    }

    // Simulation de connexion
    onLogin(formData.email, formData.password);
    onNavigate('home');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="titre-secondaire mb-2">Connexion</h1>
          <p className="text-secondaire">
            Connectez-vous pour accéder à vos favoris et soumettre des ressources
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-8">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              {error}
            </div>
          )}

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
          </div>

          {/* Forgot password link */}
          <div className="mb-6 text-right">
            <button
              type="button"
              className="link-secondary text-sm"
            >
              Mot de passe oublié ?
            </button>
          </div>

          {/* Submit */}
          <button type="submit" className="btn-primary w-full mb-4">
            Se connecter
          </button>

          {/* Register link */}
          <p className="text-center text-sm text-secondaire">
            Pas encore de compte ?{' '}
            <button
              type="button"
              onClick={() => onNavigate('register')}
              className="link-primary"
            >
              Créer un compte
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
