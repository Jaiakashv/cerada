import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  { name: "CERADA", url: "https://confworld.org/logo/cerada-logo.webp" },
  { name: "ICAEBMS", url: "https://icaebms.com/images/logo/icaebmslogo.png" },
  { name: "SDG", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Sustainable_Development_Goals_Logo.png/600px-Sustainable_Development_Goals_Logo.png" },
  { name: "Scopus", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Scopus_logo.svg/3840px-Scopus_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail" },
  { name: "Web of Science", url: "https://higssoftware.com/images/web-of-science-journal-indexing.png" },
];

const Organizers = () => {
  return (
    <section className="py-12 bg-slate-50 border-y border-slate-100">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center mb-8">
          <h4 className="text-slate-400 font-bold tracking-widest uppercase text-xs mb-2">Organized by</h4>
          <p className="text-slate-800 font-bold text-lg md:text-xl max-w-2xl">
            Confworld Educational Research and Development Association (CERADA)
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 lg:gap-20 opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
          {logos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="h-10 md:h-12 flex items-center justify-center"
            >
              <img 
                src={logo.url} 
                alt={logo.name} 
                className="max-h-full w-auto object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://placehold.co/200x80/f8fafc/475569?text=${encodeURIComponent(logo.name)}`;
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Organizers;
