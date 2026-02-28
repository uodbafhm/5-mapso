import React from 'react';
import { motion } from 'motion/react';
import { CLINIC_NAME } from '../constants';

export default function AboutUs() {
  const team = [
    {
      name: "Dr Hicham MARZAK",
      role: "Chirurgien-Dentiste",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800",
      bio: "Le Dr Hicham Marzak, âgé de 38 ans, a grandi dans l’univers de la dentisterie. Fort de plus de 12 années d’expérience, il met aujourd’hui son expertise et son sens du détail au service de ses patients, offrant des traitements modernes, précis et centrés sur le confort."
    },
    {
      name: "Mme. MARZAK",
      role: "Gestionnaire",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
      bio: "Notre créativité et notre sens de l'organisation sont au cœur de tout ce que nous faisons pour assurer le meilleur accueil et une gestion fluide du cabinet."
    },
    {
      name: "Mme. Assistante",
      role: "Assistante Dentaire",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800",
      bio: "Nos services sont conçus pour durer et garantissent une assistance de qualité lors de chaque intervention, veillant à votre confort absolu."
    }
  ];

  return (
    <div className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative py-24 md:py-40 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-zinc-900"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-8xl font-black tracking-tighter mb-6 uppercase"
          >
            L'ÉQUIPE <span className="text-emerald-500">SOIGNANTE</span>
          </motion.h1>
          <p className="text-emerald-400 text-base md:text-xl font-light uppercase tracking-[0.4em] max-w-2xl mx-auto">Expertise & Bienveillance au service de votre sourire</p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative mb-8 overflow-hidden rounded-[3rem] aspect-[4/5] shadow-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="px-2">
                  <h3 className="text-2xl md:text-3xl font-black text-zinc-900 mb-2">{member.name}</h3>
                  <p className="text-emerald-600 font-bold text-xs uppercase tracking-[0.2em] mb-6">{member.role}</p>
                  <p className="text-zinc-500 text-base md:text-lg leading-relaxed font-medium">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 md:py-32 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-900 rounded-[3rem] md:rounded-[5rem] p-10 md:p-24 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tight">Notre Philosophie</h2>
                <div className="w-20 h-1.5 bg-emerald-500 mb-8 rounded-full"></div>
                <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
                  Chez {CLINIC_NAME}, nous croyons que chaque patient est unique. Notre approche repose sur l'écoute, la transparence et l'excellence technique pour garantir des résultats durables et esthétiques.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10">
                  <p className="text-3xl font-black text-emerald-500 mb-2">100%</p>
                  <p className="text-xs uppercase tracking-widest font-bold opacity-60">Engagement</p>
                </div>
                <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10">
                  <p className="text-3xl font-black text-emerald-500 mb-2">24/7</p>
                  <p className="text-xs uppercase tracking-widest font-bold opacity-60">Suivi</p>
                </div>
                <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10">
                  <p className="text-3xl font-black text-emerald-500 mb-2">High</p>
                  <p className="text-xs uppercase tracking-widest font-bold opacity-60">Tech</p>
                </div>
                <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10">
                  <p className="text-3xl font-black text-emerald-500 mb-2">Soft</p>
                  <p className="text-xs uppercase tracking-widest font-bold opacity-60">Touch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
