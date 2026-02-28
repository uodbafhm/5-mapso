import React from 'react';
import { motion } from 'motion/react';
import { CLINIC_NAME } from '../constants';

interface SpecialtyPageProps {
  title: string;
  image: string;
  content: React.ReactNode;
}

export default function SpecialtyPage({ title, image, content }: SpecialtyPageProps) {
  return (
    <div className="bg-white pt-20 md:pt-24">
      {/* Header */}
      <section className="relative py-24 md:py-40 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={image} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-zinc-900"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-8xl font-black tracking-tighter mb-6 uppercase"
          >
            {title}
          </motion.h1>
          <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <div className="relative">
                <img
                  src={image}
                  alt={title}
                  className="rounded-[3rem] shadow-2xl w-full aspect-[4/3] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-emerald-600/10 rounded-full blur-3xl -z-10"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-600/10 rounded-full blur-3xl -z-10"></div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <div className="text-zinc-600 text-lg md:text-xl leading-relaxed space-y-8 font-medium">
                {content}
              </div>
              <div className="mt-12">
                <a
                  href="/appointment"
                  className="inline-flex items-center justify-center px-12 py-5 bg-emerald-600 text-white font-black text-lg rounded-full hover:bg-emerald-700 transition-all shadow-2xl shadow-emerald-900/20 transform hover:scale-105"
                >
                  Prendre rendez-vous pour ce soin
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Info */}
      <section className="py-20 md:py-32 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 mb-8 tracking-tight">Besoin d'une consultation ?</h2>
            <p className="text-zinc-500 text-lg md:text-xl mb-12 leading-relaxed">
              Chaque cas est unique. Prenez rendez-vous dès aujourd'hui pour un diagnostic complet et personnalisé avec notre équipe d'experts.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="/appointment"
                className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 bg-zinc-900 text-white font-black rounded-full hover:bg-zinc-800 transition-all shadow-xl"
              >
                Prendre rendez-vous
              </a>
              <a
                href="/contactus"
                className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 bg-white text-zinc-900 border-2 border-zinc-100 font-black rounded-full hover:bg-zinc-50 transition-all"
              >
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
