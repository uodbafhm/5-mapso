import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar as CalendarIcon, Clock, User, Phone, Mail, ChevronRight, CheckCircle2 } from 'lucide-react';
import { CLINIC_NAME, SPECIALTIES, ADDRESS } from '../constants';

export default function Appointment() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    service: '',
    name: '',
    phone: '',
    email: ''
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="min-h-screen bg-zinc-50 py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2.5rem] md:rounded-[4rem] shadow-2xl overflow-hidden border border-zinc-100">
          <div className="flex flex-col lg:flex-row">
            {/* Sidebar info */}
            <div className="lg:w-1/3 bg-emerald-600 p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
              <h2 className="text-2xl md:text-3xl font-black mb-10 relative z-10">Votre rendez-vous</h2>
              <div className="space-y-8 text-sm relative z-10">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mr-4 shrink-0">
                    <CalendarIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-bold uppercase tracking-widest text-[10px] opacity-70 mb-1">Date & Heure</p>
                    <p className="text-lg font-medium">{formData.date || 'Non sélectionnée'} {formData.time && `à ${formData.time}`}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mr-4 shrink-0">
                    <User className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-bold uppercase tracking-widest text-[10px] opacity-70 mb-1">Service</p>
                    <p className="text-lg font-medium">{formData.service || 'Non sélectionné'}</p>
                  </div>
                </div>
                <div className="pt-8 border-t border-white/20">
                  <p className="font-bold uppercase tracking-widest text-[10px] opacity-70 mb-3">Lieu de consultation</p>
                  <p className="text-sm leading-relaxed font-medium">{CLINIC_NAME} Dental Clinic<br />{ADDRESS}</p>
                </div>
              </div>
            </div>

            {/* Form area */}
            <div className="lg:w-2/3 p-8 md:p-16 lg:p-20">
              {step === 1 && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                  <div className="mb-10">
                    <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs">Étape 1 sur 3</span>
                    <h3 className="text-3xl font-black text-zinc-900 mt-2">Quel soin souhaitez-vous ?</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {SPECIALTIES.map((s) => (
                      <button
                        key={s.name}
                        onClick={() => { setFormData({ ...formData, service: s.name }); nextStep(); }}
                        className={`text-left p-6 rounded-3xl border-2 transition-all duration-300 group ${
                          formData.service === s.name 
                            ? 'border-emerald-500 bg-emerald-50 shadow-lg shadow-emerald-600/5' 
                            : 'border-zinc-100 hover:border-emerald-200 hover:bg-zinc-50'
                        }`}
                      >
                        <p className={`font-bold transition-colors ${formData.service === s.name ? 'text-emerald-700' : 'text-zinc-700 group-hover:text-emerald-600'}`}>
                          {s.name}
                        </p>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                  <div className="mb-10">
                    <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs">Étape 2 sur 3</span>
                    <h3 className="text-3xl font-black text-zinc-900 mt-2">Date et Heure</h3>
                  </div>
                  <div className="space-y-10">
                    <div>
                      <label className="block text-sm font-bold text-zinc-400 uppercase tracking-widest mb-4">Choisir une date</label>
                      <input
                        type="date"
                        className="w-full p-5 bg-zinc-50 border-none rounded-[1.5rem] focus:ring-2 focus:ring-emerald-500 text-lg font-medium"
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-zinc-400 uppercase tracking-widest mb-4">Créneaux disponibles</label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'].map((t) => (
                          <button
                            key={t}
                            onClick={() => setFormData({ ...formData, time: t })}
                            className={`p-4 rounded-2xl border-2 font-bold transition-all ${
                              formData.time === t 
                                ? 'bg-emerald-600 text-white border-emerald-600 shadow-lg shadow-emerald-600/20' 
                                : 'bg-white text-zinc-600 border-zinc-100 hover:border-emerald-500 hover:text-emerald-600'
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-6">
                      <button onClick={prevStep} className="text-zinc-400 font-bold hover:text-zinc-600 transition-colors">Retour</button>
                      <button
                        onClick={nextStep}
                        disabled={!formData.date || !formData.time}
                        className="px-10 py-4 bg-emerald-600 text-white rounded-full font-black disabled:opacity-30 disabled:cursor-not-allowed shadow-xl shadow-emerald-600/20 transition-all transform active:scale-95"
                      >
                        Continuer
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                  <div className="mb-10">
                    <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs">Étape 3 sur 3</span>
                    <h3 className="text-3xl font-black text-zinc-900 mt-2">Vos coordonnées</h3>
                  </div>
                  <div className="space-y-5">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest ml-4">Nom complet</label>
                      <input
                        type="text"
                        placeholder="Ex: Ahmed Alami"
                        className="w-full p-5 bg-zinc-50 border-none rounded-[1.5rem] focus:ring-2 focus:ring-emerald-500 text-lg font-medium"
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest ml-4">Téléphone</label>
                      <input
                        type="tel"
                        placeholder="Ex: 06 00 00 00 00"
                        className="w-full p-5 bg-zinc-50 border-none rounded-[1.5rem] focus:ring-2 focus:ring-emerald-500 text-lg font-medium"
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest ml-4">E-mail</label>
                      <input
                        type="email"
                        placeholder="Ex: contact@email.com"
                        className="w-full p-5 bg-zinc-50 border-none rounded-[1.5rem] focus:ring-2 focus:ring-emerald-500 text-lg font-medium"
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div className="flex items-center justify-between pt-10">
                      <button onClick={prevStep} className="text-zinc-400 font-bold hover:text-zinc-600 transition-colors">Retour</button>
                      <button
                        onClick={nextStep}
                        disabled={!formData.name || !formData.phone}
                        className="px-12 py-5 bg-emerald-600 text-white rounded-full font-black shadow-2xl shadow-emerald-600/30 transition-all transform hover:scale-105 active:scale-95"
                      >
                        Confirmer le rendez-vous
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
                  <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-10 shadow-inner">
                    <CheckCircle2 className="h-12 w-12 text-emerald-600" />
                  </div>
                  <h3 className="text-4xl font-black text-zinc-900 mb-6 tracking-tight">C'est noté !</h3>
                  <div className="bg-zinc-50 p-8 rounded-[2rem] mb-12 text-left border border-zinc-100">
                    <p className="text-zinc-600 leading-relaxed mb-4">
                      Merci <span className="font-bold text-zinc-900">{formData.name}</span>. Votre demande de rendez-vous pour un(e) <span className="font-bold text-emerald-600">{formData.service}</span> a bien été enregistrée.
                    </p>
                    <p className="text-zinc-500 text-sm italic">
                      Nous vous contacterons par téléphone au {formData.phone} pour confirmer l'horaire définitif.
                    </p>
                  </div>
                  <button
                    onClick={() => window.location.href = '/'}
                    className="px-12 py-5 bg-zinc-900 text-white rounded-full font-black text-lg hover:bg-zinc-800 transition-all shadow-xl"
                  >
                    Retour à l'accueil
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
