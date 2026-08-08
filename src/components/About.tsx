import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Heart,
  Target,
  Compass,
  Award,
  ShieldCheck,
  Sparkles,
  BookOpen,
  Activity,
  Droplet,
  Users,
  CheckCircle2,
  Building2,
  MapPin,
} from 'lucide-react';
import { ABOUT_DETAILS, CLUB_INFO, OBJECTIVES } from '../data/clubData';
import { ImageWithFallback } from './ImageWithFallback';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'objectives'>('mission');

  const iconMap: Record<string, React.ElementType> = {
    Award,
    ShieldCheck,
    Heart,
    Sparkles,
    BookOpen,
    Activity,
    Droplet,
    Users,
  };

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/60 relative overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold tracking-wider uppercase mb-4"
          >
            <Building2 className="w-4 h-4" />
            <span>About CCRC Health Club</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Bridging Healthcare & <span className="text-emerald-600 dark:text-emerald-400">Academic Excellence</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
          >
            {ABOUT_DETAILS.introduction}
          </motion.p>
        </div>

        {/* Top Grid: Campus Photo Showcase & Key Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20">
          {/* Left Column - Image & Badge Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
              <ImageWithFallback
                src={CLUB_INFO.images.campus}
                alt="Capital College and Research Center (CCRC)"
                className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              {/* Bottom Overlay Info */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm mb-1">
                  <MapPin className="w-4 h-4" />
                  <span>Koteshwor, Kathmandu, Nepal</span>
                </div>
                <div className="text-xl font-bold">Capital College & Research Center</div>
                <p className="text-xs text-slate-300 mt-1">A premier institution cultivating future health leaders</p>
              </div>
            </div>

            {/* Floating Accredited Badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-4 bg-gradient-to-r from-emerald-600 to-blue-600 text-white p-4 rounded-2xl shadow-xl backdrop-blur-md border border-white/20 hidden sm:flex items-center gap-3">
              <div className="p-3 bg-white/20 rounded-xl">
                <ShieldCheck className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-sm font-extrabold">CCRC Health Club</div>
                <div className="text-xs text-emerald-100">Est. 2018 • Student-Led</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Mission, Vision, Objectives Interactive Tabs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Tab Selector Buttons */}
            <div className="flex p-1.5 bg-slate-200/80 dark:bg-slate-800/80 rounded-2xl mb-6 max-w-md border border-slate-300/50 dark:border-slate-700/50">
              {[
                { id: 'mission', label: 'Our Mission', icon: Target },
                { id: 'vision', label: 'Our Vision', icon: Compass },
                { id: 'objectives', label: 'Core Objectives', icon: BookOpen },
              ].map((tab) => {
                const IconComp = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                      isActive
                        ? 'bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 shadow-md'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <IconComp className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab Content Display */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl min-h-[260px] flex flex-col justify-center">
              {activeTab === 'mission' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl">
                      <Target className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
                      <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold uppercase tracking-wider">Driving Community Impact</span>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                    {ABOUT_DETAILS.mission}
                  </p>
                </motion.div>
              )}

              {activeTab === 'vision' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-2xl">
                      <Compass className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">Our Vision</h3>
                      <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider">Future of Youth Healthcare</span>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                    {ABOUT_DETAILS.vision}
                  </p>
                </motion.div>
              )}

              {activeTab === 'objectives' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Key Objectives</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {OBJECTIVES.map((obj) => (
                      <div key={obj.id} className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50">
                        <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm mb-1">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                          <span>{obj.title}</span>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{obj.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Why Join the Club Section */}
        <div className="mt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Why Join <span className="text-emerald-600 dark:text-emerald-400">CCRC Health Club?</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm sm:text-base">
              Be part of Kathmandu's most active college health organization and transform your academic journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ABOUT_DETAILS.whyJoin.map((item, idx) => {
              const IconComp = iconMap[item.icon] || Award;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-card p-6 rounded-2xl hover:border-emerald-500/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center mb-5 shadow-md shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
