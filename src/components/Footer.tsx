import React from 'react';
import Link from 'next/link';
import { GraduationCap, Heart, Code2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4 md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-600 rounded-lg text-white">
              <GraduationCap className="w-5 h-5" />
            </div>
            <span className="font-bold text-lg text-white">CampusFinder</span>
          </div>
          <p className="text-sm text-slate-400 max-w-sm">
            A Next.js full-stack college discovery, placement comparison matrix, and entrance rank prediction platform. Designed & developed by <strong className="text-white">Garvit</strong> for the Unstop AI Software Engineer / Full Stack Developer Internship Assignment.
          </p>
          <div className="flex items-center gap-3 text-xs text-slate-500 pt-2">
            <a
              href="https://github.com/garvit0906/college-discovery-platform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>GitHub Repository</span>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/colleges" className="hover:text-blue-400 transition">
                All Colleges
              </Link>
            </li>
            <li>
              <Link href="/compare" className="hover:text-blue-400 transition">
                Compare Matrix
              </Link>
            </li>
            <li>
              <Link href="/predictor" className="hover:text-blue-400 transition">
                Rank Predictor Tool
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Developer Credits</h4>
          <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-2 text-xs">
            <div className="font-bold text-white text-sm">Garvit</div>
            <div className="text-blue-400 font-medium">Full Stack Engineer Applicant</div>
            <p className="text-slate-400">
              Track A — College Discovery & Decision Platform
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
        <p>© 2026 CampusFinder. Designed & Developed by Garvit.</p>
        <p className="flex items-center gap-1 mt-2 sm:mt-0">
          Crafted with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> & Next.js 14 for Unstop Internship Submission
        </p>
      </div>
    </footer>
  );
}
