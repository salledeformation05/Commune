'use client';

import { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Download, ChevronDown, ChevronUp, Send } from 'lucide-react';

const recettesData = [
  { name: 'État', value: 50, color: '#10b981' },
  { name: 'Taxes', value: 30, color: '#3b82f6' },
  { name: 'Dons', value: 10, color: '#f59e0b' },
  { name: 'Autres', value: 10, color: '#6b7280' },
];

const depensesData = [
  { name: 'Éducation', value: 35, color: '#3b82f6' },
  { name: 'Routes', value: 25, color: '#6366f1' },
  { name: 'Santé', value: 20, color: '#10b981' },
  { name: 'Administration', value: 20, color: '#f59e0b' },
];

const evolutionData = [
  { year: '2024', budget: 2.1 },
  { year: '2025', budget: 2.3 },
  { year: '2026', budget: 2.5 },
];

export default function BudgetPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Budget Citoyen</h1>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold mb-6 text-center">Origine des recettes</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={recettesData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {recettesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold mb-6 text-center">Répartition des dépenses</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={depensesData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {depensesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Evolution */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-12">
        <h2 className="text-xl font-bold mb-6">Évolution sur 3 ans (en Milliards FCFA)</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={evolutionData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip formatter={(value) => `${value} Mds`} />
              <Bar dataKey="budget" fill="#10b981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Key Figures */}
        <div className="md:col-span-2 bg-emerald-50 p-6 rounded-xl border border-emerald-100">
          <h2 className="text-xl font-bold mb-6 text-emerald-900">Chiffres clés</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <div className="text-sm text-emerald-700 mb-1">Budget total</div>
              <div className="text-3xl font-bold text-emerald-900">2,5 Mds FCFA</div>
            </div>
            <div>
              <div className="text-sm text-emerald-700 mb-1">Par habitant</div>
              <div className="text-3xl font-bold text-emerald-900">12 500 FCFA</div>
            </div>
            <div>
              <div className="text-sm text-emerald-700 mb-1">Taux d&apos;exécution</div>
              <div className="text-3xl font-bold text-emerald-900">78%</div>
            </div>
          </div>
        </div>

        {/* Downloads */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-center">
          <h2 className="text-xl font-bold mb-4">Téléchargements</h2>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-colors">
              <span className="text-sm font-medium">Version détaillée (PDF)</span>
              <Download className="h-4 w-4 text-gray-500" />
            </button>
            <button className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-colors">
              <span className="text-sm font-medium">Version simplifiée (Infographie)</span>
              <Download className="h-4 w-4 text-gray-500" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* FAQ */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold mb-6">Questions fréquentes sur le budget</h2>
          <div className="space-y-4">
            {[
              { q: "Pourquoi la taxe a-t-elle augmenté ?", a: "L'augmentation de la taxe de 2% cette année est destinée à financer exclusivement le nouveau programme de voirie urbaine." },
              { q: "Où va l'argent de l'État ?", a: "Les subventions de l'État sont principalement allouées aux secteurs de l'éducation (construction d'écoles) et de la santé (dispensaires)." },
              { q: "Comment sont choisis les projets participatifs ?", a: "Ils sont proposés par les citoyens et soumis au vote lors des assemblées de quartier trimestrielles." }
            ].map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                  onClick={() => toggleFaq(idx)}
                >
                  <span className="font-medium text-gray-900">{faq.q}</span>
                  {openFaq === idx ? <ChevronUp className="h-5 w-5 text-gray-500" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
                </button>
                {openFaq === idx && (
                  <div className="p-4 bg-white text-gray-600 text-sm">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Question Form */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold mb-6">Une question au Maire ?</h2>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Votre nom</label>
              <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500" placeholder="Jean Dupont" />
            </div>
            <div>
              <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-1">Votre question</label>
              <textarea id="question" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500" placeholder="Posez votre question concernant le budget..."></textarea>
            </div>
            <button type="submit" className="w-full flex items-center justify-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium">
              <Send className="h-4 w-4 mr-2" />
              Envoyer la question
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
