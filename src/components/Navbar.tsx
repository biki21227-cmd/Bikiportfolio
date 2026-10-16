import React, { useState } from 'react';
import { Sun, Moon, Menu, X, FileText, ArrowUpRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode, onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200/80 bg-white/90 backdrop-blur-md transition-colors dark:border-zinc-800/80 dark:bg-[#09090b]/90">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Brand Wordmark */}
        <a 
          href="#home" 
          className="group flex items-center gap-2.5 font-bold tracking-tight text-zinc-900 transition-colors dark:text-zinc-50 shrink-0"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-xs font-semibold text-white transition-transform group-hover:scale-105 dark:bg-white dark:text-zinc-900">
            BW
          </span>
          <span className="text-lg font-bold tracking-tight">
            {PERSONAL_INFO.brandName}
          </span>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-600 dark:text-zinc-300">
          <a href="#about" className="whitespace-nowrap transition-colors hover:text-zinc-950 dark:hover:text-white">
            About
          </a>
          <a href="#projects" className="whitespace-nowrap transition-colors hover:text-zinc-950 dark:hover:text-white">
            Projects
          </a>
          <a href="#skills" className="whitespace-nowrap transition-colors hover:text-zinc-950 dark:hover:text-white">
            Skills
          </a>
          <a href="#experience" className="whitespace-nowrap transition-colors hover:text-zinc-950 dark:hover:text-white">
            Experience
          </a>
          <a href="#services" className="whitespace-nowrap transition-colors hover:text-zinc-950 dark:hover:text-white">
            Services
          </a>
          <a href="#contact" className="whitespace-nowrap transition-colors hover:text-zinc-950 dark:hover:text-white">
            Contact
          </a>
        </nav>

        {/* Primary Actions & Theme Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Light/Dark Mode Switcher with label */}
          <button
            onClick={toggleDarkMode}
            aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-zinc-50/80 px-2.5 py-1.5 text-xs font-medium text-zinc-700 transition-colors hover:border-zinc-300 hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-white"
          >
            {darkMode ? (
              <>
                <Sun className="h-4 w-4 text-amber-500" />
                <span className="hidden sm:inline">Light Mode</span>
              </>
            ) : (
              <>
                <Moon className="h-4 w-4 text-indigo-600" />
                <span className="hidden sm:inline">Dark Mode</span>
              </>
            )}
          </button>

          {/* Quick Resume View */}
          <button
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            <FileText className="h-3.5 w-3.5" />
            <span>Resume</span>
          </button>

          {/* Primary CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-900 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 whitespace-nowrap"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-700 md:hidden dark:border-zinc-800 dark:text-zinc-300"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-zinc-200 bg-white px-4 py-4 md:hidden dark:border-zinc-800 dark:bg-[#09090b]">
          <div className="flex flex-col space-y-3 text-sm font-medium">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
            >
              About
            </a>
            <a 
              href="#projects" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
            >
              Projects (Live Render Links)
            </a>
            <a 
              href="#skills" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
            >
              Skills
            </a>
            <a 
              href="#experience" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
            >
              Experience
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
            >
              Services
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
            >
              Contact Us
            </a>

            <div className="pt-2 flex flex-col gap-2 border-t border-zinc-100 dark:border-zinc-800">
              <button
                onClick={() => {
                  toggleDarkMode();
                }}
                className="flex items-center justify-between rounded-lg border border-zinc-200 px-3 py-2 text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:text-zinc-300"
              >
                <span>Theme</span>
                <span className="flex items-center gap-1.5 font-semibold text-blue-600 dark:text-blue-400">
                  {darkMode ? <Sun className="h-4 w-4 text-amber-500" /> : <Moon className="h-4 w-4 text-indigo-600" />}
                  {darkMode ? 'Dark Active (Click for Light)' : 'Light Active (Click for Dark)'}
                </span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex items-center justify-center gap-1.5 rounded-lg border border-zinc-200 px-3 py-2 text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:text-zinc-300"
              >
                <FileText className="h-3.5 w-3.5" />
                <span>View Full Resume</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
