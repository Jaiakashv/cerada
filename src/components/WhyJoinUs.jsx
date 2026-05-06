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
  Rocket
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
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <h4 className="text-primary-600 font-bold tracking-widest uppercase text-sm mb-4">Value Proposition</h4>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                Why Join Us at <br />
                <span className="text-primary-600">ICAEBMS?</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                ICAEBMS is more than just an academic event; it’s a global platform for innovation, collaboration and growth. Explore the benefits of joining our community.
              </p>
              <button className="btn-primary w-full sm:w-auto">
                Register Today
              </button>
            </motion.div>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-white border border-slate-100 shadow-lg shadow-slate-200/40 hover:shadow-2xl hover:shadow-primary-500/10 transition-all group flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                  <reason.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{reason.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;
