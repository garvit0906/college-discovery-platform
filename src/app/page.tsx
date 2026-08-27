import React from 'react';
import Link from 'next/link';
import { COLLEGES_DATA } from '@/lib/data';
import CollegeCard from '@/components/CollegeCard';
import PredictorForm from '@/components/PredictorForm';
import { Search, GraduationCap, Scale, Target, Sparkles, Building2, TrendingUp, Award, ArrowRight } from 'lucide-react';

export default function HomePage() {
  const topColleges = COLLEGES_DATA.slice(0, 6);

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/15 via-transparent to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Smart AI-Powered College Discovery & Decision Platform</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Discover Top Colleges, Compare Fees & Predict Your{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent">
              Admission Chances
            </span>
          </h1>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Compare 20+ top tier engineering, medical, and management institutions in India side-by-side with verified NIRF rankings, placement records, and cutoff rank predictors.
          </p>

          {/* Quick Search & CTA */}
          <div className="max-w-2xl mx-auto bg-slate-900/90 border border-slate-700/80 p-2 rounded-2xl shadow-2xl flex flex-col sm:flex-row items-center gap-2 backdrop-blur">
            <div className="flex items-center gap-2 px-4 py-2 w-full text-slate-300">
              <Search className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <input
                type="text"
                readOnly
                placeholder="Search IIT Bombay, BITS Pilani, Computer Science..."
                className="w-full bg-transparent border-none text-white placeholder-slate-400 text-sm focus:outline-none cursor-pointer"
              />
            </div>
            <Link
              href="/colleges"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm whitespace-nowrap flex items-center justify-center gap-2 shadow-lg transition"
            >
              <span>Explore All Colleges</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Key Stat Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 text-slate-300 border-t border-slate-800/80">
            <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">20+</div>
              <div className="text-xs text-slate-400 mt-1">Top Tier Colleges</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">₹168 LPA</div>
              <div className="text-xs text-slate-400 mt-1">Highest Package Record</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">100%</div>
              <div className="text-xs text-slate-400 mt-1">Verified Placements</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-400">4 Exams</div>
              <div className="text-xs text-slate-400 mt-1">JEE, BITSAT, NEET, CAT</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Colleges Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
              Handpicked Institutions
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Top Premier Colleges in India</h2>
          </div>
          <Link
            href="/colleges"
            className="text-sm font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1"
          >
            <span>View All Colleges Directory</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topColleges.map((college) => (
            <CollegeCard key={college.id} college={college} />
          ))}
        </div>
      </section>

      {/* Embedded Predictor Tool Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PredictorForm />
      </section>

      {/* Core Features Highlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white max-w-xl mx-auto">
            Why Students & Parents Trust CampusFinder
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="w-10 h-10 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center font-bold">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="text-white font-bold text-lg">Multi-Facet Filtering</h3>
              <p className="text-slate-400 text-sm">
                Filter by location, tuition fee range, accreditation, student rating, and placement statistics in real-time.
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="w-10 h-10 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center font-bold">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="text-white font-bold text-lg">Side-by-Side Comparator</h3>
              <p className="text-slate-400 text-sm">
                Compare up to 3 colleges side-by-side on fees, average package, top recruiters, and NIRF rankings.
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="w-10 h-10 bg-amber-500/10 text-amber-400 rounded-xl flex items-center justify-center font-bold">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-white font-bold text-lg">Cutoff Rank Predictor</h3>
              <p className="text-slate-400 text-sm">
                Input your exam rank (JEE Main, BITSAT, NEET, CAT) and get instant probability match badges for eligible colleges.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
