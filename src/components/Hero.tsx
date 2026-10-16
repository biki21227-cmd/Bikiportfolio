import React from 'react';
import { ArrowRight, ExternalLink, Globe, Sparkles, Terminal } from 'lucide-react';
import { PERSONAL_INFO, KPI_METRICS } from '../data/portfolioData';

interface HeroProps {
  onOpenProjects: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenProjects, onOpenResume }) => {
  return (
    <section id="home" className="relative pt-10 pb-16 lg:pt-16 lg:pb-24">

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Split Screen Hero */}
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Typographic Hierarchy */}
          <div className="flex flex-col justify-center lg:col-span-7">
            {/* Kicker with subtle separator */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-4">
              <span>{PERSONAL_INFO.brandName}</span>
              <span aria-hidden="true">·</span>
              <span>Computer Science & Web developer</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl dark:text-white leading-[1.1] [text-wrap:balance]">
              Building High-Performance Web Applications That Scale
            </h1>

            {/* Lead copy */}
            <p className="mt-6 max-w-2xl text-base text-zinc-600 sm:text-lg dark:text-zinc-300 leading-relaxed">
              Hello, I'm <strong className="font-semibold text-zinc-900 dark:text-white">Bikila</strong>. I engineer production-grade full-stack web platforms, intuitive user interfaces, and reliable cloud-deployed systems with modern TypeScript, React, and robust backend services.
            </p>

            {/* Live Flagship mentions */}
            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-zinc-500 dark:text-zinc-400">
              <span className="font-medium text-zinc-700 dark:text-zinc-300">Live Deployments:</span>
              <a 
                href="https://march8pass2-2.onrender.com" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-1 font-medium text-blue-600 hover:underline dark:text-blue-400"
              >
                <span>March 8 Pass</span>
                <ExternalLink className="h-3 w-3" />
              </a>
              <span aria-hidden="true">·</span>
              <a 
                href="https://endalk-chance.onrender.com" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-1 font-medium text-blue-600 hover:underline dark:text-blue-400"
              >
                <span>Endalk Chance</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            {/* Actions & Status */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenProjects}
                className="inline-flex items-center gap-2 rounded-xl bg-zinc-950 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-zinc-800 hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
              >
                <span>Explore Live Projects</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-800 transition-colors hover:bg-zinc-50 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800/80 dark:hover:text-white"
              >
                <span>Contact Bikila</span>
              </a>
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 rounded-xl border border-dashed border-zinc-300 px-4 py-3 text-sm font-medium text-zinc-600 transition-colors hover:border-zinc-400 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-zinc-500 dark:hover:text-white"
              >
                <span>View Full CV</span>
              </button>
            </div>

            {/* Availability Notice */}
            <div className="mt-8 flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
              <span className="font-medium text-zinc-700 dark:text-zinc-300">Status:</span>
              <span>{PERSONAL_INFO.availability}</span>
              <span aria-hidden="true">·</span>
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Container */}
          <div className="flex flex-col justify-center lg:col-span-5">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-3 shadow-xl transition-all dark:border-zinc-800 dark:bg-zinc-900/90">
                {/* Visual Workspace Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">
                  <img
                    src={PERSONAL_INFO.heroWorkspace}
                    alt="Bikila Web Computer Science studio workspace"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  {/* Subtle Gradient Scrim for contrast */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Overlay Info on bottom of image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <div>
                      <p className="text-xs font-semibold">{PERSONAL_INFO.name}</p>
                      <p className="text-[11px] text-zinc-300">Full-Stack Web Architect</p>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-lg bg-black/60 px-2.5 py-1 text-[11px] font-medium backdrop-blur-sm">
                      <Globe className="h-3 w-3 text-blue-400" />
                      <span>Render Deployed</span>
                    </div>
                  </div>
                </div>

                {/* Mini Quick Spec Card below visual */}
                <div className="mt-3 grid grid-cols-2 gap-2 text-left">
                  <div className="rounded-lg bg-zinc-50 p-2.5 dark:bg-zinc-800/50 border border-zinc-200/50 dark:border-zinc-700/50">
                    <p className="text-[11px] text-zinc-500 dark:text-zinc-400">Core Technologies</p>
                    <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 mt-0.5">
                      React 19 & Node
                    </p>
                  </div>
                  <div className="rounded-lg bg-zinc-50 p-2.5 dark:bg-zinc-800/50 border border-zinc-200/50 dark:border-zinc-700/50">
                    <p className="text-[11px] text-zinc-500 dark:text-zinc-400">Hosting & Delivery</p>
                    <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 mt-0.5">
                      Render Cloud Uptime
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width KPI strip placed below the split */}
        <div className="mt-14 border-t border-b border-zinc-200/80 py-6 dark:border-zinc-800/80">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:gap-8">
            {KPI_METRICS.map((kpi, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-3xl font-mono tabular-nums">
                  {kpi.value}
                </span>
                <span className="mt-1 text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                  {kpi.label}
                </span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                  {kpi.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
