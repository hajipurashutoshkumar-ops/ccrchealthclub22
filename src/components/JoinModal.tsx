import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, UserPlus, Heart, ShieldCheck, Sparkles } from 'lucide-react';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    studentId: '',
    faculty: '+2 Science',
    email: '',
    phone: '',
    interest: 'Blood Donation Drives',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative max-w-xl w-full bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-8"
        >
          {/* Close Button */}
          <button
            onClick={resetAndClose}
            className="absolute top-5 right-5 p-2 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-6">
              <div className="w-20 h-20 rounded-full bg-emerald-500 text-white mx-auto flex items-center justify-center mb-5 shadow-xl shadow-emerald-500/30">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                Welcome to CCRC Health Club!
              </h3>

              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you for applying, <span className="font-bold text-emerald-600 dark:text-emerald-400">{formData.fullName}</span>! Your membership request has been logged. Our executive committee will issue your club badge during the orientation session.
              </p>

              <div className="mt-6 p-4 rounded-2xl bg-emerald-50 dark:bg-slate-800 border border-emerald-200 dark:border-slate-700 text-left text-xs text-slate-600 dark:text-slate-300 space-y-1">
                <div><strong>Student ID:</strong> {formData.studentId || 'N/A'}</div>
                <div><strong>Faculty:</strong> {formData.faculty}</div>
                <div><strong>Interest Area:</strong> {formData.interest}</div>
              </div>

              <button
                onClick={resetAndClose}
                className="mt-6 w-full py-3.5 font-bold text-white bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl shadow-lg"
              >
                Done
              </button>
            </motion.div>
          ) : (
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <UserPlus className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                    Join CCRC Health Club
                  </h3>
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                    Capital College & Research Center
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Become an active volunteer, gain certified first aid training, and lead health initiatives.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Suman Poudel"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Student ID / Roll No *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.studentId}
                      onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                      placeholder="e.g. CCRC-2025-1042"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Faculty / Grade *
                    </label>
                    <select
                      value={formData.faculty}
                      onChange={(e) => setFormData({ ...formData, faculty: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="+2 Science">+2 Science</option>
                      <option value="+2 Management">+2 Management</option>
                      <option value="+2 Humanities">+2 Humanities</option>
                      <option value="BCA / Bachelor Level">BCA / Bachelor Level</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="student@ccrc.edu.np"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+977 98XXXXXXXX"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Primary Interest Sub-Committee
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="Blood Donation Drives">Blood Donation Drives</option>
                    <option value="CPR & First Aid Response">CPR & First Aid Response</option>
                    <option value="Yoga & Mental Health">Yoga & Mental Health</option>
                    <option value="Community Health Camps">Community Health Camps</option>
                    <option value="Event Logistics & PR">Event Logistics & PR</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 font-bold text-white bg-gradient-to-r from-emerald-600 via-emerald-500 to-blue-600 hover:from-emerald-500 hover:to-blue-500 rounded-2xl shadow-xl shadow-emerald-600/25 transition-all flex items-center justify-center gap-2 mt-4"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <ShieldCheck className="w-5 h-5" />
                      <span>Submit Membership Application</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
