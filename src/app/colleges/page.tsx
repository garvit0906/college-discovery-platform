'use client';

import React, { useState, useEffect, useTransition, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { College, FilterOptions } from '@/types';
import CollegeCard from '@/components/CollegeCard';
import FilterSidebar from '@/components/FilterSidebar';
import { Search, SlidersHorizontal, Bookmark, RefreshCw, Trophy, ArrowRight } from 'lucide-react';
import Link from 'next/link';

function DirectoryContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const [colleges, setColleges] = useState<College[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);

  const [filters, setFilters] = useState<FilterOptions>({
    search: searchParams.get('search') || '',
    state: searchParams.get('state') || 'All',
    type: searchParams.get('type') || 'All',
    courseDegree: searchParams.get('courseDegree') || 'All',
    maxFee: searchParams.get('maxFee') ? parseFloat(searchParams.get('maxFee')!) : 30,
    minRating: searchParams.get('minRating') ? parseFloat(searchParams.get('minRating')!) : 0,
    sortBy: (searchParams.get('sortBy') as any) || 'nirf',
    page: 1,
    limit: 12
  });

  const showSavedOnly = searchParams.get('saved') === 'true';

  const fetchColleges = async () => {
    setLoading(true);
    try {
      const query = new URLSearchParams();
      if (filters.search) query.set('search', filters.search);
      if (filters.state && filters.state !== 'All') query.set('state', filters.state);
      if (filters.type && filters.type !== 'All') query.set('type', filters.type);
      if (filters.courseDegree && filters.courseDegree !== 'All') query.set('courseDegree', filters.courseDegree);
      if (filters.maxFee) query.set('maxFee', filters.maxFee.toString());
      if (filters.minRating) query.set('minRating', filters.minRating.toString());
      if (filters.sortBy) query.set('sortBy', filters.sortBy);
      query.set('page', (filters.page || 1).toString());
      query.set('limit', (filters.limit || 12).toString());

      const res = await fetch(`/api/colleges?${query.toString()}`);
      const data = await res.json();

      if (data.success) {
        let list: College[] = data.data;

        if (showSavedOnly) {
          const savedIds = JSON.parse(localStorage.getItem('saved_colleges') || '[]');
          list = list.filter((c) => savedIds.includes(c.id));
        }

        setColleges(list);
        setTotalCount(showSavedOnly ? list.length : data.pagination.totalCount);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchColleges();
  }, [filters, showSavedOnly]);

  const handleResetFilters = () => {
    setFilters({
      search: '',
      state: 'All',
      type: 'All',
      courseDegree: 'All',
      maxFee: 30,
      minRating: 0,
      sortBy: 'nirf',
      page: 1,
      limit: 12
    });
    if (showSavedOnly) {
      router.push('/colleges');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Directory Title & Search Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              {showSavedOnly ? 'Your Saved Colleges Wishlist' : 'College Directory & Search'}
            </h1>
            <p className="text-sm text-slate-400 mt-1">
              {showSavedOnly
                ? 'Colleges you bookmarked for comparison and decision making.'
                : 'Explore NIRF ranked Indian universities, compare fees, placements, and campus facilities.'}
            </p>
          </div>

          <div className="flex items-center gap-2">
            {showSavedOnly ? (
              <Link
                href="/colleges"
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold"
              >
                View All Colleges
              </Link>
            ) : (
              <Link
                href="/compare"
                className="px-4 py-2 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 text-xs font-semibold hover:bg-blue-600/30 transition flex items-center gap-1.5"
              >
                <Trophy className="w-3.5 h-3.5" />
                Compare Selected
              </Link>
            )}
          </div>
        </div>

        {/* Live Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search by college name, city, state, course (e.g. Computer Science, Mumbai)..."
            value={filters.search || ''}
            onChange={(e) => setFilters((prev) => ({ ...prev, search: e.target.value, page: 1 }))}
            className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-2xl text-white placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500 transition shadow-inner"
          />
        </div>
      </div>

      {/* Directory Grid + Filter Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <FilterSidebar
            filters={filters}
            onChange={(newF) => setFilters(newF)}
            onReset={handleResetFilters}
          />
        </div>

        {/* College Cards Results */}
        <div className="lg:col-span-3 space-y-6">
          <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
            <span>
              Showing <strong className="text-white">{colleges.length}</strong> of{' '}
              <strong className="text-white">{totalCount}</strong> Colleges
            </span>
            <span>Sorted by: <strong className="text-blue-400 uppercase">{filters.sortBy}</strong></span>
          </div>

          {loading ? (
            <div className="py-20 text-center text-slate-400 flex flex-col items-center gap-3">
              <RefreshCw className="w-8 h-8 text-blue-500 animate-spin" />
              <span>Fetching College Directory...</span>
            </div>
          ) : colleges.length === 0 ? (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-12 text-center text-slate-400 space-y-4">
              <Bookmark className="w-12 h-12 text-slate-600 mx-auto" />
              <h3 className="text-lg font-bold text-white">No Colleges Match Your Filter Criteria</h3>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                Try widening your fee range or resetting location filters to see all available institutions.
              </p>
              <button
                onClick={handleResetFilters}
                className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {colleges.map((college) => (
                <CollegeCard key={college.id} college={college} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function DirectoryPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-slate-400">Loading Directory...</div>}>
      <DirectoryContent />
    </Suspense>
  );
}
