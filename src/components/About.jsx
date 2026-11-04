import React from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  Code2, 
  Sparkles, 
  Layers, 
  Cpu, 
  Brain, 
  Database, 
  ArrowUpRight,
  Compass
} from 'lucide-react';
import { personalInfo, aboutHighlights } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-[#070b14]/70 border-t border-slate-800/60">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-purple-500/30 text-purple-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>Discover My Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            About <span className="text-gradient-purple-blue">Me</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            A look into my academic journey, engineering focus, and passion for developing scalable systems and intelligent AI solutions.
          </p>
        </div>

        {/* Top Highlights 4-Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {aboutHighlights.map((item, idx) => (
            <div 
              key={idx}
              className="glass-panel glass-panel-hover p-5 sm:p-6 rounded-2xl relative overflow-hidden group border border-slate-800"
            >
              <div className="absolute -right-4 -top-4 w-16 h-16 bg-gradient-to-br from-purple-600/15 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                {item.label}
              </span>
              <span className="text-xl sm:text-2xl font-bold font-heading text-white block group-hover:text-purple-300 transition-colors">
                {item.value}
              </span>
              <span className="text-xs text-slate-400 mt-1 block">
                {item.subtext}
              </span>
            </div>
          ))}
        </div>

        {/* Narrative & Focus Domains */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Narrative Card */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800/90 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 text-purple-400 font-semibold text-sm">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Engineering Mindset & Ambition</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-white font-heading leading-snug">
                Building scalable web services with modern Java backends & intelligent AI architectures.
              </h3>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  I am an <strong className="text-white font-semibold">Integrated M.Tech Computer Science and Engineering student</strong> at <span className="text-purple-300">Erode Sengunthar Engineering College</span>, graduating in <span className="text-cyan-300 font-semibold">2027</span>, maintaining an academic CGPA of <strong className="text-white font-semibold">8.0 / 10</strong>.
                </p>
                <p>
                  I have practical experience in full-stack development through internships at <span className="text-purple-300 font-medium">NITTTR Chennai</span> and <span className="text-purple-300 font-medium">AK Info Park</span>, along with immersive in-plant industrial training at the <span className="text-cyan-300 font-medium">Nuclear Power Corporation of India Limited (NPCIL), Kudankulam</span>.
                </p>
                <p>
                  My core technical interests revolve around <strong className="text-slate-100">Java backend development</strong>, <strong className="text-slate-100">React.js</strong>, <strong className="text-slate-100">relational database management</strong>, along with applied <strong className="text-slate-100">Artificial Intelligence, Machine Learning, and Natural Language Processing (NLP)</strong>.
                </p>
                <p className="text-slate-400 italic">
                  "I am continuously learning, adopting best software practices, and building projects to sharpen my technical depth and problem-solving acumen."
                </p>
              </div>
            </div>

            {/* Quick Education & Experience Jump Links */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-3">
              <a 
                href="#education"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-purple-950/60 border border-purple-800/50 text-purple-300 hover:bg-purple-900/60 transition-colors"
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>View Full Academic Timeline</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a 
                href="#experience"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-950/60 border border-blue-800/50 text-blue-300 hover:bg-blue-900/60 transition-colors"
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>Explore Work Experience</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Column: Key Technical Pillars */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            
            <div className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-300 shrink-0">
                <Code2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white font-heading">Backend & Architecture</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Proficient in Java, Spring Boot, RESTful API design, JDBC architecture, and relational schema management using MySQL.
                </p>
              </div>
            </div>

            <div className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-300 shrink-0">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white font-heading">Modern Full Stack</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Crafting responsive and dynamic user interfaces with React.js, Tailwind CSS, JavaScript, and integrating with CRUD services.
                </p>
              </div>
            </div>

            <div className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-300 shrink-0">
                <Brain className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white font-heading">AI, ML & NLP Exploration</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Hands-on research and development with ML fundamentals, text preprocessing, sentiment analysis, and Retrieval-Augmented Generation (RAG).
                </p>
              </div>
            </div>

            <div className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-300 shrink-0">
                <Database className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white font-heading">Quality & Testing</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Skilled in manual, functional, smoke, and regression testing principles with automated testing via Selenium and currently learning Playwright.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
