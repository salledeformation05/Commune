'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Filter, Heart, Plus, Camera } from 'lucide-react';

const photos = [
  { id: 1, title: 'Coucher de soleil sur le lac', author: 'Marie D.', likes: 120, image: 'https://picsum.photos/seed/sunset/600/600', quartier: 'Lac', theme: 'Nature' },
  { id: 2, title: 'Fête de l\'indépendance', author: 'Jean P.', likes: 85, image: 'https://picsum.photos/seed/party/600/600', quartier: 'Centre', theme: 'Événement' },
  { id: 3, title: 'Nouveau marché', author: 'Aminata S.', likes: 230, image: 'https://picsum.photos/seed/market3/600/600', quartier: 'Zongo', theme: 'Infrastructures' },
  { id: 4, title: 'Match de foot inter-quartiers', author: 'Koffi A.', likes: 45, image: 'https://picsum.photos/seed/football/600/600', quartier: 'Stade', theme: 'Sport' },
  { id: 5, title: 'Artisanat local', author: 'Fatou N.', likes: 150, image: 'https://picsum.photos/seed/crafts/600/600', quartier: 'Artisans', theme: 'Culture' },
  { id: 6, title: 'Plantation d\'arbres', author: 'Équipe Verte', likes: 310, image: 'https://picsum.photos/seed/trees/600/600', quartier: 'Périphérie', theme: 'Nature' },
  { id: 7, title: 'Rentrée scolaire', author: 'Directeur École', likes: 90, image: 'https://picsum.photos/seed/school2/600/600', quartier: 'Gbégamey', theme: 'Éducation' },
  { id: 8, title: 'Inauguration du puits', author: 'Mairie', likes: 420, image: 'https://picsum.photos/seed/well2/600/600', quartier: 'Zongo', theme: 'Infrastructures' },
];

export default function GaleriePage() {
  const [activeTheme, setActiveTheme] = useState('Tous');

  const themes = ['Tous', 'Nature', 'Événement', 'Infrastructures', 'Sport', 'Culture', 'Éducation'];

  const filteredPhotos = activeTheme === 'Tous' ? photos : photos.filter(p => p.theme === activeTheme);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className="text-4xl font-bold text-gray-900 flex items-center">
          <Camera className="h-8 w-8 mr-3 text-emerald-600" /> Galerie Photo Citoyenne
        </h1>
        
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2">
          <Filter className="h-5 w-5 text-gray-400 mr-2" />
          <select className="px-4 py-2 rounded-full border border-gray-300 text-sm font-medium focus:ring-emerald-500 focus:border-emerald-500 bg-white">
            <option>Tous les quartiers</option>
            <option>Centre</option>
            <option>Zongo</option>
            <option>Gbégamey</option>
          </select>
          <select 
            className="px-4 py-2 rounded-full border border-gray-300 text-sm font-medium focus:ring-emerald-500 focus:border-emerald-500 bg-white"
            value={activeTheme}
            onChange={(e) => setActiveTheme(e.target.value)}
          >
            {themes.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
          <select className="px-4 py-2 rounded-full border border-gray-300 text-sm font-medium focus:ring-emerald-500 focus:border-emerald-500 bg-white">
            <option>Plus récentes</option>
            <option>Plus populaires</option>
          </select>
        </div>
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
        {filteredPhotos.map(photo => (
          <div key={photo.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-shadow">
            <div className="relative aspect-square overflow-hidden">
              <Image 
                src={photo.image} 
                alt={photo.title} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-300" 
                referrerPolicy="no-referrer" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white w-full">
                  <h3 className="font-bold truncate">{photo.title}</h3>
                  <div className="flex justify-between items-center text-sm mt-1">
                    <span className="text-gray-300">© {photo.author}</span>
                    <span className="flex items-center font-bold text-emerald-400">
                      <Heart className="h-4 w-4 mr-1 fill-current" /> {photo.likes}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile Info (visible when not hovering) */}
            <div className="p-4 md:hidden">
              <h3 className="font-bold text-gray-900 truncate">{photo.title}</h3>
              <div className="flex justify-between items-center text-sm mt-1">
                <span className="text-gray-500">© {photo.author}</span>
                <span className="flex items-center font-bold text-emerald-600">
                  <Heart className="h-4 w-4 mr-1" /> {photo.likes}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="flex justify-center">
        <button className="px-8 py-3 bg-white border border-gray-300 text-gray-700 rounded-full font-bold hover:bg-gray-50 hover:text-emerald-600 transition-colors shadow-sm">
          Charger plus de photos
        </button>
      </div>

      {/* Floating Add Button */}
      <button className="fixed bottom-24 right-6 bg-emerald-600 text-white p-4 rounded-full shadow-lg hover:bg-emerald-700 transition-transform hover:scale-105 z-40 flex items-center justify-center group">
        <Plus className="h-6 w-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap group-hover:ml-2 font-bold">
          Ajouter ma photo
        </span>
      </button>
    </div>
  );
}
