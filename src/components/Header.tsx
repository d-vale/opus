import { useState } from 'react';
import type { User } from '../types';
import logoBlack from '../assets/logos/logo_black.png';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  user: User | null;
  onLogout: () => void;
}

export default function Header({ currentPage, onNavigate, user, onLogout }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Accueil', id: 'home' },
    { name: 'Catégories', id: 'categories' },
    { name: 'Blog', id: 'blog' },
    { name: 'Soumettre', id: 'submit' },
    { name: 'À propos', id: 'about' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-2"
          >
            <img
              src={logoBlack}
              alt="Opus Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="text-2xl font-bold">Opus</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`${
                  currentPage === item.id
                    ? 'text-black font-semibold border-b-2 border-black'
                    : 'text-gray-600 hover:text-black'
                } transition-colors pb-1`}
              >
                {item.name}
              </button>
            ))}

            {/* Auth buttons */}
            {user ? (
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => onNavigate('profile')}
                  className="flex items-center space-x-2 text-gray-700 hover:text-black transition-colors"
                >
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm font-semibold">
                    {user.name[0].toUpperCase()}
                  </div>
                  <span className="text-sm font-medium">{user.name}</span>
                </button>
                <button
                  onClick={onLogout}
                  className="text-sm text-gray-600 hover:text-black transition-colors"
                >
                  Déconnexion
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => onNavigate('login')}
                  className="text-gray-600 hover:text-black transition-colors font-medium"
                >
                  Connexion
                </button>
                <button
                  onClick={() => onNavigate('register')}
                  className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors font-medium"
                >
                  S'inscrire
                </button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMenuOpen(false);
                }}
                className={`${
                  currentPage === item.id
                    ? 'bg-black text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                } block w-full text-left px-4 py-2 rounded-lg transition-colors`}
              >
                {item.name}
              </button>
            ))}

            {/* Mobile Auth */}
            <div className="border-t pt-4 mt-4">
              {user ? (
                <>
                  <button
                    onClick={() => {
                      onNavigate('profile');
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center space-x-2 w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm font-semibold">
                      {user.name[0].toUpperCase()}
                    </div>
                    <span className="text-sm font-medium">{user.name}</span>
                  </button>
                  <button
                    onClick={() => {
                      onLogout();
                      setIsMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    Déconnexion
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      onNavigate('login');
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    Connexion
                  </button>
                  <button
                    onClick={() => {
                      onNavigate('register');
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 bg-black text-white hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    S'inscrire
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
