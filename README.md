# Opus - Centralisez les meilleures ressources design

![Opus Logo](https://via.placeholder.com/800x200/000000/FFFFFF?text=OPUS)

Opus est une plateforme qui centralise les meilleures ressources pour le design graphique et UI/UX, permettant aux étudiants et jeunes designers de gagner du temps et de s'inspirer efficacement.

## 🎯 Concept

Opus offre :
- **Navigation ultra simple par catégories** : Typographies, Colorimétrie, Illustrations, UI Kits, Logos/Icônes, Templates/Interfaces, Outils IA
- **Accès direct + preview** : Chaque ressource avec image, avis court, accès d'un clic
- **Partie éditoriale** : Articles "La sélection de..." et "Les conseils de..."
- **Authentification** : Créez un compte pour sauvegarder vos favoris et soumettre des ressources
- **Favoris protégés** : Retrouvez facilement vos outils préférés (connexion requise)

## 🏗️ Architecture

```
opus/
├── src/
│   ├── components/      # Composants réutilisables
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ResourceCard.tsx
│   ├── pages/          # Pages principales
│   │   ├── HomePage.tsx
│   │   ├── CategoriesPage.tsx
│   │   ├── CategoryPage.tsx
│   │   ├── BlogPage.tsx
│   │   ├── ArticlePage.tsx
│   │   ├── SubmitPage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ProfilePage.tsx
│   │   ├── LoginPage.tsx
│   │   └── RegisterPage.tsx
│   ├── data/           # Données de l'application
│   │   ├── resources.ts
│   │   └── articles.ts
│   ├── types/          # Types TypeScript
│   │   └── index.ts
│   ├── App.tsx         # Composant principal
│   └── main.tsx        # Point d'entrée
└── public/             # Fichiers statiques
```

## 🚀 Démarrage

### Prérequis
- Node.js 18+
- npm ou yarn

### Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Prévisualiser la version de production
npm run preview
```

L'application sera accessible sur [http://localhost:5173](http://localhost:5173)

## 🎨 Technologies utilisées

- **React 19** - Framework UI
- **TypeScript** - Typage statique
- **Vite** (Rolldown) - Build tool ultra-rapide
- **TailwindCSS** - Framework CSS utilitaire avec classes personnalisées
- **ESLint** - Linting du code

## ✨ Système de Design

### Typographie
Opus utilise un système de classes Tailwind globales pour une typographie cohérente :
- `.titre-primaire` - Titres principaux (h1)
- `.titre-secondaire` - Titres de section (h2)
- `.titre-section` - Sous-titres (h3)
- `.text-primaire` - Texte principal (gray-900)
- `.text-secondaire` - Texte descriptif (gray-600)
- `.text-muted` - Métadonnées (gray-500)
- `.link-primary` / `.link-secondary` - Liens

📚 Documentation complète : [TYPOGRAPHY.md](TYPOGRAPHY.md)

## 📁 Structure de la fiche ressource

Chaque ressource contient :
- **Titre** : Nom de la ressource
- **Catégorie** : Type de ressource
- **Visuel** : Image/preview
- **Description** : 2-3 lignes sur l'utilité
- **Lien** : URL directe
- **Avis** : Notation 1-5 étoiles
- **Tags** : Gratuit / Payant / Freemium / Open source

## 📊 Catégories disponibles

1. **🔤 Typographies** - Google Fonts, Adobe Fonts, Fontshare...
2. **🎨 Colorimétrie** - Coolors, Adobe Color, Color Hunt...
3. **🎭 Illustrations** - unDraw, Storyset, Blush...
4. **🧩 UI Kits / Components** - shadcn/ui, Mobbin...
5. **⭐ Logos / Icônes** - Lucide, Freepik...
6. **📱 Templates / Interfaces** - SiteInspire...
7. **🤖 Outils IA** - Remove.bg...

## 🎯 Fonctionnalités

### Implémentées
- ✅ **Authentification complète** (Login / Register)
- ✅ **Routes protégées** (favoris et soumission requièrent une connexion)
- ✅ **Persistance localStorage** (user, favoris, historique)
- ✅ Navigation par catégories
- ✅ Recherche et filtrage de ressources
- ✅ Système de favoris protégé
- ✅ Blog avec articles éditoriaux
- ✅ Page de soumission de ressources (connexion requise)
- ✅ Profil utilisateur (favoris, historique)
- ✅ Design responsive
- ✅ Cartes ressources interactives
- ✅ Corrections couleurs (titres et inputs visibles)

### À venir
- 🔜 Backend avec base de données
- 🔜 Système de notation
- 🔜 Commentaires et avis
- 🔜 API REST
- 🔜 Recherche avancée

## 📝 Méthodologie

1. **Définition des catégories** - Brainstorming & interviews utilisateurs
2. **Benchmark** - Analyse des concurrents (Mobbin, Behance...)
3. **Structuration** - Architecture React modulaire
4. **Feedback** - Tests auprès de designers
5. **Itération** - Améliorations continues

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour soumettre une ressource :
1. **Créez un compte** (obligatoire)
2. Visitez la page "Soumettre une ressource"
3. Remplissez le formulaire avec toutes les informations
4. Votre soumission sera examinée par l'équipe

## 🔐 Authentification

Le système d'authentification est documenté dans [AUTHENTICATION.md](AUTHENTICATION.md).

**Fonctionnalités :**
- Inscription et connexion
- Routes protégées (favoris, soumission)
- Persistance localStorage
- UI responsive avec avatar

**Pour tester :**
```bash
# Créer un compte
1. Cliquer sur "S'inscrire"
2. Remplir le formulaire
3. Vous êtes connecté automatiquement

# Tester les favoris
1. Cliquer sur ❤️ d'une ressource
2. Aller dans "Profil" pour voir vos favoris
```

## 📄 Licence

Ce projet est un POC (Proof of Concept) éducatif.

## 👥 Équipe

Créé par des designers, pour des designers.

---

**Opus** - Les meilleures ressources pour designers, centralisées. 🎨
