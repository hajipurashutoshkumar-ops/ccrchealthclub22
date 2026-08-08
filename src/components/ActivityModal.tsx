import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Clock, CheckCircle2, Award, Calendar, Users, Sparkles, ShieldCheck } from 'lucide-react';
import { Activity } from '../types';
import { ImageWithFallback } from './ImageWithFallback';

interface ActivityModalProps {
  activity: Activity | null;
  onClose: () => void;
  onOpenJoinModal: () => void;
}

export const ActivityModal: React.FC<ActivityModalProps> = ({ activity, onClose, onOpenJoinModal }) => {
  if (!activity) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative max-w-2xl w-full bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-8 text-slate-800 dark:text-slate-100"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-950/70 hover:bg-slate-950 text-white backdrop-blur-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Hero Banner */}
          <div className="relative h-64 bg-slate-900">
            <ImageWithFallback
              src={activity.image}
              alt={activity.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

            <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white bg-emerald-600 shadow-md">
              {activity.category}
            </div>

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex items-center gap-2 text-xs font-medium text-emerald-300 mb-1">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>{activity.frequency}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black">{activity.title}</h2>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">
                Program Overview
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                {activity.fullDesc}
              </p>
            </div>

            {/* Impact Metric Box */}
            <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-slate-800/80 border border-emerald-200 dark:border-slate-700/80 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400">Total Program Impact</span>
                <div className="text-lg font-extrabold text-emerald-600 dark:text-emerald-400">{activity.impact}</div>
              </div>
              <div className="p-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-xl">
                <Award className="w-6 h-6" />
              </div>
            </div>

            {/* Program Key Highlights */}
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3">Key Highlights & Features</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activity.highlights.map((hl, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 p-2.5 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                Close Window
              </button>

              <button
                onClick={() => {
                  onClose();
                  onOpenJoinModal();
                }}
                className="px-6 py-3 rounded-2xl text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-blue-600 shadow-md hover:shadow-lg transition-all flex items-center gap-2"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Register for Next Drive</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
