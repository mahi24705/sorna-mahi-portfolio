import React from 'react';
import { 
  ArrowUp, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Heart, 
  Code2, 
  Sparkles 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#04060d] border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-sm overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-40 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-slate-800/70">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 via-blue-600 to-cyan-400 p-[1.5px]">
                <div className="w-full h-full bg-[#070b14] rounded-[10px] flex items-center justify-center">
                  <span className="font-heading font-extrabold text-xs text-white">SM</span>
                </div>
              </div>
              <h3 className="font-heading font-bold text-lg text-white">
                {personalInfo.name}
              </h3>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm">
              {personalInfo.headline}
            </p>
            <p className="text-slate-400 text-xs max-w-md">
              Integrated M.Tech Computer Science & Engineering (2022–2027) • Erode Sengunthar Engineering College.
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="md:col-span-6 flex flex-col sm:flex-row items-center justify-center md:justify-end gap-4 sm:gap-6">
            
            {/* Social Icons */}
            <div className="flex items-center gap-2.5">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass-panel text-slate-400 hover:text-white hover:border-purple-500/40 hover:bg-purple-600/10 transition-all hover:scale-110"
                aria-label="GitHub Profile"
                title="GitHub: mahi24705"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass-panel text-slate-400 hover:text-white hover:border-blue-500/40 hover:bg-blue-600/10 transition-all hover:scale-110"
                aria-label="LinkedIn Profile"
                title="LinkedIn: sornamahi24"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl glass-panel text-slate-400 hover:text-white hover:border-cyan-500/40 hover:bg-cyan-600/10 transition-all hover:scale-110"
                aria-label="Email"
                title={personalInfo.email}
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="p-2.5 rounded-xl glass-panel text-slate-400 hover:text-white hover:border-emerald-500/40 hover:bg-emerald-600/10 transition-all hover:scale-110"
                aria-label="Phone"
                title={personalInfo.phone}
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>

            {/* Back to Top CTA */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-panel text-slate-300 hover:text-white hover:border-purple-500/40 hover:bg-purple-600/20 text-xs font-semibold transition-all group"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform text-purple-400" />
            </button>

          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <p>
            © {currentYear} <span className="text-slate-300 font-semibold">{personalInfo.name}</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Engineered with React.js & Tailwind CSS</span>
            <span>•</span>
            <span className="text-purple-400 font-medium">Batch of 2027</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
