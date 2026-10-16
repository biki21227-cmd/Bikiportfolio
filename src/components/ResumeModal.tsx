import React, { useEffect } from 'react';
import { X, Printer, Mail, Globe, MapPin, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE_ITEMS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div 
        onClick={onClose} 
        aria-hidden="true" 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
      />

      {/* Modal Dialog */}
      <div className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-zinc-200 bg-white shadow-2xl transition-all dark:border-zinc-800 dark:bg-zinc-900">
        {/* Modal Top Control Bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-zinc-200 bg-white/95 px-6 py-4 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/95 print:hidden">
          <div className="flex items-center gap-2">
            <span className="font-bold text-zinc-900 dark:text-white">Curriculum Vitae</span>
            <span className="text-xs text-zinc-500">· Bikila Web Developer</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              <Printer className="h-3.5 w-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Close CV modal"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet Content */}
        <div className="p-8 sm:p-10 space-y-8 text-zinc-800 dark:text-zinc-200 print:text-black print:p-0">
          {/* Header */}
          <div className="border-b border-zinc-200 pb-6 dark:border-zinc-800">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white print:text-black">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-base font-semibold text-blue-600 dark:text-blue-400 print:text-blue-800 mt-0.5">
                  {PERSONAL_INFO.title}
                </p>
              </div>
              <div className="space-y-1 text-xs text-zinc-600 dark:text-zinc-400 print:text-zinc-700 sm:text-right">
                <p className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="h-3.5 w-3.5" />
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="underline font-mono">{PERSONAL_INFO.email}</a>
                </p>
                <p className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{PERSONAL_INFO.location}</span>
                </p>
                <p className="flex items-center sm:justify-end gap-1.5">
                  <Globe className="h-3.5 w-3.5" />
                  <span>https://march8pass2-2.onrender.com</span>
                </p>
              </div>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300 print:text-zinc-800">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Featured Live Production Systems */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3 border-b border-zinc-100 pb-1 dark:border-zinc-800">
              Featured Production Deployments
            </h2>
            <div className="space-y-4">
              <div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/30">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-zinc-900 dark:text-white print:text-black">
                    March 8 Pass Management System
                  </h3>
                  <a 
                    href="https://march8pass2-2.onrender.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-xs text-blue-600 underline font-mono dark:text-blue-400 flex items-center gap-1"
                  >
                    <span>https://march8pass2-2.onrender.com</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-300 mt-1">
                  Full-stack digital badge generation and event access verification platform deployed on Render Cloud. Solves in-person event check-in bottlenecks with automated scannable credentials and live attendance analytics.
                </p>
                <p className="text-[11px] font-mono text-zinc-500 mt-2">
                  Stack: React, Node.js, Express, Tailwind CSS, Render Cloud
                </p>
              </div>

              <div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/30">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-zinc-900 dark:text-white print:text-black">
                    Endalk Chance Opportunity Platform
                  </h3>
                  <a 
                    href="https://endalk-chance.onrender.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-xs text-blue-600 underline font-mono dark:text-blue-400 flex items-center gap-1"
                  >
                    <span>https://endalk-chance.onrender.com</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-300 mt-1">
                  Interactive reward drawing and opportunity web portal deployed on Render Cloud. Features automated chance draws, transparent ticket allocations, and real-time winner feeds.
                </p>
                <p className="text-[11px] font-mono text-zinc-500 mt-2">
                  Stack: React, TypeScript, Tailwind CSS, REST APIs, Render Cloud
                </p>
              </div>
            </div>
          </div>

          {/* Work History */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3 border-b border-zinc-100 pb-1 dark:border-zinc-800">
              Professional Experience
            </h2>
            <div className="space-y-4">
              {EXPERIENCE_ITEMS.map((exp, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-zinc-900 dark:text-white print:text-black">
                      {exp.role} · {exp.company}
                    </span>
                    <span className="text-xs font-mono text-zinc-500">{exp.period}</span>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-300">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2 border-b border-zinc-100 pb-1 dark:border-zinc-800">
              Education & Background
            </h2>
            <div className="flex items-center justify-between text-xs">
              <div>
                <p className="font-bold text-zinc-900 dark:text-white print:text-black">
                  Computer Science & Software Engineering
                </p>
                <p className="text-zinc-500">Focus on Modern Web Architecture & Distributed Systems</p>
              </div>
              <span className="font-mono text-zinc-500">Graduated</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
