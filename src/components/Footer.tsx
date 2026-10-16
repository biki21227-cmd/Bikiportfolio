import React from 'react';
import { ArrowUp, ExternalLink, Sun, Moon } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Footer: React.FC<FooterProps> = ({ darkMode, toggleDarkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-200 bg-white py-12 transition-colors dark:border-zinc-800 dark:bg-[#09090b]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <a href="#home" className="flex items-center gap-2 font-bold tracking-tight text-zinc-900 dark:text-white">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-900 text-xs font-semibold text-white dark:bg-white dark:text-zinc-900">
                BW
              </span>
              <span className="text-base font-bold">{PERSONAL_INFO.brandName}</span>
            </a>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-sm leading-relaxed">
              Official engineering portfolio of Bikila. Built with modern React, TypeScript, and Tailwind CSS. Showcasing live cloud systems deployed on Render.
            </p>
            <div className="pt-1 flex items-center gap-2">
              <button
                onClick={toggleDarkMode}
                className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
              >
                {darkMode ? <Sun className="h-3.5 w-3.5 text-amber-500" /> : <Moon className="h-3.5 w-3.5 text-indigo-500" />}
                <span>Active: {darkMode ? 'Dark Theme' : 'Light Theme'} (Click to switch)</span>
              </button>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-white">
              Navigation
            </p>
            <ul className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400">
              <li>
                <a href="#about" className="hover:text-zinc-950 dark:hover:text-white transition-colors">
                  About Bikila
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-zinc-950 dark:hover:text-white transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-zinc-950 dark:hover:text-white transition-colors">
                  Technical Stack
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-zinc-950 dark:hover:text-white transition-colors">
                  Career Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-zinc-950 dark:hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Flagship Production Links */}
          <div className="md:col-span-4 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-white">
              Live Production Apps
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://march8pass2-2.onrender.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-lg border border-zinc-200/80 p-2 text-zinc-700 hover:border-zinc-300 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-700 transition-all"
                >
                  <span className="font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400">March 8 Pass System</span>
                  <ExternalLink className="h-3 w-3 text-zinc-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://endalk-chance.onrender.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-lg border border-zinc-200/80 p-2 text-zinc-700 hover:border-zinc-300 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-700 transition-all"
                >
                  <span className="font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400">Endalk Chance Platform</span>
                  <ExternalLink className="h-3 w-3 text-zinc-400" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-zinc-100 pt-6 dark:border-zinc-800/80 text-xs text-zinc-500 dark:text-zinc-400">
          <p>© 2026 {PERSONAL_INFO.brandName}. Designed & Engineered by {PERSONAL_INFO.name}. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-1.5 rounded-lg border border-zinc-200 px-3 py-1.5 text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
