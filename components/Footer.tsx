import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">CommuneConnect</h3>
            <p className="text-gray-400 text-sm">La plateforme participative de votre commune. Ensemble, construisons l'avenir.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens utiles</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/budget" className="hover:text-white">Budget citoyen</Link></li>
              <li><Link href="/galerie" className="hover:text-white">Galerie photo</Link></li>
              <li><Link href="/admin" className="hover:text-white">Espace Admin</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Légal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white">Mentions légales</Link></li>
              <li><Link href="#" className="hover:text-white">Politique de confidentialité</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>contact@communeconnect.bj</li>
              <li>+229 00 00 00 00</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} CommuneConnect. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
