import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-blue-400">Mini TVZ</h3>
            <p className="text-gray-300">
              Kvalitetne radionice za djecu u sigurnom i poticajnom okruženju. 
              Pomagamo djeci da razviju kreativnost, znanja i vještine kroz zabavu.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Brze poveznice</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Naslovna
                </Link>
              </li>
              <li>
                <Link to="/radionice" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Radionice
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link to="/prijava" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Prijava
                </Link>
              </li>
            </ul>
          </div>

          {/* Workshop Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Kategorije radionica</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Kreativne radionice</li>
              <li className="text-gray-300">Edukativne radionice</li>
              <li className="text-gray-300">Sportske aktivnosti</li>
              <li className="text-gray-300">Tehnološke radionice</li>
              <li className="text-gray-300">Glazbene radionice</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Kontakt informacije</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">Vrbik 8, 10000 Zagreb</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">+385 1 3707 000</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">info@minitvz.hr</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Mini TVZ. Sva prava pridržana.
          </p>
          <div className="flex items-center space-x-1 text-gray-400 text-sm mt-4 md:mt-0">
            <span>Napravljeno s</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>za djecu</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;