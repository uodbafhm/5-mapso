import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageSquare, Send, Clock } from 'lucide-react';
import { CLINIC_NAME, WHATSAPP_NUMBER, FIX_NUMBER, EMAIL, ADDRESS, MAPS_URL } from '../constants';

export default function ContactUs() {
  return (
    <div className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative py-24 md:py-40 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-zinc-900"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-8xl font-black tracking-tighter mb-6 uppercase"
          >
            CONTACTEZ-<span className="text-emerald-500">NOUS</span>
          </motion.h1>
          <p className="text-emerald-400 text-base md:text-xl font-light uppercase tracking-[0.4em] max-w-2xl mx-auto">Nous sommes à votre écoute pour sublimer votre sourire</p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 md:gap-24">
            {/* Form */}
            <div className="lg:w-2/3">
              <div className="mb-12">
                <h2 className="text-3xl md:text-5xl font-black text-zinc-900 mb-6 tracking-tight">Envoyez-nous un message</h2>
                <p className="text-lg md:text-xl text-zinc-500 leading-relaxed">
                  Une question ? Un besoin spécifique ? Notre équipe vous répondra dans les plus brefs délais.
                </p>
              </div>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] ml-4">Nom complet *</label>
                  <input type="text" required className="w-full p-5 bg-zinc-50 border-none rounded-[1.5rem] focus:ring-2 focus:ring-emerald-500 text-lg font-medium" placeholder="Votre nom" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] ml-4">Téléphone</label>
                  <input type="tel" className="w-full p-5 bg-zinc-50 border-none rounded-[1.5rem] focus:ring-2 focus:ring-emerald-500 text-lg font-medium" placeholder="06 00 00 00 00" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] ml-4">E-mail *</label>
                  <input type="email" required className="w-full p-5 bg-zinc-50 border-none rounded-[1.5rem] focus:ring-2 focus:ring-emerald-500 text-lg font-medium" placeholder="contact@email.com" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] ml-4">Sujet</label>
                  <input type="text" className="w-full p-5 bg-zinc-50 border-none rounded-[1.5rem] focus:ring-2 focus:ring-emerald-500 text-lg font-medium" placeholder="Objet de votre message" />
                </div>
                <div className="md:col-span-2 space-y-3">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] ml-4">Message *</label>
                  <textarea required rows={6} className="w-full p-5 bg-zinc-50 border-none rounded-[1.5rem] focus:ring-2 focus:ring-emerald-500 text-lg font-medium" placeholder="Comment pouvons-nous vous aider ?"></textarea>
                </div>
                <div className="md:col-span-2">
                  <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center px-12 py-5 bg-emerald-600 text-white font-black text-lg rounded-full hover:bg-emerald-700 transition-all shadow-2xl shadow-emerald-900/20 transform hover:scale-105 active:scale-95">
                    Envoyer le message
                    <Send className="ml-3 h-6 w-6" />
                  </button>
                </div>
              </form>
            </div>

            {/* Info */}
            <div className="lg:w-1/3 space-y-8">
              <div className="bg-zinc-50 p-10 md:p-12 rounded-[3rem] border border-zinc-100 shadow-sm">
                <h3 className="text-2xl font-black text-zinc-900 mb-10">Coordonnées</h3>
                <ul className="space-y-10">
                  <li className="flex items-start group">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md mr-5 shrink-0 group-hover:bg-emerald-600 transition-colors duration-300">
                      <MapPin className="h-7 w-7 text-emerald-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] mb-2">Adresse</p>
                      <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="text-zinc-900 font-bold text-lg leading-tight hover:text-emerald-600 transition-colors">
                        {ADDRESS}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md mr-5 shrink-0 group-hover:bg-emerald-600 transition-colors duration-300">
                      <Phone className="h-7 w-7 text-emerald-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] mb-2">Fixe</p>
                      <a href={`tel:${FIX_NUMBER}`} className="text-zinc-900 font-bold text-xl hover:text-emerald-600 transition-colors">{FIX_NUMBER}</a>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md mr-5 shrink-0 group-hover:bg-emerald-600 transition-colors duration-300">
                      <MessageSquare className="h-7 w-7 text-emerald-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] mb-2">WhatsApp</p>
                      <a href={`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`} className="text-zinc-900 font-bold text-xl hover:text-emerald-600 transition-colors">{WHATSAPP_NUMBER}</a>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md mr-5 shrink-0 group-hover:bg-emerald-600 transition-colors duration-300">
                      <Mail className="h-7 w-7 text-emerald-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] mb-2">E-mail</p>
                      <a href={`mailto:${EMAIL}`} className="text-zinc-900 font-bold text-lg hover:text-emerald-600 transition-colors break-all">{EMAIL}</a>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-zinc-900 p-10 md:p-12 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
                <h3 className="text-2xl font-black mb-8 relative z-10">Horaires d'ouverture</h3>
                <ul className="space-y-6 text-base relative z-10">
                  <li className="flex justify-between border-b border-white/10 pb-4">
                    <span className="text-zinc-400 font-medium">Lundi - Vendredi</span> 
                    <span className="text-white font-bold">09:00 - 18:00</span>
                  </li>
                  <li className="flex justify-between border-b border-white/10 pb-4">
                    <span className="text-zinc-400 font-medium">Samedi</span> 
                    <span className="text-white font-bold">09:00 - 13:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-zinc-400 font-medium">Dimanche</span> 
                    <span className="text-emerald-500 font-black uppercase tracking-widest text-sm">Fermé</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
