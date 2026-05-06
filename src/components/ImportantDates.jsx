import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, Clock } from 'lucide-react';

const dates = [
  { event: "Early Bird Registration", date: "31 Dec 2025", status: "Upcoming", color: "text-blue-600", bg: "bg-blue-50" },
  { event: "Abstract Submission", date: "31 Jan 2026", status: "Critical", color: "text-purple-600", bg: "bg-purple-50" },
  { event: "Full Paper Submission", date: "28 Feb 2026", status: "Upcoming", color: "text-teal-600", bg: "bg-teal-50" },
  { event: "Final Registration", date: "31 Mar 2026", status: "Deadline", color: "text-orange-600", bg: "bg-orange-50" },
];

const ImportantDates = () => {
  return (
    <section id="dates" className="section-padding bg-white relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">Important Dates</h2>
          <p className="text-slate-600">Mark your calendars for these key milestones.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {dates.map((item, i) => (
              <motion.div
                key={item.event}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative flex flex-col md:flex-row md:items-center justify-between p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300"
              >
                <div className="flex items-center gap-6 mb-4 md:mb-0">
                  <div className={`w-16 h-16 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center shadow-inner`}>
                    <CalendarDays size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary-600 transition-colors">{item.event}</h3>
                    <div className="flex items-center gap-2 text-slate-500 text-sm mt-1">
                      <Clock size={14} />
                      <span>Standard Timezone (GMT +7)</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-8">
                  <div className="text-right">
                    <p className={`text-2xl font-black ${item.color}`}>{item.date}</p>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Submission Deadline</p>
                  </div>
                  <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-tighter ${item.bg} ${item.color} border border-current opacity-70`}>
                    {item.status}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportantDates;
