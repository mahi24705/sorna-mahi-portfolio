import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  Terminal, 
  Sparkles, 
  Code, 
  Cpu, 
  CheckCircle2,
  ExternalLink 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const roles = personalInfo.roles; // ["Full Stack Developer", "Java Developer", "AI Enthusiast"]
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const currentFullText = roles[currentRoleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentFullText.length) {
          // Pause at full word before backspacing
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        // Deleting backwards
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 60 : typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, roles, typingSpeed]);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Ambient Glows & Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
      
      {/* Dynamic Blurred Glow Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] pointer-events-none animate-pulse-subtle"></div>
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] pointer-events-none animate-pulse-subtle"></div>
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text and CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Top Greeting Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border-purple-500/30 text-purple-300 text-xs sm:text-sm font-medium shadow-sm shadow-purple-500/10 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Hello, I'm</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-300">Open for Opportunities (2027 Fresher)</span>
            </div>

            {/* Main Name Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold font-heading tracking-tight text-white leading-tight">
                <span className="text-gradient-purple-blue drop-shadow-sm">
                  {personalInfo.name}
                </span>
              </h1>
              
              {/* Animated Typing Text */}
              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
                <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-200 flex items-center gap-2">
                  <span className="text-cyan-400">&gt;</span>
                  <span className="text-slate-100">{displayText}</span>
                  <span className="inline-block w-2.5 h-6 sm:h-7 bg-purple-400 animate-pulse"></span>
                </div>
              </div>
            </div>

            {/* Role Subtitle Badge */}
            <p className="text-base sm:text-lg font-medium text-purple-300/90 tracking-wide">
              {personalInfo.headline}
            </p>

            {/* Professional Bio Quote */}
            <div className="relative pl-4 sm:pl-5 border-l-2 border-purple-500/40 text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl bg-slate-900/40 py-2 rounded-r-xl">
              <p className="italic">
                "{personalInfo.quote}"
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
              {/* View Projects CTA */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-lg shadow-purple-900/30 hover:shadow-purple-700/50 hover:scale-[1.02] active:scale-[0.98] transition-all group"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Download Resume CTA */}
              <a
                href={personalInfo.resumePath}
                download="Sorna_Mahi_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 glass-panel hover:bg-slate-800/80 hover:text-white border-slate-700/80 hover:border-purple-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all group shadow-sm shadow-black/50"
              >
                <Download className="w-4 h-4 text-purple-400 group-hover:-translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </a>

              {/* Contact Direct Link */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Social Links & Highlights */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                Connect:
              </span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-600/10 transition-all hover:scale-110 shadow-sm"
                aria-label="GitHub Profile"
                title="GitHub: mahi24705"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-600/10 transition-all hover:scale-110 shadow-sm"
                aria-label="LinkedIn Profile"
                title="LinkedIn: sornamahi24"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-white hover:border-cyan-500/50 hover:bg-cyan-600/10 transition-all hover:scale-110 shadow-sm"
                aria-label="Email Directly"
                title={personalInfo.email}
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Right Column: Profile Visual Placeholder with Modern Tech Rings */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-72 sm:w-88 md:w-96 aspect-square flex items-center justify-center">
              
              {/* Outer Decorative Gradient Ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-600 via-blue-500 to-cyan-400 p-[2px] opacity-75 shadow-2xl shadow-purple-900/40">
                <div className="w-full h-full bg-[#070b14] rounded-3xl"></div>
              </div>

              {/* Ambient Glow behind profile */}
              <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-purple-600/30 to-blue-600/20 blur-xl"></div>

              {/* Profile Card Container */}
              <div className="relative z-10 w-[94%] h-[94%] rounded-2xl glass-panel overflow-hidden border border-purple-500/20 flex flex-col justify-between p-6 bg-gradient-to-b from-[#0e1629]/90 to-[#070b14]/95">
                
                {/* Header inside profile card */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                    <Terminal className="w-3 h-3 text-purple-400" />
                    developer_profile.java
                  </span>
                </div>

                {/* Profile Avatar Placeholder (Ready to be replaced with personal image) */}
                <div className="my-auto flex flex-col items-center justify-center py-4">
                  <div className="relative group">
                    <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-800 p-[2px] shadow-xl shadow-purple-900/30">
                      <div className="w-full h-full rounded-2xl bg-[#0b1020] flex flex-col items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform">
                        {/* Avatar Graphic */}
                        <div className="text-center p-2">
                          <div className="w-16 h-16 mx-auto mb-1 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300">
                            <span className="font-heading font-black text-2xl tracking-tighter">SM</span>
                          </div>
                          <span className="text-[11px] font-medium text-slate-300 block">Sorna Mahi S A</span>
                          <span className="text-[9px] text-purple-400 font-mono block">Replace Photo Here</span>
                        </div>
                        {/* Gradient Shimmer overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#070b14]/80 via-transparent to-transparent"></div>
                      </div>
                    </div>

                    {/* Status Pill on Avatar */}
                    <div className="absolute -bottom-2 -right-2 px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span className="text-[10px] font-semibold text-emerald-300">Active</span>
                    </div>
                  </div>

                  {/* Quick Tech Badges */}
                  <div className="mt-5 flex flex-wrap justify-center gap-1.5 max-w-xs">
                    <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-purple-950/70 border border-purple-800/50 text-purple-300">
                      Java & Spring Boot
                    </span>
                    <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-blue-950/70 border border-blue-800/50 text-blue-300">
                      React.js
                    </span>
                    <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-cyan-950/70 border border-cyan-800/50 text-cyan-300">
                      AI / ML & NLP
                    </span>
                  </div>
                </div>

                {/* Footer details in card */}
                <div className="border-t border-slate-800/80 pt-3 flex items-center justify-between text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                    <span>CGPA: 8.0/10</span>
                  </div>
                  <span className="text-slate-500">|</span>
                  <div className="flex items-center gap-1 text-slate-300">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Graduating 2027</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
