"use client";

import React from "react";
import Link from "next/link";
import { SiteLayout } from "@/components/sites/sumanthsamala/Navbar";
import {
  GraduationCapIcon,
  BriefcaseIcon,
  CodeIcon,
} from "@/components/sites/sumanthsamala/Icons";

const EDUCATION_ITEMS = [
  {
    degree: "Licence en Informatique de Gestion",
    specialty: "Spécialité Business Intelligence (BI)",
    institution: "École Supérieure d'Économie Numérique (ESEN) — Université de la Manouba",
    location: "Tunis, Tunisia",
    status: "In Progress (Expected Graduation: June 2027)",
    dateRange: "2024 - 2027",
    color: "from-blue-600 to-cyan-500",
    badge: "CURRENT DEGREE",
    summary:
      "Comprehensive curriculum focused on enterprise decision-support systems, data warehousing, dimensional modeling, and predictive analytics. Mastering the full data lifecycle from ETL pipelines to executive dashboards.",
    keyModules: [
      "Data Warehousing & Star/Snowflake Dimensional Modeling",
      "ETL Pipeline Design & SSIS Integration Services",
      "Advanced SQL Server, Optimization & Indexing",
      "Power BI, DAX Modeling & Executive KPI Dashboards",
      "Machine Learning, Data Mining & Python Analytics",
      "Relational Databases, Stored Procedures & Triggers",
    ],
  },
  {
    degree: "Baccalauréat en Sciences de l'Informatique",
    specialty: "Section Sciences de l'Informatique (Mention Très Bien / Honors)",
    institution: "Lycée Mohamed Arbi Chammari",
    location: "Tunisia",
    status: "Graduated with Honors",
    dateRange: "2024",
    color: "from-amber-500 to-orange-500",
    badge: "GRADUATED WITH HONORS",
    summary:
      "Deep foundational study in algorithmic problem solving, computational logic, object-oriented concepts, computer systems architecture, and applied mathematics.",
    keyModules: [
      "Algorithms & Advanced Data Structures",
      "Programming in Pascal & Python",
      "Computer Architecture & Boolean Logic",
      "Discrete Mathematics & Probability",
      "Relational Database Fundamentals",
    ],
  },
];

export default function EducationPage() {
  return (
    <SiteLayout>
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCapIcon className="w-4 h-4" /> Academic Background
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Education &amp; Academic Degrees
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
            Formal education at ESEN Manouba specializing in Business Intelligence, Data Engineering, and Algorithmic Problem Solving.
          </p>
        </div>

        <div className="space-y-8">
          {EDUCATION_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-slate-700 transition-all shadow-xl"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-blue-600/30 text-blue-300 border border-blue-500/30">
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono text-gray-400">
                      📅 {item.dateRange}
                    </span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-white">
                    {item.degree}
                  </h2>
                  <p className="text-cyan-400 font-medium text-sm mt-0.5">
                    {item.specialty}
                  </p>
                  <p className="text-gray-400 text-xs mt-1">
                    📍 {item.institution} &bull; {item.location}
                  </p>
                </div>
                <div className="text-xs font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-3 py-1.5 rounded-lg w-fit">
                  ✓ {item.status}
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {item.summary}
              </p>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                  Key Coursework &amp; Core Competencies
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {item.keyModules.map((module, mIdx) => (
                    <div
                      key={mIdx}
                      className="flex items-center gap-2.5 text-xs text-gray-200 bg-slate-950/70 border border-slate-800/80 rounded-lg p-2.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>{module}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Nav Links */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-white">Explore Next</h3>
            <p className="text-xs text-gray-400">See practical industry experience and production projects.</p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/work-experience"
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors flex items-center gap-1.5"
            >
              <BriefcaseIcon className="w-4 h-4" /> Experience
            </Link>
            <Link
              href="/projects"
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors flex items-center gap-1.5"
            >
              <CodeIcon className="w-4 h-4" /> Projects
            </Link>
            <Link
              href="/honors"
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors flex items-center gap-1.5"
            >
              🏆 Honors
            </Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
