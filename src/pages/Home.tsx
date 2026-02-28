import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, Shield, Clock, Users, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CLINIC_NAME, SPECIALTIES } from '../constants';

export default function Home() {
  return (
    <div className="overflow-hidden pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:h-[85vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2000"
            alt="Modern Dental Clinic"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6">
              Un sourire sain, <br />
              <span className="text-emerald-400 font-light italic">une vie confiante</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-zinc-200 mb-10 leading-relaxed max-w-xl">
              Bienvenue chez {CLINIC_NAME}. Nous allions technologie d'avant-garde et approche humaine pour sublimer votre sourire à Casablanca.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/appointment"
                className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 text-white font-bold rounded-full hover:bg-emerald-700 transition-all transform hover:scale-105 shadow-xl shadow-emerald-900/20"
              >
                Prendre rendez-vous
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/conseils"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all"
              >
                Conseils pratiques
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 md:py-32 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 mb-6 tracking-tight">Notre approche</h2>
            <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
              Nous plaçons votre santé bucco-dentaire et votre confort au centre de chaque intervention. Grâce à des équipements modernes et des protocoles rigoureux.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {[
              { icon: Shield, title: "Sécurité", desc: "Protocoles d'hygiène et de stérilisation rigoureux pour votre tranquillité." },
              { icon: Star, title: "Excellence", desc: "Soins de haute qualité utilisant les meilleurs matériaux du marché." },
              { icon: Heart, title: "Confort", desc: "Une approche douce et bienveillante pour une expérience sans douleur." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-zinc-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8">
                  <item.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-4">{item.title}</h3>
                <p className="text-zinc-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Box */}
      <section className="py-16 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-20">
            <div className="w-full lg:w-1/2 relative">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000"
                  alt="Dentist working"
                  className="rounded-[3rem] shadow-2xl w-full"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -right-6 sm:-bottom-10 sm:-right-10 bg-emerald-600 p-6 sm:p-10 rounded-[2rem] text-white shadow-2xl">
                  <p className="text-4xl sm:text-5xl font-black mb-1">12+</p>
                  <p className="text-xs sm:text-sm opacity-80 uppercase tracking-[0.2em] font-bold">Années d'expérience</p>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-50 rounded-full -z-10 blur-3xl opacity-50"></div>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-black text-zinc-900 mb-8 tracking-tight leading-tight">
                Bienvenue chez <span className="text-emerald-600">{CLINIC_NAME}</span>
              </h2>
              <div className="space-y-6 text-zinc-600 text-base md:text-lg leading-relaxed">
                <p>
                  Situé au cœur de Casablanca, {CLINIC_NAME} incarne l’alliance d’un savoir-faire dentaire hautement qualifié et d’un accueil chaleureux.
                </p>
                <p>
                  Notre mission : vous offrir des soins complets, personnalisés et à la pointe de la technologie, pour préserver et sublimer votre sourire.
                </p>
              </div>
              <div className="mt-10">
                <Link
                  to="/about-us"
                  className="inline-flex items-center text-emerald-600 font-black text-lg hover:text-emerald-700 transition-colors group"
                >
                  En savoir plus sur notre équipe
                  <ArrowRight className="ml-2 h-6 w-6 transform group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-32 bg-zinc-900 text-white rounded-[3rem] md:rounded-[5rem] mx-4 md:mx-8 my-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Découvrez nos services</h2>
            <div className="w-20 h-1.5 bg-emerald-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-zinc-400 text-base md:text-lg">
              Nous avons à cœur d’offrir des soins et traitements dentaires de qualité en un seul endroit !
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {SPECIALTIES.map((service, i) => (
              <Link
                key={service.name}
                to={service.path}
                className="group bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-emerald-600 hover:border-emerald-500 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                  <Heart className="h-7 w-7 text-emerald-400 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold leading-tight mb-4">{service.name}</h3>
                <div className="flex items-center text-emerald-400 group-hover:text-white text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                  Détails <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-600 rounded-[3rem] md:rounded-[4rem] p-10 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-emerald-900/20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-900/20 rounded-full blur-3xl -ml-32 -mb-32"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tight leading-tight">
                Un sourire éclatant est le <br className="hidden md:block" /> reflet de votre santé
              </h2>
              <p className="text-emerald-50 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">
                Rejoignez-nous et savourez le plaisir d'un sourire sain.
              </p>
              <Link
                to="/appointment"
                className="inline-flex items-center justify-center px-12 py-5 bg-white text-emerald-600 font-black text-lg rounded-full hover:bg-zinc-100 transition-all transform hover:scale-105 shadow-xl"
              >
                Prendre rendez-vous maintenant
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
