import React, { useState, useEffect } from 'react';
import { Sun, Moon, Laptop, Check } from 'lucide-react';

interface ThemeToggleFloatingProps {
  darkMode: boolean;
  setDarkMode: (value: boolean | ((prev: boolean) => boolean)) => void;
}

export const ThemeToggleFloating: React.FC<ThemeToggleFloatingProps> = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Keyboard shortcut: Press 'T' or 't' when not typing in an input/textarea
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeEl = document.activeElement;
      const isInput = activeEl?.tagName === 'INPUT' || activeEl?.tagName === 'TEXTAREA' || (activeEl as HTMLElement)?.isContentEditable;
      if (!isInput && (e.key === 't' || e.key === 'T')) {
        setDarkMode(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setDarkMode]);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end print:hidden">
      {/* Expanded Menu Popover */}
      {isOpen && (
        <div className="mb-2 w-48 rounded-2xl border border-zinc-200 bg-white/95 p-2 shadow-2xl backdrop-blur-md transition-all dark:border-zinc-800 dark:bg-zinc-900/95">
          <div className="px-2 py-1 text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
            Appearance
          </div>
          
          <button
            onClick={() => {
              setDarkMode(false);
              setIsOpen(false);
            }}
            className={`flex w-full items-center justify-between rounded-xl px-2.5 py-2 text-xs font-medium transition-colors ${
              !darkMode
                ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300'
                : 'text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800'
            }`}
          >
            <span className="flex items-center gap-2">
              <Sun className="h-4 w-4 text-amber-500" />
              <span>Light Mode</span>
            </span>
            {!darkMode && <Check className="h-3.5 w-3.5" />}
          </button>

          <button
            onClick={() => {
              setDarkMode(true);
              setIsOpen(false);
            }}
            className={`flex w-full items-center justify-between rounded-xl px-2.5 py-2 text-xs font-medium transition-colors ${
              darkMode
                ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300'
                : 'text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800'
            }`}
          >
            <span className="flex items-center gap-2">
              <Moon className="h-4 w-4 text-indigo-400" />
              <span>Dark Mode</span>
            </span>
            {darkMode && <Check className="h-3.5 w-3.5" />}
          </button>

          <div className="mt-1 border-t border-zinc-100 pt-1.5 px-2 text-[10px] text-zinc-400 dark:border-zinc-800 flex items-center justify-between">
            <span>Shortcut:</span>
            <kbd className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[10px] text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">T</kbd>
          </div>
        </div>
      )}

      {/* Floating Pill Toggle Button */}
      <div className="flex items-center rounded-2xl border border-zinc-200/90 bg-white/95 p-1.5 shadow-xl backdrop-blur-md transition-all hover:scale-105 hover:shadow-2xl dark:border-zinc-800/90 dark:bg-zinc-900/95">
        <button
          onClick={() => setDarkMode(prev => !prev)}
          title={`Currently ${darkMode ? 'Dark Mode' : 'Light Mode'}. Click to toggle (or press 'T')`}
          className="flex items-center gap-2 rounded-xl px-3 py-1.5 text-xs font-semibold text-zinc-800 transition-colors hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
        >
          {darkMode ? (
            <>
              <Moon className="h-4 w-4 text-indigo-400" />
              <span>Dark</span>
            </>
          ) : (
            <>
              <Sun className="h-4 w-4 text-amber-500" />
              <span>Light</span>
            </>
          )}
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Theme options"
          className="flex h-7 w-7 items-center justify-center rounded-lg text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
        >
          <span className="text-[11px] font-bold">•••</span>
        </button>
      </div>
    </div>
  );
};
