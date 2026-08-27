'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { GraduationCap, Scale, Target, Bookmark, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      <div className="max-w-7xl mx-mx px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between mx-auto">
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
        </div>
      )}
    </header>
  );
}
