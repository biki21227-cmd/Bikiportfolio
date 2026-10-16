/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { Experience } from './components/Experience';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ThemeToggleFloating } from './components/ThemeToggleFloating';
import { AnimatedBackground } from './components/AnimatedBackground';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('bikila_web_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('bikila_web_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('bikila_web_theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-zinc-50 text-zinc-900 transition-colors duration-200 dark:bg-[#09090b] dark:text-zinc-100 flex flex-col font-sans">
      {/* Full-page dynamic animated background with orbs, drifting grid, and constellation particles */}
      <AnimatedBackground />

      {/* Top Navigation Bar with Light/Dark Switch */}
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenProjects={scrollToProjects}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* About Section */}
        <About />

        {/* Featured Projects Showcase with Live Render Links */}
        <Projects />

        {/* Core Competencies & Skills */}
        <Skills />

        {/* Experience & Milestones */}
        <Experience />

        {/* Services & Capabilities */}
        <Services />

        {/* Interactive Developer Terminal with Theme and Info Commands */}
        <InteractiveTerminal
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />

        {/* Contact Us Section */}
        <Contact />
      </main>

      {/* Footer with Theme Status and Jump to Top */}
      <Footer
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      {/* Full Resume / CV Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Floating Theme Switcher Dock with Shortcut 'T' */}
      <ThemeToggleFloating
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    </div>
  );
}
