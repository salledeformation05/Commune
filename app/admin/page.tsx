'use client';

import { useState } from 'react';
import { BarChart3, Users, FileText, DollarSign, Shield, Settings, Menu, X, TrendingUp, AlertCircle, CheckCircle2 } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const menuItems = [
  { id: 'dashboard', label: 'Tableau de bord', icon: BarChart3 },
  { id: 'utilisateurs', label: 'Utilisateurs', icon: Users },
  { id: 'contenus', label: 'Contenus', icon: FileText },
  { id: 'finances', label: 'Finances', icon: DollarSign },
  { id: 'moderation', label: 'Modération', icon: Shield },
  { id: 'parametres', label: 'Paramètres', icon: Settings },
];

const donsData = [
  { name: 'Jan', total: 1.2 },
  { name: 'Fév', total: 1.8 },
  { name: 'Mar', total: 1.5 },
  { name: 'Avr', total: 2.5 },
  { name: 'Mai', total: 2.1 },
  { name: 'Juin', total: 3.2 },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-[calc(100vh-64px)] bg-gray-100">
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsMobileMenuOpen(false)}></div>
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        md:relative md:translate-x-0
      `}>
        <div className="p-4 border-b border-gray-800 flex justify-between items-center md:hidden">
          <span className="font-bold">Menu Admin</span>
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-400 hover:text-white">
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="p-4 space-y-2">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => { setActiveTab(item.id); setIsMobileMenuOpen(false); }}
              className={`w-full flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                activeTab === item.id
                  ? 'bg-emerald-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              <item.icon className="h-5 w-5 mr-3" />
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
          <h1 className="text-2xl font-bold text-gray-900">Administration</h1>
        </div>

        {activeTab === 'dashboard' && (
          <div className="max-w-6xl mx-auto">
            <h1 className="hidden md:block text-3xl font-bold text-gray-900 mb-2">Bienvenue, Administrateur</h1>
            <p className="text-gray-600 mb-8">Voici un aperçu de l&apos;activité de la plateforme.</p>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                { label: 'Visiteurs (30j)', value: '1 234', icon: Users, color: 'text-blue-600', bg: 'bg-blue-100' },
                { label: 'Dons du mois', value: '2,5 M FCFA', icon: DollarSign, color: 'text-emerald-600', bg: 'bg-emerald-100' },
                { label: 'Projets en cours', value: '8', icon: FileText, color: 'text-purple-600', bg: 'bg-purple-100' },
                { label: 'Idées en attente', value: '12', icon: AlertCircle, color: 'text-amber-600', bg: 'bg-amber-100' },
              ].map((metric, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex items-center">
                  <div className={`${metric.bg} p-4 rounded-lg mr-4`}>
                    <metric.icon className={`h-6 w-6 ${metric.color}`} />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500">{metric.label}</div>
                    <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              {/* Chart */}
              <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900 flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-emerald-600" /> Évolution des dons (M FCFA)
                  </h2>
                  <select className="text-sm border border-gray-300 rounded-md px-2 py-1">
                    <option>Cette année</option>
                    <option>L&apos;année dernière</option>
                  </select>
                </div>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={donsData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="total" stroke="#10b981" fill="#d1fae5" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Moderation */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900 flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-amber-500" /> Modération
                  </h2>
                  <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded-full">12 en attente</span>
                </div>
                <ul className="space-y-4">
                  <li className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-bold text-gray-500 uppercase">Idée citoyenne</span>
                      <span className="text-xs text-gray-400">Il y a 3h</span>
                    </div>
                    <p className="text-sm font-medium text-gray-900 mb-2">&quot;Création d&apos;une piste cyclable au centre-ville&quot;</p>
                    <div className="flex gap-2">
                      <button className="text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded hover:bg-emerald-200 transition-colors">Approuver</button>
                      <button className="text-xs bg-red-100 text-red-700 px-3 py-1 rounded hover:bg-red-200 transition-colors">Rejeter</button>
                    </div>
                  </li>
                  <li className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-bold text-gray-500 uppercase">Photo Galerie</span>
                      <span className="text-xs text-gray-400">Il y a 1h</span>
                    </div>
                    <p className="text-sm font-medium text-gray-900 mb-2">&quot;Coucher de soleil sur le lac&quot;</p>
                    <div className="flex gap-2">
                      <button className="text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded hover:bg-emerald-200 transition-colors">Approuver</button>
                      <button className="text-xs bg-red-100 text-red-700 px-3 py-1 rounded hover:bg-red-200 transition-colors">Rejeter</button>
                    </div>
                  </li>
                </ul>
                <button className="w-full mt-4 text-sm text-center text-emerald-600 font-medium hover:text-emerald-700">Voir tout</button>
              </div>
            </div>

            {/* Recent Payments */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Derniers paiements (Taxes & Dons)</h2>
                <button className="text-sm text-emerald-600 font-medium hover:text-emerald-700">Voir l&apos;historique complet</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200 text-sm text-gray-500">
                      <th className="pb-3 font-medium">Date</th>
                      <th className="pb-3 font-medium">Utilisateur</th>
                      <th className="pb-3 font-medium">Type</th>
                      <th className="pb-3 font-medium">Montant</th>
                      <th className="pb-3 font-medium">Statut</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 text-gray-600">12/04/2026 14:30</td>
                      <td className="py-3 font-medium text-gray-900">Aminata D.</td>
                      <td className="py-3 text-gray-600">Taxe marché</td>
                      <td className="py-3 font-bold text-gray-900">5 000 FCFA</td>
                      <td className="py-3">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                          <CheckCircle2 className="h-3 w-3 mr-1" /> Succès
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 text-gray-600">11/04/2026 09:15</td>
                      <td className="py-3 font-medium text-gray-900">Entreprise XYZ</td>
                      <td className="py-3 text-gray-600">Patente</td>
                      <td className="py-3 font-bold text-gray-900">25 000 FCFA</td>
                      <td className="py-3">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                          <CheckCircle2 className="h-3 w-3 mr-1" /> Succès
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 text-gray-600">10/04/2026 18:45</td>
                      <td className="py-3 font-medium text-gray-900">Jean P.</td>
                      <td className="py-3 text-gray-600">Don (Forage)</td>
                      <td className="py-3 font-bold text-gray-900">10 000 FCFA</td>
                      <td className="py-3">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                          <CheckCircle2 className="h-3 w-3 mr-1" /> Succès
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Placeholder for other tabs */}
        {activeTab !== 'dashboard' && (
          <div className="flex flex-col items-center justify-center h-full text-gray-500">
            <h2 className="text-2xl font-bold mb-2">Section {menuItems.find(i => i.id === activeTab)?.label}</h2>
            <p>Contenu en cours de développement...</p>
          </div>
        )}
      </main>
    </div>
  );
}
