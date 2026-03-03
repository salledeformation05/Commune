'use client';

import Image from 'next/image';
import { Briefcase, Home, History, Newspaper, Map as MapIcon, PlayCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function DiasporaPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Welcome Banner */}
      <div className="bg-emerald-900 text-white p-8 rounded-2xl shadow-lg mb-12 flex flex-col md:flex-row items-center justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Espace Diaspora</h1>
          <p className="text-emerald-100 text-lg">Bienvenue, Jean ! Vous résidez en France.</p>
        </div>
        <div className="mt-6 md:mt-0 flex gap-4">
          <button className="bg-white text-emerald-900 px-6 py-2 rounded-lg font-bold hover:bg-emerald-50 transition-colors">
            Mon Profil
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Investir */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
          <div className="flex items-center mb-6">
            <div className="bg-emerald-100 p-4 rounded-xl mr-4 group-hover:bg-emerald-600 transition-colors">
              <Briefcase className="h-8 w-8 text-emerald-600 group-hover:text-white" />
            </div>
            <h2 className="text-2xl font-bold">Investir</h2>
          </div>
          <p className="text-gray-600 mb-6">Découvrez les opportunités d'investissement dans votre commune d'origine. Participez au développement économique local.</p>
          <div className="flex justify-between items-center">
            <span className="font-bold text-emerald-600 text-lg">12 offres disponibles</span>
            <Link href="#" className="flex items-center text-gray-900 font-medium hover:text-emerald-600 transition-colors">
              Voir les opportunités <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Retour au pays */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
          <div className="flex items-center mb-6">
            <div className="bg-blue-100 p-4 rounded-xl mr-4 group-hover:bg-blue-600 transition-colors">
              <Home className="h-8 w-8 text-blue-600 group-hover:text-white" />
            </div>
            <h2 className="text-2xl font-bold">Retour au pays</h2>
          </div>
          <p className="text-gray-600 mb-6">Un guide interactif étape par étape pour faciliter votre réinstallation et vos démarches administratives.</p>
          <div className="flex justify-between items-center">
            <span className="font-bold text-blue-600 text-lg">4 étapes illustrées</span>
            <Link href="#" className="flex items-center text-gray-900 font-medium hover:text-blue-600 transition-colors">
              Guide interactif <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Mes contributions */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
          <div className="flex items-center mb-6">
            <div className="bg-amber-100 p-4 rounded-xl mr-4 group-hover:bg-amber-600 transition-colors">
              <History className="h-8 w-8 text-amber-600 group-hover:text-white" />
            </div>
            <h2 className="text-2xl font-bold">Mes contributions</h2>
          </div>
          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center border-b border-gray-100 pb-2">
              <span className="text-gray-600">Projets soutenus</span>
              <span className="font-bold text-lg">3</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-100 pb-2">
              <span className="text-gray-600">Total des dons</span>
              <span className="font-bold text-lg text-emerald-600">250 000 FCFA</span>
            </div>
          </div>
          <Link href="#" className="flex items-center text-gray-900 font-medium hover:text-amber-600 transition-colors">
            Voir l'historique <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        {/* Actualités Diaspora */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
          <div className="flex items-center mb-6">
            <div className="bg-purple-100 p-4 rounded-xl mr-4 group-hover:bg-purple-600 transition-colors">
              <Newspaper className="h-8 w-8 text-purple-600 group-hover:text-white" />
            </div>
            <h2 className="text-2xl font-bold">Actualités Diaspora</h2>
          </div>
          <ul className="space-y-4 mb-6">
            <li className="flex items-start">
              <span className="h-2 w-2 mt-2 rounded-full bg-purple-500 mr-3 flex-shrink-0"></span>
              <span className="text-gray-700 hover:text-purple-600 cursor-pointer font-medium">Nouvelle loi sur les investissements étrangers</span>
            </li>
            <li className="flex items-start">
              <span className="h-2 w-2 mt-2 rounded-full bg-purple-500 mr-3 flex-shrink-0"></span>
              <span className="text-gray-700 hover:text-purple-600 cursor-pointer font-medium">Webinaire le 20 Mai : Opportunités dans l'agrobusiness</span>
            </li>
            <li className="flex items-start">
              <span className="h-2 w-2 mt-2 rounded-full bg-purple-500 mr-3 flex-shrink-0"></span>
              <span className="text-gray-700 hover:text-purple-600 cursor-pointer font-medium">Témoignage : Mon retour réussi après 10 ans</span>
            </li>
          </ul>
          <Link href="#" className="flex items-center text-gray-900 font-medium hover:text-purple-600 transition-colors">
            Toutes les actualités <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-2xl font-bold flex items-center">
            <MapIcon className="h-6 w-6 mr-3 text-emerald-600" /> Carte des investissements Diaspora
          </h2>
          <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Interactive</span>
        </div>
        <div className="relative h-[400px] bg-gray-200 flex items-center justify-center">
          {/* Placeholder for actual map component */}
          <Image src="https://picsum.photos/seed/map/1200/400" alt="Carte" fill className="object-cover opacity-50" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 flex items-center justify-center flex-col z-10">
            <MapIcon className="h-16 w-16 text-emerald-600 mb-4 drop-shadow-lg" />
            <p className="text-xl font-bold text-gray-900 bg-white/80 px-6 py-2 rounded-full backdrop-blur-sm">Carte interactive en cours de chargement...</p>
          </div>
          
          {/* Mock Markers */}
          <div className="absolute top-1/4 left-1/3 bg-emerald-600 text-white p-2 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform z-20 group">
            <MapPin className="h-6 w-6" />
            <div className="absolute hidden group-hover:block bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-white text-gray-900 text-sm p-3 rounded-lg shadow-xl">
              <strong className="block mb-1">Forage de Zongo</strong>
              Soutenu à 40% par la diaspora en France.
            </div>
          </div>
          <div className="absolute top-1/2 right-1/4 bg-blue-600 text-white p-2 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform z-20 group">
            <MapPin className="h-6 w-6" />
            <div className="absolute hidden group-hover:block bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-white text-gray-900 text-sm p-3 rounded-lg shadow-xl">
              <strong className="block mb-1">École Primaire</strong>
              Financée par l'association des ressortissants aux USA.
            </div>
          </div>
        </div>
      </div>

      {/* Video Testimonials */}
      <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <PlayCircle className="h-6 w-6 mr-3 text-emerald-600" /> Témoignages vidéo
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="relative rounded-xl overflow-hidden group cursor-pointer aspect-video bg-gray-900">
              <Image src={`https://picsum.photos/seed/video${item}/600/400`} alt={`Témoignage ${item}`} fill className="object-cover opacity-70 group-hover:opacity-50 transition-opacity" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayCircle className="h-16 w-16 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
              </div>
              <div className="absolute bottom-0 left-0 p-4 w-full bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-medium">"Mon retour d'expérience après 5 ans..."</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
