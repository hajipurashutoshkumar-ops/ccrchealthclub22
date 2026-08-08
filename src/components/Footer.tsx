import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Heart,
  Facebook,
  Instagram,
  Linkedin,
  Send,
  ShieldCheck,
  X,
  MapPin,
  Mail,
  Phone,
  ArrowUp,
} from 'lucide-react';
import { CLUB_INFO } from '../data/clubData';
import { ImageWithFallback } from './ImageWithFallback';

export const Footer: React.FC = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 2000);
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 relative overflow-hidden pt-20 pb-10 border-t border-slate-800">
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-slate-800">
          {/* Col 1: Club Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-blue-600 p-0.5 shadow-lg shadow-emerald-500/20">
                <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center p-1">
                  <ImageWithFallback
                    src={CLUB_INFO.images.logo}
                    fallbackSrc={CLUB_INFO.images.logoFallback}
                    alt="CCRC Health Club Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div>
                <div className="text-xl font-extrabold text-white">CCRC Health Club</div>
                <div className="text-xs text-emerald-400 font-medium">Capital College & Research Center</div>
              </div>
            </div>

            <p className="text-xs sm:text-sm italic text-emerald-100 font-serif">
              "{CLUB_INFO.slogan}"
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Cultivating physical wellness, mental health awareness, and emergency medical readiness across CCRC campus and Kathmandu valley.
            </p>

            <div className="flex gap-2.5 pt-2">
              <a
                href={CLUB_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-emerald-600 text-slate-300 hover:text-white transition-all"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={CLUB_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-pink-600 text-slate-300 hover:text-white transition-all"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={CLUB_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-slate-300 hover:text-white transition-all"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-emerald-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">About CCRC Health Club</a></li>
              <li><a href="#activities" className="hover:text-emerald-400 transition-colors">Health Activities</a></li>
              <li><a href="#gallery" className="hover:text-emerald-400 transition-colors">Event Gallery</a></li>
              <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Col 3: Key Initiatives */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Major Initiatives</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>• Mega Blood Donation Drive</li>
              <li>• Student Mental Health Counseling</li>
              <li>• Certified CPR & First Aid Training</li>
              <li>• Yoga & Meditation Workshops</li>
              <li>• Community Free Health Checkup Camps</li>
              <li>• Canteen Nutrition Audits</li>
            </ul>
          </div>

          {/* Col 4: Health Newsletter */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Campus Health Bulletin</h4>
            <p className="text-xs text-slate-400">
              Subscribe for upcoming blood donation dates and health tips directly in your inbox.
            </p>

            <form onSubmit={handleNewsletter} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter student email..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-emerald-400 font-medium">Subscribed successfully!</p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} CCRC Health Club. Capital College and Research Center, Koteshwor, Kathmandu, Nepal. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowPrivacy(true)}
              className="hover:text-emerald-400 transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <span className="flex items-center gap-1 text-slate-300">
              Made with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" /> by CCRC Health Club
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white transition-colors ml-2"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      <AnimatePresence>
        {showPrivacy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setShowPrivacy(false)}
          >
            <div
              className="bg-slate-900 text-slate-200 rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-slate-800 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowPrivacy(false)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-xl font-bold text-white mb-3">Privacy & Terms Policy</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                CCRC Health Club respects student data privacy. Information submitted through membership forms or event registration is exclusively used for college health operations, emergency contact verification, and event management.
              </p>
              <ul className="text-xs text-slate-300 space-y-2 list-disc pl-4 mb-6">
                <li>Student contact details are never shared with external advertisers.</li>
                <li>Blood group data is stored strictly for urgent blood bank requests upon student consent.</li>
                <li>Photos taken during public camps are published for college record and event gallery.</li>
              </ul>
              <button
                onClick={() => setShowPrivacy(false)}
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs"
              >
                I Understand
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};
