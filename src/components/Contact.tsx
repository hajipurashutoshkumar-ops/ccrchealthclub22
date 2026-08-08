import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  Mail,
  Phone,
  Send,
  Facebook,
  Instagram,
  Linkedin,
  CheckCircle2,
  Clock,
  Building2,
  MessageSquare,
  Bell,
} from 'lucide-react';
import { CLUB_INFO, NOTICES } from '../data/clubData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    faculty: '+2 Science',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        faculty: '+2 Science',
        message: '',
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold tracking-wider uppercase mb-3"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Get in Touch</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Connect with <span className="text-emerald-600 dark:text-emerald-400">CCRC Health Club</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg"
          >
            Have questions about upcoming blood donation drives, health camps, or membership? Drop us a message or visit us at CCRC Campus Koteshwor.
          </motion.p>
        </div>

        {/* Notices Ticker Bar */}
        <div className="mb-12 glass-card p-4 rounded-2xl border border-emerald-500/30 flex flex-col md:flex-row items-center gap-4">
          <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider flex-shrink-0">
            <Bell className="w-4 h-4 animate-bounce" />
            <span>Campus Announcements:</span>
          </div>

          <div className="flex-1 overflow-x-auto flex items-center gap-6 no-scrollbar text-xs">
            {NOTICES.map((notice) => (
              <div key={notice.id} className="flex items-center gap-2 whitespace-nowrap bg-white dark:bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700">
                <span className="font-bold text-slate-900 dark:text-white">{notice.title}</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">• {notice.date}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Contact Details & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Address & Info Cards */}
            <div className="glass-card p-8 rounded-3xl space-y-6">
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-4">
                Contact Information
              </h3>

              {/* College Address */}
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex-shrink-0">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">College Location</div>
                  <div className="text-base font-bold text-slate-900 dark:text-white">{CLUB_INFO.college}</div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-0.5">{CLUB_INFO.address}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Address</div>
                  <a href={`mailto:${CLUB_INFO.email}`} className="text-base font-bold text-emerald-600 dark:text-emerald-400 hover:underline">
                    {CLUB_INFO.email}
                  </a>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Quick response within 24 hours</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Phone & Hotline</div>
                  <div className="text-base font-bold text-slate-900 dark:text-white">
                    {CLUB_INFO.phone} / {CLUB_INFO.alternatePhone}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Available Mon – Fri (9:00 AM – 5:00 PM)</p>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Follow Us On Social Media</div>
                <div className="flex gap-3">
                  <a
                    href={CLUB_INFO.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-blue-600 hover:text-white transition-all hover:scale-105"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href={CLUB_INFO.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-pink-600 hover:text-white transition-all hover:scale-105"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={CLUB_INFO.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-blue-700 hover:text-white transition-all hover:scale-105"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 h-64">
              <iframe
                title="CCRC College Map Location"
                src={CLUB_INFO.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl">
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">
                Send Us a Message
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-8">
                Fill out the form below and our club secretarial team will get back to you shortly.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500 text-white mx-auto flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white">Thank You!</h4>
                  <p className="text-slate-600 dark:text-slate-300 mt-2 text-sm max-w-md mx-auto">
                    Your message has been delivered to CCRC Health Club. We appreciate your inquiry and will reach out to you via email or phone.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-xl text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/20 hover:bg-emerald-500/30 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g., Aarav Sharma"
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="aarav@ccrc.edu.np"
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+977 98XXXXXXXX"
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                        Faculty / Level
                      </label>
                      <select
                        value={formData.faculty}
                        onChange={(e) => setFormData({ ...formData, faculty: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-sm"
                      >
                        <option value="+2 Science">+2 Science</option>
                        <option value="+2 Management">+2 Management</option>
                        <option value="+2 Humanities">+2 Humanities</option>
                        <option value="BCA / Bachelor">BCA / Bachelor Level</option>
                        <option value="Faculty / Staff">Faculty / CCRC Staff</option>
                        <option value="General Public">General Visitor / Community</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your query, suggestion, or request regarding CCRC Health Club..."
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-8 font-bold text-white bg-gradient-to-r from-emerald-600 via-emerald-500 to-blue-600 hover:from-emerald-500 hover:to-blue-500 rounded-2xl shadow-xl shadow-emerald-600/30 transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Submit Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
