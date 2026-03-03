'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Search, Map as MapIcon, Filter, MapPin, Navigation, Download, Star, Coffee, Bed, Camera, TreePine } from 'lucide-react';

const filters = [
  { id: 'patrimoine', label: 'Patrimoine', icon: Camera, color: 'text-purple-600' },
  { id: 'hebergement', label: 'Hébergement', icon: Bed, color: 'text-blue-600' },
  { id: 'restauration', label: 'Restauration', icon: Coffee, color: 'text-orange-600' },
  { id: 'artisanat', label: 'Artisanat', icon: Star, color: 'text-amber-600' },
  { id: 'nature', label: 'Nature', icon: TreePine, color: 'text-emerald-600' },
];

const topPlaces = [
  { id: 1, name: 'Cascade de Tanongou', category: 'Nature', image: 'https://picsum.photos/seed/waterfall/400/300' },
  { id: 2, name: 'Marché Central', category: 'Artisanat', image: 'https://picsum.photos/seed/market2/400/300' },
  { id: 3, name: 'Musée Historique', category: 'Patrimoine', image: 'https://picsum.photos/seed/museum/400/300' },
  { id: 4, name: 'Point de vue panoramique', category: 'Nature', image: 'https://picsum.photos/seed/view/400/300' },
];

export default function TourismePage() {
  const [activeFilters, setActiveFilters] = useState<string[]>(['patrimoine']);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleFilter = (id: string) => {
    setActiveFilters(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] overflow-hidden">
      {/* Main Content Area */}
      <div className="flex-1 flex relative">
        
        {/* Sidebar */}
        <div className={`
          absolute z-20 inset-y-0 left-0 w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out flex flex-col
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:relative md:translate-x-0
        `}>
          <div className="p-4 border-b border-gray-100 flex justify-between items-center">
            <h2 className="text-xl font-bold flex items-center">
              <MapIcon className="h-5 w-5 mr-2 text-emerald-600" /> Explorer
            </h2>
            <button 
              className="md:hidden text-gray-500 hover:text-gray-900"
              onClick={() => setIsSidebarOpen(false)}
            >
              &times;
            </button>
          </div>

          <div className="p-4 flex-1 overflow-y-auto">
            {/* Search */}
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Rechercher un lieu..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            {/* Filters */}
            <div className="mb-8">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3 flex items-center">
                <Filter className="h-4 w-4 mr-2" /> Filtres
              </h3>
              <div className="space-y-2">
                {filters.map(filter => (
                  <label key={filter.id} className="flex items-center space-x-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-emerald-600 rounded border-gray-300 focus:ring-emerald-500"
                      checked={activeFilters.includes(filter.id)}
                      onChange={() => toggleFilter(filter.id)}
                    />
                    <span className="flex items-center text-gray-700 group-hover:text-gray-900">
                      <filter.icon className={`h-4 w-4 mr-2 ${filter.color}`} />
                      {filter.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Nearby POIs */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3 flex items-center">
                <Navigation className="h-4 w-4 mr-2" /> À proximité
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                  <MapPin className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Marché central</h4>
                    <p className="text-xs text-gray-500">À 500m • Artisanat</p>
                  </div>
                </li>
                <li className="flex items-start p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                  <MapPin className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Grande Mosquée</h4>
                    <p className="text-xs text-gray-500">À 1.2km • Patrimoine</p>
                  </div>
                </li>
                <li className="flex items-start p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                  <MapPin className="h-5 w-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Restaurant Le Baobab</h4>
                    <p className="text-xs text-gray-500">À 2km • Restauration</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-4 border-t border-gray-100">
            <button className="w-full flex items-center justify-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium">
              <Download className="h-4 w-4 mr-2" />
              Créer mon circuit (PDF)
            </button>
          </div>
        </div>

        {/* Map Area */}
        <div className="flex-1 relative bg-gray-200">
          {/* Mobile Toggle Button */}
          <button 
            className="md:hidden absolute top-4 left-4 z-10 bg-white p-2 rounded-lg shadow-md text-gray-700 hover:text-emerald-600"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Filter className="h-6 w-6" />
          </button>

          {/* Map Placeholder */}
          <Image src="https://picsum.photos/seed/mapview/1920/1080" alt="Carte Touristique" fill className="object-cover opacity-60" referrerPolicy="no-referrer" />
          
          {/* Map Controls */}
          <div className="absolute bottom-8 right-8 flex flex-col gap-2 z-10">
            <button className="bg-white p-3 rounded-lg shadow-md hover:bg-gray-50 text-gray-700 font-bold text-xl">+</button>
            <button className="bg-white p-3 rounded-lg shadow-md hover:bg-gray-50 text-gray-700 font-bold text-xl">-</button>
          </div>

          {/* Mock Map Markers */}
          {activeFilters.includes('patrimoine') && (
            <div className="absolute top-1/3 left-1/2 bg-purple-600 text-white p-2 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform z-10 group">
              <Camera className="h-5 w-5" />
              <div className="absolute hidden group-hover:block bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-white text-gray-900 text-sm p-2 rounded-lg shadow-xl font-medium text-center">
                Musée Historique
              </div>
            </div>
          )}
          {activeFilters.includes('nature') && (
            <div className="absolute top-1/4 right-1/4 bg-emerald-600 text-white p-2 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform z-10 group">
              <TreePine className="h-5 w-5" />
              <div className="absolute hidden group-hover:block bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-white text-gray-900 text-sm p-2 rounded-lg shadow-xl font-medium text-center">
                Cascade de Tanongou
              </div>
            </div>
          )}
          {activeFilters.includes('artisanat') && (
            <div className="absolute bottom-1/3 left-1/3 bg-amber-600 text-white p-2 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform z-10 group">
              <Star className="h-5 w-5" />
              <div className="absolute hidden group-hover:block bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-white text-gray-900 text-sm p-2 rounded-lg shadow-xl font-medium text-center">
                Marché Central
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Top 10 Horizontal Banner */}
      <div className="bg-white border-t border-gray-200 p-4 overflow-x-auto whitespace-nowrap hide-scrollbar">
        <div className="max-w-7xl mx-auto flex items-center gap-6">
          <h3 className="text-lg font-bold text-gray-900 flex-shrink-0 mr-4">Top lieux à visiter :</h3>
          {topPlaces.map((place, idx) => (
            <div key={place.id} className="inline-flex items-center gap-3 bg-gray-50 pr-4 rounded-full border border-gray-200 hover:border-emerald-500 cursor-pointer transition-colors flex-shrink-0">
              <div className="relative h-10 w-10 rounded-full overflow-hidden flex-shrink-0">
                <Image src={place.image} alt={place.name} fill className="object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center text-white font-bold text-xs">
                  #{idx + 1}
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-sm font-bold text-gray-900 leading-tight">{place.name}</span>
                <span className="text-xs text-gray-500 leading-tight">{place.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
