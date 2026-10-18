import profile from '../assets/profile.jpg';
import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Avatar and Visual Column */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm">
              <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-3 shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
                <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">
                  <img
                    src={profile}
                    alt="Bikila - Computer Science"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-sm font-bold">{PERSONAL_INFO.name}</p>
                    <p className="text-xs text-zinc-300">Computer Science & Web developer</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 px-1">
                  <span>Production-Focused Computer</span>
                  <span className="font-mono text-blue-600 dark:text-blue-400">Addis Ababa / Remote</span>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Biography Column */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              <span>Computer Science Background</span>
              <span aria-hidden="true">·</span>
              <span>About Bikila</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-4xl dark:text-white [text-wrap:balance]">
              Passionate About Building Resilient, Meaningful Web Systems
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              <p>
                I am a full-stack web developer and software engineer who loves transforming ambitious product concepts into rock-solid, production-ready web applications. Whether crafting dynamic check-in architectures like <strong className="text-zinc-900 dark:text-white">March 8 Pass</strong> or high-retention digital platforms like <strong className="text-zinc-900 dark:text-white">Endalk Chance</strong>, my focus remains rooted in performance, clarity, and reliability.
              </p>
              <p>
                My Computer Science methodology couples rigorous type-safety across TypeScript and modern React with decoupled, cloud-ready backend microservices running smoothly on Render. I believe that good software is fast, accessible to all users, and simple to maintain over time.
              </p>
            </div>

            {/* Principles checklist */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="flex items-start gap-2.5 text-xs text-zinc-700 dark:text-zinc-300">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                <span>Zero bloated dependencies; lean bundle delivery</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-zinc-700 dark:text-zinc-300">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                <span>Render cloud hosting with automated continuous deployment</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-zinc-700 dark:text-zinc-300">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                <span>Mobile-first responsive architecture that never breaks</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-zinc-700 dark:text-zinc-300">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                <span>Direct, transparent client communication</span>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                <span>Browse Shipped Projects</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <span className="text-zinc-300 dark:text-zinc-700">|</span>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
              >
                <span>Hire or Collaborate</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
