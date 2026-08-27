export interface Course {
  id: string;
  name: string;
  degree: string;
  durationYears: number;
  totalFee: number; // in INR
  seats: number;
  specializations: string[];
}

export interface PlacementStats {
  year: number;
  placementRate: number; // e.g. 95 for 95%
  avgPackageLpa: number; // in LPA
  highestPackageLpa: number; // in LPA
  topRecruiters: string[];
}

export interface CutoffTrend {
  exam: string; // 'JEE Main', 'NEET', 'CAT', 'GATE'
  branch: string;
  category: string; // 'General', 'OBC', 'SC', 'ST', 'EWS'
  openingRank: number;
  closingRank: number;
}

export interface Review {
  id: string;
  userName: string;
  userRole: string; // e.g., 'Alumnus', 'Student'
  rating: number; // 1-5
  comment: string;
  date: string;
}

export interface College {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  location: string;
  city: string;
  state: string;
  establishedYear: number;
  type: 'Public' | 'Private' | 'Deemed';
  nirfRank: number;
  rating: number; // 1-5 float
  reviewCount: number;
  tuitionFeeMinLakhs: number; // in Lakhs
  tuitionFeeMaxLakhs: number; // in Lakhs
  avgPackageLpa: number;
  highestPackageLpa: number;
  logoUrl: string;
  bannerUrl: string;
  overview: string;
  accreditation: string; // e.g. 'NAAC A++', 'Institute of Eminence'
  campusSizeAcres: number;
  hostelFeePerYear: number; // in INR
  courses: Course[];
  placementStats: PlacementStats;
  cutoffs: CutoffTrend[];
  reviews: Review[];
}

export interface FilterOptions {
  search?: string;
  state?: string;
  type?: string;
  courseDegree?: string;
  maxFee?: number;
  minRating?: number;
  sortBy?: 'nirf' | 'rating' | 'feeAsc' | 'feeDesc' | 'packageDesc';
  page?: number;
  limit?: number;
}

export interface PredictorInput {
  exam: string;
  rank: number;
  category: string;
  preferredBranch?: string;
  maxBudgetLakhs?: number;
}

export interface PredictorResult {
  college: College;
  matchedBranch: string;
  closingRank: number;
  chance: 'High' | 'Moderate' | 'Dream';
  matchScore: number; // 0 - 100
}
