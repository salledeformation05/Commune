import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Users, Target, Coins, FileText, Camera, Briefcase } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col gap-12 pb-12">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/seed/commune/1920/1080"
            alt="Vue de la commune"
            fill
            className="object-cover brightness-50"
            priority
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-3xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Bienvenue dans  votre  Commune</h1>
          <p className="text-xl md:text-2xl mb-8">Ensemble, construisons l&apos;avenir</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/citoyen" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Payer mes taxes
            </Link>
            <Link href="/projets" className="bg-white text-emerald-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
              Explorer les projets
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full -mt-20 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Projets en cours', value: '5', icon: Target },
            { label: 'Montant collecté', value: '12 M FCFA', icon: Coins },
            { label: 'Citoyens engagés', value: '320', icon: Users },
            { label: 'Événements à venir', value: '3', icon: Calendar },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md text-center flex flex-col items-center">
              <stat.icon className="h-8 w-8 text-emerald-600 mb-2" />
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* News & Events */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <FileText className="mr-2 text-emerald-600" /> Actualités
            </h2>
            <ul className="space-y-4">
              <li className="border-b pb-4 last:border-0 last:pb-0">
                <span className="text-sm text-gray-500">12 Mai 2026</span>
                <h3 className="font-semibold text-lg hover:text-emerald-600 cursor-pointer">Nouveau marché central : les travaux avancent</h3>
              </li>
              <li className="border-b pb-4 last:border-0 last:pb-0">
                <span className="text-sm text-gray-500">08 Mai 2026</span>
                <h3 className="font-semibold text-lg hover:text-emerald-600 cursor-pointer">Inauguration de la bibliothèque municipale</h3>
              </li>
              <li className="border-b pb-4 last:border-0 last:pb-0">
                <span className="text-sm text-gray-500">01 Mai 2026</span>
                <h3 className="font-semibold text-lg hover:text-emerald-600 cursor-pointer">Appel à projets pour les jeunes entrepreneurs</h3>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Calendar className="mr-2 text-emerald-600" /> Événements à venir
            </h2>
            <ul className="space-y-4">
              <li className="flex gap-4 items-start border-b pb-4 last:border-0 last:pb-0">
                <div className="bg-emerald-100 text-emerald-800 rounded-lg p-2 text-center min-w-[60px]">
                  <div className="text-sm font-bold">15</div>
                  <div className="text-xs uppercase">Mai</div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Fête de la commune</h3>
                  <p className="text-sm text-gray-600">Place de l&apos;indépendance</p>
                </div>
              </li>
              <li className="flex gap-4 items-start border-b pb-4 last:border-0 last:pb-0">
                <div className="bg-emerald-100 text-emerald-800 rounded-lg p-2 text-center min-w-[60px]">
                  <div className="text-sm font-bold">20</div>
                  <div className="text-xs uppercase">Mai</div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Réunion publique : Budget</h3>
                  <p className="text-sm text-gray-600">Mairie, Salle des fêtes</p>
                </div>
              </li>
              <li className="flex gap-4 items-start border-b pb-4 last:border-0 last:pb-0">
                <div className="bg-emerald-100 text-emerald-800 rounded-lg p-2 text-center min-w-[60px]">
                  <div className="text-sm font-bold">25</div>
                  <div className="text-xs uppercase">Mai</div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Match de gala inter-quartiers</h3>
                  <p className="text-sm text-gray-600">Stade municipal</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-3xl font-bold">Projets participatifs à la une</h2>
          <Link href="/projets" className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center">
            Voir tout <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
            <div className="relative h-48">
              <Image src="https://picsum.photos/seed/water/800/400" alt="Forage" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl font-bold mb-2">Forage de Zone 1</h3>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-emerald-600">60% financé</span>
                  <span className="text-gray-500">600k / 1M FCFA</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-emerald-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              <div className="mt-auto">
                <Link href="/projets/1" className="block w-full text-center bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition-colors">
                  Je participe
                </Link>
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
            <div className="relative h-48">
              <Image src="https://picsum.photos/seed/school/800/400" alt="École" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl font-bold mb-2">École de Gbégamey</h3>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-emerald-600">30% financé</span>
                  <span className="text-gray-500">300k / 1M FCFA</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-emerald-600 h-2.5 rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>
              <div className="mt-auto">
                <Link href="/projets/2" className="block w-full text-center bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition-colors">
                  Je participe
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-2xl font-bold mb-6">Accès rapides</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/budget" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center hover:border-emerald-500 hover:shadow-md transition-all group">
            <Coins className="h-10 w-10 text-gray-400 group-hover:text-emerald-600 mb-3" />
            <span className="font-medium text-center">Budget citoyen</span>
          </Link>
          <Link href="/services" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center hover:border-emerald-500 hover:shadow-md transition-all group">
            <FileText className="h-10 w-10 text-gray-400 group-hover:text-emerald-600 mb-3" />
            <span className="font-medium text-center">Démarches</span>
          </Link>
          <Link href="/diaspora" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center hover:border-emerald-500 hover:shadow-md transition-all group">
            <Briefcase className="h-10 w-10 text-gray-400 group-hover:text-emerald-600 mb-3" />
            <span className="font-medium text-center">Investissements</span>
          </Link>
          <Link href="/galerie" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center hover:border-emerald-500 hover:shadow-md transition-all group">
            <Camera className="h-10 w-10 text-gray-400 group-hover:text-emerald-600 mb-3" />
            <span className="font-medium text-center">Galerie photo</span>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-emerald-900 text-white py-12 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-8">Paroles de citoyens</h2>
          <div className="max-w-3xl mx-auto italic text-xl">
            &quot;Grâce à la plateforme, j&apos;ai pu suivre l&apos;évolution de la construction de l&apos;école de mon quartier et même y contribuer. C&apos;est une vraie avancée pour la transparence !&quot;
          </div>
          <div className="mt-4 font-semibold">- Aminata D., Résidente de Gbégamey</div>
        </div>
      </section>
    </div>
  );
}
