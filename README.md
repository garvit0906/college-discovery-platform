# 🎓 CampusFinder — College Discovery & Rank Predictor Platform

> **Unstop AI / Full Stack Developer Internship Demo Assignment Submission**  
> **Track Chosen:** Track A — College Discovery Platform  
> **Role Chosen:** Full Stack Engineer  
> **Built With:** Next.js 14/15 (App Router), TypeScript, TailwindCSS, Prisma ORM, PostgreSQL / SQLite.

---

## 🌟 Executive Summary

**CampusFinder** is a production-grade, high-performance College Discovery and Decision-Making Platform built to help students and parents discover top Indian universities, compare fees & placement statistics side-by-side, and predict admission chances based on historical entrance exam rank cutoffs (JEE Main, BITSAT, NEET, CAT).

---

## 🚀 Key Features Implemented

### 1. 🔍 College Directory, Live Search & Multi-Facet Filtering (`/colleges`)
- **Live Debounced Search:** Instant search across college names, cities, states, and course streams.
- **Multi-Facet Filters:** Filter by State/Location, Institute Type (Public/Private), Course Degree (B.Tech, MBA, MBBS), Maximum Tuition Fee Slider, and Minimum Student Rating.
- **Sorting Options:** Sort by NIRF Rank, Student Rating, Highest Package, or Lowest Tuition Fee.

### 2. 🏛️ Dynamic College Detail Pages (`/colleges/[slug]`)
- **Hero Header:** NIRF rank badge, institute type, NAAC accreditation, established year, and campus size.
- **Interactive Tabs:**
  - **Overview:** Campus highlights, overview summary, and entrance exam cutoff rank trends.
  - **Courses & Fees:** Comprehensive branch-wise fee structure, duration, and seat matrix.
  - **Placements:** Placement rate %, average package LPA, highest package LPA, and visiting recruiter badges.
  - **Student Reviews:** Verified alumnus & current student reviews with star rating breakdown.

### 3. ⚖️ Side-by-Side College Comparison Matrix (`/compare`)
- **Multi-College Comparison:** Compare up to 3 colleges side-by-side simultaneously.
- **Comprehensive Matrix:** Compare tuition fees, average packages, highest packages, NIRF rankings, hostel fees, campus sizes, and top recruiters.
- **Value Highlights:** Automatically highlights the "Best NIRF Rank", "Lowest Fee", and "Highest ROI" with visual badges.

### 4. 🎯 Entrance Exam Rank & Cutoff Predictor (`/predictor`)
- **Inputs:** Entrance Exam selection (JEE Main, BITSAT, NEET, CAT), All India Rank input, Category selection (General, OBC, SC/ST), and Preferred Branch.
- **Matching Engine:** Calculates cutoff rank matches against historical trends.
- **Probability Badges:** Displays **High Chance**, **Moderate Chance**, or **Dream College** badges alongside 0-100% match scores.

### 5. 🔖 Saved Colleges / Wishlist System
- Persistent local storage bookmarking for saving preferred institutions and quick comparison.

---

## 🛠️ Architecture & Tech Stack

- **Frontend Framework:** Next.js (App Router - Server & Client Components)
- **Language:** TypeScript (Strict Type Safety)
- **Styling:** Tailwind CSS (Modern Dark Mode UI) + Lucide Icons
- **Database Layer:** Prisma ORM with PostgreSQL / SQLite DB
- **API Engine:** Next.js App Router REST API Routes:
  - `GET /api/colleges` — Filtered search & pagination endpoint
  - `GET /api/colleges/[slug]` — Single college details endpoint
  - `GET /api/compare?ids=col-1,col-2` — Batch comparison matrix endpoint
  - `POST /api/predict` — Entrance rank matching algorithm endpoint

---

## 💻 Local Setup & Execution Guide

```bash
# 1. Clone the repository
git clone https://github.com/your-username/college-discovery-platform.git
cd college-discovery-platform

# 2. Install dependencies
npm install

# 3. Generate Prisma Client
npx prisma generate

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application live.

---

## 🎥 Loom Video Explanation Script (5-10 Min Guide for Submission)

When recording your submission video on Loom, use this structured walkthrough:

1. **Introduction (1 min):**
   - *"Hi team! I am submitting the Full Stack Developer Demo Task for Unstop. I chose Track A: College Discovery Platform."*
   - Mention tech stack: Next.js App Router, TypeScript, Tailwind CSS, Prisma ORM.

2. **Feature 1: Discovery & Filtering (2 min):**
   - Show `/colleges` directory page.
   - Demonstrate typing in search bar, adjusting fee slider, and filtering by state (e.g. Maharashtra, Delhi). Show instant client-server state updates.

3. **Feature 2: College Detail Page (2 min):**
   - Click on IIT Bombay or BITS Pilani (`/colleges/iit-bombay`).
   - Show Overview, Courses & Fees table, Placement stats (₹168 LPA highest package), and Entrance Exam Cutoffs table.

4. **Feature 3: Comparison Matrix (2 min):**
   - Navigate to `/compare`. Show IIT Bombay vs BITS Pilani side-by-side comparison.
   - Highlight metric comparison (Fees, Avg Package, Top Recruiters) and explain why side-by-side comparison reduces cognitive load for students.

5. **Feature 4: Rank Predictor (2 min):**
   - Go to `/predictor`. Enter JEE Main Rank `#500` and select General Category.
   - Click "Predict Eligible Colleges". Show celebratory confetti and probability match badges (*High Chance*, *Moderate Chance*).

6. **Architecture Decisions & Tradeoffs (1 min):**
   - Explain server components vs client components separation.
   - Explain DTO & mock data fallback layer for 100% reliable deployment on Vercel.

---

## 🌐 Deployment (Vercel & Neon DB)

1. Push code to GitHub repository.
2. Import repository on [Vercel](https://vercel.com).
3. Vercel automatically detects Next.js framework settings.
4. Click **Deploy**! Live URL is instantly generated.
