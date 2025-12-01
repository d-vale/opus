export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="titre-primaire mb-4">À propos d'Opus</h1>
        <p className="text-xl text-secondaire max-w-2xl mx-auto">
          La plateforme qui centralise les meilleures ressources pour les designers
        </p>
      </div>

      {/* Mission */}
      <section className="mb-16">
        <h2 className="titre-secondaire mb-6">Notre mission</h2>
        <div className="bg-gray-50 rounded-xl p-8">
          <p className="text-lg text-primaire mb-4">
            <strong>Opus</strong> est né d'un constat simple : les designers passent trop de temps à chercher
            les bonnes ressources au lieu de créer.
          </p>
          <p className="text-lg text-primaire">
            Notre objectif est de centraliser et organiser les meilleures ressources gratuites et premium
            pour le design graphique et UI/UX, permettant aux étudiants et jeunes designers de gagner du
            temps et de s'inspirer efficacement.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="mb-16">
        <h2 className="titre-secondaire mb-8">Ce qu'Opus vous offre</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="titre-section mb-2">Navigation simplifiée</h3>
            <p className="text-secondaire">
              Parcourez facilement par catégories : typographies, couleurs, illustrations, UI kits...
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="text-3xl mb-4">⭐</div>
            <h3 className="titre-section mb-2">Sélection qualité</h3>
            <p className="text-secondaire">
              Chaque ressource est soigneusement évaluée et documentée avec avis et tags.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="text-3xl mb-4">💡</div>
            <h3 className="titre-section mb-2">Inspiration éditoriale</h3>
            <p className="text-secondaire">
              Découvrez nos articles "La sélection de..." et "Les conseils de..." pour aller plus loin.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="text-3xl mb-4">❤️</div>
            <h3 className="titre-section mb-2">Favoris & historique</h3>
            <p className="text-secondaire">
              Sauvegardez vos ressources préférées et retrouvez facilement ce que vous avez consulté.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mb-16">
        <h2 className="titre-secondaire mb-6">L'équipe</h2>
        <p className="text-secondaire mb-8">
          Opus est un projet créé par des designers, pour des designers. Notre équipe éditoriale
          sélectionne et teste chaque ressource avant de la partager avec vous.
        </p>
      </section>

      {/* Methodology */}
      <section className="mb-16">
        <h2 className="titre-secondaire mb-6">Notre méthodologie</h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold mr-4">
              1
            </div>
            <div>
              <h3 className="font-semibold mb-1">Curation rigoureuse</h3>
              <p className="text-secondaire">
                Nous testons personnellement chaque ressource avant de l'ajouter à notre catalogue.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold mr-4">
              2
            </div>
            <div>
              <h3 className="font-semibold mb-1">Feedback utilisateur</h3>
              <p className="text-secondaire">
                La communauté peut soumettre et noter les ressources pour enrichir le catalogue.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold mr-4">
              3
            </div>
            <div>
              <h3 className="font-semibold mb-1">Mise à jour continue</h3>
              <p className="text-secondaire">
                Nous vérifions régulièrement la pertinence et l'accessibilité de chaque ressource.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl p-12">
        <h2 className="titre-secondaire mb-4">Rejoignez la communauté</h2>
        <p className="text-secondaire mb-6">
          Contribuez en partageant vos ressources préférées ou en nous faisant vos retours
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="btn-primary">Soumettre une ressource</button>
          <button className="btn-secondary">Nous contacter</button>
        </div>
      </section>
    </div>
  );
}
