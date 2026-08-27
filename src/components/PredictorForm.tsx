'use client';

import React, { useState } from 'react';
import { PredictorInput, PredictorResult } from '@/types';
import { Target, Sparkles, Trophy, CheckCircle2, AlertTriangle, Compass, ArrowRight, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';
import Link from 'next/link';

export default function PredictorForm() {
  const [exam, setExam] = useState('JEE Main');
  const [rank, setRank] = useState<number | ''>(500);
  const [category, setCategory] = useState('General');
  const [preferredBranch, setPreferredBranch] = useState('');

  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<PredictorResult[] | null>(null);

  const handlePredict = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!rank || rank <= 0) return;

    setLoading(true);

    try {
      const res = await fetch('/api/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          exam,
          rank: Number(rank),
          category,
          preferredBranch: preferredBranch || undefined
        })
      });

      const data = await res.json();
      if (data.success) {
        setResults(data.data);
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Wizard Form */}
      <form onSubmit={handlePredict} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
          <div className="p-3 bg-gradient-to-tr from-emerald-500 to-teal-500 rounded-2xl text-slate-950 shadow-md">
            <Target className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">College Rank & Cutoff Predictor</h2>
            <p className="text-xs text-slate-400">
              Calculate admission eligibility & branch cutoffs based on previous year trends.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Exam Selection */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Entrance Exam</label>
            <select
              value={exam}
              onChange={(e) => setExam(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 font-medium focus:outline-none focus:border-emerald-500 transition"
            >
              <option value="JEE Main">JEE Main (Engineering)</option>
              <option value="BITSAT">BITSAT (BITS Pilani)</option>
              <option value="NEET">NEET (Medical)</option>
              <option value="CAT">CAT (MBA / Management)</option>
            </select>
          </div>

          {/* Rank Input */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
              {exam === 'CAT' ? 'CAT Percentile / Rank' : 'Overall All India Rank'}
            </label>
            <input
              type="number"
              min="1"
              max="200000"
              required
              placeholder="e.g. 500"
              value={rank}
              onChange={(e) => setRank(e.target.value ? parseInt(e.target.value) : '')}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 font-medium placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition"
            />
          </div>

          {/* Category */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 font-medium focus:outline-none focus:border-emerald-500 transition"
            >
              <option value="General">General / Open</option>
              <option value="OBC">OBC-NCL</option>
              <option value="SC">SC / ST</option>
            </select>
          </div>

          {/* Preferred Branch */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Preferred Branch (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Computer Science"
              value={preferredBranch}
              onChange={(e) => setPreferredBranch(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 font-medium placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-extrabold text-base flex items-center justify-center gap-2 shadow-lg hover:shadow-emerald-500/20 transition-all cursor-pointer"
        >
          {loading ? (
            <>
              <RefreshCw className="w-5 h-5 animate-spin" />
              <span>Analyzing Cutoff Datasets...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5" />
              <span>Predict Eligible Colleges & Branches</span>
            </>
          )}
        </button>
      </form>

      {/* Prediction Results Display */}
      {results && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-400" />
              Predicted Recommendations ({results.length} Colleges Found)
            </h3>
            <span className="text-xs text-slate-400">
              Exam: <strong className="text-emerald-400">{exam}</strong> | Rank:{' '}
              <strong className="text-emerald-400">#{rank}</strong>
            </span>
          </div>

          {results.length === 0 ? (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center text-slate-400">
              <AlertTriangle className="w-10 h-10 text-amber-400 mx-auto mb-2" />
              <p className="font-semibold text-white">No Direct Cutoff Match Found for Rank #{rank}</p>
              <p className="text-xs text-slate-400 mt-1">
                Try adjusting the rank input or clearing the branch filter.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {results.map((res, idx) => (
                <div
                  key={`${res.college.id}-${idx}`}
                  className="bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-5 space-y-4 transition shadow-lg flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={res.college.logoUrl}
                          alt={res.college.shortName}
                          className="w-10 h-10 rounded-lg border border-slate-700 bg-white object-cover shadow"
                        />
                        <div>
                          <h4 className="font-bold text-white text-base leading-tight">
                            {res.college.shortName}
                          </h4>
                          <span className="text-xs text-slate-400">NIRF #{res.college.nirfRank} • {res.college.city}</span>
                        </div>
                      </div>

                      {/* Chance Badge */}
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 border ${
                          res.chance === 'High'
                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                            : res.chance === 'Moderate'
                            ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                            : 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30'
                        }`}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {res.chance} Chance ({res.matchScore}% Match)
                      </span>
                    </div>

                    <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-800 space-y-1">
                      <div className="text-xs text-slate-400">Matched Cutoff Branch:</div>
                      <div className="text-sm font-semibold text-emerald-300">{res.matchedBranch}</div>
                      <div className="text-[11px] text-slate-400 flex items-center justify-between pt-1">
                        <span>Closing Rank: #{res.closingRank}</span>
                        <span>Avg Package: ₹{res.college.avgPackageLpa} LPA</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-xs text-slate-400">
                      Fee: ₹{res.college.tuitionFeeMinLakhs}L - ₹{res.college.tuitionFeeMaxLakhs}L
                    </span>
                    <Link
                      href={`/colleges/${res.college.slug}`}
                      className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
                    >
                      <span>Explore College</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
