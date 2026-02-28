import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, MessageSquare, Calendar } from 'lucide-react';
import { CLINIC_NAME, NAV_LINKS, WHATSAPP_NUMBER } from '../constants';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-white py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center mr-3 group-hover:rotate-12 transition-transform">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-zinc-900 tracking-tighter leading-none">{CLINIC_NAME}</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-emerald-600 font-bold">Dental Clinic</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {NAV_LINKS.map((link) => (
              <div key={link.name} className="relative group px-1">
                {link.sub ? (
                  <button
                    className="flex items-center px-4 py-2 text-sm font-semibold text-zinc-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-all"
                  >
                    {link.name}
                    <ChevronDown className="ml-1 h-4 w-4 opacity-50" />
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                      location.pathname === link.path 
                        ? 'text-emerald-600 bg-emerald-50' 
                        : 'text-zinc-600 hover:text-emerald-600 hover:bg-zinc-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}

                {link.sub && (
                  <div className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white border border-zinc-100 shadow-2xl rounded-2xl overflow-hidden p-2 mt-2">
                      {link.sub.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="block px-4 py-3 text-sm font-medium text-zinc-600 hover:bg-emerald-50 hover:text-emerald-600 rounded-xl transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div className="pl-4 ml-4 border-l border-zinc-100">
              <Link
                to="/appointment"
                className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-bold rounded-full shadow-lg shadow-emerald-600/20 text-white bg-emerald-600 hover:bg-emerald-700 transition-all transform hover:scale-105 active:scale-95"
              >
                Rendez-vous
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden space-x-4">
            <Link to="/appointment" className="p-2 bg-emerald-600 text-white rounded-full shadow-lg">
              <Calendar className="h-5 w-5" />
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-zinc-600 hover:bg-zinc-100 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-zinc-900/60 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white z-50 lg:hidden shadow-2xl flex flex-col"
            >
              <div className="p-6 flex justify-between items-center border-b border-zinc-50">
                <span className="text-xl font-black text-zinc-900">{CLINIC_NAME}</span>
                <button onClick={() => setIsOpen(false)} className="p-2 rounded-xl bg-zinc-50 text-zinc-400">
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="flex-grow overflow-y-auto p-6 space-y-2">
                {NAV_LINKS.map((link) => (
                  <div key={link.name}>
                    {link.sub ? (
                      <div className="space-y-1">
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                          className="w-full flex justify-between items-center px-4 py-3 rounded-2xl text-lg font-bold text-zinc-900 hover:bg-zinc-50"
                        >
                          {link.name}
                          <ChevronDown className={`h-5 w-5 transform transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === link.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 space-y-1 overflow-hidden"
                            >
                              {link.sub.map((sub) => (
                                <Link
                                  key={sub.name}
                                  to={sub.path}
                                  className="block px-4 py-3 rounded-xl text-zinc-500 font-medium hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
                                >
                                  {sub.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={link.path}
                        className={`block px-4 py-3 rounded-2xl text-lg font-bold transition-colors ${
                          location.pathname === link.path ? 'text-emerald-600 bg-emerald-50' : 'text-zinc-900 hover:bg-zinc-50'
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              <div className="p-6 border-t border-zinc-50">
                <Link
                  to="/appointment"
                  className="w-full inline-flex items-center justify-center px-6 py-4 bg-emerald-600 text-white font-bold rounded-2xl shadow-xl shadow-emerald-600/20"
                >
                  Prendre Rendez-vous
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
