# Opus - Quick Start Guide 🚀

## Lancement rapide

```bash
# 1. Installer les dépendances (si ce n'est pas déjà fait)
npm install

# 2. Lancer le serveur de développement
npm run dev
```

➜ Ouvrir [http://localhost:5173](http://localhost:5173) dans votre navigateur

## Structure du projet

```
opus/
├── src/
│   ├── components/     # Header, Footer, ResourceCard
│   ├── pages/         # 8 pages principales
│   ├── data/          # Ressources et articles mockés
│   ├── types/         # Types TypeScript
│   └── App.tsx        # Routing et état global
├── public/            # Assets statiques
├── README.md          # Documentation complète
├── PRESENTATION.md    # Guide de présentation
├── FEATURES.md        # Liste détaillée des fonctionnalités
└── package.json
```

## Navigation dans l'application

### Pages disponibles

1. **Accueil** (`/`)
   - Hero, catégories, ressources featured, stats

2. **Catégories** (bouton "Catégories")
   - Liste complète avec recherche et filtres

3. **Catégorie individuelle** (cliquer sur une catégorie)
   - Ressources filtrées par catégorie

4. **Blog** (bouton "Blog")
   - Articles éditoriaux

5. **Article** (cliquer sur un article)
   - Contenu avec ressources mentionnées

6. **Soumettre** (bouton "Soumettre")
   - Formulaire de soumission

7. **À propos** (bouton "À propos")
   - Mission et méthodologie

8. **Profil** (bouton "Profil")
   - Favoris, historique, ressources soumises

## Fonctionnalités clés à tester

### ✅ Recherche et filtres
- Aller sur **Catégories**
- Taper dans la barre de recherche
- Cliquer sur les filtres de catégories

### ✅ Système de favoris
- Cliquer sur le ❤️ d'une ressource
- Aller sur **Profil** pour voir vos favoris

### ✅ Navigation par catégorie
- Page d'accueil → Cliquer sur une icône de catégorie
- Voir les ressources de cette catégorie

### ✅ Blog éditorial
- Aller sur **Blog**
- Lire un article
- Voir les ressources mentionnées

### ✅ Design responsive
- Redimensionner la fenêtre
- Tester le menu mobile (< 768px)

## Données mockées

### 17 Ressources réparties sur 7 catégories
- Typographies : 4 ressources
- Colorimétrie : 3 ressources
- Illustrations : 4 ressources
- UI Kits : 2 ressources
- Templates : 1 ressource
- Logos/Icônes : 2 ressources
- Outils IA : 1 ressource

### 3 Articles de blog
- "La sélection de Joé : Typographies tendances"
- "Les conseils de Marc : Théorie des couleurs"
- "Tendances illustrations pour vos projets web"

## Technologies utilisées

- **React 19** - Framework UI
- **TypeScript** - Typage statique
- **TailwindCSS 3.4** - Styles utilitaires
- **Vite (Rolldown)** - Build tool rapide

## Commandes disponibles

```bash
# Développement
npm run dev

# Build production
npm run build

# Preview production
npm run preview

# Linting
npm run lint
```

## Points d'attention pour la démo

1. **Page d'accueil** - Montrer le hero et les catégories
2. **Recherche** - Démonstrer le filtrage en temps réel
3. **Favoris** - Ajouter/retirer des favoris, voir le profil
4. **Blog** - Montrer l'intégration éditoriale
5. **Responsive** - Redimensionner pour montrer l'adaptation

## Support

Pour toute question sur le code :
- Voir [README.md](README.md) pour la documentation complète
- Voir [FEATURES.md](FEATURES.md) pour la liste des fonctionnalités
- Voir [PRESENTATION.md](PRESENTATION.md) pour le guide de présentation

---

**Opus** - Les meilleures ressources pour designers, centralisées. 🎨
