'use client';

import React, { useState, useEffect } from 'react';
import { College } from '@/types';
import { COLLEGES_DATA } from '@/lib/data';
import ComparisonTable from '@/components/ComparisonTable';
import { Scale, Plus, Trash2, Trophy, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ComparePage() {
  const [comparedColleges, setComparedColleges] = useState<College[]>([]);
  const [addModalOpen, setAddModalOpen] = useState(false);

  const loadCompared = () => {
    let ids: string[] = JSON.parse(localStorage.getItem('compare_colleges') || '[]');
    if (ids.length === 0) {
      // Default initial comparison for demonstration
      ids = ['col-1', 'col-3']; // IIT Bombay vs BITS Pilani
      localStorage.setItem('compare_colleges', JSON.stringify(ids));
    }
    const matched = COLLEGES_DATA.filter((c) => ids.includes(c.id));
    setComparedColleges(matched);
  };

  useEffect(() => {
    loadCompared();
    window.addEventListener('compare_updated', loadCompared);
    return () => window.removeEventListener('compare_updated', loadCompared);
  }, []);

  const handleRemove = (collegeId: string) => {
    const ids: string[] = JSON.parse(localStorage.getItem('compare_colleges') || '[]');
    const updated = ids.filter((id) => id !== collegeId);
    localStorage.setItem('compare_colleges', JSON.stringify(updated));
    loadCompared();
  };

  const handleAddCollege = (collegeId: string) => {
    const ids: string[] = JSON.parse(localStorage.getItem('compare_colleges') || '[]');
    if (ids.length >= 3) {
      alert('Maximum 3 colleges can be compared side-by-side.');
      return;
    }
    if (!ids.includes(collegeId)) {
      const updated = [...ids, collegeId];
      localStorage.setItem('compare_colleges', JSON.stringify(updated));
      loadCompared();
    }
    setAddModalOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-500/10 text-blue-400 text-xs font-semibold">
            <Scale className="w-3.5 h-3.5" />
            Side-by-Side Comparison Matrix
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white">Compare Colleges</h1>
          <p className="text-sm text-slate-400 max-w-xl">
            Evaluate fees, average packages, highest packages, NIRF rankings, and top recruiters side-by-side to make informed academic decisions.
          </p>
        </div>

        {comparedColleges.length < 3 && (
          <button
            onClick={() => setAddModalOpen(true)}
            className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition"
          >
            <Plus className="w-4 h-4" />
            <span>Add College to Compare ({comparedColleges.length}/3)</span>
          </button>
        )}
      </div>

      {/* Comparison Matrix Table */}
      <ComparisonTable colleges={comparedColleges} onRemove={handleRemove} />

      {/* Add College Modal Picker */}
      {addModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-lg font-bold text-white">Select College to Add</h3>
              <button
                onClick={() => setAddModalOpen(false)}
                className="text-slate-400 hover:text-white text-sm"
              >
                ✕
              </button>
            </div>

            <div className="max-h-80 overflow-y-auto space-y-2">
              {COLLEGES_DATA.filter(
                (c) => !comparedColleges.some((comp) => comp.id === c.id)
              ).map((college) => (
                <div
                  key={college.id}
                  onClick={() => handleAddCollege(college.id)}
                  className="p-3 bg-slate-800/60 hover:bg-slate-800 rounded-xl border border-slate-800 hover:border-blue-500/50 flex items-center justify-between cursor-pointer transition"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={college.logoUrl}
                      alt={college.shortName}
                      className="w-8 h-8 rounded-lg border border-slate-700 bg-white object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-white text-sm">{college.shortName}</h4>
                      <span className="text-xs text-slate-400">NIRF #{college.nirfRank} • {college.city}</span>
                    </div>
                  </div>
                  <span className="text-xs text-blue-400 font-bold flex items-center gap-1">
                    Add <Plus className="w-3.5 h-3.5" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
