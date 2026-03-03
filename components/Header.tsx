import Link from 'next/link';
import { Search, User, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-emerald-600">
              Commune
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium">Accueil</Link>
            <Link href="/services" className="text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium">Services</Link>
            <Link href="/tourisme" className="text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium">Tourisme</Link>
            <Link href="/projets" className="text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium">Projets</Link>
            <Link href="/diaspora" className="text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium">Diaspora</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-emerald-600">
              <Search className="h-5 w-5" />
            </button>
            <Link href="/citoyen" className="text-gray-500 hover:text-emerald-600">
              <User className="h-5 w-5" />
            </Link>
            <button className="md:hidden text-gray-500 hover:text-emerald-600">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
