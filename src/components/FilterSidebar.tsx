'use client';

import React from 'react';
import { FilterOptions } from '@/types';
import { Filter, RotateCcw, SlidersHorizontal } from 'lucide-react';

interface FilterSidebarProps {
  filters: FilterOptions;
  onChange: (newFilters: FilterOptions) => void;
  onReset: () => void;
}

const STATES = ['All', 'Maharashtra', 'Delhi', 'Rajasthan', 'Gujarat', 'Tamil Nadu'];
const TYPES = ['All', 'Public', 'Private'];
const DEGREES = ['All', 'B.Tech', 'MBA', 'MBBS'];

export default function FilterSidebar({ filters, onChange, onReset }: FilterSidebarProps) {
  const updateFilter = (key: keyof FilterOptions, value: any) => {
    onChange({ ...filters, [key]: value, page: 1 });
  };

  return (
    <aside className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-6 text-sm text-slate-300 shadow-md">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2 text-white font-bold text-base">
          <SlidersHorizontal className="w-4 h-4 text-blue-400" />
          <span>Filter Colleges</span>
        </div>
        <button
          onClick={onReset}
          className="text-xs text-slate-400 hover:text-blue-400 flex items-center gap-1 transition"
        >
          <RotateCcw className="w-3 h-3" />
          Reset
        </button>
      </div>

      {/* State Location Filter */}
      <div className="space-y-2">
        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">State / Location</label>
        <select
          value={filters.state || 'All'}
          onChange={(e) => updateFilter('state', e.target.value)}
          className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-slate-200 focus:outline-none focus:border-blue-500 transition"
        >
          {STATES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Institute Type Filter */}
      <div className="space-y-2">
        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Institute Type</label>
        <div className="grid grid-cols-3 gap-1.5 bg-slate-800/60 p-1 rounded-xl border border-slate-800">
          {TYPES.map((t) => (
            <button
              key={t}
              onClick={() => updateFilter('type', t)}
              className={`py-1.5 rounded-lg text-xs font-medium transition ${
                (filters.type || 'All') === t
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Course Degree Filter */}
      <div className="space-y-2">
        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Course / Stream</label>
        <select
          value={filters.courseDegree || 'All'}
          onChange={(e) => updateFilter('courseDegree', e.target.value)}
          className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-slate-200 focus:outline-none focus:border-blue-500 transition"
        >
          {DEGREES.map((d) => (
            <option key={d} value={d}>
              {d === 'All' ? 'All Streams' : d}
            </option>
          ))}
        </select>
      </div>

      {/* Maximum Tuition Fee Slider */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs">
          <label className="font-semibold text-slate-400 uppercase tracking-wider">Max Fee (Lakhs)</label>
          <span className="text-blue-400 font-bold">
            {filters.maxFee && filters.maxFee > 0 ? `₹${filters.maxFee} Lakhs` : 'Any'}
          </span>
        </div>
        <input
          type="range"
          min="1"
          max="30"
          step="1"
          value={filters.maxFee || 30}
          onChange={(e) => updateFilter('maxFee', parseFloat(e.target.value))}
          className="w-full accent-blue-500 bg-slate-800 rounded-lg cursor-pointer"
        />
        <div className="flex justify-between text-[10px] text-slate-500">
          <span>₹1L</span>
          <span>₹15L</span>
          <span>₹30L+</span>
        </div>
      </div>

      {/* Minimum Rating */}
      <div className="space-y-2">
        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Minimum Rating</label>
        <div className="flex items-center justify-between gap-1">
          {[0, 4.0, 4.5, 4.8].map((r) => (
            <button
              key={r}
              onClick={() => updateFilter('minRating', r)}
              className={`flex-1 py-1.5 rounded-lg text-xs font-semibold border transition ${
                (filters.minRating || 0) === r
                  ? 'bg-amber-500/20 text-amber-400 border-amber-500/40'
                  : 'bg-slate-800/40 text-slate-400 border-slate-800 hover:border-slate-700'
              }`}
            >
              {r === 0 ? 'Any' : `${r}★+`}
            </button>
          ))}
        </div>
      </div>

      {/* Sort By */}
      <div className="space-y-2 pt-2 border-t border-slate-800">
        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Sort By</label>
        <select
          value={filters.sortBy || 'nirf'}
          onChange={(e) => updateFilter('sortBy', e.target.value)}
          className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-slate-200 focus:outline-none focus:border-blue-500 transition"
        >
          <option value="nirf">NIRF Ranking (Top First)</option>
          <option value="rating">User Rating (High to Low)</option>
          <option value="packageDesc">Avg Package (High to Low)</option>
          <option value="feeAsc">Tuition Fee (Low to High)</option>
        </select>
      </div>
    </aside>
  );
}
