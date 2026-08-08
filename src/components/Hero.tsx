import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Heart, Stethoscope, Pill, Building2, Leaf, ArrowRight, ShieldCheck, ChevronDown, Sparkles } from 'lucide-react';
import { CLUB_INFO } from '../data/clubData';
import { ImageWithFallback } from './ImageWithFallback';

interface HeroProps {
  onOpenJoinModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenJoinModal }) => {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityParallax = useTransform(scrollY, [0, 400], [1, 0.2]);

  const floatingIcons = [
    { Icon: Heart, color: 'text-rose-500 bg-rose-500/10 border-rose-500/20', position: 'top-[18%] left-[8%] md:left-[12%]', animation: 'animate-float-slow', delay: 0 },
    { Icon: Stethoscope, color: 'text-blue-500 bg-blue-500/10 border-blue-500/20', position: 'top-[22%] right-[8%] md:right-[14%]', animation: 'animate-float-reverse', delay: 0.2 },
    { Icon: Pill, color: 'text-amber-500 bg-amber-500/10 border-amber-500/20', position: 'bottom-[28%] left-[6%] md:left-[10%]', animation: 'animate-float-slow', delay: 0.4 },
    { Icon: Building2, color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20', position: 'bottom-[25%] right-[6%] md:right-[10%]', animation: 'animate-float-reverse', delay: 0.6 },
    { Icon: Leaf, color: 'text-teal-500 bg-teal-500/10 border-teal-500/20', position: 'top-[50%] right-[3%] md:right-[6%]', animation: 'animate-float-slow', delay: 0.8 },
  ];

  const scrollToActivities = () => {
    const targetEl = document.getElementById('activities');
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image Container with Crisp Visibility and Light Gradient */}
      <motion.div style={{ y: yParallax }} className="absolute inset-0 z-0">
        <ImageWithFallback
          src={CLUB_INFO.images.heroBg}
          fallbackSrc={CLUB_INFO.images.heroBgFallback}
          alt="CCRC Health Club Background"
          className="w-full h-full object-cover scale-100"
        />
        {/* Light overlay for photo clarity with contrast for text */}
        <div className="absolute inset-0 bg-slate-950/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20" />
      </motion.div>

      {/* Floating Animated Medical Icons */}
      <div className="absolute inset-0 z-10 pointer-events-none max-w-7xl mx-auto">
        {floatingIcons.map((item, idx) => {
          const IconComp = item.Icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: item.delay }}
              className={`absolute ${item.position} ${item.animation} p-3.5 md:p-4 rounded-2xl border backdrop-blur-md shadow-xl backdrop-saturate-150 hidden sm:block`}
            >
              <div className={item.color}>
                <IconComp className="w-6 h-6 md:w-8 md:h-8" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Main Hero Content */}
      <motion.div
        style={{ opacity: opacityParallax }}
        className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
      >
        {/* Official Symbol Logo Emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-5 inline-block relative group"
        >
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-blue-500 blur-md opacity-60 group-hover:opacity-90 transition duration-500 animate-pulse" />
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-br from-emerald-400 via-teal-500 to-blue-600 shadow-2xl flex items-center justify-center">
            <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center overflow-hidden p-1.5">
              <ImageWithFallback
                src={CLUB_INFO.images.logo}
                fallbackSrc={CLUB_INFO.images.logoFallback}
                alt="CCRC Health Club Symbol Logo"
                className="w-full h-full object-contain drop-shadow"
              />
            </div>
          </div>
        </motion.div>

        {/* Top Affiliation Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-emerald-300 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 shadow-inner"
        >
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span>Capital College and Research Center (CCRC)</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
        </motion.div>

        {/* Club Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.1] text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]"
        >
          CCRC <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400 drop-shadow">Health Club</span>
        </motion.h1>

        {/* Official Slogan */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4 text-xl sm:text-2xl md:text-3xl font-light italic text-emerald-100 font-serif tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
        >
          "{CLUB_INFO.slogan}"
        </motion.p>

        {/* Sub-description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-slate-100 font-medium leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
        >
          Empowering CCRC students with health awareness, medical emergency response, blood donation drives, and active community wellness programs in Koteshwor, Kathmandu.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onOpenJoinModal}
            className="w-full sm:w-auto px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-emerald-600 via-emerald-500 to-blue-600 hover:from-emerald-500 hover:to-blue-500 rounded-2xl shadow-xl shadow-emerald-600/30 hover:shadow-emerald-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group"
          >
            <ShieldCheck className="w-5 h-5 text-emerald-200" />
            <span>Join the Club</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={scrollToActivities}
            className="w-full sm:w-auto px-8 py-4 text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span>Explore Activities</span>
          </button>
        </motion.div>

        {/* Quick Highlights Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto text-left"
        >
          {[
            { label: 'Blood Donation Drives', sub: 'Bi-annual Camps' },
            { label: 'Certified First Aid', sub: 'CPR Training' },
            { label: 'Mental Wellness', sub: 'Peer Counseling' },
            { label: 'Community Service', sub: 'Free Health Checkups' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="p-3.5 sm:p-4 rounded-xl bg-slate-900/60 border border-slate-700/50 backdrop-blur-md"
            >
              <div className="text-sm font-bold text-emerald-400">{stat.label}</div>
              <div className="text-xs text-slate-400">{stat.sub}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-12 inline-block cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
          onClick={scrollToActivities}
        >
          <ChevronDown className="w-8 h-8 text-white mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  );
};
