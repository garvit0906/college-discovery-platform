import React from 'react';
import PredictorForm from '@/components/PredictorForm';
import { Target, Sparkles, Trophy, ShieldCheck, Award } from 'lucide-react';

export default function PredictorPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Historical Cutoff Data Engine</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
          Entrance Exam Rank & Cutoff Predictor
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Input your All India Rank (JEE Main, BITSAT, NEET, CAT) and get algorithm-matched college recommendations with branch-wise cutoff analysis and admission probability scores.
        </p>
      </div>

      {/* Main Form */}
      <PredictorForm />

      {/* Trust Badges */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 flex items-start gap-3">
          <ShieldCheck className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-white text-sm">Official Cutoff Data</h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Based on official JoSAA, BITSAT, and NEET counseling round statistics.
            </p>
          </div>
        </div>

        <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 flex items-start gap-3">
          <Trophy className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-white text-sm">Match Probability Score</h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Categorizes chances into High Chance, Moderate Chance, and Dream College.
            </p>
          </div>
        </div>

        <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 flex items-start gap-3">
          <Award className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-white text-sm">Category Reservation Support</h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Supports General, OBC-NCL, SC/ST categories across all engineering & medical streams.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
