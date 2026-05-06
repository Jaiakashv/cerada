import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, ShieldCheck } from 'lucide-react';

const Welcome = () => {
  return (
    <section id="about" className="section-padding bg-white relative">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-1 w-12 bg-primary-600 rounded-full" />
              <h4 className="text-primary-600 font-bold tracking-widest uppercase text-sm">Introduction</h4>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 uppercase">ICAEBMS-2026</span>
            </h2>
            
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p>
                We warmly welcome you to the <span className="text-slate-900 font-semibold">International Conference on Applied Science, Engineering, Education, Business, Management and Social Science & Humanities (ICAEBMS)</span>.
              </p>
              
              <div className="pl-6 border-l-4 border-primary-100 italic py-2">
                "Interdisciplinary Innovations for a Sustainable Future"
              </div>
              
              <p className="text-base">
                ICAEBMS serves as a global platform where researchers, academicians, professionals and students from around the world come together to exchange ideas, present findings and build collaborations across disciplines.
              </p>
              
              <p className="text-base font-medium text-slate-800">
                This conference is not just an academic gathering, it is a space for innovation, interchange and the creation of solutions that address real-world challenges.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-8 py-8 border-t border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center">
                  <Globe size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">500+</p>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Delegates</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-secondary-50 text-secondary-600 flex items-center justify-center">
                  <Users size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">50+</p>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Countries</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1000" 
                alt="Conference Hall" 
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </div>
            
            {/* Background elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary-100/50 rounded-full blur-[80px] -z-10" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary-100/50 rounded-full blur-[80px] -z-10" />
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-3xl shadow-2xl border-white/40 flex items-center gap-4 z-20">
              <div className="w-12 h-12 rounded-full bg-green-500/20 text-green-600 flex items-center justify-center">
                <ShieldCheck size={28} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase">Certified</p>
                <p className="font-bold text-slate-900">Academic Venue</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Welcome;
