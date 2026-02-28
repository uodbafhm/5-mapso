import { Home, Calendar, Users, Heart, MessageSquare, Phone, Mail, MapPin, ChevronDown, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export const CLINIC_NAME = "MAPSO";
export const WHATSAPP_NUMBER = "+2126000000000";
export const FIX_NUMBER = "+2125000000000";
export const EMAIL = "info@mapso.ma";
export const ADDRESS = "Casablanca, Maroc";
export const MAPS_URL = "https://www.google.com/maps/place/Casablanca";

export const SPECIALTIES = [
  { name: "Soins conservateurs", path: "/soins-conservateurs" },
  { name: "Prothèse dentaire", path: "/prothese-dentaire" },
  { name: "Parodontie", path: "/parodontie" },
  { name: "Dentisterie pédiatrique", path: "/dentisterie-pediatrique" },
  { name: "Orthodontie", path: "/orthodontie" },
  { name: "Esthétique dentaire", path: "/esthetique-dentaire" },
  { name: "Implantologie dentaire", path: "/implantologie-dentaire" },
];

export const NAV_LINKS = [
  { name: "Accueil", path: "/" },
  { name: "Notre équipe", path: "/about-us" },
  { name: "Soins et Spécialités", path: "#", sub: SPECIALTIES },
  { name: "Conseils", path: "/conseils" },
  { name: "Contactez-nous", path: "/contactus" },
];
