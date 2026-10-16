import React, { useState } from 'react';
import { ExternalLink, ArrowRight, Eye, Globe, ShieldCheck, Check } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const categories = ['All', 'Full-Stack', 'Web Apps', 'APIs & Services'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  const handleCopyLink = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedLink(url);
    setTimeout(() => setCopiedLink(null), 2500);
  };

  return (
    <section id="projects" className="py-20 lg:py-28 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              <span>Selected Portfolio</span>
              <span aria-hidden="true">·</span>
              <span>Production Systems</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-4xl dark:text-white [text-wrap:balance]">
              Featured Engineering Projects
            </h2>
            <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400 max-w-xl">
              Real-world web applications built and deployed to production by Bikila. Explore live deployments, inspect application architecture, and review features.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-1 rounded-xl border border-zinc-200 bg-zinc-100/80 p-1 dark:border-zinc-800 dark:bg-zinc-900 shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-lg px-3.5 py-1.5 text-xs font-medium transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-white text-zinc-950 shadow-sm dark:bg-zinc-800 dark:text-white'
                    : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Public Notice Banner */}
        <div className="mb-10 flex items-center justify-between rounded-xl border border-zinc-200/70 bg-white p-3.5 shadow-sm dark:border-zinc-800/70 dark:bg-zinc-900/60">
          <div className="flex items-center gap-2.5 text-xs text-zinc-600 dark:text-zinc-300">
            <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>
              <strong>Verified Live Deployments:</strong> Both flagship systems are actively running in production on Render.
            </span>
          </div>
          <span className="hidden sm:inline-flex text-[11px] font-mono text-zinc-400">
            Live Production Systems
          </span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/90 dark:hover:border-zinc-700"
            >
              {/* Media Preview Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <img
                  src={project.image}
                  alt={`${project.title} live interface preview`}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-102"
                />
                {/* Top Overlay Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <div className="flex items-center gap-1.5 rounded-lg bg-zinc-950/80 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-md">
                    <Globe className="h-3 w-3 text-emerald-400" />
                    <span>{project.hosting}</span>
                  </div>
                </div>

                {/* Hover Quick Actions */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-zinc-950/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-200 group-hover:opacity-100">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2 text-xs font-semibold text-zinc-900 shadow hover:bg-zinc-100"
                  >
                    <span>Launch Live Site</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-zinc-900/90 px-4 py-2 text-xs font-semibold text-white shadow backdrop-blur-sm hover:bg-zinc-900"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    <span>View Architecture</span>
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6">
                {/* Metadata */}
                <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 mb-2">
                  <span className="font-semibold text-blue-600 dark:text-blue-400">{project.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{project.year}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-zinc-950 dark:text-white">
                  {project.title}
                </h3>
                
                <p className="mt-1 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                  {project.subtitle}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="rounded-md bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Actions Footer */}
                <div className="mt-6 flex items-center justify-between border-t border-zinc-100 pt-4 dark:border-zinc-800">
                  {/* Direct Link to live URL */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>

                  <div className="flex items-center gap-2">
                    {/* Copy Link Button */}
                    <button
                      onClick={() => handleCopyLink(project.liveUrl)}
                      className="rounded-lg border border-zinc-200 px-2.5 py-1 text-[11px] font-medium text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
                      title="Copy live project link"
                    >
                      {copiedLink === project.liveUrl ? (
                        <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                          <Check className="h-3 w-3" /> Copied
                        </span>
                      ) : (
                        <span>Copy Link</span>
                      )}
                    </button>

                    {/* View Details Modal Trigger */}
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-1 rounded-lg bg-zinc-900 px-3 py-1 text-[11px] font-semibold text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
                    >
                      <span>Details</span>
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Quick Direct Link Strip */}
        <div className="mt-12 rounded-2xl border border-blue-200/80 bg-blue-50/50 p-6 dark:border-blue-900/40 dark:bg-blue-950/20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                Direct Project Access
              </p>
              <h4 className="text-lg font-bold text-zinc-900 dark:text-white mt-0.5">
                Bikila's Deployed Applications on Render
              </h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                Both systems were developed, engineered, and successfully deployed by Bikila. Click to visit each live web application directly:
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="https://march8pass2-2.onrender.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-4 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
              >
                <span>march8pass2-2.onrender.com</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://endalk-chance.onrender.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-4 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
              >
                <span>endalk-chance.onrender.com</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Detail View */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
