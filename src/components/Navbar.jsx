import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { cn } from '../lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Tracks', href: '#tracks' },
    { name: 'Dates', href: '#dates' },
    { name: 'Publications', href: '#publications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'py-3 bg-white shadow-md border-b border-slate-200/50' 
          : 'py-6 bg-transparent'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="w-10 h-10 bg-gradient-to-tr from-primary-600 to-secondary-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary-500/20">
            <Globe size={24} />
          </div>
          <div>
            <span className={cn(
              "text-xl font-display font-bold block leading-tight",
              isScrolled ? "text-slate-900" : "text-white"
            )}>
              ICAEBMS
            </span>
            <span className={cn(
              "text-[10px] font-semibold tracking-wider uppercase opacity-80 block",
              isScrolled ? "text-slate-600" : "text-slate-200"
            )}>
              Bangkok 2026
            </span>
          </div>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "text-sm font-medium transition-colors relative group",
                isScrolled ? "text-slate-600 hover:text-primary-600" : "text-white/90 hover:text-white"
              )}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className={cn(
              "px-5 py-2.5 rounded-full text-sm font-bold transition-all",
              isScrolled 
                ? "bg-primary-600 text-white shadow-lg shadow-primary-500/25 hover:bg-primary-700" 
                : "bg-white text-primary-700 hover:bg-slate-100"
            )}
          >
            Register Now
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={cn(
              "p-2 rounded-lg transition-colors",
              isScrolled ? "text-slate-900" : "text-white"
            )}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="container-custom py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-semibold text-slate-800 hover:text-primary-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full py-4 bg-primary-600 text-white rounded-xl font-bold shadow-lg shadow-primary-500/25">
                Register Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
