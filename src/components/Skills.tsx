import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const activeCategory = SKILL_CATEGORIES[activeCategoryIndex];

  return (
    <section id="skills" className="py-20 lg:py-28 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            <span>Core Competencies</span>
            <span aria-hidden="true">·</span>
            <span>Technical Stack</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-4xl dark:text-white [text-wrap:balance]">
            Computer Science & Skills
          </h2>
          <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
            A battle-tested set of languages, frameworks, and deployment practices used to architect and ship resilient Computer Science.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="mt-10 flex flex-wrap gap-2 border-b border-zinc-200 pb-4 dark:border-zinc-800">
          {SKILL_CATEGORIES.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategoryIndex(idx)}
              className={`rounded-xl px-4 py-2.5 text-xs font-semibold transition-all whitespace-nowrap ${
                activeCategoryIndex === idx
                  ? 'bg-zinc-950 text-white shadow-sm dark:bg-white dark:text-zinc-950'
                  : 'bg-white text-zinc-700 border border-zinc-200 hover:border-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-700'
              }`}
            >
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Category Description Banner */}
        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            {activeCategory.description}
          </p>
          <span className="text-xs text-zinc-500 font-mono">
            {activeCategory.skills.length} core proficiencies
          </span>
        </div>

        {/* Skills Grid */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {activeCategory.skills.map((skill, idx) => (
            <div
              key={idx}
              className="group rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/80 dark:hover:border-zinc-700"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-zinc-900 dark:text-white">
                  {skill.name}
                </span>
                <span className="text-xs font-mono tabular-nums text-zinc-500 dark:text-zinc-400">
                  {skill.experience}
                </span>
              </div>
              {/* Visual meter bar with tabular percentage */}
              <div className="mt-3">
                <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 mb-1">
                  <span>Proficiency</span>
                  <span className="font-mono tabular-nums font-semibold text-zinc-800 dark:text-zinc-200">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
                  <div
                    className="h-full rounded-full bg-blue-600 transition-all duration-700 dark:bg-blue-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Computer Science & Web Developer */}
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/60">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Type-Safe End-to-End
            </h4>
            <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Strict TypeScript compiler configurations, rigorous runtime data schema validations, and declarative state flow for predictable production behavior.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/60">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Cloud Infrastructure
            </h4>
            <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Automated deployments on Render cloud containers, persistent database clustering, environment security, and real-time log monitoring.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/60">
            <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Accessible & High Performance
            </h4>
            <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Optimized DOM structures, minimal bundle payloads, zero-layout-shift responsiveness, and WCAG AA contrast compliance across all themes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
