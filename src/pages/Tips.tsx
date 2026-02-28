import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Heart, Shield, Sparkles, Activity, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Tips() {
  const tips = [
    { title: "Soins, hygiène et pathologies", icon: Heart, path: "/soins-hygiene-et-pathologies", image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800" },
    { title: "Traitement des gencives", icon: Shield, path: "/traitement-des-gencives", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800" },
    { title: "Prothèses dentaires", icon: Activity, path: "/protheses-dentaires", image: "https://images.unsplash.com/photo-1445527815219-ecbfec67492e?auto=format&fit=crop&q=80&w=800" },
    { title: "Implants dentaires", icon: Zap, path: "/implants-dentaires", image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800" },
    { title: "Dentisterie esthétique", icon: Sparkles, path: "/dentisterie-esthetique", image: "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=800" },
    { title: "Orthodontie", icon: BookOpen, path: "/orthodontie-tips", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <div className="bg-zinc-50 min-h-screen pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative py-24 md:py-40 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-zinc-900"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-8xl font-black tracking-tighter mb-6 uppercase"
          >
            CONSEILS <span className="text-emerald-500">PRATIQUES</span>
          </motion.h1>
          <p className="text-emerald-400 text-base md:text-xl font-light uppercase tracking-[0.4em] max-w-2xl mx-auto">Tout savoir pour préserver votre santé bucco-dentaire</p>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {tips.map((tip, i) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-[3rem] overflow-hidden shadow-sm border border-zinc-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={tip.image}
                    alt={tip.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-zinc-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-8 left-8 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-2xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                    <tip.icon className="h-7 w-7 text-emerald-600" />
                  </div>
                </div>
                <div className="p-10 md:p-12">
                  <h3 className="text-2xl font-black text-zinc-900 mb-8 leading-tight group-hover:text-emerald-600 transition-colors">
                    {tip.title}
                  </h3>
                  <Link
                    to={tip.path}
                    className="inline-flex items-center text-xs font-black text-zinc-400 group-hover:text-emerald-600 uppercase tracking-[0.2em] transition-all"
                  >
                    Lire le guide complet
                    <ArrowRight className="ml-3 h-5 w-5 transform group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter/CTA */}
      <section className="py-20 md:py-32 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Besoin d'un conseil personnalisé ?</h2>
              <p className="text-zinc-400 text-lg md:text-xl">
                N'attendez pas qu'une douleur s'installe. Prenez rendez-vous pour un bilan complet.
              </p>
            </div>
            <Link
              to="/appointment"
              className="inline-flex items-center justify-center px-12 py-5 bg-emerald-600 text-white font-black text-lg rounded-full hover:bg-emerald-700 transition-all shadow-2xl shadow-emerald-900/20 transform hover:scale-105"
            >
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
