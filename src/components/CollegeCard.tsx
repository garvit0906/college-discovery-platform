'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { College } from '@/types';
import { MapPin, Star, Trophy, IndianRupee, TrendingUp, Bookmark, Scale, ArrowRight } from 'lucide-react';

interface CollegeCardProps {
  college: College;
}

export default function CollegeCard({ college }: CollegeCardProps) {
  const [isSaved, setIsSaved] = useState(false);
  const [isCompare, setIsCompare] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('saved_colleges') || '[]');
    setIsSaved(saved.includes(college.id));

    const compareList = JSON.parse(localStorage.getItem('compare_colleges') || '[]');
    setIsCompare(compareList.includes(college.id));
  }, [college.id]);

  const toggleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    const saved = JSON.parse(localStorage.getItem('saved_colleges') || '[]');
    let updated;
    if (saved.includes(college.id)) {
      updated = saved.filter((id: string) => id !== college.id);
      setIsSaved(false);
    } else {
      updated = [...saved, college.id];
      setIsSaved(true);
    }
    localStorage.setItem('saved_colleges', JSON.stringify(updated));
    window.dispatchEvent(new Event('saved_updated'));
  };

  const toggleCompare = (e: React.MouseEvent) => {
    e.preventDefault();
    const compareList = JSON.parse(localStorage.getItem('compare_colleges') || '[]');
    let updated;
    if (compareList.includes(college.id)) {
      updated = compareList.filter((id: string) => id !== college.id);
      setIsCompare(false);
    } else {
      if (compareList.length >= 3) {
        alert('You can compare a maximum of 3 colleges side-by-side.');
        return;
      }
      updated = [...compareList, college.id];
      setIsCompare(true);
    }
    localStorage.setItem('compare_colleges', JSON.stringify(updated));
    window.dispatchEvent(new Event('compare_updated'));
  };

  return (
    <div className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 shadow-md hover:shadow-2xl flex flex-col">
      {/* Banner + Badges */}
      <div className="relative h-44 w-full bg-slate-800 overflow-hidden">
        <img
          src={college.bannerUrl}
          alt={college.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="bg-amber-500 text-slate-950 font-extrabold text-xs px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-md">
            <Trophy className="w-3.5 h-3.5" />
            NIRF #{college.nirfRank}
          </span>
          <span className="bg-slate-950/80 backdrop-blur text-slate-200 text-xs px-2.5 py-1 rounded-lg border border-slate-700/60 font-medium">
            {college.type}
          </span>
        </div>

        {/* Wishlist Bookmark Button */}
        <button
          onClick={toggleSave}
          title={isSaved ? 'Remove from Saved' : 'Save College'}
          className={`absolute top-3 right-3 p-2 rounded-xl backdrop-blur transition-colors ${
            isSaved
              ? 'bg-amber-500 text-slate-950 shadow-lg'
              : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-slate-950' : ''}`} />
        </button>

        {/* Logo & Name overlay */}
        <div className="absolute bottom-3 left-4 right-4 flex items-end gap-3">
          <img
            src={college.logoUrl}
            alt={college.shortName}
            className="w-12 h-12 rounded-xl border-2 border-slate-700 bg-white object-cover shadow-md flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-bold text-base leading-tight truncate group-hover:text-blue-400 transition-colors">
              {college.name}
            </h3>
            <p className="text-xs text-slate-300 flex items-center gap-1 mt-0.5 truncate">
              <MapPin className="w-3 h-3 text-slate-400 flex-shrink-0" />
              {college.location}
            </p>
          </div>
        </div>
      </div>

      {/* Content body */}
      <div className="p-4 space-y-4 flex-1 flex flex-col justify-between">
        {/* Rating & Accreditation */}
        <div className="flex items-center justify-between text-xs border-b border-slate-800/80 pb-3">
          <div className="flex items-center gap-1.5">
            <div className="bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded font-bold flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
              {college.rating.toFixed(1)}
            </div>
            <span className="text-slate-400">({college.reviewCount} reviews)</span>
          </div>
          <span className="text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded text-[11px] font-mono truncate max-w-[140px]">
            {college.accreditation}
          </span>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="bg-slate-800/50 p-2.5 rounded-xl border border-slate-800">
            <div className="text-slate-400 flex items-center gap-1 mb-0.5">
              <IndianRupee className="w-3 h-3 text-blue-400" />
              <span>Tuition Fee</span>
            </div>
            <p className="text-slate-100 font-semibold text-sm">
              ₹{college.tuitionFeeMinLakhs}L - ₹{college.tuitionFeeMaxLakhs}L
            </p>
          </div>

          <div className="bg-slate-800/50 p-2.5 rounded-xl border border-slate-800">
            <div className="text-slate-400 flex items-center gap-1 mb-0.5">
              <TrendingUp className="w-3 h-3 text-emerald-400" />
              <span>Avg Package</span>
            </div>
            <p className="text-emerald-400 font-bold text-sm">
              ₹{college.avgPackageLpa} LPA
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex items-center gap-2">
          <button
            onClick={toggleCompare}
            className={`flex-1 py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
              isCompare
                ? 'bg-blue-600/20 text-blue-400 border border-blue-500/40'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
            }`}
          >
            <Scale className="w-3.5 h-3.5" />
            {isCompare ? 'Comparing' : 'Compare'}
          </button>

          <Link
            href={`/colleges/${college.slug}`}
            className="flex-1 py-2 px-3 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white flex items-center justify-center gap-1 shadow-md transition-all"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
