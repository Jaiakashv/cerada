import React from 'react';
import {
  Globe,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { Icon: Facebook, href: "#" },
    { Icon: Twitter, href: "#" },
    { Icon: Linkedin, href: "#" },
    { Icon: Instagram, href: "#" },
  ];

  return (
    <footer
      id="contact"
      className="bg-slate-950 text-slate-400 pt-20 pb-10"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">

          {/* Logo & About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-tr from-primary-600 to-secondary-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                <Globe size={24} />
              </div>

              <span className="text-2xl font-display font-bold text-white uppercase tracking-tighter">
                ICAEBMS
              </span>
            </div>

            <p className="text-sm leading-relaxed mb-8">
              International Conference on Applied Science, Engineering,
              Education, Business, Management and Social Science &
              Humanities.
            </p>

            <div className="flex gap-4">
              {socialLinks.map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary-600 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">
              Quick Links
            </h4>

            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-primary-400 transition-colors"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="hover:text-primary-400 transition-colors"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#tracks"
                  className="hover:text-primary-400 transition-colors"
                >
                  Session Tracks
                </a>
              </li>

              <li>
                <a
                  href="#dates"
                  className="hover:text-primary-400 transition-colors"
                >
                  Important Dates
                </a>
              </li>

              <li>
                <a
                  href="#publications"
                  className="hover:text-primary-400 transition-colors"
                >
                  Publications
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">
              Contact Us
            </h4>

            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="text-primary-500 shrink-0 mt-1"
                />

                <span>
                  Bangkok International Trade & Exhibition
                  Centre (BITEC), Thailand
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Mail
                  size={18}
                  className="text-primary-500 shrink-0"
                />

                <span>contact@icaebms2026.com</span>
              </li>

              <li className="flex items-center gap-3">
                <Phone
                  size={18}
                  className="text-primary-500 shrink-0"
                />

                <span>+66 2 123 4567</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6">
              Newsletter
            </h4>

            <p className="text-sm mb-4">
              Subscribe to get latest updates about the conference.
            </p>

            <div className="relative">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-primary-500 transition-colors"
              />

              <button
                className="absolute right-2 top-2 bottom-2 px-4 bg-primary-600 text-white text-xs font-bold rounded-lg hover:bg-primary-700 transition-colors"
              >
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium uppercase tracking-[0.2em]">
          <p>© 2026 ICAEBMS. All rights reserved.</p>

          <div className="flex gap-8">
            <a
              href="#"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;