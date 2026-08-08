import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Facebook, Instagram, Linkedin, Mail, Sparkles, UserCheck, ShieldCheck } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/clubData';
import { ImageWithFallback } from './ImageWithFallback';

export const Team: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Executive' | 'Coordinator' | 'Advisor'>('All');

  const filteredTeam = activeCategory === 'All'
    ? TEAM_MEMBERS
    : TEAM_MEMBERS.filter((m) => m.category === activeCategory);

  return (
    <section id="team" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold tracking-wider uppercase mb-3"
          >
            <UserCheck className="w-4 h-4" />
            <span>Club Leadership</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">Executive Team</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg"
          >
            Passionate student leaders, medical advisors, and volunteers driving health initiatives at CCRC Koteshwor.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {['All', 'Executive', 'Coordinator', 'Advisor'].map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as any)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-emerald-600 to-blue-600 text-white shadow-lg shadow-emerald-500/20'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat === 'All' ? 'All Team Members' : `${cat}s`}
              </button>
            );
          })}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTeam.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group glass-card rounded-3xl overflow-hidden hover:border-emerald-500/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo Container */}
                <div className="relative h-72 overflow-hidden bg-slate-900">
                  <ImageWithFallback
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Role Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white bg-emerald-600 shadow-md">
                    {member.role}
                  </div>

                  {/* Faculty Badge */}
                  {member.gradeOrFaculty && (
                    <div className="absolute bottom-4 left-4 right-4 text-xs font-semibold text-emerald-300 bg-slate-950/70 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                      {member.gradeOrFaculty}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {member.name}
                  </h3>

                  {member.quote && (
                    <p className="mt-3 text-xs italic text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 p-3 rounded-2xl border-l-2 border-emerald-500">
                      "{member.quote}"
                    </p>
                  )}
                </div>
              </div>

              {/* Social Media Footer Links */}
              <div className="px-6 py-4 bg-slate-100/60 dark:bg-slate-800/50 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Connect:</span>
                <div className="flex items-center gap-2">
                  {member.facebook && (
                    <a
                      href={member.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-blue-600 hover:text-white transition-colors"
                      title="Facebook"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                  )}
                  {member.instagram && (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-pink-600 hover:text-white transition-colors"
                      title="Instagram"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-blue-700 hover:text-white transition-colors"
                      title="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="p-2 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-emerald-600 hover:text-white transition-colors"
                      title="Email Member"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
