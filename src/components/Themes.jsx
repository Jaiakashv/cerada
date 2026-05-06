import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, Globe, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

const objectives = [
  { text: "To encourage interdisciplinary collaboration among researchers, academicians, industry experts and policymakers.", icon: Users, color: "blue", gradient: "from-blue-500 to-cyan-500" },
  { text: "To promote innovative research and practices that contribute to sustainable development.", icon: Lightbulb, color: "emerald", gradient: "from-emerald-500 to-teal-500" },
  { text: "To bridge the gap between science, technology, business and society through knowledge-sharing and discourse.", icon: Globe, color: "purple", gradient: "from-purple-500 to-indigo-500" },
  { text: "To empower future leaders and young scholars with insights and opportunities for global engagement.", icon: Target, color: "orange", gradient: "from-orange-500 to-amber-500" },
  { text: "To foster solutions that are practical, inclusive and impactful in addressing real-world challenges.", icon: ShieldCheck, color: "rose", gradient: "from-rose-500 to-pink-500" },
];

const Themes = () => {
  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-100 rounded-full -mr-64 -mt-64 blur-[120px] opacity-10" />
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <Sparkles size={16} className="text-primary-600" />
              <h4 className="text-primary-600 font-bold tracking-[0.2em] uppercase text-[10px]">Conference Theme</h4>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-[1.2]">
              “Interdisciplinary Innovations for a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500">Sustainable Future</span>”
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:w-1/4"
          >
            <p className="text-slate-500 leading-relaxed text-sm border-l-2 border-primary-600 pl-6">
              Bringing together diverse fields of knowledge to address global challenges.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Header Card - Now spans 1 row/col in a 4-col grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-1 group relative overflow-hidden rounded-[2rem] p-8 text-white shadow-xl bg-slate-900 flex flex-col justify-between h-full"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 leading-tight">Our Core <br />Objectives</h3>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                ICAEBMS seeks to create an environment for real-world impact.
              </p>
            </div>
            <div className="relative z-10">
              <button className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-primary-400 hover:text-white transition-colors group/btn">
                Explore <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Objective Cards */}
          {objectives.map((obj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-full"
            >
              <div className="h-full p-7 rounded-[2rem] bg-white border border-slate-200 shadow-lg shadow-slate-200/40 hover:shadow-xl transition-all duration-500 flex flex-col relative overflow-hidden">
                {/* Colored Glow Effect */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${obj.gradient} opacity-0 group-hover:opacity-10 blur-[50px] transition-opacity duration-500`} />
                
                {/* Icon Section */}
                <div className="relative z-10 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${obj.gradient} p-[1px] shadow-md group-hover:scale-110 transition-transform duration-500`}>
                    <div className="w-full h-full bg-white rounded-[11px] flex items-center justify-center text-slate-800 group-hover:bg-transparent group-hover:text-white transition-all duration-500">
                      <obj.icon size={22} strokeWidth={2} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex-grow">
                  <div className={`w-6 h-1 bg-gradient-to-r ${obj.gradient} rounded-full mb-4 group-hover:w-10 transition-all duration-500`} />
                  <p className="text-slate-700 font-bold leading-relaxed text-base tracking-tight italic">
                    "{obj.text}"
                  </p>
                </div>

                {/* Number Indicator */}
                <div className="relative z-10 mt-6 pt-5 border-t border-slate-100 flex justify-between items-center">
                  <span className="text-[9px] font-black tracking-[0.2em] uppercase text-slate-300 group-hover:text-slate-500 transition-colors">
                    Goal 0{i+1}
                  </span>
                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${obj.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Themes;
