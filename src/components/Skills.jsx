import React, { useState } from 'react';
import { 
  Code2, 
  BrainCircuit, 
  Server, 
  Layout, 
  Database, 
  CheckCircle2, 
  Wrench, 
  Sparkles,
  Layers,
  Search
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const iconMap = {
  Code2,
  BrainCircuit,
  Server,
  Layout,
  Database,
  CheckCircle2,
  Wrench
};

export default function Skills() {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs = [
    { id: 'all', label: 'All Domains' },
    { id: 'backend-ai', label: 'Backend & AI/ML' },
    { id: 'web-db', label: 'Frontend & Database' },
    { id: 'qa-tools', label: 'Testing & Tools' },
  ];

  const filteredCategories = skillCategories.filter((category) => {
    // Tab filter matching
    let matchesTab = true;
    if (filter === 'backend-ai') {
      matchesTab = ['programming', 'aiml', 'backend'].includes(category.id);
    } else if (filter === 'web-db') {
      matchesTab = ['frontend', 'database'].includes(category.id);
    } else if (filter === 'qa-tools') {
      matchesTab = ['testing', 'tools'].includes(category.id);
    }

    // Search query matching
    const matchesSearch = 
      category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesTab && matchesSearch;
  });

  return (
    <section id="skills" className="py-24 relative bg-[#070b14] border-t border-slate-800/60">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-purple-500/30 text-purple-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Technical <span className="text-gradient-purple-blue">Skills</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            A comprehensive overview of my programming languages, frameworks, AI/ML concepts, testing methodologies, and developer tools.
          </p>

          {/* Interactive Filters & Search Bar */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 rounded-xl glass-panel border-slate-800">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                    filter === tab.id
                      ? 'bg-purple-600/30 text-purple-200 border border-purple-500/40 shadow-sm shadow-purple-900/30 font-semibold'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Quick Search */}
            <div className="relative w-full sm:w-60">
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search skills (e.g. Java, RAG)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-xl glass-panel text-xs sm:text-sm text-slate-200 placeholder-slate-500 border-slate-800 focus:outline-none focus:border-purple-500/60 transition-colors"
              />
            </div>

          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const IconComponent = iconMap[category.icon] || Code2;

            return (
              <div
                key={category.id}
                className="glass-panel glass-panel-hover rounded-2xl p-6 border border-slate-800/80 flex flex-col justify-between group transition-all"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800/80">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${category.color} p-[1px] shadow-md shadow-purple-900/20`}>
                        <div className="w-full h-full bg-[#0a0f1d] rounded-[11px] flex items-center justify-center text-white">
                          <IconComponent className="w-5 h-5 text-purple-300" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-base text-white group-hover:text-purple-200 transition-colors">
                          {category.title}
                        </h3>
                        <span className="text-[11px] text-slate-400">
                          {category.skills.length} Competencies
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Skills Badges List */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {category.skills.map((skill, sIdx) => {
                      const isCurrentlyLearning = skill.toLowerCase().includes('currently learning');
                      const baseSkillName = isCurrentlyLearning 
                        ? skill.replace('(Currently Learning)', '').trim() 
                        : skill;

                      return (
                        <div
                          key={sIdx}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                            isCurrentlyLearning
                              ? 'bg-amber-950/40 text-amber-300 border border-amber-600/40 shadow-sm shadow-amber-950/40'
                              : 'bg-slate-900/70 text-slate-200 border border-slate-700/60 hover:border-purple-500/50 hover:bg-purple-950/30 hover:text-white'
                          }`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            isCurrentlyLearning ? 'bg-amber-400 animate-pulse' : 'bg-purple-400'
                          }`}></span>
                          <span>{baseSkillName}</span>
                          {isCurrentlyLearning && (
                            <span className="text-[9px] uppercase px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 font-semibold border border-amber-400/30">
                              Learning
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Subtle category footer indicator */}
                <div className="mt-5 pt-3 border-t border-slate-800/40 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Verified Academic / Practical Skill
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note: Academic integrity notice indicating no fake percentages */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400 inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-panel border-slate-800">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Honest skill representation based on active projects, coursework, and industry internships.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
