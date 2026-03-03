'use client';

import { useState } from 'react';
import { Home, CreditCard, Gift, Calendar, Lightbulb, ClipboardList, Bell, Settings, Menu, X, ChevronRight } from 'lucide-react';

const menuItems = [
  { id: 'accueil', label: 'Accueil', icon: Home },
  { id: 'paiements', label: 'Mes paiements', icon: CreditCard },
  { id: 'dons', label: 'Mes dons', icon: Gift },
  { id: 'reservations', label: 'Mes réservations', icon: Calendar },
  { id: 'idees', label: 'Mes idées', icon: Lightbulb },
  { id: 'inscriptions', label: 'Mes inscriptions', icon: ClipboardList },
  { id: 'alertes', label: 'Mes alertes', icon: Bell },
  { id: 'parametres', label: 'Paramètres', icon: Settings },
];

export default function CitoyenDashboard() {
  const [activeTab, setActiveTab] = useState('accueil');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-[calc(100vh-64px)] bg-gray-50">
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsMobileMenuOpen(false)}></div>
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        md:relative md:translate-x-0
      `}>
        <div className="p-4 border-b border-gray-100 flex justify-between items-center md:hidden">
          <span className="font-bold text-gray-900">Menu Citoyen</span>
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-500 hover:text-gray-900">
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="p-4 space-y-1">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => { setActiveTab(item.id); setIsMobileMenuOpen(false); }}
              className={`w-full flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                activeTab === item.id
                  ? 'bg-emerald-50 text-emerald-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <item.icon className={`h-5 w-5 mr-3 ${activeTab === item.id ? 'text-emerald-600' : 'text-gray-400'}`} />
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-8 overflow-y-auto">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center mb-6">
          <button onClick={() => setIsMobileMenuOpen(true)} className="mr-4 text-gray-500 hover:text-gray-900">
            <Menu className="h-6 w-6" />
          </button>
          <h1 className="text-2xl font-bold text-gray-900">Espace Citoyen</h1>
        </div>

        {activeTab === 'accueil' && (
          <div className="max-w-4xl">
            <h1 className="hidden md:block text-3xl font-bold text-gray-900 mb-2">Bonjour, Jean !</h1>
            <p className="text-gray-600 mb-8">Bienvenue sur votre tableau de bord personnel.</p>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-gray-500">Prochaine taxe à payer</h3>
                  <CreditCard className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">25 000 FCFA</div>
                  <div className="text-sm text-red-500 font-medium">Échéance : 15 Juin 2026</div>
                </div>
                <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Payer maintenant
                </button>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-gray-500">Dons totaux</h3>
                  <Gift className="h-5 w-5 text-emerald-500" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-600 mb-1">45 000 FCFA</div>
                  <div className="text-sm text-gray-500">Sur 3 projets participatifs</div>
                </div>
                <button className="mt-4 w-full py-2 border border-emerald-600 text-emerald-700 rounded-lg font-medium hover:bg-emerald-50 transition-colors">
                  Voir l&apos;historique
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Derniers dons */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Derniers dons</h2>
                  <button className="text-sm text-emerald-600 font-medium hover:text-emerald-700">Voir tout</button>
                </div>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center mr-4">
                        <Gift className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Forage de Zongo</p>
                        <p className="text-xs text-gray-500">10 Avril 2026</p>
                      </div>
                    </div>
                    <span className="font-bold text-emerald-600">10 000 FCFA</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center mr-4">
                        <Gift className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">École de Gbégamey</p>
                        <p className="text-xs text-gray-500">02 Mars 2026</p>
                      </div>
                    </div>
                    <span className="font-bold text-emerald-600">5 000 FCFA</span>
                  </li>
                </ul>
              </div>

              {/* Prochaines activités */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Activités réservées</h2>
                  <button className="text-sm text-emerald-600 font-medium hover:text-emerald-700">Voir tout</button>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                    <div className="bg-blue-100 text-blue-800 rounded-lg p-2 text-center min-w-[60px] mr-4">
                      <div className="text-sm font-bold">15</div>
                      <div className="text-xs uppercase">Mai</div>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Tournoi de football</h3>
                      <p className="text-sm text-gray-600">Stade municipal • 14:00</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Idées suggérées */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Mes idées</h2>
                  <button className="text-sm text-emerald-600 font-medium hover:text-emerald-700">Nouvelle</button>
                </div>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                    <div>
                      <p className="font-medium text-gray-900">Éclairage place du marché</p>
                      <p className="text-xs text-gray-500">Soumis le 12 Janvier</p>
                    </div>
                    <span className="px-2 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-full">En attente</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                    <div>
                      <p className="font-medium text-gray-900">Ralentisseur rue des écoles</p>
                      <p className="text-xs text-gray-500">Soumis le 05 Décembre</p>
                    </div>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-full">À l&apos;étude</span>
                  </li>
                </ul>
              </div>

              {/* Alertes */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Gérer mes alertes</h2>
                <div className="space-y-4">
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-gray-700 font-medium">Notifications WhatsApp</span>
                    <div className="relative">
                      <input type="checkbox" className="sr-only" defaultChecked />
                      <div className="block bg-emerald-500 w-10 h-6 rounded-full"></div>
                      <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition transform translate-x-4"></div>
                    </div>
                  </label>
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-gray-700 font-medium">Notifications Email</span>
                    <div className="relative">
                      <input type="checkbox" className="sr-only" defaultChecked />
                      <div className="block bg-emerald-500 w-10 h-6 rounded-full"></div>
                      <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition transform translate-x-4"></div>
                    </div>
                  </label>
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-gray-700 font-medium">Notifications Telegram</span>
                    <div className="relative">
                      <input type="checkbox" className="sr-only" />
                      <div className="block bg-gray-300 w-10 h-6 rounded-full"></div>
                      <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Placeholder for other tabs */}
        {activeTab !== 'accueil' && (
          <div className="flex flex-col items-center justify-center h-full text-gray-500">
            <h2 className="text-2xl font-bold mb-2">Section {menuItems.find(i => i.id === activeTab)?.label}</h2>
            <p>Contenu en cours de développement...</p>
          </div>
        )}
      </main>
    </div>
  );
}
