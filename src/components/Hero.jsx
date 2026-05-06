import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, FileText, ChevronRight, Sparkles, Globe, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-slate-950">


      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />

      {/* Background Animated Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 -left-20 w-96 h-96 bg-primary-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-secondary-600/20 rounded-full blur-[120px] animate-pulse delay-700" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
      </div>

      <div className="container-custom relative z-10 -mt-11">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-primary-400 text-xs font-bold mb-8"
            >
              <Sparkles size={14} />
              <span>HYBRID CONFERENCE 2026</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
              International Conference on <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400">
                Applied Science, Engineering, <br className="hidden lg:block" /> Education & Humanities
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 mb-8 font-light max-w-2xl">
              “Interdisciplinary Innovations for a Sustainable Future”
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-400 shrink-0">
                  <Calendar size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Date</p>
                  <p className="text-white font-semibold">10-11 Aug, 2026</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-secondary-400 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Location</p>
                  <p className="text-white font-semibold">Bangkok, Thailand</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <button className="btn-primary px-10 py-4 text-lg">
                Register Now
                <ChevronRight size={20} />
              </button>
              <button className="btn-secondary !bg-white/5 !text-white !border-white/10 hover:!bg-white/10 px-8 py-4 text-lg">
                <FileText size={20} />
                Submit Paper
              </button>
            </div>

            <div className="flex flex-wrap gap-8 items-center mt-10 opacity-70">
              <div className="flex items-center gap-3">
                <Award size={18} className="text-accent-400" />
                <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Organized by <span className="text-white">CERADA</span></span>
              </div>
              <div className="flex items-center gap-3 border-l border-white/10 pl-8">
                <span className="text-[10px] font-bold bg-white/10 px-2 py-0.5 rounded text-slate-300">ISBN</span>
                <span className="text-[11px] text-slate-400 font-mono tracking-tighter">978-95-813001-3-6</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-5 hidden lg:block relative"
          >
            <div className="relative aspect-square max-w-[480px] mx-auto">
              {/* Outer Circles */}
              <div className="absolute inset-0 border border-primary-500/20 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-8 border border-secondary-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              
              {/* Main Cube Graphic */}
              <div className="absolute inset-6 bg-white rounded-[3rem] rotate-12 shadow-2xl mb-6 flex items-center justify-center overflow-hidden border-4 border-white/20">
                <img 
                  src="https://confworld.org/images/services/international-conferences.webp" 
                  alt="Conference" 
                  className="w-full h-full object-cover -rotate-12 scale-110"
                />
              </div>

              {/* Floating Status Cards */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white px-6 py-4 rounded-2xl shadow-2xl border border-slate-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-black text-green-400 flex items-center justify-center">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-black uppercase font-bold">Event Type</p>
                    <p className="text-sm font-black text-slate-800">Hybrid Event</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute bottom-10 -left-10 bg-white px-6 py-4 rounded-2xl shadow-2xl border border-slate-100 z-30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-black text-primary-400 flex items-center justify-center">
                    <Globe size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-black uppercase font-bold">Global Presence</p>
                    <p className="text-sm font-black text-slate-800">10+ Countries</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* CSS Marquee Banner */}
      <div className="absolute bottom-0 left-0 right-0 z-50 bg-white/5 border-t border-white/10 backdrop-blur-md py-4 overflow-hidden">
        <div className="whitespace-nowrap animate-[marquee_40s_linear_infinite] inline-block text-white text-[10px] font-black tracking-[0.3em] uppercase">
          <span className="mx-16">HYBRID EVENT - You can participate in person at Bangkok, Thailand or Virtually from your home or office.</span>
          <span className="mx-16">HYBRID EVENT - You can participate in person at Bangkok, Thailand or Virtually from your home or office.</span>
          <span className="mx-16">HYBRID EVENT - You can participate in person at Bangkok, Thailand or Virtually from your home or office.</span>
        </div>
      </div>


    </section>
  );
};

export default Hero;
