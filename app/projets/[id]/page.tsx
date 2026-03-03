'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MapPin, User, CalendarDays, Heart, Share2, MessageSquare, QrCode } from 'lucide-react';

export default function ProjetDetailPage({ params }: { params: { id: string } }) {
  const [amount, setAmount] = useState('');
  const [comment, setComment] = useState('');

  // Mock data based on ID
  const project = {
    id: params.id,
    title: 'Forage de Zongo',
    location: 'Quartier Zongo',
    porteur: 'Mairie',
    goal: 1000000,
    collected: 600000,
    daysLeft: 20,
    description: 'Le projet consiste à forer un puits à pompe pour desservir 500 ménages du quartier Zongo, actuellement confrontés à des pénuries d\'eau fréquentes pendant la saison sèche. Ce forage permettra d\'améliorer considérablement les conditions sanitaires et de réduire le temps passé par les femmes et les enfants à la corvée d\'eau.',
    image: 'https://picsum.photos/seed/water/1200/600',
    gallery: [
      'https://picsum.photos/seed/water1/400/300',
      'https://picsum.photos/seed/water2/400/300',
      'https://picsum.photos/seed/water3/400/300',
      'https://picsum.photos/seed/water4/400/300',
    ],
    donors: [
      { name: 'Jean D.', amount: 25000, date: 'Il y a 2h' },
      { name: 'Marie K.', amount: 10000, date: 'Il y a 5h' },
      { name: 'Anonyme', amount: 5000, date: 'Hier' },
    ],
    comments: [
      { author: 'Aminata', text: 'Nous attendons ce forage avec impatience.', date: 'Il y a 1 jour' },
      { author: 'Koffi', text: 'Bravo pour l\'initiative, j\'ai contribué !', date: 'Il y a 2 jours' },
    ]
  };

  const progress = Math.min(100, Math.round((project.collected / project.goal) * 100));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Image */}
      <div className="relative h-[400px] rounded-2xl overflow-hidden mb-8 shadow-md">
        <Image src={project.image} alt={project.title} fill className="object-cover" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-8 text-white">
          <div className="flex items-center gap-4 mb-2">
            <span className="bg-emerald-500 px-3 py-1 rounded-full text-sm font-bold">Eau</span>
            <span className="flex items-center text-sm"><MapPin className="h-4 w-4 mr-1" /> {project.location}</span>
          </div>
          <h1 className="text-4xl font-bold">{project.title}</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Info Bar */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-wrap gap-6 items-center text-gray-600">
            <div className="flex items-center"><User className="h-5 w-5 mr-2 text-emerald-600" /> Porté par : <strong className="ml-1 text-gray-900">{project.porteur}</strong></div>
            <div className="flex items-center"><CalendarDays className="h-5 w-5 mr-2 text-emerald-600" /> Fin de collecte : <strong className="ml-1 text-gray-900">Dans {project.daysLeft} jours</strong></div>
            <button className="ml-auto flex items-center text-gray-500 hover:text-emerald-600 transition-colors">
              <Share2 className="h-5 w-5 mr-2" /> Partager
            </button>
          </div>

          {/* Description */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-4">À propos du projet</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{project.description}</p>
          </div>

          {/* Gallery */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-4">Galerie photos</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {project.gallery.map((img, idx) => (
                <div key={idx} className="relative h-32 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
                  <Image src={img} alt={`Galerie ${idx + 1}`} fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
          </div>

          {/* Comments */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <MessageSquare className="h-6 w-6 mr-2 text-emerald-600" />
              Commentaires ({project.comments.length})
            </h2>
            
            <div className="space-y-6 mb-8">
              {project.comments.map((c, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold flex-shrink-0">
                    {c.author.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="font-bold text-gray-900">{c.author}</span>
                      <span className="text-xs text-gray-500">{c.date}</span>
                    </div>
                    <p className="text-gray-700">{c.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <form className="mt-6" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">Ajouter un commentaire</label>
              <textarea
                id="comment"
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 mb-3"
                placeholder="Votre message..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
              <button type="submit" className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium">
                Publier
              </button>
            </form>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Donation Card */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-emerald-100 sticky top-24">
            <h3 className="text-xl font-bold mb-4">Cagnotte</h3>
            
            <div className="mb-6">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-500">Objectif</span>
                <span className="font-bold">{project.goal.toLocaleString()} FCFA</span>
              </div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-500">Collecté</span>
                <span className="font-bold text-emerald-600">{project.collected.toLocaleString()} FCFA</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                <div className="bg-emerald-600 h-3 rounded-full" style={{ width: `${progress}%` }}></div>
              </div>
              <div className="text-right text-sm font-bold text-emerald-600">{progress}%</div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Montant de votre don (FCFA)</label>
              <div className="grid grid-cols-3 gap-2 mb-3">
                {[5000, 10000, 25000].map(val => (
                  <button
                    key={val}
                    onClick={() => setAmount(val.toString())}
                    className={`py-2 rounded-lg border text-sm font-medium transition-colors ${
                      amount === val.toString()
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-700'
                        : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {val.toLocaleString()}
                  </button>
                ))}
              </div>
              <input
                type="number"
                placeholder="Autre montant"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 mb-4"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <button className="w-full flex items-center justify-center py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-bold text-lg shadow-md">
                <Heart className="h-5 w-5 mr-2" /> Je donne
              </button>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Derniers donateurs</h4>
              <ul className="space-y-3">
                {project.donors.map((donor, idx) => (
                  <li key={idx} className="flex justify-between items-center text-sm border-b border-gray-50 pb-2 last:border-0">
                    <div>
                      <span className="font-medium text-gray-900 block">{donor.name}</span>
                      <span className="text-gray-500 text-xs">{donor.date}</span>
                    </div>
                    <span className="font-bold text-emerald-600">{donor.amount.toLocaleString()} FCFA</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* QR Code */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <h3 className="text-lg font-bold mb-2 flex items-center justify-center">
              <QrCode className="h-5 w-5 mr-2 text-emerald-600" /> QR Code du projet
            </h3>
            <p className="text-sm text-gray-500 mb-4">Scannez pour partager ou faire un don depuis votre mobile.</p>
            <div className="bg-gray-100 w-48 h-48 mx-auto rounded-lg flex items-center justify-center mb-4 border border-gray-200">
              {/* Placeholder for actual QR code image */}
              <QrCode className="h-24 w-24 text-gray-400" />
            </div>
            <button className="text-sm font-medium text-emerald-600 hover:text-emerald-700">
              Télécharger pour affichage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
