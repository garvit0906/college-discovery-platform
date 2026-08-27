'use client';

import React from 'react';
import Link from 'next/link';
import { College } from '@/types';
import { Trophy, Star, IndianRupee, TrendingUp, MapPin, Building, Trash2, ArrowRight } from 'lucide-react';

interface ComparisonTableProps {
  colleges: College[];
  onRemove: (collegeId: string) => void;
}

export default function ComparisonTable({ colleges, onRemove }: ComparisonTableProps) {
  if (colleges.length === 0) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-12 text-center text-slate-400 space-y-4">
        <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto text-blue-400">
          <Trophy className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-white">No Colleges Selected for Comparison</h3>
        <p className="max-w-md mx-auto text-sm">
          Browse colleges from the directory and click the <strong className="text-blue-400">"Compare"</strong> button on up to 3 colleges to compare them side-by-side.
        </p>
        <Link
          href="/colleges"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition shadow-lg"
        >
          <span>Explore Colleges Directory</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  // Find best values for highlights
  const highestAvgPackage = Math.max(...colleges.map((c) => c.avgPackageLpa));
  const lowestFee = Math.min(...colleges.map((c) => c.tuitionFeeMinLakhs));
  const bestNirf = Math.min(...colleges.map((c) => c.nirfRank));

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="bg-slate-950 border-b border-slate-800">
              <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider w-48">
                Comparison Feature
              </th>
              {colleges.map((college) => (
                <th key={college.id} className="p-4 min-w-[240px] align-top">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <img
                      src={college.logoUrl}
                      alt={college.shortName}
                      className="w-10 h-10 rounded-lg border border-slate-700 bg-white object-cover shadow"
                    />
                    <button
                      onClick={() => onRemove(college.id)}
                      title="Remove from comparison"
                      className="p-1.5 rounded-lg text-slate-500 hover:text-red-400 hover:bg-slate-800 transition"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <h4 className="text-white font-bold text-base leading-snug">{college.name}</h4>
                  <p className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    {college.location}
                  </p>
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-800/60 text-sm text-slate-300">
            {/* NIRF Rank */}
            <tr className="hover:bg-slate-800/30">
              <td className="p-4 font-semibold text-slate-400 flex items-center gap-2">
                <Trophy className="w-4 h-4 text-amber-400" />
                <span>NIRF Ranking</span>
              </td>
              {colleges.map((c) => (
                <td key={c.id} className="p-4">
                  <span
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-bold ${
                      c.nirfRank === bestNirf
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                        : 'bg-slate-800 text-slate-300'
                    }`}
                  >
                    NIRF #{c.nirfRank}
                    {c.nirfRank === bestNirf && <span className="ml-1 text-[10px] uppercase font-extrabold">(Best)</span>}
                  </span>
                </td>
              ))}
            </tr>

            {/* Rating */}
            <tr className="hover:bg-slate-800/30">
              <td className="p-4 font-semibold text-slate-400 flex items-center gap-2">
                <Star className="w-4 h-4 text-emerald-400" />
                <span>Student Rating</span>
              </td>
              {colleges.map((c) => (
                <td key={c.id} className="p-4 font-semibold text-white">
                  <span className="text-emerald-400 font-bold mr-1">{c.rating.toFixed(1)} ★</span>
                  <span className="text-xs text-slate-500">({c.reviewCount} reviews)</span>
                </td>
              ))}
            </tr>

            {/* Tuition Fees */}
            <tr className="hover:bg-slate-800/30">
              <td className="p-4 font-semibold text-slate-400 flex items-center gap-2">
                <IndianRupee className="w-4 h-4 text-blue-400" />
                <span>Tuition Fees</span>
              </td>
              {colleges.map((c) => (
                <td key={c.id} className="p-4">
                  <p className="font-bold text-white">
                    ₹{c.tuitionFeeMinLakhs}L - ₹{c.tuitionFeeMaxLakhs}L
                  </p>
                  {c.tuitionFeeMinLakhs === lowestFee && (
                    <span className="inline-block mt-1 bg-blue-500/20 text-blue-300 text-[10px] font-bold px-2 py-0.5 rounded border border-blue-500/30">
                      Lowest Fee
                    </span>
                  )}
                </td>
              ))}
            </tr>

            {/* Avg Package */}
            <tr className="hover:bg-slate-800/30">
              <td className="p-4 font-semibold text-slate-400 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span>Avg Package (LPA)</span>
              </td>
              {colleges.map((c) => (
                <td key={c.id} className="p-4">
                  <p className="font-bold text-emerald-400 text-base">₹{c.avgPackageLpa} LPA</p>
                  {c.avgPackageLpa === highestAvgPackage && (
                    <span className="inline-block mt-1 bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-500/30">
                      Highest ROI
                    </span>
                  )}
                </td>
              ))}
            </tr>

            {/* Highest Package */}
            <tr className="hover:bg-slate-800/30">
              <td className="p-4 font-semibold text-slate-400">Highest Package</td>
              {colleges.map((c) => (
                <td key={c.id} className="p-4 font-semibold text-slate-200">
                  ₹{c.highestPackageLpa} LPA
                </td>
              ))}
            </tr>

            {/* Placement % */}
            <tr className="hover:bg-slate-800/30">
              <td className="p-4 font-semibold text-slate-400">Placement %</td>
              {colleges.map((c) => (
                <td key={c.id} className="p-4 font-semibold text-slate-200">
                  {c.placementStats.placementRate}%
                </td>
              ))}
            </tr>

            {/* Institute Type */}
            <tr className="hover:bg-slate-800/30">
              <td className="p-4 font-semibold text-slate-400">Type & Status</td>
              {colleges.map((c) => (
                <td key={c.id} className="p-4 text-slate-300">
                  {c.type} Institute ({c.establishedYear})
                </td>
              ))}
            </tr>

            {/* Top Recruiters */}
            <tr className="hover:bg-slate-800/30">
              <td className="p-4 font-semibold text-slate-400">Top Recruiters</td>
              {colleges.map((c) => (
                <td key={c.id} className="p-4">
                  <div className="flex flex-wrap gap-1">
                    {c.placementStats.topRecruiters.map((r) => (
                      <span key={r} className="bg-slate-800 text-slate-300 text-xs px-2 py-0.5 rounded">
                        {r}
                      </span>
                    ))}
                  </div>
                </td>
              ))}
            </tr>

            {/* Actions */}
            <tr>
              <td className="p-4 font-semibold text-slate-400">Action</td>
              {colleges.map((c) => (
                <td key={c.id} className="p-4">
                  <Link
                    href={`/colleges/${c.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-400 hover:text-blue-300 hover:underline"
                  >
                    <span>Full Details Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
