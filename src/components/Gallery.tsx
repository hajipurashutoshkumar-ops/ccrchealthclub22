import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
  Filter,
  MapPin,
  Calendar,
  Sparkles,
  Maximize2,
  Grid,
  Sliders,
} from 'lucide-react';
import { GALLERY_ITEMS } from '../data/clubData';
import { GalleryItem } from '../types';
import { ImageWithFallback } from './ImageWithFallback';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'masonry' | 'slider'>('masonry');
  const [sliderIndex, setSliderIndex] = useState(0);

  const categories = ['All', 'Blood Donation', 'Yoga', 'Health Camp', 'Workshop', 'Community'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! + 1) % filteredItems.length);
    }
  };

  const prevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-slate-50 dark:bg-slate-900/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold tracking-wider uppercase mb-3"
            >
              <Sparkles className="w-4 h-4" />
              <span>Event Photo Gallery</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
            >
              Capturing Our <span className="text-emerald-600 dark:text-emerald-400">Health Journeys</span>
            </motion.h2>
          </div>

          {/* View Mode Toggle */}
          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <div className="p-1 bg-slate-200 dark:bg-slate-800 rounded-xl flex items-center gap-1 border border-slate-300/50 dark:border-slate-700">
              <button
                onClick={() => setViewMode('masonry')}
                className={`p-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors ${
                  viewMode === 'masonry'
                    ? 'bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                <Grid className="w-4 h-4" />
                <span>Grid View</span>
              </button>
              <button
                onClick={() => setViewMode('slider')}
                className={`p-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors ${
                  viewMode === 'slider'
                    ? 'bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                <Sliders className="w-4 h-4" />
                <span>Slider Carousel</span>
              </button>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold pr-2">
            <Filter className="w-4 h-4" />
            <span>Category:</span>
          </div>
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setSliderIndex(0);
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-emerald-600 to-blue-600 text-white shadow-md shadow-emerald-500/20'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Grid View Mode */}
        {viewMode === 'masonry' && (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => openLightbox(idx)}
                className="group relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 bg-slate-900 cursor-pointer h-80"
              >
                <ImageWithFallback
                  src={item.imageUrl}
                  fallbackSrc={item.fallbackUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white bg-slate-900/60 backdrop-blur-md border border-white/20">
                  {item.category}
                </div>

                {/* Zoom Icon Button */}
                <div className="absolute top-4 right-4 p-2.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-5 h-5" />
                </div>

                {/* Bottom Title & Details */}
                <div className="absolute bottom-6 left-6 right-6 text-white transform group-hover:-translate-y-1 transition-transform">
                  <div className="flex items-center gap-3 text-xs text-emerald-300 mb-1 font-semibold">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{item.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 truncate"><MapPin className="w-3.5 h-3.5" />{item.location}</span>
                  </div>
                  <h3 className="text-xl font-bold leading-tight text-white mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-300 line-clamp-2 opacity-90">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Slider Carousel View Mode */}
        {viewMode === 'slider' && filteredItems.length > 0 && (
          <div className="relative glass-card rounded-3xl p-6 sm:p-8 overflow-hidden shadow-2xl">
            <div className="relative h-[400px] sm:h-[500px] rounded-2xl overflow-hidden bg-slate-950">
              <ImageWithFallback
                src={filteredItems[sliderIndex].imageUrl}
                fallbackSrc={filteredItems[sliderIndex].fallbackUrl}
                alt={filteredItems[sliderIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

              {/* Information Banner on Slider */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="inline-block px-3 py-1 bg-emerald-500 rounded-full text-xs font-bold mb-2">
                  {filteredItems[sliderIndex].category}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold">{filteredItems[sliderIndex].title}</h3>
                <p className="text-sm text-slate-300 max-w-2xl mt-1">{filteredItems[sliderIndex].description}</p>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() => setSliderIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-2xl bg-slate-900/70 hover:bg-slate-900 text-white backdrop-blur-md shadow-xl"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => setSliderIndex((prev) => (prev + 1) % filteredItems.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-2xl bg-slate-900/70 hover:bg-slate-900 text-white backdrop-blur-md shadow-xl"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Thumbnail Strip */}
            <div className="flex gap-3 mt-4 overflow-x-auto pb-2 no-scrollbar">
              {filteredItems.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setSliderIndex(idx)}
                  className={`relative w-20 h-14 rounded-xl overflow-hidden border-2 flex-shrink-0 transition-all ${
                    sliderIndex === idx ? 'border-emerald-500 scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <ImageWithFallback
                    src={item.imageUrl}
                    fallbackSrc={item.fallbackUrl}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && filteredItems[lightboxIndex] && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
              onClick={closeLightbox}
            >
              <div
                className="relative max-w-5xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 z-20 p-3 rounded-2xl bg-slate-800/80 hover:bg-slate-700 text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-12">
                  <div className="lg:col-span-8 bg-black flex items-center justify-center min-h-[350px] sm:min-h-[480px] relative">
                    <ImageWithFallback
                      src={filteredItems[lightboxIndex].imageUrl}
                      fallbackSrc={filteredItems[lightboxIndex].fallbackUrl}
                      alt={filteredItems[lightboxIndex].title}
                      className="max-h-[80vh] w-auto object-contain"
                    />

                    {/* Previous Button */}
                    <button
                      onClick={prevLightbox}
                      className="absolute left-4 p-3 rounded-full bg-slate-900/80 text-white hover:bg-emerald-600 transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>

                    {/* Next Button */}
                    <button
                      onClick={nextLightbox}
                      className="absolute right-4 p-3 rounded-full bg-slate-900/80 text-white hover:bg-emerald-600 transition-colors"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>

                  {/* Lightbox Details Panel */}
                  <div className="lg:col-span-4 p-6 sm:p-8 text-white flex flex-col justify-between">
                    <div>
                      <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-400 font-bold rounded-full text-xs uppercase tracking-wider mb-3">
                        {filteredItems[lightboxIndex].category}
                      </span>
                      <h3 className="text-2xl font-extrabold text-white mb-3">
                        {filteredItems[lightboxIndex].title}
                      </h3>
                      <p className="text-sm text-slate-300 leading-relaxed mb-6">
                        {filteredItems[lightboxIndex].description}
                      </p>

                      <div className="space-y-2 text-xs text-slate-400 border-t border-slate-800 pt-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-emerald-400" />
                          <span>{filteredItems[lightboxIndex].date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-blue-400" />
                          <span>{filteredItems[lightboxIndex].location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500">
                      <span>Image {lightboxIndex + 1} of {filteredItems.length}</span>
                      <button onClick={closeLightbox} className="text-emerald-400 font-bold hover:underline">
                        Close Preview
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
