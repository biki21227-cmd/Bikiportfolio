import React, { useState, useRef, useEffect } from 'react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';

interface CommandOutput {
  command: string;
  response: React.ReactNode;
}

interface InteractiveTerminalProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({ darkMode, toggleDarkMode }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'bikila --summary',
      response: (
        <div>
          <p className="text-emerald-400 font-semibold">
            Bikila Web [v2.4.0-production] initialized.
          </p>
          <p className="text-zinc-400 mt-1">
            Full-Stack Software Engineer & Web Developer. Run <span className="text-yellow-300 font-semibold">'projects'</span>, <span className="text-yellow-300 font-semibold">'theme'</span>, or <span className="text-yellow-300 font-semibold">'contact'</span> for details.
          </p>
        </div>
      )
    }
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (cmdText: string) => {
    const clean = cmdText.trim().toLowerCase();
    let res: React.ReactNode;

    switch (clean) {
      case 'help':
        res = (
          <div className="space-y-1 text-zinc-300">
            <p className="text-blue-400 font-semibold">Available Commands:</p>
            <p><span className="text-yellow-300 font-mono">projects</span> - View live deployed web applications & Render URLs</p>
            <p><span className="text-yellow-300 font-mono">theme</span> - Toggle between Light Mode and Dark Mode</p>
            <p><span className="text-yellow-300 font-mono">contact</span> - Get direct email & contact pathways</p>
            <p><span className="text-yellow-300 font-mono">skills</span> - Display key technical competencies</p>
            <p><span className="text-yellow-300 font-mono">about</span> - Brief engineering overview</p>
            <p><span className="text-yellow-300 font-mono">clear</span> - Clear terminal session output</p>
          </div>
        );
        break;

      case 'theme':
      case 'theme toggle':
        toggleDarkMode();
        res = (
          <p className="text-cyan-400 font-semibold">
            Theme toggled! Currently active: {darkMode ? 'Light Mode' : 'Dark Mode'}
          </p>
        );
        break;

      case 'theme dark':
        if (!darkMode) toggleDarkMode();
        res = <p className="text-purple-400 font-semibold">Dark mode activated.</p>;
        break;

      case 'theme light':
        if (darkMode) toggleDarkMode();
        res = <p className="text-amber-400 font-semibold">Light mode activated.</p>;
        break;

      case 'projects':
        res = (
          <div className="space-y-2 text-zinc-300">
            <p className="text-emerald-400 font-semibold">Deployed Production Projects:</p>
            {PROJECTS.map((p, idx) => (
              <div key={idx} className="border-l-2 border-zinc-700 pl-2">
                <p className="font-bold text-white">{p.title}</p>
                <p className="text-xs text-zinc-400">{p.description}</p>
                <a 
                  href={p.liveUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-xs text-blue-400 underline hover:text-blue-300"
                >
                  {p.liveUrl}
                </a>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        res = (
          <div className="space-y-1 text-zinc-300">
            <p className="text-emerald-400 font-semibold">Contact Channels:</p>
            <p>Email: <span className="text-blue-400 font-mono">{PERSONAL_INFO.email}</span></p>
            <p>Location: <span className="text-zinc-200">{PERSONAL_INFO.location}</span></p>
            <p>Availability: <span className="text-zinc-200">{PERSONAL_INFO.availability}</span></p>
          </div>
        );
        break;

      case 'skills':
        res = (
          <div className="space-y-1 text-zinc-300">
            <p className="text-emerald-400 font-semibold">Technical Arsenal:</p>
            <p><span className="text-zinc-400">Frontend:</span> React 19, TypeScript, Tailwind CSS, Next.js, Framer Motion</p>
            <p><span className="text-zinc-400">Backend:</span> Node.js, Express, REST APIs, PostgreSQL, Redis</p>
            <p><span className="text-zinc-400">Cloud:</span> Render Cloud, Docker, Git, CI/CD, Vite</p>
          </div>
        );
        break;

      case 'about':
        res = (
          <div className="space-y-1 text-zinc-300">
            <p className="text-white font-semibold">About Bikila:</p>
            <p className="text-sm text-zinc-300">{PERSONAL_INFO.bio}</p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        res = (
          <p className="text-red-400">
            Command not recognized: '{clean}'. Type <span className="text-yellow-300 font-semibold">'help'</span> for list.
          </p>
        );
    }

    setHistory(prev => [...prev, { command: cmdText, response: res }]);
    setInputVal('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    executeCommand(inputVal);
  };

  return (
    <section className="py-16 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-zinc-800 bg-[#0c0d10] p-6 shadow-2xl text-zinc-100 font-mono text-xs">
          {/* Terminal Window Header */}
          <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <span className="h-3 w-3 rounded-full bg-green-500/80" />
              <span className="ml-2 font-mono text-xs text-zinc-400">
                bikila@web-console:~ (interactive)
              </span>
            </div>

            {/* Quick Command Buttons */}
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-zinc-500 text-[11px]">Quick inspect:</span>
              {['theme', 'projects', 'contact', 'skills', 'clear'].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => executeCommand(cmd)}
                  className="rounded bg-zinc-800 px-2 py-1 text-[11px] text-zinc-300 transition-colors hover:bg-zinc-700 hover:text-white"
                >
                  {cmd}
                </button>
              ))}
            </div>
          </div>

          {/* Terminal Output Area */}
          <div className="max-h-64 space-y-4 overflow-y-auto pr-2">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-2 text-zinc-400">
                  <span className="text-emerald-400 font-bold">$</span>
                  <span className="text-white font-semibold">{item.command}</span>
                </div>
                <div className="pl-4">{item.response}</div>
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Terminal Command Input Form */}
          <form onSubmit={handleSubmit} className="mt-4 flex items-center gap-2 border-t border-zinc-800 pt-3">
            <span className="text-emerald-400 font-bold">$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="type 'theme', 'projects', or 'help'..."
              className="flex-1 bg-transparent text-white placeholder-zinc-500 outline-none font-mono text-xs"
            />
            <button
              type="submit"
              className="rounded bg-zinc-800 px-3 py-1 text-[11px] text-zinc-200 hover:bg-zinc-700"
            >
              Enter
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
