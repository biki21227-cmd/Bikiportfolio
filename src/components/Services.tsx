import React from 'react';
import { Check, ArrowUpRight } from 'lucide-react';
import { SERVICES, TESTIMONIALS } from '../data/portfolioData';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 lg:py-28 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              <span>Client Services</span>
              <span aria-hidden="true">·</span>
              <span>Capabilities</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-4xl dark:text-white [text-wrap:balance]">
              What I Bring To Your Team
            </h2>
            <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400 max-w-xl">
              From fresh ground-up builds to scaling existing web products, I provide reliable full-cycle Computer Science.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-xl bg-zinc-900 px-4 py-2.5 text-xs font-semibold text-white shadow hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 shrink-0"
          >
            <span>Inquire About A Project</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {SERVICES.map((service, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm transition-all hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/80 dark:hover:border-zinc-700"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400">
                    {service.number}
                  </span>
                  <span className="text-[11px] font-medium text-zinc-400">End-to-End Delivery</span>
                </div>
                <h3 className="mt-3 text-xl font-bold tracking-tight text-zinc-950 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div className="mt-6 space-y-2 border-t border-zinc-100 pt-5 dark:border-zinc-800">
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Key Deliverables:
                  </p>
                  {service.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                      <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                {service.technologies.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="rounded-md bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Client Feedback / Testimonials */}
        <div className="mt-16">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-zinc-950 dark:text-white">
              Client Feedback & Project Results
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Direct outcomes from delivered web platforms.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {TESTIMONIALS.map((t, idx) => (
              <blockquote
                key={idx}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60"
              >
                <p className="text-sm italic leading-relaxed text-zinc-700 dark:text-zinc-300">
                  "{t.quote}"
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-zinc-100 pt-3 text-xs dark:border-zinc-800">
                  <div>
                    <span className="font-semibold text-zinc-900 dark:text-white">{t.author}</span>
                    <span className="text-zinc-500 dark:text-zinc-400"> · {t.role}</span>
                  </div>
                  <span className="font-medium text-blue-600 dark:text-blue-400">{t.project}</span>
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
