import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: "Scopus", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Elsevier_logo.svg/1200px-Elsevier_logo.svg.png" },
  { name: "Web of Science", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Clarivate_Analytics_logo.svg/1200px-Clarivate_Analytics_logo.svg.png" },
  { name: "Clarivate", logo: "https://logos-world.net/wp-content/uploads/2021/02/Clarivate-Analytics-Logo.png" },
  { name: "SCIE", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3v-m_6r9f_k_S8jS9Y8I-H9h-v-N-Y-S_6A&s" },
];

const Publications = () => {
  const handleImageError = (e, name) => {
    e.target.onerror = null; 
    e.target.src = `https://placehold.co/200x80/f1f5f9/475569?text=${encodeURIComponent(name)}`;
  };

  return (
    <section id="publications" className="py-24 bg-white border-t border-slate-100">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl font-bold text-slate-400 uppercase tracking-[0.4em] mb-12">Proceedings & Publications</h2>
          
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
            {partners.map((partner, i) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="h-12 md:h-16 flex items-center justify-center"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-h-full w-auto object-contain"
                  onError={(e) => handleImageError(e, partner.name)}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="max-w-3xl mx-auto p-8 rounded-3xl bg-slate-50 border border-slate-100 text-center"
        >
          <p className="text-slate-600 leading-relaxed text-sm italic">
            <span className="font-bold text-slate-900 not-italic block mb-2 uppercase tracking-wider">Note:</span>
            ICAEBMS - 2026 Proceedings will be submitted to the Web of Science Book Citation Index (BkCI) and Scopus for evaluation and indexing purposes (T&C)* apply.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;
