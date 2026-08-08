import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, Heart, Sparkles, Activity, CheckCircle2, AlertCircle } from 'lucide-react';

export const HealthWidget: React.FC = () => {
  const [height, setHeight] = useState<string>('170'); // cm
  const [weight, setWeight] = useState<string>('65'); // kg
  const [bmi, setBmi] = useState<number | null>(22.5);
  const [category, setCategory] = useState<string>('Normal weight');

  const calculateBmi = () => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);

    if (h > 0 && w > 0) {
      const result = w / (h * h);
      setBmi(parseFloat(result.toFixed(1)));

      if (result < 18.5) {
        setCategory('Underweight');
      } else if (result >= 18.5 && result < 24.9) {
        setCategory('Normal weight');
      } else if (result >= 25 && result < 29.9) {
        setCategory('Overweight');
      } else {
        setCategory('Obese');
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-emerald-900/40 via-slate-900 to-blue-900/40 border-y border-emerald-500/20 my-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Info Side */}
          <div className="lg:col-span-6 text-white">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/30">
              <Calculator className="w-4 h-4 text-emerald-400" />
              <span>Interactive Student Health Tool</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              CCRC Student <span className="text-emerald-400">BMI & Fitness Index</span>
            </h3>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              Check your Body Mass Index (BMI) in seconds. Developed by CCRC Health Club to encourage healthy eating, daily physical movement, and balanced study routines for college students.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>Instant calculations tailored for young adults aged 16-25</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>Get customized advice from our campus nutrition guidelines</span>
              </div>
            </div>
          </div>

          {/* Calculator Card */}
          <div className="lg:col-span-6">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/20 shadow-2xl backdrop-blur-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                    Height (cm)
                  </label>
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="170"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="65"
                  />
                </div>
              </div>

              <button
                onClick={calculateBmi}
                className="w-full py-3.5 px-6 rounded-2xl font-bold text-white bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-500 hover:to-blue-500 shadow-lg shadow-emerald-600/30 transition-all mb-6 flex items-center justify-center gap-2"
              >
                <Activity className="w-5 h-5" />
                <span>Calculate My BMI</span>
              </button>

              {bmi !== null && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 rounded-2xl bg-slate-900/90 text-white border border-slate-700 flex items-center justify-between"
                >
                  <div>
                    <div className="text-xs text-slate-400 font-semibold uppercase">Your BMI Result</div>
                    <div className="text-3xl font-extrabold text-emerald-400">{bmi}</div>
                  </div>

                  <div className="text-right">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                      category === 'Normal weight' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                    }`}>
                      {category}
                    </span>
                    <p className="text-[11px] text-slate-400 mt-1">Healthy Range: 18.5 – 24.9</p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
