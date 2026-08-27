import React from 'react';
import Link from 'next/link';
import { GraduationCap, Heart } from 'lucide-react';

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
            A Next.js full-stack college discovery, placement comparison matrix, and entrance rank prediction platform. Built for Unstop AI Engineering Internship Demo Assignment.
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span>Built with Next.js 14, TypeScript, TailwindCSS & Prisma</span>
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
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Top Stream Targets</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/colleges?courseDegree=B.Tech" className="hover:text-blue-400 transition">
                Engineering (B.Tech)
              </Link>
            </li>
            <li>
              <Link href="/colleges?courseDegree=MBA" className="hover:text-blue-400 transition">
                Management (MBA)
              </Link>
            </li>
            <li>
              <Link href="/colleges?courseDegree=MBBS" className="hover:text-blue-400 transition">
                Medical (MBBS)
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
        <p>© 2026 CampusFinder. All rights reserved.</p>
        <p className="flex items-center gap-1 mt-2 sm:mt-0">
          Crafted with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> for Unstop Internship Submission
        </p>
      </div>
    </footer>
  );
}
