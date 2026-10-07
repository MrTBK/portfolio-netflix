"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SiteLayout } from "@/components/sites/sumanthsamala/Navbar";
import {
  BriefcaseIcon,
  GraduationCapIcon,
  CodeIcon,
} from "@/components/sites/sumanthsamala/Icons";

interface WorkExperience {
  id: string;
  role: string;
  company: string;
  type: string;
  location: string;
  period: string;
  badge: string;
  badgeColor: string;
  mentor?: string;
  overview: string;
  achievements: string[];
  techStack: string[];
  featured?: boolean;
  recommendationLink?: string;
}

const EXPERIENCES: WorkExperience[] = [
  {
    id: "coficab",
    role: "Summer Intern — Business Intelligence & AI",
    company: "COFICAB Group (Tunisia)",
    type: "Industry Internship · Hybrid",
    location: "Medjez El Bab / Tunis, Tunisia",
    period: "July 2026 – August 2026",
    badge: "FEATURED INDUSTRY EXPERIENCE",
    badgeColor: "bg-red-500/20 text-red-300 border-red-500/40",
    mentor: "Encadré par Wassim Adeyssi (BI & Data Supervisor)",
    featured: true,
    recommendationLink: "/recommendations",
    overview:
      "Engineered an end-to-end corporate Business Intelligence platform for automotive wiring harness manufacturing, automating raw Excel data extraction, strict quality validation, and real-time executive analytics.",
    achievements: [
      "Automated complex Excel data extraction, cleaning pipelines, and structured staging into SQL Server using Python (Pandas/SQLAlchemy) and SSIS packages.",
      "Engineered an automated data quarantine zone with strict schema validation, anomaly detection, and data cleansing to guarantee data integrity.",
      "Designed and modeled a high-performance Star Schema Data Warehouse in SQL Server Management Studio (SSMS) optimized for analytical reporting.",
      "Built interactive executive Power BI dashboards with custom DAX measures, automated KPI tracking, and operational drill-down views.",
      "Contributed to building a responsive data and file management web platform using Flask and Angular.",
      "Developed an AI-powered conversational chatbot enabling non-technical plant managers to query live manufacturing metrics via natural language.",
    ],
    techStack: [
      "Python ETL",
      "SQL Server",
      "SSIS",
      "Power BI & DAX",
      "Star Schema DW",
      "Flask",
      "Angular",
      "AI Chatbot",
    ],
  },
  {
    id: "esen-pm",
    role: "Project Manager · Part-time",
    company: "ESEN HiVE Club",
    type: "Leadership & Operations · On-site",
    location: "ESEN Manouba, Tunis",
    period: "August 2026 – Present",
    badge: "PROJECT MANAGEMENT & OPERATIONS",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
    overview:
      "Directing project execution, resources, and technical infrastructure for university technology initiatives, hackathons, and multi-disciplinary student projects.",
    achievements: [
      "Manage and oversee project execution, resource allocation, and operations for university tech initiatives, workshops, and hackathons at ESEN Manouba.",
      "Coordinate cross-functional student committees spanning competitive programming, software development, and community logistics.",
      "Lead event planning, schedules, resources, and technical infrastructure for university-wide coding contests and hackathons.",
    ],
    techStack: [
      "Project Management",
      "Team Leadership",
      "Event Coordination",
      "Agile Operations",
      "Resource Allocation",
    ],
  },
  {
    id: "esen-lead",
    role: "Problem Solving Department Leader",
    company: "ESEN HiVE Club",
    type: "Technical Leadership · Part-time",
    location: "ESEN Manouba, Tunis",
    period: "September 2025 – June 2026 · 10 mos",
    badge: "ALGORITHMIC LEADERSHIP",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/40",
    overview:
      "Directed the Problem Solving division of ESEN HiVE Club, architecting training curricula for competitive programming in C++ and mentoring students.",
    achievements: [
      "Led the Problem Solving division of ESEN HiVE Club, structuring comprehensive training curricula for competitive programming in C++.",
      "Provided technical mentorship in algorithms, graph theory, and dynamic programming for 40+ engineering students.",
      "Served as head problem setter and judge for the club's flagship Bee Battle contest and campus rounds.",
    ],
    techStack: [
      "C++",
      "Competitive Programming",
      "Graph Algorithms",
      "Dynamic Programming",
      "Problem Setting",
      "Bee Battle",
    ],
  },
  {
    id: "ieee-insat",
    role: "Competitive Programming Workshop Trainer",
    company: "IEEE INSAT Computer Society Chapter",
    type: "Invited Technical Trainer · On-site",
    location: "INSAT, Tunis",
    period: "October 2026",
    badge: "INVITED TECHNICAL TRAINER",
    badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    overview:
      "Invited to deliver an intensive competitive programming workshop for engineering students at the prestigious INSAT campus.",
    achievements: [
      "Invited as competitive programming trainer alongside teammates Mohamed Aziz Beldi and Mohamed Yassine Rached to lead an intensive Introduction to Competitive Programming workshop at INSAT.",
      "Trained university engineering participants in problem-solving techniques, analytical problem decomposition, and competitive C++ fundamentals.",
      "Designed algorithmic challenges and walked through live optimization strategies.",
    ],
    techStack: [
      "C++",
      "Advanced Problem Solving",
      "Algorithm Decomposition",
      "IEEE INSAT",
      "Competitive Mentorship",
    ],
  },
  {
    id: "youth-yes",
    role: "Robotics & Algorithmics Trainer · Part-time",
    company: "Youth Yes We Care Association",
    type: "Community STEM Education · On-site",
    location: "Tunis, Tunisia",
    period: "June 2024 – Present · 2+ years",
    badge: "COMMUNITY & STEM IMPACT",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/40",
    overview:
      "Teaching youth foundational robotics, microcontrollers, sensor integration, and algorithmic logic through hands-on hardware builds.",
    achievements: [
      "Teach students fundamentals of robotics, coding, circuit schematics, and automation.",
      "Lead hands-on technical sessions where students build and program robots with Arduino, sensors, motor controllers, and embedded C++.",
      "Mentored student teams for regional and national educational robotics tournaments.",
    ],
    techStack: [
      "Arduino",
      "Embedded C++",
      "Sensors & Microcontrollers",
      "Circuit Prototyping",
      "Robotics & Automation",
    ],
  },
];

export default function WorkExperiencePage() {
  const [filter, setFilter] = useState<"all" | "industry" | "leadership">("all");

  const filteredExperiences = EXPERIENCES.filter((exp) => {
    if (filter === "industry") return exp.id === "coficab";
    if (filter === "leadership") return exp.id !== "coficab";
    return true;
  });

  return (
    <SiteLayout>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/20 text-red-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <BriefcaseIcon className="w-4 h-4" /> Professional Journey
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Work Experience &amp; Leadership
          </h1>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Hands-on corporate data engineering, automated ETL workflows, executive Power BI modeling,
            and proven leadership in algorithmic problem-solving.
          </p>

          {/* Metric Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8">
            <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-center">
              <div className="text-2xl font-black text-white">4+</div>
              <div className="text-[11px] text-gray-400 font-medium mt-0.5">Organizations &amp; Roles</div>
            </div>
            <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-center">
              <div className="text-2xl font-black text-red-500">100+</div>
              <div className="text-[11px] text-gray-400 font-medium mt-0.5">Students Mentored</div>
            </div>
            <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-center">
              <div className="text-2xl font-black text-cyan-400">End-to-End</div>
              <div className="text-[11px] text-gray-400 font-medium mt-0.5">BI &amp; AI Pipeline at COFICAB</div>
            </div>
            <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-center">
              <div className="text-2xl font-black text-amber-400">1st Place</div>
              <div className="text-[11px] text-gray-400 font-medium mt-0.5">Hackathon &amp; TCPC Finalist</div>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                filter === "all"
                  ? "bg-[#E50914] text-white shadow-md shadow-red-600/30 scale-105"
                  : "bg-zinc-800 text-gray-300 hover:bg-zinc-700 hover:text-white border border-zinc-700"
              }`}
            >
              All Roles ({EXPERIENCES.length})
            </button>
            <button
              onClick={() => setFilter("industry")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                filter === "industry"
                  ? "bg-[#E50914] text-white shadow-md shadow-red-600/30 scale-105"
                  : "bg-zinc-800 text-gray-300 hover:bg-zinc-700 hover:text-white border border-zinc-700"
              }`}
            >
              🏢 Corporate BI &amp; AI (1)
            </button>
            <button
              onClick={() => setFilter("leadership")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                filter === "leadership"
                  ? "bg-[#E50914] text-white shadow-md shadow-red-600/30 scale-105"
                  : "bg-zinc-800 text-gray-300 hover:bg-zinc-700 hover:text-white border border-zinc-700"
              }`}
            >
              ⚡ Leadership &amp; Training (4)
            </button>
          </div>
        </div>

        {/* Timeline List */}
        <div className="space-y-8 relative">
          {/* Vertical Glowing Connector Line */}
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-red-600 via-cyan-500 to-amber-500 opacity-30 pointer-events-none" />

          {filteredExperiences.map((exp) => (
            <div
              key={exp.id}
              className={`relative bg-zinc-900/90 rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-xl overflow-hidden group border ${
                exp.featured
                  ? "border-red-600/60 shadow-red-600/10 hover:border-red-500"
                  : "border-zinc-800 hover:border-zinc-700"
              }`}
            >
              {/* Subtle Ambient Glow */}
              <div
                className={`absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl pointer-events-none transition-opacity ${
                  exp.featured
                    ? "bg-red-600/10 group-hover:bg-red-600/15"
                    : "bg-blue-600/5 group-hover:bg-blue-600/10"
                }`}
              />

              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-zinc-800/80 pb-5 mb-5">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span
                      className={`text-[11px] font-bold px-2.5 py-0.5 rounded border uppercase tracking-wider ${exp.badgeColor}`}
                    >
                      {exp.badge}
                    </span>
                    <span className="text-xs font-mono text-gray-400">
                      📅 {exp.period}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-red-400 transition-colors">
                    {exp.role}
                  </h2>
                  <p className="text-sm font-semibold text-gray-200 mt-1">
                    🏢 {exp.company} &bull; <span className="text-gray-400 font-normal">{exp.type}</span>
                  </p>
                  {exp.mentor && (
                    <p className="text-xs text-cyan-400 font-medium mt-1">
                      👤 {exp.mentor}
                    </p>
                  )}
                  <p className="text-xs text-gray-400 mt-0.5">
                    📍 {exp.location}
                  </p>
                </div>

                {exp.recommendationLink && (
                  <Link
                    href={exp.recommendationLink}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-semibold transition-all shadow-md shadow-red-600/30 w-fit self-start shrink-0"
                  >
                    <span>Read Recommendation</span>
                    <span>&rarr;</span>
                  </Link>
                )}
              </div>

              {/* Overview paragraph */}
              <p className="text-sm text-gray-300 leading-relaxed mb-4 font-medium">
                {exp.overview}
              </p>

              {/* Key achievements */}
              <div className="space-y-2 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                  Key Deliverables &amp; Outcomes:
                </h4>
                <ul className="space-y-2 text-sm text-gray-300 list-none pl-0">
                  {exp.achievements.map((ach, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2.5">
                      <span className="text-red-500 font-bold shrink-0 mt-0.5">▸</span>
                      <span className="leading-relaxed">{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center gap-1.5">
                <span className="text-xs text-gray-400 font-semibold mr-1">Skills:</span>
                {exp.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-800/80 text-gray-200 border border-zinc-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Nav Links */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-zinc-900 via-neutral-900 to-zinc-900 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white">Continue Exploring</h3>
            <p className="text-xs sm:text-sm text-gray-400">
              Review academic degrees, live projects, or get in touch for new opportunities.
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            <Link
              href="/education"
              className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold transition-colors flex items-center gap-1.5 border border-zinc-700"
            >
              <GraduationCapIcon className="w-4 h-4 text-cyan-400" /> Education
            </Link>
            <Link
              href="/projects"
              className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold transition-colors flex items-center gap-1.5 border border-zinc-700"
            >
              <CodeIcon className="w-4 h-4 text-red-500" /> Projects
            </Link>
            <Link
              href="/recommendations"
              className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold transition-colors flex items-center gap-1.5 border border-zinc-700"
            >
              💬 Recommendations
            </Link>
            <Link
              href="/contact-me"
              className="px-4 py-2 rounded-lg bg-[#E50914] hover:bg-red-700 text-white text-xs font-semibold transition-colors shadow-md shadow-red-600/30"
            >
              Hire Aziz &rarr;
            </Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
