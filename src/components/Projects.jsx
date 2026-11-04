import React from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Bot, 
  Server, 
  Activity 
} from 'lucide-react';
import { projects, personalInfo } from '../data/portfolioData';

// Custom modern SVG mockups for project thumbnails
function ProjectMockup({ projectId }) {
  if (projectId === 'ai-support-system') {
    return (
      <div className="w-full h-48 bg-gradient-to-br from-[#0c1222] to-[#070a14] rounded-xl border border-purple-500/20 p-4 flex flex-col justify-between overflow-hidden relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/15 rounded-full blur-2xl"></div>
        {/* Mock Title Bar */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div className="flex items-center gap-2">
            <Bot className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-mono text-purple-300">AI Ticket Predictor & Support</span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30">
            In Development
          </span>
        </div>
        {/* Mock Analytics widgets */}
        <div className="grid grid-cols-3 gap-2 my-2">
          <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-center">
            <span className="text-[10px] text-slate-400 block">Priority</span>
            <span className="text-xs font-bold text-red-400">High (P1)</span>
          </div>
          <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-center">
            <span className="text-[10px] text-slate-400 block">Sentiment</span>
            <span className="text-xs font-bold text-emerald-400">Positive</span>
          </div>
          <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-center">
            <span className="text-[10px] text-slate-400 block">RAG Engine</span>
            <span className="text-xs font-bold text-cyan-400">Active</span>
          </div>
        </div>
        {/* Mock Chat / NLP suggestion prompt */}
        <div className="p-2 rounded-lg bg-purple-950/30 border border-purple-800/40 flex items-center justify-between text-[11px] text-slate-300">
          <span className="truncate">Auto-suggest: "Resolving via Spring Boot & RAG..."</span>
          <span className="text-purple-400 text-[10px] font-mono shrink-0 ml-2">WebSocket Live</span>
        </div>
      </div>
    );
  }

  if (projectId === 'nitttr-portal') {
    return (
      <div className="w-full h-48 bg-gradient-to-br from-[#0c1326] to-[#070b14] rounded-xl border border-blue-500/20 p-4 flex flex-col justify-between overflow-hidden relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/15 rounded-full blur-2xl"></div>
        {/* Mock Title Bar */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div className="flex items-center gap-2">
            <Server className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-mono text-blue-300">NITTTR CRUD Portal</span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30">
            Deployed Intern Project
          </span>
        </div>
        {/* Mock Table Rows */}
        <div className="space-y-1.5 my-2">
          <div className="flex items-center justify-between p-1.5 rounded bg-slate-900/60 border border-slate-800 text-[10px] text-slate-300">
            <span>GET /api/v1/institution/records</span>
            <span className="text-emerald-400 font-mono">200 OK</span>
          </div>
          <div className="flex items-center justify-between p-1.5 rounded bg-slate-900/60 border border-slate-800 text-[10px] text-slate-300">
            <span>POST /api/v1/faculty/crud</span>
            <span className="text-emerald-400 font-mono">201 Created</span>
          </div>
          <div className="flex items-center justify-between p-1.5 rounded bg-slate-900/60 border border-slate-800 text-[10px] text-slate-300">
            <span>React UI State Sync</span>
            <span className="text-cyan-400 font-mono">Connected</span>
          </div>
        </div>
        {/* Mock Footer */}
        <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-slate-800/80">
          <span>React.js ↔ Spring Boot ↔ MySQL</span>
          <span className="text-blue-400 font-mono">Full-Stack</span>
        </div>
      </div>
    );
  }

  // Smart Cradle IoT Project
  return (
    <div className="w-full h-48 bg-gradient-to-br from-[#0e1620] to-[#070b14] rounded-xl border border-cyan-500/20 p-4 flex flex-col justify-between overflow-hidden relative">
      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-600/15 rounded-full blur-2xl"></div>
      {/* Mock Title Bar */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-mono text-cyan-300">Smart Cradle Telemetry</span>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30">
          Award Winning Concept
        </span>
      </div>
      {/* Mock Sensor telemetry */}
      <div className="grid grid-cols-3 gap-2 my-2">
        <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-center">
          <span className="text-[10px] text-slate-400 block">Temperature</span>
          <span className="text-xs font-bold text-cyan-300">36.5 °C Normal</span>
        </div>
        <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-center">
          <span className="text-[10px] text-slate-400 block">Movement</span>
          <span className="text-xs font-bold text-purple-300">Slight Sway</span>
        </div>
        <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-center">
          <span className="text-[10px] text-slate-400 block">Cry Detection</span>
          <span className="text-xs font-bold text-emerald-400">Quiet</span>
        </div>
      </div>
      {/* Mock Footer */}
      <div className="p-2 rounded-lg bg-cyan-950/30 border border-cyan-800/40 flex items-center justify-between text-[11px] text-slate-300">
        <span className="truncate">Sensors & Microcontroller → Python Alert Feed</span>
        <span className="text-cyan-400 text-[10px] font-mono shrink-0 ml-2">Testing Passed</span>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-[#070b14] border-t border-slate-800/60">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-purple-500/30 text-purple-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Featured Portfolio Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Featured <span className="text-gradient-purple-blue">Projects</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Key software projects spanning AI customer support, enterprise full-stack web portals, and IoT smart monitoring.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover rounded-2xl border border-slate-800/90 overflow-hidden flex flex-col justify-between group transition-all"
            >
              <div>
                {/* Visual Thumbnail / Interactive UI Preview */}
                <div className="p-4 bg-slate-900/40 border-b border-slate-800">
                  <ProjectMockup projectId={project.id} />
                </div>

                {/* Content Container */}
                <div className="p-6">
                  
                  {/* Status & Subtitle */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">
                      {project.subtitle}
                    </span>
                    <span className={`text-[11px] px-2.5 py-0.5 rounded-full font-semibold border ${project.statusColor}`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white font-heading group-hover:text-purple-200 transition-colors leading-snug mb-3">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-1.5 mb-5 bg-slate-900/40 p-3 rounded-xl border border-slate-800/80">
                    {project.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-900/90 text-slate-300 border border-slate-700/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </div>

              {/* Action Buttons: GitHub only when real link available (no fake URLs generated) */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/40 transition-colors group/btn"
                    title={`View ${project.title} on Sorna Mahi's GitHub`}
                  >
                    <Github className="w-4 h-4 text-purple-300 group-hover/btn:scale-110 transition-transform" />
                    <span>View Repository</span>
                  </a>

                  <span className="text-[11px] text-slate-400 font-mono">
                    github.com/mahi24705
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
