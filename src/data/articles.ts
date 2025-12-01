import type { Article } from '../types';

export const articles: Article[] = [
  {
    id: 'selection-joe-typographies',
    title: 'La sélection de Joé : Les typographies tendances de 2025',
    author: 'Joé',
    date: '2025-11-20',
    excerpt: 'Découvrez ma sélection personnelle des typographies qui vont marquer l\'année. Entre modernité et intemporalité.',
    content: `# La sélection de Joé : Les typographies tendances de 2025

Salut la communauté Opus ! C'est Joé, et aujourd'hui je vous partage ma sélection des ressources typographiques incontournables pour démarrer 2025 en beauté. Après avoir travaillé sur plus de 30 projets cette année, j'ai identifié les outils qui font vraiment la différence.

## 1. Google Fonts - L'indispensable gratuit

Si je devais recommander **une seule ressource** pour débuter, ce serait Google Fonts sans hésiter. Avec plus de 1400 familles de polices gratuites et open source, c'est LA référence pour tout projet web.

**Pourquoi je l'adore :**
- Intégration ultra-simple en 2 minutes chrono
- Optimisation automatique pour le web
- Performance excellente avec les subsets de caractères
- Nouvelles polices ajoutées régulièrement

**Mon conseil pro :** Utilisez toujours le paramètre "display=swap" pour éviter le FOIT (Flash of Invisible Text) et améliorer vos Core Web Vitals. Pour un projet corporate, je pars systématiquement sur Inter ou Roboto. Pour un site créatif, Playfair Display ou Montserrat font des merveilles.

## 2. Adobe Fonts - La qualité professionnelle

Pour les projets clients haut de gamme, Adobe Fonts reste imbattable. Inclus dans l'abonnement Creative Cloud, cet outil donne accès à des milliers de polices premium.

**Ce qui change la donne :**
- Licences commerciales incluses (pas de surprise juridique)
- Synchronisation desktop + web
- Filtres de recherche ultra-précis (empattement, graisse, largeur...)
- Collections de pros déjà prêtes

**Astuce :** Utilisez les "browse packs" thématiques pour gagner du temps. J'ai trouvé mes meilleures combinaisons typo pour des sites de luxe dans le pack "Editorial".

## 3. Fontshare - Le challenger gratuit de qualité

Fontshare, c'est la découverte de 2024 qui continue en 2025. Des polices de qualité professionnelle, 100% gratuites, créées par Indian Type Foundry.

**Pourquoi c'est différent :**
- Polices originales, pas des clones de Google Fonts
- Vraiment optimisées pour les interfaces modernes
- Gratuites même pour usage commercial
- Design contemporain et tendance

**Mon coup de cœur :** La police "Satoshi" est devenue ma go-to pour les interfaces SaaS modernes. Elle apporte cette touche de modernité sans être trop excentrique.

## 4. DaFont - Pour sortir des sentiers battus

DaFont, c'est l'archive old-school qui reste pertinente. Parfait pour trouver cette typo unique qui fera toute la différence sur un projet créatif.

**Quand l'utiliser :**
- Projets artistiques ou expérimentaux
- Logos et branding créatif
- Headers et titres accrocheurs
- Évènementiel et affiches

**Attention :** Vérifiez TOUJOURS les licences ! Certaines polices sont gratuites pour usage personnel uniquement. Lisez le fichier de licence avant d'utiliser en production.

## Mes combinaisons gagnantes pour 2025

Après des années d'expérimentation, voici mes paires de typo qui marchent à tous les coups :

**Pour un site corporate :**
- Titres : Inter Bold (Google Fonts)
- Corps : Inter Regular (Google Fonts)
- Simplicité et lisibilité maximale

**Pour un portfolio créatif :**
- Titres : Playfair Display (Google Fonts)
- Corps : Satoshi (Fontshare)
- Élégance et modernité

**Pour une app SaaS :**
- UI : Satoshi (Fontshare)
- Data/Code : JetBrains Mono (Google Fonts)
- Professionnalisme tech

## Conclusion

L'important avec les typographies, c'est de ne pas tomber dans le piège du "trop". Deux polices maximum par projet (une pour les titres, une pour le corps), et vous êtes good. La lisibilité prime TOUJOURS sur l'originalité.

Ces quatre ressources couvrent 99% de mes besoins en typo. Google Fonts pour le quotidien, Adobe Fonts pour les projets premium, Fontshare pour la modernité, et DaFont pour l'inspiration créative.

À vous de jouer ! N'hésitez pas à partager vos découvertes typo dans les commentaires.

— Joé`,
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&h=400&fit=crop',
    resources: ['google-fonts', 'adobe-fonts', 'fontshare', 'dafont'],
  },
  {
    id: 'conseils-marc-couleurs',
    title: 'Les conseils de Marc : Maîtriser la théorie des couleurs',
    author: 'Marc',
    date: '2025-11-18',
    excerpt: 'Comment créer des palettes harmonieuses qui captent l\'attention ? Marc vous partage ses secrets de pro.',
    content: `# Les conseils de Marc : Maîtriser la théorie des couleurs

Hey les designers ! Marc à l'appareil. Aujourd'hui, on va parler d'un sujet qui fait peur à beaucoup de débutants : **la théorie des couleurs**. Mais rassurez-vous, avec les bons outils, créer des palettes harmonieuses devient un jeu d'enfant.

## Le problème avec les couleurs

On a tous vécu ça : vous passez 2 heures à choisir des couleurs, vous êtes super content du résultat... et le lendemain en ouvrant le projet, vous vous demandez "mais qu'est-ce que j'ai fait ?!". Le syndrome de la palette ratée, je l'ai vécu des centaines de fois.

La bonne nouvelle ? Il existe des outils qui vont vous sauver la mise.

## 1. Coolors - Le générateur intelligent

Coolors, c'est mon outil quotidien depuis 5 ans. Simple mais redoutablement efficace.

**Comment je l'utilise :**
1. J'appuie sur la barre espace pour générer des palettes aléatoires
2. Je verrouille (avec le cadenas) les couleurs qui me plaisent
3. Je regénère jusqu'à trouver la combinaison parfaite
4. J'exporte en CSS, SCSS ou même PNG

**La fonction killer :** L'explorateur de palettes. Vous pouvez partir d'une photo (votre logo par exemple) et Coolors extrait automatiquement une palette cohérente. J'ai gagné des HEURES avec cette fonction.

**Astuce pro :** Utilisez le mode contraste pour vérifier l'accessibilité WCAG. C'est crucial pour vos textes sur fond coloré. Un mauvais contraste = utilisateurs qui galèrent à lire = UX catastrophique.

## 2. Adobe Color - La référence technique

Pour comprendre VRAIMENT la théorie des couleurs, Adobe Color est imbattable. La roue chromatique interactive vous apprend les règles d'harmonie tout en créant vos palettes.

**Les règles d'harmonie que j'utilise :**
- **Analogue** : Couleurs voisines, parfait pour du monochrome sophistiqué
- **Complémentaire** : Couleurs opposées, pour du contraste fort
- **Triadique** : 3 couleurs équidistantes, équilibre parfait
- **Carré** : 4 couleurs, pour palettes complexes mais harmonieuses

**Mon workflow :** Je pars de ma couleur principale (souvent celle du logo client), puis j'applique une règle d'harmonie. Adobe Color me propose automatiquement les couleurs qui fonctionnent. Plus besoin de deviner !

**Fonction cachée :** L'onglet "Tendances" analyse des milliers de créations Adobe Stock pour vous montrer les palettes populaires par industrie. C'est de la veille concurrentielle automatique.

## 3. Color Hunt - L'inspiration communautaire

Color Hunt, c'est mon Pinterest des couleurs. Des milliers de palettes créées par la communauté, filtrables par tendance, popularité ou période.

**Pourquoi c'est génial :**
- Palettes 4 couleurs prêtes à l'emploi
- Système de likes pour repérer les meilleures
- Filtre par "New", "Trending", "Random" pour l'inspiration
- Copie HEX en un clic

**Mon hack :** Je ne copie JAMAIS une palette à 100%. Je prends 2-3 couleurs qui m'inspirent, puis je les retravaille dans Coolors ou Adobe Color pour les adapter à mon projet. Ça garde l'inspiration tout en ayant quelque chose d'unique.

**Collection personnelle :** J'ai mes palettes favorites enregistrées par catégorie : "Corporate", "Créatif", "Tech", "E-commerce". Quand je démarre un projet, je regarde ma collection correspondante pour partir sur de bonnes bases.

## Mes règles d'or pour les couleurs

Après 10 ans de design, voici ce que j'ai appris :

### 1. La règle du 60-30-10
- 60% : Couleur dominante (backgrounds, grands blocs)
- 30% : Couleur secondaire (sections, cartes)
- 10% : Couleur d'accent (CTA, highlights)

Cette répartition crée visuellement un équilibre naturel.

### 2. Toujours tester l'accessibilité
Ratio de contraste minimum :
- Texte normal : 4.5:1 (AA standard)
- Grands titres : 3:1
- Texte important : 7:1 (AAA pour être safe)

Coolors et Adobe Color ont des vérificateurs intégrés. Utilisez-les !

### 3. Les nuances sont vos amies
Ne prenez jamais une couleur brute (#FF0000 pour le rouge par exemple). Ajoutez toujours un peu de gris pour la "désaturer" légèrement. Ça fait instantanément plus pro.

Exemple :
- ❌ Rouge pur : #FF0000 (agressif)
- ✅ Rouge nuancé : #E63946 (sophistiqué)

### 4. Le mode sombre est obligatoire
En 2025, créez TOUJOURS deux palettes : light et dark. Vos utilisateurs vous remercieront. Adobe Color a un mode "Extract Theme" qui génère les deux versions automatiquement.

## Mon workflow complet

Voici comment je crée une palette complète pour un projet :

1. **Recherche** (Color Hunt) : 15 min d'inspiration pour comprendre les tendances du secteur
2. **Couleur primaire** : Je pars de la couleur de marque du client
3. **Harmonie** (Adobe Color) : J'applique une règle (souvent triadique)
4. **Ajustement** (Coolors) : Je tweake les couleurs pour optimiser contraste et cohérence
5. **Validation** : Check accessibilité + test dark mode
6. **Export** : Variables CSS prêtes à intégrer

Total : 30-45 minutes pour une palette pro et validée. Avant ces outils, je mettais facilement 2-3 heures.

## Conclusion : Les couleurs, c'est de la science ET de l'art

La théorie des couleurs peut sembler intimidante, mais avec ces trois outils, vous avez tout ce qu'il faut :
- **Coolors** pour la rapidité et l'efficacité
- **Adobe Color** pour la rigueur technique
- **Color Hunt** pour l'inspiration créative

Le secret ? Utilisez-les ensemble. L'inspiration vient de Color Hunt, la structure d'Adobe Color, et le peaufinage de Coolors.

N'ayez plus peur des couleurs. Avec de la pratique et les bons outils, vous allez créer des palettes qui tuent. Et n'oubliez pas : en cas de doute, moins c'est plus. Une palette sobre bien exécutée bat toujours une explosion de couleurs mal maîtrisée.

Allez créer des palettes de fou !

— Marc`,
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&h=400&fit=crop',
    resources: ['coolors', 'adobe-color', 'color-hunt'],
  },
  {
    id: 'tendances-illustrations',
    title: 'Les tendances illustrations pour vos projets web',
    author: 'Sophie',
    date: '2025-11-15',
    excerpt: 'Du flat design aux illustrations 3D, explorez les styles qui dominent le design web actuel.',
    content: `# Les tendances illustrations pour vos projets web

Salut à tous ! Sophie ici. En tant que UI/UX designer depuis 8 ans, j'ai vu les tendances d'illustrations évoluer drastiquement. Aujourd'hui, je vous partage mes ressources favorites et comment les utiliser pour transformer vos interfaces.

## Pourquoi les illustrations sont cruciales en 2025

Avant de plonger dans les outils, parlons de l'éléphant dans la pièce : avec l'explosion de l'IA générative (Midjourney, DALL-E, etc.), les illustrations custom deviennent-elles obsolètes ?

**Ma réponse : absolument pas.**

Les illustrations cohérentes, avec un style visuel uniforme sur toute votre app, restent impossibles à générer de manière fiable avec l'IA (du moins pour l'instant). Et c'est là que les bibliothèques d'illustrations entrent en jeu.

## 1. unDraw - Le classique open source

unDraw, c'est LA référence depuis des années. Katerin Limpitlaw a créé un système d'illustrations SVG gratuit, personnalisable, et surtout cohérent.

**Pourquoi c'est génial :**
- Plus de 1000 illustrations en style flat moderne
- Personnalisation de la couleur primaire en un clic
- 100% gratuit et open source
- Format SVG optimisé pour le web
- Style cohérent sur toutes les illos

**Mes use cases favoris :**
- Empty states (pas de données, 404, etc.)
- Onboarding flows
- Hero sections pour landing pages
- Explications de fonctionnalités

**Astuce pro :** Ne gardez pas la couleur par défaut bleue ! Utilisez VOTRE couleur de marque. Ça prend 2 secondes et ça fait toute la différence niveau cohérence visuelle.

**Exemple concret :** J'ai utilisé unDraw pour refondre les empty states d'une app SaaS. Avant : texte générique. Après : illustration personnalisée + micro-copy sympa. Le taux d'engagement sur les CTA a augmenté de 34%.

## 2. Storyset - L'animation facile

Storyset, c'est unDraw sous stéroïdes. Créé par Freepik, cet outil propose des illustrations animées personnalisables.

**Ce qui le rend unique :**
- Illustrations **animées** (Lottie + GIF + MP4)
- Personnalisation couleur + composition
- Plusieurs styles disponibles (Amico, Rafiki, Pana, etc.)
- Export optimisé pour web et mobile

**Quand l'utiliser :**
- Landing pages qui ont besoin de "pop"
- Explications de processus (Step 1, 2, 3...)
- Loading states (mieux qu'un spinner générique)
- Storytelling visuel

**Mon style préféré :** Le style "Rafiki" pour du corporate moderne. C'est juste le bon équilibre entre professionnel et friendly.

**Hack de pro :** Les animations Lottie sont légères (souvent < 50kb) mais ont un impact énorme sur la perception de qualité. J'ai remplacé des vidéos lourdes (2-3 MB) par des Lottie Storyset sur un site e-commerce. Le temps de chargement a chuté de 40%, le taux de rebond aussi.

## 3. Blush - La diversité créative

Blush, c'est la marketplace des illustrations. Différents artistes, différents styles, mais toujours personnalisable.

**Le concept :**
- Collections d'artistes indépendants
- Mix & match des éléments (personnages, objets, backgrounds)
- Personnalisation poussée
- Cohérence au sein d'une collection

**Pourquoi c'est différent :**
Contrairement à unDraw ou Storyset qui ont UN style, Blush vous donne accès à des dizaines de styles. Vous trouvez celui qui matche votre brand identity, et vous l'utilisez partout.

**Mes collections go-to :**
- **"Open Peeps"** pour du casual/startup
- **"Avatars"** pour des profils utilisateurs customs
- **"Abstractions"** pour du SaaS moderne
- **"Business People"** pour corporate sans être ennuyant

**Utilisation avancée :** J'ai créé un design system complet avec Blush pour un client. J'ai choisi la collection "Open Peeps", créé 20 compositions custom (meeting, working, celebrating...), et exporté le tout. Résultat : une identité visuelle unique et cohérente sur toute leur doc produit.

## 4. Freepik - Le couteau suisse

Freepik, c'est l'outil qu'on love ou qu'on déteste. Personnellement, avec un abonnement premium, c'est devenu indispensable.

**Ce qu'on trouve :**
- Millions d'illustrations vectorielles
- Styles ultra variés (flat, 3D, hand-drawn, etc.)
- Photos ET illustrations
- Templates PSD/AI modifiables

**Le pour :**
- Quantité hallucinante de ressources
- Filtres de recherche puissants
- Collections thématiques
- Version premium = pas d'attribution requise

**Le contre :**
- Version gratuite = attribution obligatoire
- Qualité variable (faut trier)
- Peut donner un look "stock" si mal utilisé

**Comment je l'utilise :** Je ne télécharge JAMAIS une illo Freepik brute. Je la prends comme base, puis je la retravaille dans Figma : je change les couleurs, je supprime des éléments, j'en ajoute. Ça prend 10 minutes mais ça évite le "j'ai déjà vu cette illo 100 fois".

**Search tips :**
- Filtrer par "Free" ou "Premium"
- Utiliser le filtre "License" pour comprendre les droits
- Trier par "Popular" pour voir ce qui marche
- Rechercher en anglais (plus de résultats)

## Mes tendances 2025 à surveiller

### 1. Le "Glassmorphism illustré"
Les illustrations avec effets de verre/transparence. Très tech, très moderne. J'ai vu ça exploser sur les sites de produits SaaS.

### 2. Les illustrations 3D low-poly
Le style 3D mais pas hyperréaliste. Un bon compromis entre flat et 3D photoréaliste. Storyset commence à en proposer.

### 3. Le hand-drawn digital
Des illustrations qui ont l'air faites à la main mais qui restent vectorielles. Apporte de la chaleur humaine à des produits tech.

### 4. Les illustrations inclusives
Diversité de représentation (ethnies, corps, genres). C'est plus une obligation qu'une tendance. Blush et Storyset sont en avance là-dessus.

## Comment choisir la bonne ressource ?

Voici ma matrice de décision :

**Besoin de rapidité + cohérence ?**
→ unDraw (setup en 5 min)

**Besoin d'animation ?**
→ Storyset (impact visuel max)

**Besoin d'identité unique ?**
→ Blush (customisation poussée)

**Besoin de variété + gros projet ?**
→ Freepik Premium (investissement rentable)

## Mon workflow illustration

1. **Définir le besoin** : Onboarding ? Empty state ? Hero ? Marketing ?
2. **Choisir le style** : Flat ? 3D ? Hand-drawn ? (basé sur brand guidelines)
3. **Sourcer** : Je checke d'abord unDraw/Storyset (gratuit), puis Blush/Freepik si besoin
4. **Personnaliser** : TOUJOURS adapter les couleurs à la charte graphique
5. **Optimiser** : Compression SVG avec SVGOMG, vérifier le poids
6. **Intégrer** : Tests de lisibilité sur différentes tailles d'écran

## Erreurs à éviter

**❌ Mélanger trop de styles**
Une illustration flat + une 3D réaliste = chaos visuel. Choisissez un style et tenez-vous-y.

**❌ Négliger le poids des fichiers**
Une belle illustration de 2 MB qui plombe votre PageSpeed = mauvais choix. Optimisez toujours.

**❌ Utiliser des illustrations non pertinentes**
L'illo doit AIDER la compréhension, pas juste "faire joli". Si elle n'apporte rien, enlevez-la.

**❌ Oublier l'accessibilité**
Ajoutez toujours des alt texts descriptifs. Les illustrations sont décoratives ? alt="" (vide). Elles ont du sens ? Décrivez-les.

## Conclusion

Les illustrations transforment une interface fade en expérience mémorable. Avec ces quatre ressources, vous avez de quoi couvrir 95% de vos besoins :

- **unDraw** pour démarrer rapidement
- **Storyset** pour ajouter du mouvement
- **Blush** pour l'identité unique
- **Freepik** pour la diversité et les gros projets

Mon conseil final ? Investissez du temps dans la personnalisation. Une illo générique bien retravaillée bat toujours une illo custom médiocre.

Allez illustrer vos projets !

— Sophie`,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop',
    resources: ['undraw', 'storyset', 'blush', 'freepik-illustrations'],
  },
];
