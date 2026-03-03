import { FileText, CreditCard, ClipboardList, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Services et Démarches</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <CreditCard className="h-10 w-10 text-emerald-600 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Paiement des taxes</h2>
          <p className="text-gray-600 mb-4">Payez vos taxes locales (marché, patente, voirie) en ligne de manière sécurisée.</p>
          <Link href="/citoyen" className="text-emerald-600 font-medium flex items-center hover:text-emerald-700">
            Accéder au service <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <FileText className="h-10 w-10 text-blue-600 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Actes d'état civil</h2>
          <p className="text-gray-600 mb-4">Demandez vos actes de naissance, mariage ou décès directement en ligne.</p>
          <Link href="#" className="text-blue-600 font-medium flex items-center hover:text-blue-700">
            Faire une demande <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <ClipboardList className="h-10 w-10 text-amber-600 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Signaler un problème</h2>
          <p className="text-gray-600 mb-4">Signalez un problème de voirie, d'éclairage ou de propreté dans votre quartier.</p>
          <Link href="#" className="text-amber-600 font-medium flex items-center hover:text-amber-700">
            Faire un signalement <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
