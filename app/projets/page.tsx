'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Filter, CheckCircle2 } from 'lucide-react';

const projects = [
  { id: 1, title: 'Forage de Zongo', category: 'Eau', goal: 1000000, collected: 600000, daysLeft: 20, image: 'https://picsum.photos/seed/water/800/400', completed: false },
  { id: 2, title: 'École de Gbégamey', category: 'École', goal: 2000000, collected: 600000, daysLeft: 35, image: 'https://picsum.photos/seed/school/800/400', completed: false },
  { id: 3, title: 'Marché de Dantokpa', category: 'Commerce', goal: 5000000, collected: 500000, daysLeft: 60, image: 'https://picsum.photos/seed/market/800/400', completed: false },
  { id: 4, title: 'Dispensaire de Fifadji', category: 'Santé', goal: 1500000, collected: 1200000, daysLeft: 10, image: 'https://picsum.photos/seed/health/800/400', completed: false },
  { id: 5, title: 'Éclairage public Akpakpa', category: 'Éclairage', goal: 800000, collected: 800000, daysLeft: 0, image: 'https://picsum.photos/seed/light/800/400', completed: true },
  { id: 6, title: 'Puits de Godomey', category: 'Eau', goal: 500000, collected: 500000, daysLeft: 0, image: 'https://picsum.photos/seed/well/800/400', completed: true },
];

const categories = ['Tous', 'Eau', 'École', 'Santé', 'Éclairage', 'Commerce'];

export default function ProjetsPage() {
  const [activeFilter, setActiveFilter] = useState('Tous');
  const [showCompleted, setShowCompleted] = useState(false);

  const filteredProjects = projects.filter(p => {
    if (showCompleted && !p.completed) return false;
    if (!showCompleted && p.completed) return false;
    if (activeFilter === 'Tous') return true;
    return p.category === activeFilter;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className="text-4xl font-bold text-gray-900">Projets Participatifs</h1>
        
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2">
          <Filter className="h-5 w-5 text-gray-400 mr-2" />
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === cat
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {cat}
            </button>
          ))}
          <button
            onClick={() => setShowCompleted(!showCompleted)}
            className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ml-2 ${
              showCompleted
                ? 'bg-emerald-100 text-emerald-800 border-emerald-200 border'
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            <CheckCircle2 className="h-4 w-4 mr-1" /> Réalisés
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {filteredProjects.map(project => {
          const progress = Math.min(100, Math.round((project.collected / project.goal) * 100));
          return (
            <div key={project.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <Image src={project.image} alt={project.title} fill className="object-cover" referrerPolicy="no-referrer" />
                {project.completed && (
                  <div className="absolute top-2 right-2 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
                    <CheckCircle2 className="h-3 w-3 mr-1" /> Terminé
                  </div>
                )}
                <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-bold px-2 py-1 rounded-full">
                  {project.category}
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <div className="text-sm text-gray-500 mb-4">Objectif : {project.goal.toLocaleString()} FCFA</div>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-emerald-600">{progress}% financé</span>
                    <span className="text-gray-500">{project.collected.toLocaleString()} collectés</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-emerald-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                  <div className="text-sm text-gray-500">
                    {!project.completed ? (
                      <span className="font-medium text-amber-600">{project.daysLeft} jours restants</span>
                    ) : (
                      <span className="font-medium text-emerald-600">Projet clôturé</span>
                    )}
                  </div>
                  <Link
                    href={`/projets/${project.id}`}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      project.completed
                        ? 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    {project.completed ? 'Voir détails' : 'Je participe'}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      {filteredProjects.length > 0 && (
        <div className="flex justify-center">
          <nav className="flex items-center space-x-2">
            <button className="px-3 py-2 rounded-md border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-50" disabled>Précédent</button>
            <button className="px-3 py-2 rounded-md bg-emerald-600 text-white font-medium">1</button>
            <button className="px-3 py-2 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50">2</button>
            <button className="px-3 py-2 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50">3</button>
            <button className="px-3 py-2 rounded-md border border-gray-200 text-gray-500 hover:bg-gray-50">Suivant</button>
          </nav>
        </div>
      )}
      
      {filteredProjects.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          Aucun projet ne correspond à vos critères.
        </div>
      )}
    </div>
  );
}
