import { College, FilterOptions, PredictorInput, PredictorResult } from '@/types';

export const COLLEGES_DATA: College[] = [
  {
    id: 'col-1',
    slug: 'iit-bombay',
    name: 'Indian Institute of Technology Bombay (IITB)',
    shortName: 'IIT Bombay',
    location: 'Powai, Mumbai, Maharashtra',
    city: 'Mumbai',
    state: 'Maharashtra',
    establishedYear: 1958,
    type: 'Public',
    nirfRank: 3,
    rating: 4.9,
    reviewCount: 420,
    tuitionFeeMinLakhs: 8.0,
    tuitionFeeMaxLakhs: 10.0,
    avgPackageLpa: 23.5,
    highestPackageLpa: 168.0,
    logoUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=300&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80',
    overview: 'IIT Bombay is recognized worldwide as a leader in engineering education and research. Located in Powai, Mumbai, it boasts a sprawling 550-acre green campus and unmatched placement records.',
    accreditation: 'Institute of Eminence (Autonomous)',
    campusSizeAcres: 550,
    hostelFeePerYear: 35000,
    courses: [
      { id: 'c1', name: 'Computer Science & Engineering', degree: 'B.Tech', durationYears: 4, totalFee: 900000, seats: 120, specializations: ['AI & ML', 'Cybersecurity', 'Data Science'] },
      { id: 'c2', name: 'Electrical Engineering', degree: 'B.Tech', durationYears: 4, totalFee: 900000, seats: 100, specializations: ['VLSI', 'Power Electronics', 'Robotics'] },
      { id: 'c3', name: 'Mechanical Engineering', degree: 'B.Tech', durationYears: 4, totalFee: 850000, seats: 140, specializations: ['Thermal', 'Design', 'Manufacturing'] }
    ],
    placementStats: {
      year: 2025,
      placementRate: 98,
      avgPackageLpa: 23.5,
      highestPackageLpa: 168.0,
      topRecruiters: ['Google', 'Microsoft', 'Apple', 'Goldman Sachs', 'Quadeye', 'Uber']
    },
    cutoffs: [
      { exam: 'JEE Main', branch: 'Computer Science & Engineering', category: 'General', openingRank: 1, closingRank: 67 },
      { exam: 'JEE Main', branch: 'Electrical Engineering', category: 'General', openingRank: 100, closingRank: 380 },
      { exam: 'JEE Main', branch: 'Mechanical Engineering', category: 'General', openingRank: 500, closingRank: 1400 },
      { exam: 'JEE Main', branch: 'Computer Science & Engineering', category: 'OBC', openingRank: 10, closingRank: 45 }
    ],
    reviews: [
      { id: 'r1', userName: 'Aarav Sharma', userRole: 'Alumnus 2024', rating: 5, comment: 'Exceptional campus culture, world-class coding environment, and unmatched placement opportunities!', date: '2025-06-12' },
      { id: 'r2', userName: 'Priya Verma', userRole: 'Current B.Tech Student', rating: 4.8, comment: 'Techfest and Mood Indigo are legendary. Rigorous academics but immense exposure.', date: '2025-04-18' }
    ]
  },
  {
    id: 'col-2',
    slug: 'iit-delhi',
    name: 'Indian Institute of Technology Delhi (IITD)',
    shortName: 'IIT Delhi',
    location: 'Hauz Khas, New Delhi',
    city: 'New Delhi',
    state: 'Delhi',
    establishedYear: 1961,
    type: 'Public',
    nirfRank: 2,
    rating: 4.85,
    reviewCount: 380,
    tuitionFeeMinLakhs: 8.0,
    tuitionFeeMaxLakhs: 9.8,
    avgPackageLpa: 24.1,
    highestPackageLpa: 155.0,
    logoUrl: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=300&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
    overview: 'IIT Delhi is premier engineering research institute located in the heart of Hauz Khas. Known for its entrepreneurial ecosystem and alumni who founded unicorn startups.',
    accreditation: 'Institute of Eminence (Autonomous)',
    campusSizeAcres: 320,
    hostelFeePerYear: 38000,
    courses: [
      { id: 'c4', name: 'Computer Science & Engineering', degree: 'B.Tech', durationYears: 4, totalFee: 880000, seats: 115, specializations: ['AI', 'Theoretical Computer Science'] },
      { id: 'c5', name: 'Mathematics & Computing', degree: 'B.Tech', durationYears: 4, totalFee: 880000, seats: 90, specializations: ['Financial Mathematics', 'Algorithms'] },
      { id: 'c6', name: 'Biotechnology', degree: 'B.Tech', durationYears: 4, totalFee: 820000, seats: 75, specializations: ['Bio-IT', 'Genomics'] }
    ],
    placementStats: {
      year: 2025,
      placementRate: 97,
      avgPackageLpa: 24.1,
      highestPackageLpa: 155.0,
      topRecruiters: ['Microsoft', 'Amazon', 'Jane Street', 'Texas Instruments', 'McKinsey']
    },
    cutoffs: [
      { exam: 'JEE Main', branch: 'Computer Science & Engineering', category: 'General', openingRank: 15, closingRank: 115 },
      { exam: 'JEE Main', branch: 'Mathematics & Computing', category: 'General', openingRank: 120, closingRank: 340 },
      { exam: 'JEE Main', branch: 'Biotechnology', category: 'General', openingRank: 2000, closingRank: 4800 }
    ],
    reviews: [
      { id: 'r3', userName: 'Rohan Mehta', userRole: 'Alumnus', rating: 5, comment: 'Hauz Khas location gives great food options, startup incubator is top tier.', date: '2025-05-20' }
    ]
  },
  {
    id: 'col-3',
    slug: 'bits-pilani',
    name: 'Birla Institute of Technology and Science, Pilani (BITS Pilani)',
    shortName: 'BITS Pilani',
    location: 'Pilani, Rajasthan',
    city: 'Pilani',
    state: 'Rajasthan',
    establishedYear: 1964,
    type: 'Private',
    nirfRank: 20,
    rating: 4.75,
    reviewCount: 310,
    tuitionFeeMinLakhs: 20.0,
    tuitionFeeMaxLakhs: 24.5,
    avgPackageLpa: 20.8,
    highestPackageLpa: 60.7,
    logoUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=300&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1200&q=80',
    overview: 'BITS Pilani is India’s top private engineering institution featuring 0% reservation policy, Practice School (PS-1 & PS-2 internship model), and flexible academic policy with no attendance mandate.',
    accreditation: 'Institute of Eminence (NAAC A)',
    campusSizeAcres: 328,
    hostelFeePerYear: 60000,
    courses: [
      { id: 'c7', name: 'Computer Science', degree: 'B.E.', durationYears: 4, totalFee: 2200000, seats: 150, specializations: ['Cloud Computing', 'AI'] },
      { id: 'c8', name: 'Electronics & Instrumentation', degree: 'B.E.', durationYears: 4, totalFee: 2200000, seats: 110, specializations: ['Embedded Systems', 'IoT'] }
    ],
    placementStats: {
      year: 2025,
      placementRate: 96,
      avgPackageLpa: 20.8,
      highestPackageLpa: 60.7,
      topRecruiters: ['NVIDIA', 'Atlassian', 'Salesforce', 'DE Shaw', 'Bain & Co']
    },
    cutoffs: [
      { exam: 'BITSAT', branch: 'Computer Science', category: 'General', openingRank: 330, closingRank: 390 },
      { exam: 'BITSAT', branch: 'Electronics & Instrumentation', category: 'General', openingRank: 270, closingRank: 315 }
    ],
    reviews: [
      { id: 'r4', userName: 'Kavya Nair', userRole: 'Final Year Student', rating: 4.8, comment: 'No attendance policy gives complete freedom to build projects, competitive programming culture is insane.', date: '2025-07-02' }
    ]
  },
  {
    id: 'col-4',
    slug: 'iim-ahmedabad',
    name: 'Indian Institute of Management Ahmedabad (IIMA)',
    shortName: 'IIM Ahmedabad',
    location: 'Vastrapur, Ahmedabad, Gujarat',
    city: 'Ahmedabad',
    state: 'Gujarat',
    establishedYear: 1961,
    type: 'Public',
    nirfRank: 1,
    rating: 4.95,
    reviewCount: 290,
    tuitionFeeMinLakhs: 25.0,
    tuitionFeeMaxLakhs: 28.0,
    avgPackageLpa: 34.3,
    highestPackageLpa: 115.0,
    logoUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=300&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
    overview: 'IIM Ahmedabad is Asia Pacific region’s premier management school. Renowned for its Louis Kahn brick architecture, case-study pedagogy, and produces India’s top C-suite business leaders.',
    accreditation: 'EQUIS Accredited (Autonomous)',
    campusSizeAcres: 106,
    hostelFeePerYear: 80000,
    courses: [
      { id: 'c9', name: 'Post Graduate Programme in Management (PGP)', degree: 'MBA', durationYears: 2, totalFee: 2600000, seats: 400, specializations: ['Finance', 'Strategy', 'Marketing', 'Consulting'] },
      { id: 'c10', name: 'PGP in Food and Agribusiness (FABM)', degree: 'MBA', durationYears: 2, totalFee: 2400000, seats: 50, specializations: ['Agribusiness', 'Supply Chain'] }
    ],
    placementStats: {
      year: 2025,
      placementRate: 100,
      avgPackageLpa: 34.3,
      highestPackageLpa: 115.0,
      topRecruiters: ['Boston Consulting Group', 'McKinsey & Co', 'Bain & Co', 'Morgan Stanley', 'Tata Administrative Services']
    },
    cutoffs: [
      { exam: 'CAT', branch: 'MBA (PGP)', category: 'General', openingRank: 99, closingRank: 100 },
      { exam: 'CAT', branch: 'MBA (PGP)', category: 'OBC', openingRank: 95, closingRank: 98 }
    ],
    reviews: [
      { id: 'r5', userName: 'Vikramaditya Das', userRole: 'PGP Alumnus', rating: 5, comment: 'The Red Brick campus transforms you completely. Case methodology prepares you for boardrooms.', date: '2025-03-14' }
    ]
  },
  {
    id: 'col-5',
    slug: 'aiims-delhi',
    name: 'All India Institute of Medical Sciences (AIIMS New Delhi)',
    shortName: 'AIIMS Delhi',
    location: 'Ansari Nagar, New Delhi',
    city: 'New Delhi',
    state: 'Delhi',
    establishedYear: 1956,
    type: 'Public',
    nirfRank: 1,
    rating: 4.95,
    reviewCount: 450,
    tuitionFeeMinLakhs: 0.05,
    tuitionFeeMaxLakhs: 0.1,
    avgPackageLpa: 18.0,
    highestPackageLpa: 35.0,
    logoUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=300&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80',
    overview: 'AIIMS New Delhi is India’s apex medical institution. With nominal fees (~Rs. 6,000 for full course) and massive patient footfall, it offers unmatched clinical experience and medical research infrastructure.',
    accreditation: 'Institute of National Importance',
    campusSizeAcres: 115,
    hostelFeePerYear: 5000,
    courses: [
      { id: 'c11', name: 'Bachelor of Medicine and Bachelor of Surgery', degree: 'MBBS', durationYears: 5.5, totalFee: 6850, seats: 125, specializations: ['Medicine', 'Surgery', 'Pediatrics'] }
    ],
    placementStats: {
      year: 2025,
      placementRate: 100,
      avgPackageLpa: 18.0,
      highestPackageLpa: 35.0,
      topRecruiters: ['AIIMS PG residency', 'NHS UK', 'Mayo Clinic USA', 'Fortis', 'Apollo Hospitals']
    },
    cutoffs: [
      { exam: 'NEET', branch: 'MBBS', category: 'General', openingRank: 1, closingRank: 57 },
      { exam: 'NEET', branch: 'MBBS', category: 'OBC', openingRank: 40, closingRank: 230 }
    ],
    reviews: [
      { id: 'r6', userName: 'Dr. Snigdha Sen', userRole: 'Senior Resident', rating: 5, comment: 'Practicing at AIIMS is intense and priceless. Clinical exposure is second to none in the world.', date: '2025-06-25' }
    ]
  },
  {
    id: 'col-6',
    slug: 'nit-trichy',
    name: 'National Institute of Technology Tiruchirappalli (NIT Trichy)',
    shortName: 'NIT Trichy',
    location: 'Tiruchirappalli, Tamil Nadu',
    city: 'Tiruchirappalli',
    state: 'Tamil Nadu',
    establishedYear: 1964,
    type: 'Public',
    nirfRank: 9,
    rating: 4.65,
    reviewCount: 260,
    tuitionFeeMinLakhs: 5.5,
    tuitionFeeMaxLakhs: 7.2,
    avgPackageLpa: 15.6,
    highestPackageLpa: 52.8,
    logoUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=300&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?auto=format&fit=crop&w=1200&q=80',
    overview: 'NIT Trichy ranks #1 among all National Institutes of Technology in India. Situated over 800 acres in Tamil Nadu, it is famous for stellar placement records and research output.',
    accreditation: 'Institute of National Importance (NAAC A+)',
    campusSizeAcres: 800,
    hostelFeePerYear: 42000,
    courses: [
      { id: 'c12', name: 'Computer Science & Engineering', degree: 'B.Tech', durationYears: 4, totalFee: 580000, seats: 120, specializations: ['Networks', 'Software Eng'] },
      { id: 'c13', name: 'Electronics & Communication', degree: 'B.Tech', durationYears: 4, totalFee: 580000, seats: 110, specializations: ['VLSI', 'Signal Processing'] }
    ],
    placementStats: {
      year: 2025,
      placementRate: 94,
      avgPackageLpa: 15.6,
      highestPackageLpa: 52.8,
      topRecruiters: ['Amazon', 'Samsung R&D', 'Qualcomm', 'Oracle', 'Deloitte']
    },
    cutoffs: [
      { exam: 'JEE Main', branch: 'Computer Science & Engineering', category: 'General', openingRank: 1500, closingRank: 4800 },
      { exam: 'JEE Main', branch: 'Electronics & Communication', category: 'General', openingRank: 4000, closingRank: 8500 }
    ],
    reviews: [
      { id: 'r7', userName: 'Karthik Subramanian', userRole: 'Alumnus', rating: 4.7, comment: 'Top-tier coding culture, active tech clubs like Delta, Pragyan fest is huge.', date: '2025-05-11' }
    ]
  },
  {
    id: 'col-7',
    slug: 'vit-vellore',
    name: 'Vellore Institute of Technology (VIT Vellore)',
    shortName: 'VIT Vellore',
    location: 'Vellore, Tamil Nadu',
    city: 'Vellore',
    state: 'Tamil Nadu',
    establishedYear: 1984,
    type: 'Private',
    nirfRank: 11,
    rating: 4.5,
    reviewCount: 510,
    tuitionFeeMinLakhs: 7.8,
    tuitionFeeMaxLakhs: 14.5,
    avgPackageLpa: 9.2,
    highestPackageLpa: 102.0,
    logoUrl: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=300&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
    overview: 'VIT Vellore is one of India’s largest private universities, renowned for Flexible Credit System (FFCS), international exchange programs, and massive campus placement drives.',
    accreditation: 'NAAC A++ (ABET Accredited)',
    campusSizeAcres: 372,
    hostelFeePerYear: 75000,
    courses: [
      { id: 'c14', name: 'Computer Science & Engineering', degree: 'B.Tech', durationYears: 4, totalFee: 780000, seats: 1200, specializations: ['AI & Robotics', 'Cybersecurity', 'IoT'] },
      { id: 'c15', name: 'Information Technology', degree: 'B.Tech', durationYears: 4, totalFee: 780000, seats: 400, specializations: ['Cloud', 'Data Analytics'] }
    ],
    placementStats: {
      year: 2025,
      placementRate: 90,
      avgPackageLpa: 9.2,
      highestPackageLpa: 102.0,
      topRecruiters: ['Cognizant', 'TCS Digital', 'Microsoft', 'Motorq', 'Wipro']
    },
    cutoffs: [
      { exam: 'VITEEE', branch: 'Computer Science & Engineering', category: 'General', openingRank: 1, closingRank: 15000 },
      { exam: 'VITEEE', branch: 'Information Technology', category: 'General', openingRank: 8000, closingRank: 22000 }
    ],
    reviews: [
      { id: 'r8', userName: 'Ananya Gupta', userRole: 'Current Student', rating: 4.4, comment: 'FFCS lets you choose your own timetable and faculty. High campus placement volume.', date: '2025-06-01' }
    ]
  },
  {
    id: 'col-8',
    slug: 'dtu-delhi',
    name: 'Delhi Technological University (DTU, Formerly DCE)',
    shortName: 'DTU Delhi',
    location: 'Shahbad Daulatpur, Bawana Road, Delhi',
    city: 'New Delhi',
    state: 'Delhi',
    establishedYear: 1941,
    type: 'Public',
    nirfRank: 29,
    rating: 4.6,
    reviewCount: 340,
    tuitionFeeMinLakhs: 7.5,
    tuitionFeeMaxLakhs: 9.0,
    avgPackageLpa: 17.2,
    highestPackageLpa: 82.5,
    logoUrl: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=300&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    overview: 'Formerly Delhi College of Engineering (DCE), DTU is one of India’s oldest and most prestigious state technical universities with 85% Delhi region quota and stellar placements.',
    accreditation: 'NAAC A (State University)',
    campusSizeAcres: 164,
    hostelFeePerYear: 45000,
    courses: [
      { id: 'c16', name: 'Software Engineering', degree: 'B.Tech', durationYears: 4, totalFee: 810000, seats: 180, specializations: ['Full Stack', 'Cloud Architecture'] },
      { id: 'c17', name: 'Information Technology', degree: 'B.Tech', durationYears: 4, totalFee: 810000, seats: 180, specializations: ['Algorithms', 'Database Design'] }
    ],
    placementStats: {
      year: 2025,
      placementRate: 93,
      avgPackageLpa: 17.2,
      highestPackageLpa: 82.5,
      topRecruiters: ['Google', 'Sprinklr', 'Uber', 'Atlassian', 'Adobe']
    },
    cutoffs: [
      { exam: 'JEE Main', branch: 'Software Engineering', category: 'General', openingRank: 3500, closingRank: 11000 },
      { exam: 'JEE Main', branch: 'Information Technology', category: 'General', openingRank: 4000, closingRank: 13500 }
    ],
    reviews: [
      { id: 'r9', userName: 'Yash Saxena', userRole: 'Alumnus', rating: 4.6, comment: 'Massive alumni network in Silicon Valley and Top Indian tech firms. Great fest culture.', date: '2025-04-29' }
    ]
  }
];

export function filterColleges(options: FilterOptions) {
  let filtered = [...COLLEGES_DATA];

  if (options.search) {
    const q = options.search.toLowerCase();
    filtered = filtered.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.shortName.toLowerCase().includes(q) ||
        c.city.toLowerCase().includes(q) ||
        c.state.toLowerCase().includes(q) ||
        c.courses.some((cr) => cr.name.toLowerCase().includes(q) || cr.degree.toLowerCase().includes(q))
    );
  }

  if (options.state && options.state !== 'All') {
    filtered = filtered.filter((c) => c.state.toLowerCase() === options.state?.toLowerCase());
  }

  if (options.type && options.type !== 'All') {
    filtered = filtered.filter((c) => c.type.toLowerCase() === options.type?.toLowerCase());
  }

  if (options.courseDegree && options.courseDegree !== 'All') {
    filtered = filtered.filter((c) =>
      c.courses.some((cr) => cr.degree.toLowerCase() === options.courseDegree?.toLowerCase())
    );
  }

  if (options.maxFee && options.maxFee > 0) {
    filtered = filtered.filter((c) => c.tuitionFeeMinLakhs <= options.maxFee!);
  }

  if (options.minRating && options.minRating > 0) {
    filtered = filtered.filter((c) => c.rating >= options.minRating!);
  }

  // Sorting
  if (options.sortBy === 'nirf') {
    filtered.sort((a, b) => a.nirfRank - b.nirfRank);
  } else if (options.sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (options.sortBy === 'feeAsc') {
    filtered.sort((a, b) => a.tuitionFeeMinLakhs - b.tuitionFeeMinLakhs);
  } else if (options.sortBy === 'feeDesc') {
    filtered.sort((a, b) => b.tuitionFeeMaxLakhs - a.tuitionFeeMaxLakhs);
  } else if (options.sortBy === 'packageDesc') {
    filtered.sort((a, b) => b.avgPackageLpa - a.avgPackageLpa);
  }

  return filtered;
}

export function getCollegeBySlug(slug: string): College | undefined {
  return COLLEGES_DATA.find((c) => c.slug === slug || c.id === slug);
}

export function predictColleges(input: PredictorInput): PredictorResult[] {
  const results: PredictorResult[] = [];

  for (const college of COLLEGES_DATA) {
    for (const cutoff of college.cutoffs) {
      if (cutoff.exam.toLowerCase() === input.exam.toLowerCase()) {
        const rankDiff = cutoff.closingRank - input.rank;

        let chance: 'High' | 'Moderate' | 'Dream' = 'Dream';
        let matchScore = 40;

        if (input.rank <= cutoff.closingRank * 0.8) {
          chance = 'High';
          matchScore = Math.min(99, Math.round(90 + (cutoff.closingRank - input.rank) / 50));
        } else if (input.rank <= cutoff.closingRank * 1.15) {
          chance = 'Moderate';
          matchScore = Math.round(65 + (cutoff.closingRank - input.rank) / 100);
        } else {
          chance = 'Dream';
          matchScore = Math.max(15, Math.round(40 - (input.rank - cutoff.closingRank) / 200));
        }

        // Branch filter if provided
        if (
          !input.preferredBranch ||
          cutoff.branch.toLowerCase().includes(input.preferredBranch.toLowerCase())
        ) {
          results.push({
            college,
            matchedBranch: cutoff.branch,
            closingRank: cutoff.closingRank,
            chance,
            matchScore: Math.max(10, Math.min(99, matchScore))
          });
        }
      }
    }
  }

  // Sort by match score descending
  results.sort((a, b) => b.matchScore - a.matchScore);
  return results;
}
