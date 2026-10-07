"use client";

import React from "react";
import Link from "next/link";
import { SiteLayout } from "@/components/sites/sumanthsamala/Navbar";
import {
  BriefcaseIcon,
  GraduationCapIcon,
  LinkedInIcon,
} from "@/components/sites/sumanthsamala/Icons";

interface Recommendation {
  id: string;
  author: string;
  role: string;
  organization: string;
  date: string;
  type: "Industry Supervisor" | "Academic Faculty" | "Club Leadership";
  badgeColor: string;
  avatarColor: string;
  initials: string;
  paragraphs: string[];
  skillsEndorsed: string[];
  linkedinUrl?: string;
}

const RECOMMENDATIONS: Recommendation[] = [
  {
    id: "coficab",
    author: "Wassim Adeyssi",
    role: "Business Intelligence & Data Supervisor",
    organization: "COFICAB Group (Automotive Wiring Systems)",
    date: "Summer 2026",
    type: "Industry Supervisor",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    avatarColor: "from-cyan-600 to-blue-600",
    initials: "WA",
    paragraphs: [
      "During his internship at COFICAB, Mohamed Aziz demonstrated exceptional competence in data engineering and business intelligence. He spearheaded the end-to-end automation of manufacturing reporting workflows using Python and SSIS, eliminating hours of repetitive manual data manipulation.",
      "His architectural decision to implement a quarantine validation system significantly improved data hygiene before ingestion into our SQL Server warehouse. He modeled an optimized star schema and delivered interactive Power BI executive dashboards paired with an embedded enterprise AI assistant.",
      "Aziz combines rigorous technical execution with autonomous problem-solving. He was a tremendous asset to the department and will be an invaluable addition to any data-driven engineering team.",
    ],
    skillsEndorsed: [
      "SQL Server",
      "SSIS Pipelines",
      "Star Schema Modeling",
      "Power BI & DAX",
      "Data Quality & Hygiene",
      "Python ETL",
    ],
    linkedinUrl: "https://www.linkedin.com/in/mohamed-aziz-tabakh-7b4674234",
  },
  {
    id: "esen",
    author: "Academic Faculty & BI Department Board",
    role: "Department of Business Intelligence & Computer Science",
    organization: "ESEN Manouba (École Supérieure d'Économie Numérique)",
    date: "Academic Year 2025 – 2026",
    type: "Academic Faculty",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    avatarColor: "from-blue-600 to-indigo-600",
    initials: "ES",
    paragraphs: [
      "Mohamed Aziz is among the most driven and academically accomplished students in our Business Intelligence program. His grasp of dimensional modeling, data warehousing, statistical analysis, and applied machine learning consistently places him at the top of his cohort.",
      "Beyond academic excellence, Aziz stands out for his initiative in bridging theoretical data concepts with production tools. His coursework projects exhibit professional-level software architecture, clean database indexing, and deep analytical rigor.",
      "He demonstrates a strong intellectual curiosity and leadership quality that make him an outstanding prospect for both advanced industrial roles and research-driven initiatives.",
    ],
    skillsEndorsed: [
      "Dimensional Modeling",
      "Data Warehousing",
      "Applied Machine Learning",
      "Advanced SQL",
      "Statistical Analysis",
    ],
    linkedinUrl: "https://www.linkedin.com/in/mohamed-aziz-tabakh-7b4674234",
  },
  {
    id: "hive",
    author: "ESEN HiVE Problem Solving Board",
    role: "Executive Mentors & Competitive Programming Community",
    organization: "HiVE Club & Tunisian Collegiate Programming Contest (TCPC)",
    date: "2025 – 2026",
    type: "Club Leadership",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    avatarColor: "from-amber-600 to-orange-600",
    initials: "EH",
    paragraphs: [
      "As lead of the Problem Solving department, Mohamed Aziz played an instrumental role in fostering competitive programming across our university. His deep mastery of algorithms, dynamic programming, and graph theory in C++ helped train dozens of students for Codeforces rounds and ICPC qualifiers.",
      "His technical tenacity was proven on the national stage when he ranked 32nd out of 100 top university teams in the Tunisian Collegiate Programming Contest (TCPC 2026) and clinched 1st Place at the TBS Monopoly Hackathon 5.0.",
      "Aziz is a dedicated mentor who elevates every team he collaborates with. His speed in decomposing complex algorithmic challenges under strict time pressure is truly impressive.",
    ],
    skillsEndorsed: [
      "C++ Algorithms",
      "Dynamic Programming",
      "Graph Theory",
      "Competitive Programming",
      "Team Leadership",
    ],
    linkedinUrl: "https://www.linkedin.com/in/mohamed-aziz-tabakh-7b4674234",
  },
];

export default function RecommendationsPage() {
  return (
    <SiteLayout>
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>💬 Formal Endorsements</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Professional &amp; Academic Recommendations
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Written references from industry supervisors at COFICAB, academic professors at ESEN Manouba,
            and competitive programming peers.
          </p>
        </div>

        {/* Testimonials List */}
        <div className="space-y-8">
          {RECOMMENDATIONS.map((rec) => (
            <div
              key={rec.id}
              className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-slate-700 transition-all shadow-xl relative overflow-hidden group"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />

              {/* Author Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-6 mb-6">
                <div className="flex items-center gap-4">
                  {/* Avatar Initials Ring */}
                  <div
                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${rec.avatarColor} p-[2px] shadow-lg shrink-0`}
                  >
                    <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center font-black text-white text-lg tracking-wider">
                      {rec.initials}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h2 className="text-lg sm:text-xl font-bold text-white">
                        {rec.author}
                      </h2>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded border uppercase tracking-wide ${rec.badgeColor}`}
                      >
                        {rec.type}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-cyan-400 font-medium">
                      {rec.role}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      🏢 {rec.organization} &bull; 📅 {rec.date}
                    </p>
                  </div>
                </div>

                {rec.linkedinUrl && (
                  <a
                    href={rec.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-gray-200 border border-slate-700 transition-colors w-fit"
                  >
                    <LinkedInIcon className="w-4 h-4 text-cyan-400" />
                    <span>Verified Profile</span>
                  </a>
                )}
              </div>

              {/* Quote Body */}
              <div className="space-y-3.5 text-gray-300 text-sm leading-relaxed mb-6 font-normal">
                {rec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="relative pl-5">
                    <span className="absolute left-0 top-0 text-cyan-500/60 font-serif text-lg leading-none">
                      &ldquo;
                    </span>
                    {p}
                  </p>
                ))}
              </div>

              {/* Endorsed Skills */}
              <div className="pt-4 border-t border-slate-800/80">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-2.5">
                  Endorsed Competencies:
                </span>
                <div className="flex flex-wrap gap-2">
                  {rec.skillsEndorsed.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-950 text-gray-300 border border-slate-800/80 hover:border-slate-700 transition-colors"
                    >
                      ✓ {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Navigation */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-white">Ready to connect?</h3>
            <p className="text-xs text-gray-400">
              Reach out directly or explore practical work experience.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/work-experience"
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors flex items-center gap-1.5"
            >
              <BriefcaseIcon className="w-4 h-4" /> Experience
            </Link>
            <Link
              href="/education"
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors flex items-center gap-1.5"
            >
              <GraduationCapIcon className="w-4 h-4" /> Education
            </Link>
            <Link
              href="/contact-me"
              className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-semibold transition-colors"
            >
              Contact Aziz &rarr;
            </Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
