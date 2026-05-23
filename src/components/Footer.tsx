import { Link } from "react-router-dom";
import { Ship, Mail, Phone, MapPin, Globe, MessageCircle, Share2, Info } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Mission */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-orange-500 p-1.5 rounded-md">
                <Ship className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                TERRA<span className="text-orange-500">ZENTRIX</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Terra Zentrix Logistics Worldwide provides seamless global logistics solutions, connecting businesses and people across the globe with precision and care.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-500 transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                <Share2 className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                <Info className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/track" className="hover:text-orange-500 transition-colors">Track Shipment</Link></li>
              <li><Link to="/quote" className="hover:text-orange-500 transition-colors">Get a Quote</Link></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Ocean Freight</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Air Freight</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Road Transport</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-orange-500 transition-colors">Contact Us</Link></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3 text-slate-400">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0" />
                <span>123 Logistics Way, Suite 500, Global City, GC 45678</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-400">
                <Phone className="w-5 h-5 text-orange-500 shrink-0" />
                <span>+1 (800) 555-LOGI</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-400">
                <Mail className="w-5 h-5 text-orange-500 shrink-0" />
                <span>support@terrazentrix.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Terra Zentrix Logistics Worldwide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;