import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  BookOpen, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative bg-[#070b14] border-t border-slate-800/60">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-purple-500/30 text-purple-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Education <span className="text-gradient-purple-blue">Journey</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            My formal engineering and schooling qualifications with academic achievements.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-8 relative">
          
          {/* Vertical Timeline bar */}
          <div className="absolute left-4 sm:left-8 top-3 bottom-3 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500/40"></div>

          {education.map((edu, idx) => (
            <div key={edu.id} className="relative pl-12 sm:pl-20 group">
              
              {/* Timeline Node */}
              <div className="absolute left-4 sm:left-8 -translate-x-1/2 top-4 w-7 h-7 rounded-full bg-[#070b14] border-2 border-purple-500 group-hover:border-cyan-400 group-hover:scale-110 flex items-center justify-center transition-all z-10">
                <div className={`w-2.5 h-2.5 rounded-full ${edu.current ? 'bg-emerald-400 animate-ping' : 'bg-purple-400'}`}></div>
              </div>

              {/* Education Card */}
              <div className={`glass-panel glass-panel-hover p-6 sm:p-7 rounded-2xl border transition-all ${
                edu.current 
                  ? 'border-purple-500/40 bg-gradient-to-r from-purple-950/20 via-[#0d1322]/80 to-[#070b14]' 
                  : 'border-slate-800/90'
              }`}>
                
                {/* Top Badge & Duration */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    {edu.current && (
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        Current Programme
                      </span>
                    )}
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      {edu.score}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                {/* Degree Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white font-heading group-hover:text-purple-200 transition-colors">
                  {edu.degree}
                </h3>

                {/* Institution & Location */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-slate-300 mt-1 mb-4">
                  <span className="font-semibold text-purple-300">
                    {edu.institution}
                  </span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    {edu.location}
                  </span>
                </div>

                {/* Highlights */}
                {edu.highlights && (
                  <ul className="space-y-1.5 pt-2 border-t border-slate-800/80">
                    {edu.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 leading-normal">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
