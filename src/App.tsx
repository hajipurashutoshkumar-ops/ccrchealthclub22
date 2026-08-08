import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Activities } from './components/Activities';
import { Stats } from './components/Stats';
import { Gallery } from './components/Gallery';
import { HealthWidget } from './components/HealthWidget';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { JoinModal } from './components/JoinModal';
import { ActivityModal } from './components/ActivityModal';
import { Activity } from './types';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ccrc_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [isJoinModalOpen, setIsJoinModalOpen] = useState<boolean>(false);
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('ccrc_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('ccrc_theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 font-sans selection:bg-emerald-500 selection:text-white">
      {/* Sticky Glassmorphism Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenJoinModal={() => setIsJoinModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenJoinModal={() => setIsJoinModalOpen(true)} />

        {/* 2. About Us Section */}
        <About />

        {/* 3. Core Activities Section */}
        <Activities onSelectActivity={(act) => setSelectedActivity(act)} />

        {/* 4. Statistics Counter Section */}
        <Stats />

        {/* 5. Event Photo Gallery Section */}
        <Gallery />

        {/* 6. Interactive Student Health Widget */}
        <HealthWidget />

        {/* 7. Contact & Location Section */}
        <Contact />
      </main>

      {/* 8. Footer Section */}
      <Footer />

      {/* Interactive Modals */}
      <JoinModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
      />

      <ActivityModal
        activity={selectedActivity}
        onClose={() => setSelectedActivity(null)}
        onOpenJoinModal={() => setIsJoinModalOpen(true)}
      />
    </div>
  );
}
