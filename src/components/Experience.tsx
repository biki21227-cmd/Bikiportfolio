import React from 'react';
import { Calendar, CheckCircle } from 'lucide-react';
import { EXPERIENCE_ITEMS } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 lg:py-28 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            <span>Career Milestones</span>
            <span aria-hidden="true">·</span>
            <span>Track Record</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-4xl dark:text-white [text-wrap:balance]">
            Experience & Computer Science
          </h2>
          <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
            A track record of taking software from raw specifications to deployed, stable production applications.
          </p>
        </div>

        {/* Timeline List */}
        <div className="mt-12 space-y-8">
          {EXPERIENCE_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-sm transition-all hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/80 dark:hover:border-zinc-700"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-zinc-100 pb-4 dark:border-zinc-800">
                <div>
                  <h3 className="text-xl font-bold text-zinc-950 dark:text-white">
                    {item.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                    <span className="font-semibold text-zinc-800 dark:text-zinc-200">{item.company}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.location}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-blue-600 dark:text-blue-400">{item.type}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-zinc-600 dark:text-zinc-300">
                  <Calendar className="h-3.5 w-3.5 text-zinc-400" />
                  <span>{item.period}</span>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                {item.description}
              </p>

              {/* Highlights */}
              <div className="mt-5 space-y-2">
                {item.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs text-zinc-700 dark:text-zinc-300 leading-normal">
                    <CheckCircle className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Tech used in this role */}
              <div className="mt-6 flex flex-wrap items-center gap-1.5 pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                <span className="text-[11px] font-medium text-zinc-400 mr-1">Stack:</span>
                {item.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="rounded-md bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
