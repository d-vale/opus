# Système de Typographie - Opus

## 📐 Classes Tailwind Globales

Un système de typographie cohérent a été mis en place pour assurer une hiérarchie visuelle claire et une maintenance facile.

### 🎨 Palette de couleurs pour le texte

**Sur fond blanc/clair :**
- **Texte primaire** : `text-gray-900` - Noir très foncé pour le contenu principal
- **Texte secondaire** : `text-gray-600` - Gris moyen pour les descriptions
- **Texte muted** : `text-gray-500` - Gris clair pour les métadonnées

### 📝 Classes de titres

#### `.titre-primaire`
```css
@apply text-4xl md:text-5xl font-bold text-gray-900;
```
**Usage :** Titres principaux de page (h1)
- HomePage : "Les meilleures ressources"
- CategoriesPage : "Toutes les ressources"
- BlogPage : "Blog Opus"
- Etc.

#### `.titre-secondaire`
```css
@apply text-2xl md:text-3xl font-bold text-gray-800;
```
**Usage :** Titres de section (h2)
- "Parcourir par catégorie"
- "Ressources à la une"
- "Opus en chiffres"
- Headers des pages Auth

#### `.titre-section`
```css
@apply text-xl md:text-2xl font-semibold text-gray-900;
```
**Usage :** Sous-titres de section (h3)
- Titres de cards d'articles
- Titres dans About page
- Empty states

### 📄 Classes de texte

#### `.text-primaire`
```css
@apply text-gray-900;
```
**Usage :** Contenu principal
- Corps d'article
- Texte important
- Navigation principale

#### `.text-secondaire`
```css
@apply text-gray-600;
```
**Usage :** Texte descriptif
- Sous-titres
- Descriptions
- Texte explicatif

#### `.text-muted`
```css
@apply text-gray-500;
```
**Usage :** Métadonnées
- Dates d'articles
- Auteurs
- Helper text
- Texte d'aide dans formulaires

### 🔗 Classes de liens

#### `.link-primary`
```css
@apply text-black font-medium hover:underline transition-colors;
```
**Usage :** Liens principaux
- "Voir tout →"
- "Lire l'article"
- Liens d'inscription/connexion
- CTAs inline

#### `.link-secondary`
```css
@apply text-gray-600 hover:text-black transition-colors;
```
**Usage :** Liens de navigation
- Bouton retour
- Liens de navigation secondaire
- "Mot de passe oublié ?"

## 📋 Application par page

### HomePage.tsx
- ✅ Hero title : `.titre-primaire`
- ✅ Section titles : `.titre-secondaire`
- ✅ Description text : `.text-secondaire`
- ✅ "Voir tout" link : `.link-primary`

### CategoriesPage.tsx
- ✅ Page title : `.titre-primaire`
- ✅ Description : `.text-secondaire`
- ✅ Results count : `.text-secondaire`
- ✅ Empty state title : `.titre-section`

### CategoryPage.tsx
- ✅ Category title : `.titre-primaire`
- ✅ Description : `.text-secondaire`
- ✅ Back button : `.link-secondary`
- ✅ Resource count : `.text-secondaire`

### BlogPage.tsx
- ✅ Page title : `.titre-primaire`
- ✅ Subtitle : `.text-secondaire`
- ✅ Article metadata : `.text-muted`
- ✅ Article titles : `.titre-section`
- ✅ "Lire l'article" : `.link-primary`

### ArticlePage.tsx
- ✅ Article title : `.titre-primaire`
- ✅ Author/date : `.text-muted`
- ✅ Excerpt : `.text-secondaire`
- ✅ Content : `.text-primaire`
- ✅ Section heading : `.titre-secondaire`
- ✅ Back button : `.link-secondary`

### AboutPage.tsx
- ✅ Main title : `.titre-primaire`
- ✅ All section headings : `.titre-secondaire`
- ✅ Feature titles : `.titre-section`
- ✅ Body text : `.text-primaire`
- ✅ Descriptions : `.text-secondaire`

### ProfilePage.tsx
- ✅ Profile title : `.titre-secondaire`
- ✅ Section headings : `.titre-secondaire`
- ✅ Stats labels : `.text-secondaire`
- ✅ Empty state titles : `.titre-section`
- ✅ "Tout supprimer" : `.link-secondary`

### SubmitPage.tsx
- ✅ Page title : `.titre-primaire`
- ✅ Success title : `.titre-secondaire`
- ✅ Description : `.text-secondaire`
- ✅ Helper text : `.text-muted`

### LoginPage.tsx & RegisterPage.tsx
- ✅ Page titles : `.titre-secondaire`
- ✅ Descriptions : `.text-secondaire`
- ✅ Helper text : `.text-muted`
- ✅ Register/Login links : `.link-primary`
- ✅ Back links : `.link-secondary`

## 🎯 Avantages du système

### 1. **Cohérence visuelle**
- Hiérarchie claire entre les niveaux de titres
- Contraste adapté pour la lisibilité
- Couleurs harmonieuses sur fond blanc

### 2. **Maintenance facile**
- Modification globale via CSS
- Pas besoin de changer chaque composant
- Classes sémantiques et claires

### 3. **Responsive intégré**
- Titres qui s'adaptent (md breakpoints)
- Lisibilité préservée sur mobile
- Tailles proportionnées

### 4. **Accessibilité**
- Contraste suffisant (WCAG AA)
- Hiérarchie sémantique
- Hover states visibles

## 📊 Hiérarchie visuelle

```
┌─────────────────────────────────────┐
│  .titre-primaire (h1)               │  ← Plus important
│  text-4xl/5xl, bold, gray-900       │
├─────────────────────────────────────┤
│  .titre-secondaire (h2)             │
│  text-2xl/3xl, bold, gray-800       │
├─────────────────────────────────────┤
│  .titre-section (h3)                │
│  text-xl/2xl, semibold, gray-900    │
├─────────────────────────────────────┤
│  .text-primaire                     │
│  text-base, normal, gray-900        │
├─────────────────────────────────────┤
│  .text-secondaire                   │
│  text-base, normal, gray-600        │
├─────────────────────────────────────┤
│  .text-muted                        │  ← Moins important
│  text-base, normal, gray-500        │
└─────────────────────────────────────┘
```

## 🔄 Exemple d'utilisation

### Avant
```jsx
<h1 className="text-4xl font-bold mb-4 text-gray-900">
  Titre de page
</h1>
<p className="text-gray-600">
  Description secondaire
</p>
<a className="text-black font-medium hover:underline">
  Lien important
</a>
```

### Après
```jsx
<h1 className="titre-primaire mb-4">
  Titre de page
</h1>
<p className="text-secondaire">
  Description secondaire
</p>
<a className="link-primary">
  Lien important
</a>
```

## 🎨 Palette complète

### Texte
- `text-gray-900` (#111827) - Texte principal
- `text-gray-800` (#1F2937) - Titres secondaires
- `text-gray-700` (#374151) - Labels
- `text-gray-600` (#4B5563) - Descriptions
- `text-gray-500` (#6B7280) - Métadonnées
- `text-gray-400` (#9CA3AF) - Placeholders

### Interactions
- `text-black` (#000000) - Liens au hover
- `hover:text-black` - État hover liens secondaires
- `hover:underline` - Liens principaux

## 📝 Bonnes pratiques

### ✅ À faire
- Utiliser `.titre-primaire` pour chaque page principale
- Respecter la hiérarchie h1 → h2 → h3
- Utiliser `.text-secondaire` pour les descriptions
- Appliquer `.text-muted` aux métadonnées
- Garder les classes sémantiques

### ❌ À éviter
- Mélanger différents niveaux de gris sans raison
- Utiliser `text-gray-900` directement (utiliser `.text-primaire`)
- Ignorer la hiérarchie des titres
- Appliquer les classes aux ResourceCards (déjà stylées)

## 🔧 Modification du système

Pour modifier le système de typographie, éditer [src/index.css](src/index.css) :

```css
@layer components {
  .titre-primaire {
    @apply text-4xl md:text-5xl font-bold text-gray-900;
  }
  /* ... autres classes ... */
}
```

Les changements se propagent automatiquement à toute l'application.

## 🎯 Résultat

✅ **9 pages** avec typographie cohérente
✅ **4 classes de titres** sémantiques
✅ **3 classes de texte** hiérarchiques
✅ **2 classes de liens** distinctes
✅ **Maintenance simplifiée** via CSS global
✅ **Lisibilité optimale** sur fond blanc

---

**Opus** - Système de typographie cohérent et accessible 🎨📝
