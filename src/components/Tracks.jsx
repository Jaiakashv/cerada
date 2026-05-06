import React from 'react';
import { motion } from 'framer-motion';
import { 
  Beaker, 
  Settings, 
  BookOpen, 
  Briefcase, 
  Users, 
  TrendingUp 
} from 'lucide-react';

const tracks = [
  { id: "Session 1", title: "Applied Science", icon: Beaker, gradient: "from-blue-600 to-cyan-500" },
  { id: "Session 2", title: "Engineering & Technological Advancements", icon: Settings, gradient: "from-purple-600 to-indigo-500" },
  { id: "Session 3", title: "Education & Pedagogical Innovations", icon: BookOpen, gradient: "from-teal-600 to-emerald-500" },
  { id: "Session 4", title: "Business & Management Studies", icon: Briefcase, gradient: "from-orange-600 to-amber-500" },
  { id: "Session 5", title: "Social Science and Humanities", icon: Users, gradient: "from-pink-600 to-rose-500" },
  { id: "Session 6", title: "Finance, Accountancy and Marketing", icon: TrendingUp, gradient: "from-blue-700 to-indigo-600" },
];

const Tracks = () => {
  return (
    <section id="tracks" className="section-padding bg-slate-950 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary-600/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-secondary-600/20 blur-[150px] rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h4 className="text-primary-400 font-bold tracking-widest uppercase text-sm mb-4">Call for Papers</h4>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Session Tracks</h2>
          <p className="text-slate-400 max-w-3xl mx-auto">
            We invite researchers, academicians and professionals to submit their papers. Topics of interest include, but are not limited to the following sessions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track, i) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`relative overflow-hidden rounded-[2.5rem] p-10 bg-white/5 border border-white/10 group cursor-pointer h-full flex flex-col`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${track.gradient} opacity-10 blur-3xl group-hover:opacity-30 transition-opacity`} />
              
              <div className="flex justify-between items-start mb-8">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${track.gradient} flex items-center justify-center text-white shadow-lg`}>
                  <track.icon size={28} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-primary-400 bg-primary-400/10 px-3 py-1 rounded-full border border-primary-400/20">
                  {track.id}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors leading-tight">
                {track.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                Submit your research in {track.title.toLowerCase()} for global presentation and publication.
              </p>
              
              <div className="pt-6 border-t border-white/5 flex items-center gap-2 text-primary-400 font-bold text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                Detailed Guidelines <span>→</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-slate-400 text-sm italic">
            For detailed submission guidelines, please visit the <span className="text-primary-400 font-bold underline cursor-pointer">[Submission Page]</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Tracks;
