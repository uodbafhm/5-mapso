import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageSquare, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { CLINIC_NAME, WHATSAPP_NUMBER, FIX_NUMBER, EMAIL, ADDRESS, SPECIALTIES } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center">
              <span className="text-3xl font-bold text-emerald-500 tracking-tighter">{CLINIC_NAME}</span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Nous sommes une équipe de passionnés dont le but est d'améliorer la vie de chacun grâce à des soins dentaires d'excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-zinc-800 rounded-full hover:bg-emerald-600 transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="p-2 bg-zinc-800 rounded-full hover:bg-emerald-600 transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="p-2 bg-zinc-800 rounded-full hover:bg-emerald-600 transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="p-2 bg-zinc-800 rounded-full hover:bg-emerald-600 transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Liens utiles</h3>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li><Link to="/" className="hover:text-emerald-500 transition-colors">Accueil</Link></li>
              <li><Link to="/appointment" className="hover:text-emerald-500 transition-colors">Rendez-vous</Link></li>
              <li><Link to="/about-us" className="hover:text-emerald-500 transition-colors">Notre équipe</Link></li>
              <li><Link to="/conseils" className="hover:text-emerald-500 transition-colors">Conseils</Link></li>
              <li><Link to="/contactus" className="hover:text-emerald-500 transition-colors">Contactez-nous</Link></li>
            </ul>
          </div>

          {/* Specialties */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Spécialités</h3>
            <ul className="space-y-4 text-zinc-400 text-sm">
              {SPECIALTIES.slice(0, 5).map((s) => (
                <li key={s.name}><Link to={s.path} className="hover:text-emerald-500 transition-colors">{s.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Rejoignez-nous</h3>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-emerald-500 shrink-0" />
                <span>{ADDRESS}</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-emerald-500 shrink-0" />
                <a href={`tel:${FIX_NUMBER}`} className="hover:text-emerald-500 transition-colors">{FIX_NUMBER}</a>
              </li>
              <li className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-3 text-emerald-500 shrink-0" />
                <a href={`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`} className="hover:text-emerald-500 transition-colors">{WHATSAPP_NUMBER}</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-emerald-500 shrink-0" />
                <a href={`mailto:${EMAIL}`} className="hover:text-emerald-500 transition-colors">{EMAIL}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center text-zinc-500 text-xs">
          <p>Copyright © {new Date().getFullYear()} {CLINIC_NAME} Dental Clinic. Tous droits réservés.</p>
          <p className="mt-4 md:mt-0">Designed By <span className="text-emerald-500 font-semibold">MAPSO Tech</span></p>
        </div>
      </div>
    </footer>
  );
}
