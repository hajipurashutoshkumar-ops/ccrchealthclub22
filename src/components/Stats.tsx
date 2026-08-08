import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Users, Building2, Award, Activity, Heart, TrendingUp } from 'lucide-react';
import { STATS } from '../data/clubData';

export const Stats: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const iconMap: Record<string, React.ElementType> = {
    Users,
    Building2,
    Award,
    Activity,
  };

  return (
    <section ref={ref} className="py-20 relative bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white overflow-hidden">
      {/* Background Subtle Glowing Rings */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-3 border border-emerald-500/30"
          >
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span>Our Impact in Numbers</span>
          </motion.div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Making a Real Difference Across <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Kathmandu</span>
          </h2>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => {
            const IconComp = iconMap[stat.iconName] || Users;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="relative bg-slate-900/80 rounded-3xl p-8 border border-slate-800 hover:border-emerald-500/50 shadow-2xl backdrop-blur-xl group hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                    <IconComp className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Verified</span>
                </div>

                <div className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-2 flex items-baseline gap-1">
                  <Counter targetValue={stat.value} startAnimation={isInView} />
                  <span className="text-emerald-400">{stat.suffix}</span>
                </div>

                <div className="text-lg font-bold text-slate-200">{stat.label}</div>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">{stat.description}</p>

                {/* Progress bar accent */}
                <div className="mt-5 w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '100%' } : { width: 0 }}
                    transition={{ duration: 1.2, delay: 0.3 + idx * 0.1 }}
                    className="h-full bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Counter Helper Component
const Counter: React.FC<{ targetValue: number; startAnimation: boolean }> = ({ targetValue, startAnimation }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let start = 0;
    const duration = 1800; // 1.8s
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = targetValue / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [targetValue, startAnimation]);

  return <span>{count.toLocaleString()}</span>;
};
