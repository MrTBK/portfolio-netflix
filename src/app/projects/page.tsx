"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { SiteLayout } from "@/components/sites/sumanthsamala/Navbar";
import data from "@/components/sites/sumanthsamala/data.json";

interface ProjectItem {
  title: string;
  description: string;
  techUsed: string;
  category?: string;
  githubUrl?: string;
  image?: {
    url?: string;
  };
}

const TECH_EMOJIS: Record<string, string> = {
  Python: "🐍",
  "SQL Server": "🗄️",
  SSIS: "⚙️",
  "Power BI": "📊",
  Flask: "🌶️",
  Angular: "🅰️",
  "AI Chatbot": "🤖",
  "Data Warehouse": "🏢",
  ETL: "🔄",
  SQL: "💾",
  DAX: "📐",
  "Star Schema": "⭐",
  "RFM Modeling": "📈",
  "Machine Learning": "🧠",
  "ETL Quality": "🛡️",
  "Mobile Dev": "📱",
  Flutter: "💙",
  Dart: "🎯",
  SQLite: "📦",
  "UI/UX Design": "🎨",
  Multilingual: "🌐",
  "Web Dev": "💻",
  "Full-Stack": "⚡",
  "Database Design": "🗃️",
  PHP: "🐘",
  "Oracle XE": "🏛️",
  JavaScript: "💛",
  HTML5: "🌐",
  CSS3: "🎨",
  Arduino: "🤖",
  "C++": "⚡",
  Robotics: "🦾",
  Hardware: "🔌",
  "Deep RL": "♟️",
  Pygame: "🕹️",
  Sockets: "🔌",
  "IoT Analytics": "📡",
  "Predictive Modeling": "🔮",
  TypeScript: "🔷",
  "Next.js": "▲",
};

const CATEGORIES = [
  "All",
  "BI & Data Engineering",
  "AI & Machine Learning",
  "Mobile & Web",
  "Robotics & Hardware",
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const projects: ProjectItem[] = (data.allProjects as ProjectItem[]) || [];

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <SiteLayout>
      <div className="projects-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/20 text-red-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <span>🔴 Portfolio Catalog</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Featured Projects &amp; Data Systems
          </h1>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Production-grade Business Intelligence platforms, automated ETL pipelines,
            machine learning engines, and software systems built by{" "}
            <span className="text-white font-semibold">Mohamed Aziz Tabakh</span>.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {CATEGORIES.map((cat) => {
              const count =
                cat === "All"
                  ? projects.length
                  : projects.filter((p) => p.category === cat).length;
              const isActive = activeCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#E50914] text-white shadow-lg shadow-red-600/30 scale-105"
                      : "bg-[#222] text-gray-300 hover:bg-[#333] hover:text-white border border-gray-800"
                  }`}
                >
                  {cat} <span className="opacity-70 text-xs ml-1">({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((proj, idx) => {
            const techList = proj.techUsed
              ? proj.techUsed.split(",").map((s) => s.trim())
              : [];
            const imgSrc = proj.image?.url || "/sites/mrtbk/catemer360.png";

            return (
              <div
                key={idx}
                className="group relative bg-[#181818] rounded-xl overflow-hidden border border-zinc-800/80 hover:border-red-600/50 shadow-lg hover:shadow-2xl hover:shadow-red-600/20 transition-all duration-300 flex flex-col hover:-translate-y-1.5"
              >
                {/* Image & Category Overlay */}
                <div
                  className="relative h-48 sm:h-52 w-full overflow-hidden bg-zinc-900 cursor-pointer"
                  onClick={() => setSelectedProject(proj)}
                >
                  <img
                    src={imgSrc}
                    alt={proj.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-black/30" />
                  {proj.category && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md text-[11px] font-semibold text-red-400 border border-red-500/30">
                      {proj.category}
                    </span>
                  )}
                  {/* Subtle Netflix More Info Pill */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="px-2.5 py-1 rounded-md bg-red-600 text-white text-[11px] font-bold shadow-lg">
                      Quick View ▾
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3
                      className="text-lg font-bold text-white group-hover:text-red-400 transition-colors duration-200 mb-2 cursor-pointer"
                      onClick={() => setSelectedProject(proj)}
                    >
                      {proj.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4 line-clamp-3">
                      {proj.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech stack badges */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {techList.slice(0, 4).map((t, tidx) => (
                        <span
                          key={tidx}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#242424] text-gray-300 border border-zinc-700/60"
                        >
                          <span>{TECH_EMOJIS[t] || "⚡"}</span>
                          <span>{t}</span>
                        </span>
                      ))}
                      {techList.length > 4 && (
                        <span className="px-2 py-1 rounded-md text-[10px] font-semibold text-gray-400 bg-zinc-800">
                          +{techList.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Action Links */}
                    <div className="pt-3 border-t border-zinc-800 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(proj)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-200 hover:text-white bg-zinc-800 hover:bg-zinc-700 px-3 py-1.5 rounded-md transition-colors border border-zinc-700 cursor-pointer"
                      >
                        <span>ℹ️ More Info</span>
                      </button>

                      {proj.githubUrl ? (
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-red-600 hover:bg-red-700 px-3 py-1.5 rounded-md transition-colors shadow-sm"
                        >
                          <span>GitHub ↗</span>
                        </a>
                      ) : (
                        <span className="text-xs text-gray-500">Enterprise</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Netflix "More Info" Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="relative w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Image Banner */}
              <div className="relative h-56 sm:h-72 w-full bg-zinc-900 shrink-0">
                <img
                  src={selectedProject.image?.url || "/sites/mrtbk/catemer360.png"}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/75 hover:bg-red-600 border border-zinc-700 flex items-center justify-center text-white text-base font-bold transition-colors cursor-pointer shadow-lg"
                  aria-label="Close modal"
                >
                  ✕
                </button>

                {/* Title Overlay in Banner */}
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold bg-red-600 text-white uppercase tracking-wider mb-2">
                    {selectedProject.category || "Project Feature"}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-white drop-shadow-md">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>

              {/* Modal Scrollable Body */}
              <div className="p-6 overflow-y-auto space-y-6">
                {/* Meta details bar */}
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
                  <span className="text-emerald-400 font-bold">98% Match</span>
                  <span className="text-gray-400">2026</span>
                  <span className="px-1.5 py-0.5 rounded border border-gray-600 text-gray-300 text-[10px]">
                    PRODUCTION
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 text-[10px]">
                    FULL-STACK / BI
                  </span>
                </div>

                {/* Project Description */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                    Project Overview &amp; Architecture:
                  </h4>
                  <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Tech Stack Full Badges */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2.5">
                    Technologies &amp; Frameworks:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techUsed.split(",").map((t, idx) => {
                      const trimmed = t.trim();
                      return (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-900 text-gray-200 border border-zinc-800"
                        >
                          <span>{TECH_EMOJIS[trimmed] || "⚡"}</span>
                          <span>{trimmed}</span>
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Modal Footer Actions */}
                <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    {selectedProject.githubUrl ? (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm transition-all shadow-lg shadow-red-600/30"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        <span>Open Repository</span>
                        <span>↗</span>
                      </a>
                    ) : (
                      <span className="text-xs text-gray-500 italic">Enterprise / Proprietary Repository</span>
                    )}

                    <a
                      href="https://www.linkedin.com/in/mohamed-aziz-tabakh-7b4674234"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-gray-200 text-xs sm:text-sm font-semibold transition-colors border border-zinc-700"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="text-xs text-gray-400 hover:text-white px-3 py-2 transition-colors cursor-pointer"
                  >
                    Close (Esc)
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-zinc-900 via-neutral-900 to-zinc-900 border border-zinc-800 text-center">
          <h3 className="text-xl font-bold text-white mb-2">
            Interested in exploring the full codebase or discussing a collaboration?
          </h3>
          <p className="text-sm text-gray-400 mb-6 max-w-xl mx-auto">
            All code repositories, data warehouse schemas, and engineering documentation
            are maintained on GitHub.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://github.com/MrTBK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold text-sm transition-colors shadow-lg shadow-red-600/30"
            >
              <span>Explore GitHub (@MrTBK)</span>
              <span>↗</span>
            </a>
            <Link
              href="/contact-me"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#272727] hover:bg-[#333] text-gray-200 font-semibold text-sm transition-colors border border-zinc-700"
            >
              <span>Get in Touch</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
