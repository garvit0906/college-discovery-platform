'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { College } from '@/types';
import {
  Trophy,
  Star,
  MapPin,
  Building2,
  Calendar,
  IndianRupee,
  TrendingUp,
  Bookmark,
  Scale,
  Award,
  CheckCircle2,
  Users,
  MessageSquare,
  ArrowLeft,
  ExternalLink
} from 'lucide-react';
import Link from 'next/link';

export default function CollegeDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [college, setCollege] = useState<College | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'courses' | 'placements' | 'reviews'>('overview');
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const fetchCollege = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/colleges/${slug}`);
        const data = await res.json();
        if (data.success) {
          setCollege(data.data);

          const saved = JSON.parse(localStorage.getItem('saved_colleges') || '[]');
          setIsSaved(saved.includes(data.data.id));
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    if (slug) fetchCollege();
  }, [slug]);

  const toggleSave = () => {
    if (!college) return;
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

  const toggleCompare = () => {
    if (!college) return;
    const compareList = JSON.parse(localStorage.getItem('compare_colleges') || '[]');
    if (compareList.includes(college.id)) {
      alert('College is already added to comparison.');
      return;
    }
    if (compareList.length >= 3) {
      alert('You can compare max 3 colleges at once.');
      return;
    }
    const updated = [...compareList, college.id];
    localStorage.setItem('compare_colleges', JSON.stringify(updated));
    window.dispatchEvent(new Event('compare_updated'));
    alert(`${college.shortName} added to comparison list!`);
  };

  if (loading) {
    return (
      <div className="py-24 text-center text-slate-400 max-w-7xl mx-auto">
        <div className="animate-pulse space-y-4">
          <div className="h-64 bg-slate-800 rounded-3xl w-full" />
          <div className="h-12 bg-slate-800 rounded-xl w-1/3 mx-auto" />
        </div>
      </div>
    );
  }

  if (!college) {
    return (
      <div className="py-24 text-center text-slate-400 max-w-7xl mx-auto space-y-4">
        <h2 className="text-2xl font-bold text-white">College Not Found</h2>
        <Link href="/colleges" className="text-blue-400 underline">
          Back to Directory
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Back button */}
      <Link
        href="/colleges"
        className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition font-medium"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to College Directory
      </Link>

      {/* Hero Banner */}
      <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl">
        <div className="h-64 sm:h-80 w-full relative">
          <img
            src={college.bannerUrl}
            alt={college.name}
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <span className="bg-amber-500 text-slate-950 font-extrabold text-xs px-3 py-1 rounded-xl shadow-lg flex items-center gap-1">
              <Trophy className="w-3.5 h-3.5" />
              NIRF Ranking #{college.nirfRank}
            </span>
            <span className="bg-slate-900/90 text-slate-200 text-xs px-3 py-1 rounded-xl border border-slate-700 font-medium backdrop-blur">
              {college.type} University
            </span>
            <span className="bg-blue-600/90 text-white text-xs px-3 py-1 rounded-xl font-semibold shadow">
              {college.accreditation}
            </span>
          </div>
        </div>

        {/* Info Header */}
        <div className="p-6 sm:p-8 -mt-20 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex items-end gap-5">
            <img
              src={college.logoUrl}
              alt={college.shortName}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border-4 border-slate-900 bg-white object-cover shadow-2xl flex-shrink-0"
            />
            <div className="space-y-1">
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                {college.name}
              </h1>
              <p className="text-sm text-slate-300 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-blue-400" />
                {college.location} • Est. {college.establishedYear}
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleSave}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition border ${
                isSaved
                  ? 'bg-amber-500 text-slate-950 border-amber-400'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-slate-950' : ''}`} />
              <span>{isSaved ? 'Saved' : 'Save'}</span>
            </button>

            <button
              onClick={toggleCompare}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center gap-2 transition"
            >
              <Scale className="w-4 h-4 text-blue-400" />
              <span>Add to Compare</span>
            </button>
          </div>
        </div>

        {/* Quick Highlights Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-slate-800 bg-slate-950/60 divide-x divide-slate-800/80 text-center text-xs p-4">
          <div className="p-2 space-y-0.5">
            <div className="text-slate-400">Tuition Fee</div>
            <div className="text-white font-bold text-sm">
              ₹{college.tuitionFeeMinLakhs}L - ₹{college.tuitionFeeMaxLakhs}L
            </div>
          </div>
          <div className="p-2 space-y-0.5">
            <div className="text-slate-400">Avg Placement</div>
            <div className="text-emerald-400 font-bold text-sm">₹{college.avgPackageLpa} LPA</div>
          </div>
          <div className="p-2 space-y-0.5">
            <div className="text-slate-400">Highest Package</div>
            <div className="text-blue-400 font-bold text-sm">₹{college.highestPackageLpa} LPA</div>
          </div>
          <div className="p-2 space-y-0.5">
            <div className="text-slate-400">Campus Size</div>
            <div className="text-white font-bold text-sm">{college.campusSizeAcres} Acres</div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex border-b border-slate-800 space-x-4 text-sm font-semibold overflow-x-auto">
        {(['overview', 'courses', 'placements', 'reviews'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-3 px-4 capitalize transition border-b-2 whitespace-nowrap ${
              activeTab === tab
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            {tab === 'courses' ? 'Courses & Fees' : tab}
          </button>
        ))}
      </div>

      {/* Tab Content Areas */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Left Content Column */}
        <div className="lg:col-span-2 space-y-8">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
                <h3 className="text-xl font-bold text-white">About {college.shortName}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{college.overview}</p>
              </div>

              {/* Cutoff Trends */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-400" />
                  Entrance Exam Cutoff Ranks
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-800/60 text-slate-400">
                        <th className="p-3">Exam</th>
                        <th className="p-3">Branch</th>
                        <th className="p-3">Category</th>
                        <th className="p-3">Opening Rank</th>
                        <th className="p-3">Closing Rank</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800 text-slate-200">
                      {college.cutoffs.map((c, i) => (
                        <tr key={i} className="hover:bg-slate-800/30">
                          <td className="p-3 font-bold text-blue-400">{c.exam}</td>
                          <td className="p-3 font-semibold">{c.branch}</td>
                          <td className="p-3">{c.category}</td>
                          <td className="p-3">#{c.openingRank}</td>
                          <td className="p-3 text-emerald-400 font-bold">#{c.closingRank}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
              <h3 className="text-xl font-bold text-white">Courses, Eligibility & Fee Structure</h3>
              <div className="space-y-4">
                {college.courses.map((course) => (
                  <div key={course.id} className="bg-slate-800/50 p-4 rounded-xl border border-slate-800 space-y-2">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-white font-bold text-base">{course.name}</h4>
                        <span className="text-xs text-blue-400">{course.degree} • {course.durationYears} Years</span>
                      </div>
                      <div className="text-right">
                        <div className="text-emerald-400 font-extrabold text-base">₹{(course.totalFee / 100000).toFixed(2)} Lakhs</div>
                        <div className="text-[10px] text-slate-400">Total Tuition Fee</div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {course.specializations.map((spec) => (
                        <span key={spec} className="bg-slate-900 text-slate-300 text-[11px] px-2.5 py-0.5 rounded border border-slate-700">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'placements' && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
              <h3 className="text-xl font-bold text-white">Placement Statistics ({college.placementStats.year})</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-800">
                  <div className="text-2xl font-extrabold text-emerald-400">{college.placementStats.placementRate}%</div>
                  <div className="text-xs text-slate-400 mt-1">Placement Rate</div>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-800">
                  <div className="text-2xl font-extrabold text-white">₹{college.placementStats.avgPackageLpa} LPA</div>
                  <div className="text-xs text-slate-400 mt-1">Average Package</div>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-800">
                  <div className="text-2xl font-extrabold text-blue-400">₹{college.placementStats.highestPackageLpa} LPA</div>
                  <div className="text-xs text-slate-400 mt-1">Highest Package</div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-slate-300 mb-3">Top Visiting Recruiters</h4>
                <div className="flex flex-wrap gap-2">
                  {college.placementStats.topRecruiters.map((r) => (
                    <span key={r} className="bg-slate-800 text-white font-medium text-xs px-3 py-1.5 rounded-lg border border-slate-700">
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">Student & Alumnus Reviews</h3>
                <div className="text-emerald-400 font-bold text-lg flex items-center gap-1">
                  <Star className="w-5 h-5 fill-emerald-400 text-emerald-400" />
                  {college.rating.toFixed(1)} / 5.0
                </div>
              </div>

              <div className="space-y-4">
                {college.reviews.map((rev) => (
                  <div key={rev.id} className="bg-slate-800/50 p-4 rounded-xl border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <div>
                        <span className="font-bold text-white text-sm">{rev.userName}</span>
                        <span className="text-slate-400 ml-2">({rev.userRole})</span>
                      </div>
                      <span className="text-amber-400 font-bold">{rev.rating} ★</span>
                    </div>
                    <p className="text-xs text-slate-300 italic">"{rev.comment}"</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar Summary Card */}
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6 sticky top-24 shadow-xl">
            <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-3">Quick Decision Matrix</h3>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between text-slate-300">
                <span>NIRF Rank</span>
                <span className="font-bold text-amber-400">#{college.nirfRank}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Hostel Fee</span>
                <span className="font-bold text-white">₹{college.hostelFeePerYear.toLocaleString()} / year</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Location</span>
                <span className="font-bold text-slate-300">{college.city}, {college.state}</span>
              </div>
            </div>

            <Link
              href="/predictor"
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg transition"
            >
              <span>Check Eligibility with Rank Predictor</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
