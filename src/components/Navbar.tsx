'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { GraduationCap, Scale, Target, Bookmark, Menu, X, User, Code2, CheckCircle2 } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [devModalOpen, setDevModalOpen] = useState(false);
  const [savedCount, setSavedCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      const saved = JSON.parse(localStorage.getItem('saved_colleges') || '[]');
      setSavedCount(saved.length);
    };

    updateCount();
    window.addEventListener('storage', updateCount);
    window.addEventListener('saved_updated', updateCount);

    return () => {
      window.removeEventListener('storage', updateCount);
      window.removeEventListener('saved_updated', updateCount);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-xl group-hover:scale-105 transition-transform shadow-md">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-none tracking-tight bg-gradient-to-r from-blue-400 to-indigo-200 bg-clip-text text-transparent">
              CampusFinder
            </span>
            <span className="text-[10px] text-slate-400 font-medium tracking-widest uppercase">
              Discovery & Predictor
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-1 font-medium text-sm">
          <Link
            href="/colleges"
            className="px-4 py-2 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
          >
            Find Colleges
          </Link>

          <Link
            href="/compare"
            className="px-4 py-2 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <Scale className="w-4 h-4 text-blue-400" />
            Compare Colleges
          </Link>

          <Link
            href="/predictor"
            className="px-4 py-2 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <Target className="w-4 h-4 text-emerald-400" />
            Rank Predictor
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setDevModalOpen(true)}
            className="px-3.5 py-2 rounded-lg bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 border border-blue-500/30 text-sm font-semibold flex items-center gap-1.5 transition"
          >
            <User className="w-4 h-4" />
            <span>Developer Profile</span>
          </button>

          <Link
            href="/colleges?saved=true"
            className="relative px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium flex items-center gap-2 border border-slate-700 transition"
          >
            <Bookmark className="w-4 h-4 text-amber-400 fill-amber-400/20" />
            <span>Saved</span>
            {savedCount > 0 && (
              <span className="bg-amber-500 text-slate-950 font-bold text-xs px-1.5 py-0.5 rounded-full">
                {savedCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-4 space-y-2">
          <Link
            href="/colleges"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:bg-slate-800"
          >
            Find Colleges
          </Link>
          <Link
            href="/compare"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:bg-slate-800"
          >
            Compare Colleges
          </Link>
          <Link
            href="/predictor"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:bg-slate-800"
          >
            Rank Predictor
          </Link>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              setDevModalOpen(true);
            }}
            className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-blue-400 hover:bg-slate-800 flex items-center gap-2"
          >
            <User className="w-4 h-4" />
            <span>Developer Profile (Garvit)</span>
          </button>
        </div>
      )}

      {/* Developer Profile Modal */}
      {devModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 space-y-6 shadow-2xl relative">
            <button
              onClick={() => setDevModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 border-b border-slate-800 pb-4">
              <div className="w-14 h-14 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-2xl flex items-center justify-center text-white font-extrabold text-2xl shadow-lg">
                G
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white">Garvit</h3>
                <p className="text-xs text-blue-400 font-semibold">Full Stack Developer Candidate</p>
                <p className="text-[11px] text-slate-400">Unstop AI Engineering Internship Demo</p>
              </div>
            </div>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="font-semibold text-slate-200">Track Chosen:</div>
              <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-800 space-y-1">
                <div className="text-emerald-400 font-bold text-sm">Track A — College Discovery Platform</div>
                <p className="text-slate-400">
                  Built end-to-end full-stack platform featuring multi-facet filtering, college comparison matrix, and rank predictor engine.
                </p>
              </div>

              <div className="font-semibold text-slate-200 pt-2">Tech Stack Used:</div>
              <div className="grid grid-cols-2 gap-2 text-slate-300">
                <span className="bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-700 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Next.js 14/15
                </span>
                <span className="bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-700 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> TypeScript
                </span>
                <span className="bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-700 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Tailwind CSS
                </span>
                <span className="bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-700 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Prisma & Postgres
                </span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800">
              <a
                href="https://github.com/garvit0906/college-discovery-platform"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>View GitHub Repository</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
