import React from 'react';
import { 
  Trophy, 
  Award, 
  Medal, 
  Crown, 
  Sparkles, 
  CheckCircle2, 
  Star,
  ExternalLink 
} from 'lucide-react';
import { achievements } from '../data/portfolioData';

const iconMap = {
  Award,
  Trophy,
  Medal,
  Crown
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative bg-[#070b14]/75 border-t border-slate-800/60">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-purple-500/30 text-purple-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>Honors & Certifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Achievements & <span className="text-gradient-purple-blue">Certifications</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Recognitions in research paper presentations, technical certifications, and university sports competitions.
          </p>
        </div>

        {/* 4-Card Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item) => {
            const Icon = iconMap[item.icon] || Award;

            return (
              <div
                key={item.id}
                className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-2xl border border-slate-800/90 relative overflow-hidden flex flex-col justify-between group transition-all"
              >
                {/* Decorative corner glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/10 via-transparent to-transparent pointer-events-none"></div>

                <div>
                  {/* Top Bar: Icon, Category & Badge */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-purple-600/30 to-blue-600/20 border border-purple-500/40 flex items-center justify-center text-purple-300 group-hover:scale-105 transition-transform shadow-md shadow-purple-900/30">
                      <Icon className="w-6 h-6 text-amber-400" />
                    </div>

                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-400/10 text-amber-300 border border-amber-400/30">
                      {item.badge}
                    </span>
                  </div>

                  <span className="text-xs uppercase font-semibold text-purple-400 tracking-wider block mb-1">
                    {item.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white font-heading group-hover:text-purple-200 transition-colors leading-snug mb-2">
                    {item.title}
                  </h3>

                  {/* Organization */}
                  <div className="text-xs sm:text-sm font-medium text-cyan-300 mb-3 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{item.organization}</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Footer validation indicator */}
                <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Verified Milestone
                  </span>
                  <span className="font-mono text-[11px] text-purple-300/80">
                    Sorna Mahi S A
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
