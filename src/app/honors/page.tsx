"use client";

import React from "react";
import Link from "next/link";
import { SiteLayout } from "@/components/sites/sumanthsamala/Navbar";
import {
  GraduationCapIcon,
  ExternalLinkIcon,
  BriefcaseIcon,
  CodeIcon,
} from "@/components/sites/sumanthsamala/Icons";

const HONORS = [
  {
    title: "Hackathon Monopoly 5.0 — 1st Place Winner 🥇",
    issuer: "ENACTUS TBS (Tunis Business School)",
    issuedDate: "May 2026",
    link: "https://www.linkedin.com/in/mohamed-aziz-tabakh-7b4674234",
    imgSrc: "/sites/mrtbk/competitions/monopoly-hackathon.jpg",
    badge: "1ST PLACE WINNER",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    description:
      "Secured 1st place with team 'Team Wahda' in the Hackathon Monopoly 5.0. Developed an innovative strategic and technological solution evaluated by industry judges on business impact, technical depth, and feasibility.",
  },
  {
    title: "Tunisian Collegiate Programming Contest (TCPC)",
    issuer: "ICPC Official Qualifier — Ranked #32 Nationally",
    issuedDate: "March 2026",
    link: "https://www.linkedin.com/in/mohamed-aziz-tabakh-7b4674234",
    imgSrc: "/sites/mrtbk/competitions/tcpc-2026.jpg",
    badge: "ICPC QUALIFIER",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    description:
      "Ranked 32nd out of 100 top university teams nationally. Official qualifying round for the Arab & Africa Collegiate Programming Championship (ACPC/ICPC). Solved advanced algorithmic problems under strict contest constraints.",
  },
  {
    title: "Winter Cup Contest — INSAT Finalist",
    issuer: "INSAT Competitive Programming Club",
    issuedDate: "2025",
    link: "https://github.com/MrTBK",
    imgSrc: "/sites/mrtbk/competitions/winter-cup.jpg",
    badge: "FINALIST",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    description:
      "Intensive inter-university algorithmic coding competition tackling dynamic programming, trees, graphs, and number theory in C++.",
  },
  {
    title: "ESEN HiVE Contest & Problem Solving Lead",
    issuer: "ESEN HiVE Club",
    issuedDate: "2025 - 2026",
    link: "https://github.com/MrTBK",
    imgSrc: "/sites/mrtbk/competitions/esen-hive-contest.jpg",
    badge: "LEADERSHIP & PROBLEM SOLVING",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    description:
      "Co-organized and problem-set competitive programming rounds for university cohorts while competing in specialized problem-solving events.",
  },
  {
    title: "Codex CP Competition",
    issuer: "Competitive Programming Community",
    issuedDate: "2025",
    link: "https://github.com/MrTBK",
    badge: "COMPETITIVE CODER",
    badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    imgSrc: "/sites/mrtbk/competitions/codex-cp.jpg",
    description:
      "Competitive programming round focusing on speed, mathematical modeling, and optimized algorithmic solutions.",
  },
  {
    title: "Bee Battle Contest — ESEN HiVE Club",
    issuer: "ESEN HiVE Club",
    issuedDate: "2025",
    link: "https://github.com/MrTBK",
    badge: "ALGORITHMIC DUEL",
    badgeColor: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    imgSrc: "/sites/mrtbk/competitions/bee-battle.jpg",
    description:
      "University algorithmic duel challenging teams on high-speed problem decomposition and clean edge-case handling.",
  },
];

export default function HonorsPage() {
  return (
    <SiteLayout>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            🏆 Honors &amp; Awards
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Honors, Competitions &amp; Hackathons
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
            National competitive programming achievements, hackathon 1st place awards, and algorithmic milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HONORS.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-between overflow-hidden bg-slate-900/80 border border-slate-800 hover:border-amber-500/60 transition-all rounded-xl p-0 shadow-lg group"
            >
              <div className="aspect-video w-full overflow-hidden bg-slate-950 relative">
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className={`absolute top-3 left-3 text-[10px] font-bold px-2 py-0.5 rounded border backdrop-blur-md ${item.badgeColor}`}>
                  {item.badge}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-amber-400">
                      {item.issuedDate}
                    </span>
                    <GraduationCapIcon className="w-5 h-5 text-amber-400" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-cyan-400 mb-2">{item.issuer}</p>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 mt-4 border-t border-slate-800 flex items-center justify-between text-xs text-gray-400 group-hover:text-white transition-colors">
                  <span>View Details</span>
                  <ExternalLinkIcon className="w-4 h-4" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Quick Nav Links */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-white">Continue Exploring</h3>
            <p className="text-xs text-gray-400">View education credentials, technical skills, or live projects.</p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/education"
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors flex items-center gap-1.5"
            >
              🎓 Education
            </Link>
            <Link
              href="/work-experience"
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors flex items-center gap-1.5"
            >
              <BriefcaseIcon className="w-4 h-4" /> Experience
            </Link>
            <Link
              href="/projects"
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors flex items-center gap-1.5"
            >
              <CodeIcon className="w-4 h-4" /> Projects
            </Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
