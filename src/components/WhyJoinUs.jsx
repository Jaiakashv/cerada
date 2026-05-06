import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  BookOpen, 
  Users, 
  Globe, 
  Trophy, 
  Zap,
  Eye,
  Rocket,
  CheckCircle
} from 'lucide-react';

const reasons = [
  { title: "Present Your Research", desc: "Share your ideas, findings and innovations with a global audience of experts.", icon: FileText },
  { title: "Get Published", desc: "Opportunities to publish in reputed journals with high impact factor and indexed proceedings.", icon: BookOpen },
  { title: "Learn from Experts", desc: "Gain insights from keynote addresses, workshops and panel discussions by leading scholars.", icon: Zap },
  { title: "Expand Your Network", desc: "Connect with academicians, industry leaders, policymakers and fellow researchers worldwide.", icon: Users },
  { title: "Interdisciplinary Exposure", desc: "Explore diverse perspectives by engaging with multiple fields of study.", icon: Globe },
  { title: "Recognition & Awards", desc: "Compete for Best Paper and Best Presentation awards to acknowledge excellence.", icon: Trophy },
  { title: "Global Visibility", desc: "Enhance your academic profile and contribute to international collaborations.", icon: Eye },
  { title: "Empower the Future", desc: "Inspire and be inspired by young researchers, innovators and thought leaders.", icon: Rocket },
];

const WhyJoinUs = () => {
  return (
    <section id="benefits" className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 border border-primary-100 text-[10px] font-black uppercase tracking-widest mb-6"
          >
            <CheckCircle size={14} />
            Value Proposition
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-6"
          >
            Why Join Us at <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500">ICAEBMS?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 max-w-2xl leading-relaxed"
          >
            The International Conference on Applied Science, Engineering, Education, Business, Management and Social Science & Humanities is more than just an academic event.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -8 }}
              className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300 group flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                <reason.icon size={28} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors leading-tight">
                {reason.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Subtle Background Accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary-100 rounded-full blur-[120px] opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-100 rounded-full blur-[150px] opacity-30 pointer-events-none" />
    </section>
  );
};

export default WhyJoinUs;
