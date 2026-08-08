import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Droplet,
  Stethoscope,
  Sparkles,
  HeartHandshake,
  ShieldAlert,
  Users,
  Dumbbell,
  Utensils,
  ArrowUpRight,
  Filter,
  Clock,
  CheckCircle2,
} from 'lucide-react';
import { ACTIVITIES } from '../data/clubData';
import { Activity } from '../types';
import { ImageWithFallback } from './ImageWithFallback';

interface ActivitiesProps {
  onSelectActivity: (activity: Activity) => void;
}

export const Activities: React.FC<ActivitiesProps> = ({ onSelectActivity }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const iconMap: Record<string, React.ElementType> = {
    Droplet,
    Stethoscope,
    Sparkles,
    HeartHandshake,
    ShieldAlert,
    Users,
    Dumbbell,
    Utensils,
  };

  const categories = ['All', 'Medical', 'Wellness', 'Training', 'Community', 'Fitness'];

  const filteredActivities = selectedCategory === 'All'
    ? ACTIVITIES
    : ACTIVITIES.filter((act) => act.category === selectedCategory);

  return (
    <section id="activities" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-wider uppercase mb-3"
            >
              <Sparkles className="w-4 h-4" />
              <span>Campus & Community Initiatives</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
            >
              Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">Health Activities</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 md:mt-0 text-slate-600 dark:text-slate-400 max-w-md text-sm sm:text-base"
          >
            From lifesaving blood donation drives to daily yoga and first aid training, explore how we promote holistic health at CCRC.
          </motion.p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold pr-2">
            <Filter className="w-4 h-4" />
            <span>Filter:</span>
          </div>
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-emerald-600 to-blue-600 text-white shadow-md shadow-emerald-500/20'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* 8 Activity Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredActivities.map((activity, idx) => {
            const IconComponent = iconMap[activity.icon] || Sparkles;
            return (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => onSelectActivity(activity)}
                className="group relative bg-slate-50 dark:bg-slate-900/90 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 hover:border-emerald-500/50 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Top Image Preview with Category Badge */}
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                    {/* Category Tag */}
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white bg-slate-900/70 backdrop-blur-md border border-white/20">
                      {activity.category}
                    </div>

                    {/* Top Floating Icon Badge */}
                    <div className="absolute top-4 right-4 p-2.5 rounded-2xl bg-gradient-to-br from-emerald-500 to-blue-600 text-white shadow-lg shadow-emerald-600/30">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    {/* Frequency info */}
                    <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-xs text-slate-200 font-medium">
                      <Clock className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{activity.frequency}</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors flex items-center justify-between">
                      <span>{activity.title}</span>
                      <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </h3>

                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                      {activity.shortDesc}
                    </p>

                    {/* Highlights bullet points */}
                    <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800/80 space-y-1.5">
                      {activity.highlights.slice(0, 2).map((hl, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                          <span className="truncate">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action Bar */}
                <div className="px-6 py-3.5 bg-slate-100/80 dark:bg-slate-800/50 border-t border-slate-200/60 dark:border-slate-800 text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center justify-between group-hover:bg-emerald-500/10 transition-colors">
                  <span>Impact: {activity.impact}</span>
                  <span className="underline decoration-emerald-500 underline-offset-2">View Details</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
