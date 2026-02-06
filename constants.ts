
import { NavItem } from './types';

// --- INFORMACIÓ DE L'EMPRESA (Tècnica) ---
export const COMPANY_INFO = {
  name: "MARORA",
  subtitle: "Travel Club",
  email: "hola@maroratravel.com",
  phone: "+34 630 270 458",
  whatsapp: "+34 630 270 458",
  affiliateLink: "http://carmenlopezsandoval.incruises.com",
  copyright: `© ${new Date().getFullYear()} MARORA Travel Club. Tots els drets reservats.`
};

// --- IMATGES GENERALS ---
export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=2000&auto=format&fit=crop", 
  home_resort: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop", 
  home_adventure: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1000&auto=format&fit=crop", 
  about_hero: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1000&auto=format&fit=crop", 
  membership_hero: "https://images.unsplash.com/photo-1559599238-308793637427?q=80&w=1000&auto=format&fit=crop", 
  cruise_luxury: "https://images.unsplash.com/photo-1540946484628-2bc15818d9ef?q=80&w=1200&auto=format&fit=crop", 
  carme_profile: "https://raw.githubusercontent.com/maroratravel/imatges-web/refs/heads/main/Gemini_Generated_Image_hp7qwvhp7qwvhp7q.png",
  page_banner: "https://raw.githubusercontent.com/maroratravel/imatges-web/refs/heads/main/waves-3473335_1280.jpg"
};

// --- IDS I RUTES (Sense text) ---
export const CRUISE_ROUTE_ASSETS = [
  { id: 1, image: "https://raw.githubusercontent.com/maroratravel/imatges-web/refs/heads/main/AdobeStock_792649703-scaled.jpeg", searchQuery: "MSC Cruises Mediterranean itinerary Barcelona" },
  { id: 2, image: "https://raw.githubusercontent.com/maroratravel/imatges-web/refs/heads/main/istockphoto-96375111-612x612.jpg", searchQuery: "Princess Cruises Alaska itinerary Vancouver" },
  { id: 3, image: "https://raw.githubusercontent.com/maroratravel/imatges-web/refs/heads/main/istockphoto-2136051137-612x612.jpg", searchQuery: "Royal Caribbean Western Caribbean itinerary Miami" },
  { id: 4, image: "https://raw.githubusercontent.com/maroratravel/imatges-web/refs/heads/main/modetn-ciudad-centro-lujo-dubai-emiratos-arabes-unidos_231208-7591.avif", searchQuery: "Costa Cruises Dubai Abu Dhabi itinerary" }
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inici', path: '/' },
  { label: 'Qui Som', path: '/filosofia' },
  { label: 'El Club', path: '/el-club' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contacte', path: '/contacte' },
];
