import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Globe2, 
  BookOpenCheck, 
  Mic2, 
  Layers, 
  Network, 
  Trophy, 
  GraduationCap,
  MessageCircle,
  Award
} from 'lucide-react';

const highlights = [
  { 
    title: "Multidisciplinary Platform", 
    desc: "A unique forum uniting applied science, engineering, education, business, management, social sciences and humanities.", 
    icon: Layers 
  },
  { 
    title: "Global Participation", 
    desc: "Engage with renowned scholars, industry leaders and professionals from across the world.", 
    icon: Globe2 
  },
  { 
    title: "Call for Papers & Publications", 
    desc: "Opportunities to publish in reputed Scopus indexed journals. Selected papers will be considered for high-impact journals.", 
    icon: BookOpenCheck 
  },
  { 
    title: "Expert Keynote Sessions", 
    desc: "Insights from distinguished speakers on cutting-edge research and global challenges.", 
    icon: Mic2 
  },
  { 
    title: "Interactive Workshops & Panels", 
    desc: "Hands-on learning and thought-provoking debates on contemporary issues.", 
    icon: MessageCircle 
  },
  { 
    title: "Networking Opportunities", 
    desc: "Build academic, industrial and international collaborations.", 
    icon: Network 
  },
  { 
    title: "Recognition & Awards", 
    desc: "Best paper and presentation awards to acknowledge outstanding contributions.", 
    icon: Award 
  },
  { 
    title: "Student & Researcher Engagement", 
    desc: "Special sessions to inspire and guide the next generation of scholars.", 
    icon: GraduationCap 
  },
];

const Highlights = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">Key Highlights of ICAEBMS</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 transition-all hover:bg-white hover:shadow-2xl hover:shadow-primary-500/10 group h-full flex flex-col"
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                <item.icon size={28} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
