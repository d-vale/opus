import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import CategoryPage from './pages/CategoryPage';
import BlogPage from './pages/BlogPage';
import ArticlePage from './pages/ArticlePage';
import SubmitPage from './pages/SubmitPage';
import AboutPage from './pages/AboutPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { resources } from './data/resources';
import { articles } from './data/articles';
import type { Category, Article, User } from './types';

type Page = 'home' | 'categories' | 'category' | 'blog' | 'article' | 'submit' | 'about' | 'profile' | 'login' | 'register';

interface NavigationState {
  page: Page;
  data?: {
    category?: Category;
    article?: Article;
  };
}

function App() {
  const [nav, setNav] = useState<NavigationState>({ page: 'home' });
  const [user, setUser] = useState<User | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [history, setHistory] = useState<string[]>([]);

  const handleNavigate = (page: string, data?: any) => {
    setNav({ page: page as Page, data });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogin = (email: string, _password: string) => {
    // Simulation de connexion
    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name: email.split('@')[0],
      createdAt: new Date().toISOString(),
    };
    setUser(newUser);
    localStorage.setItem('opus_user', JSON.stringify(newUser));
  };

  const handleRegister = (name: string, email: string, _password: string) => {
    // Simulation d'inscription
    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name,
      createdAt: new Date().toISOString(),
    };
    setUser(newUser);
    localStorage.setItem('opus_user', JSON.stringify(newUser));
  };

  const handleLogout = () => {
    setUser(null);
    setFavorites([]);
    setHistory([]);
    localStorage.removeItem('opus_user');
    localStorage.removeItem('opus_favorites');
    localStorage.removeItem('opus_history');
    handleNavigate('home');
  };

  const handleFavorite = (id: string) => {
    if (!user) {
      handleNavigate('login');
      return;
    }

    setFavorites((prev) => {
      const updated = prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id];
      localStorage.setItem('opus_favorites', JSON.stringify(updated));
      return updated;
    });
  };

  const renderPage = () => {
    switch (nav.page) {
      case 'home':
        return (
          <HomePage
            resources={resources}
            onNavigate={handleNavigate}
            onFavorite={handleFavorite}
            favorites={favorites}
          />
        );

      case 'categories':
        return (
          <CategoriesPage
            resources={resources}
            onFavorite={handleFavorite}
            favorites={favorites}
          />
        );

      case 'category':
        if (!nav.data?.category) return <HomePage resources={resources} onNavigate={handleNavigate} onFavorite={handleFavorite} favorites={favorites} />;
        return (
          <CategoryPage
            category={nav.data.category}
            resources={resources}
            onFavorite={handleFavorite}
            favorites={favorites}
            onNavigate={handleNavigate}
          />
        );

      case 'blog':
        return <BlogPage articles={articles} onNavigate={handleNavigate} />;

      case 'article':
        if (!nav.data?.article) return <BlogPage articles={articles} onNavigate={handleNavigate} />;
        return (
          <ArticlePage
            article={nav.data.article}
            resources={resources}
            onNavigate={handleNavigate}
            onFavorite={handleFavorite}
            favorites={favorites}
          />
        );

      case 'submit':
        if (!user) {
          handleNavigate('login');
          return <LoginPage onNavigate={handleNavigate} onLogin={handleLogin} />;
        }
        return <SubmitPage onNavigate={handleNavigate} />;

      case 'about':
        return <AboutPage />;

      case 'profile':
        if (!user) {
          handleNavigate('login');
          return <LoginPage onNavigate={handleNavigate} onLogin={handleLogin} />;
        }
        return (
          <ProfilePage
            resources={resources}
            favorites={favorites}
            history={history}
            onFavorite={handleFavorite}
          />
        );

      case 'login':
        return <LoginPage onNavigate={handleNavigate} onLogin={handleLogin} />;

      case 'register':
        return <RegisterPage onNavigate={handleNavigate} onRegister={handleRegister} />;

      default:
        return (
          <HomePage
            resources={resources}
            onNavigate={handleNavigate}
            onFavorite={handleFavorite}
            favorites={favorites}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header
        currentPage={nav.page}
        onNavigate={handleNavigate}
        user={user}
        onLogout={handleLogout}
      />
      <main className="flex-1">{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
