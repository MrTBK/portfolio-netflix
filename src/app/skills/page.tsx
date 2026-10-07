"use client";

import React, { useState, useMemo, useRef } from "react";
import Link from "next/link";
import { SiteLayout } from "@/components/sites/sumanthsamala/Navbar";
import {
  BriefcaseIcon,
  CodeIcon,
  GraduationCapIcon,
} from "@/components/sites/sumanthsamala/Icons";

export interface SkillItem {
  id: string;
  name: string;
  category:
    | "BI & Data Engineering"
    | "Programming & Algorithms"
    | "Web & APIs"
    | "DevOps & Systems";
  level: string;
  rating: number; // percentage 0-100
  accentColor: string;
  tagline: string;
  svgIcon: React.ReactNode;
  summary: string;
  details: string[];
  appliedProject: string;
  projectLink?: string;
  inTop10?: number; // 1-10 rank
  yearsOrUsage: string;
}

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);
  const [viewMode, setViewMode] = useState<"shelves" | "grid">("shelves");
  const [spotlightId, setSpotlightId] = useState<string>("sql-server");

  // Carousel refs for shelves
  const top10Ref = useRef<HTMLDivElement>(null);
  const biRef = useRef<HTMLDivElement>(null);
  const algoRef = useRef<HTMLDivElement>(null);
  const webRef = useRef<HTMLDivElement>(null);
  const devopsRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (ref: React.RefObject<HTMLDivElement | null>, offset: number) => {
    if (ref.current) {
      ref.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  const SKILLS: SkillItem[] = useMemo(
    () => [
      // 1. BI & DATA ENGINEERING
      {
        id: "sql-server",
        name: "SQL Server & SSIS",
        category: "BI & Data Engineering",
        level: "Production Core",
        rating: 98,
        inTop10: 1,
        yearsOrUsage: "COFICAB Automotive & Production",
        accentColor: "from-red-600 to-rose-700",
        tagline: "Enterprise Relational DBs & Automated ETL",
        svgIcon: (
          <svg className="w-8 h-8 fill-current text-red-500" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 4.02 2 6.5v11C2 19.98 6.48 22 12 22s10-2.02 10-4.5v-11C22 4.02 17.52 2 12 2zm0 3c4.41 0 8 1.34 8 2.5S16.41 10 12 10 4 8.66 4 7.5 7.59 5 12 5zm0 14c-4.41 0-8-1.34-8-2.5v-2.12c2.18 1.38 5.16 2.12 8 2.12s5.82-.74 8-2.12v2.12c0 1.16-3.59 2.5-8 2.5zm0-4.5c-4.41 0-8-1.34-8-2.5v-2.12c2.18 1.38 5.16 2.12 8 2.12s5.82-.74 8-2.12v2.12c0 1.16-3.59 2.5-8 2.5z" />
          </svg>
        ),
        summary:
          "Enterprise SQL Server Management Studio (SSMS), SSIS package ETL workflows, index tuning, clustered table optimization, and automated data staging.",
        details: [
          "Automated complex Excel extraction into SQL Server at COFICAB Group.",
          "Designed multi-table relational schema with strict foreign keys & constraints.",
          "Optimized execution plans, clustered indexes, and stored procedures for high-concurrency reporting.",
        ],
        appliedProject: "COFICAB Group & SupplyChainIQ",
        projectLink: "/projects",
      },
      {
        id: "power-bi",
        name: "Power BI & DAX",
        category: "BI & Data Engineering",
        level: "Production Core",
        rating: 97,
        inTop10: 2,
        yearsOrUsage: "Plant KPI Dashboards & Executives",
        accentColor: "from-amber-500 to-yellow-600",
        tagline: "Executive KPI Telemetry & Complex DAX",
        svgIcon: (
          <svg className="w-8 h-8 fill-current text-amber-400" viewBox="0 0 24 24">
            <path d="M4 13h3v8H4v-8zm5-5h3v13H9V8zm5-6h3v19h-3V2zm5 9h3v10h-3v-10z" />
          </svg>
        ),
        summary:
          "Executive KPI dashboards, real-time telemetry, complex DAX time-intelligence formulas, and automotive plant operational reporting.",
        details: [
          "Created interactive decision dashboards for plant managers at COFICAB.",
          "Authored custom DAX measures for variance, cumulative year-to-date growth, and moving averages.",
          "Configured Row-Level Security (RLS) and automated scheduled data gateway refreshes.",
        ],
        appliedProject: "COFICAB Plant Analytics & SalesPulse",
        projectLink: "/projects",
      },
      {
        id: "star-schema",
        name: "Dimensional Modeling",
        category: "BI & Data Engineering",
        level: "Architecture",
        rating: 96,
        inTop10: 3,
        yearsOrUsage: "Kimball Data Warehouse Design",
        accentColor: "from-blue-600 to-indigo-700",
        tagline: "Kimball Star & Snowflake Schemas",
        svgIcon: (
          <svg className="w-8 h-8 fill-current text-cyan-400" viewBox="0 0 24 24">
            <path d="M12 2l2.4 7.2h7.6l-6.1 4.5 2.3 7.3-6.2-4.6-6.2 4.6 2.3-7.3-6.1-4.5h7.6z" />
          </svg>
        ),
        summary:
          "Kimball Data Warehouse methodology: Fact & Dimension tables, surrogate keys, snowflake schemas, and business Data Marts.",
        details: [
          "Modeled Star Schema DW under SSMS for automotive manufacturing operations.",
          "Separated transactional operational OLTP data from analytical reporting marts (OLAP).",
          "Designed Slowly Changing Dimensions (SCD Type 1 & 2) and date dimensions.",
        ],
        appliedProject: "COFICAB Star Schema & SupplyChainIQ",
        projectLink: "/projects",
      },
      {
        id: "python-etl",
        name: "Python ETL Pipelines",
        category: "BI & Data Engineering",
        level: "Automated Staging",
        rating: 95,
        inTop10: 5,
        yearsOrUsage: "Automated Ingestion Scripts",
        accentColor: "from-emerald-500 to-teal-700",
        tagline: "Automated Cleansing & SQLAlchemy",
        svgIcon: (
          <svg className="w-8 h-8 fill-current text-emerald-400" viewBox="0 0 24 24">
            <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0020 12c0-4.42-3.58-8-8-8zm0 14c-3.31-6-6 2.69-6 6 0 1.01.25 1.97.7 2.8L5.24 7.74A7.93 7.93 0 004 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" />
          </svg>
        ),
        summary:
          "Automated extraction, data cleansing with Pandas, SQLAlchemy pipelines, and automated database loading.",
        details: [
          "Engineered scripts to parse, clean, and validate heterogeneous Excel sheets.",
          "Handled dirty data, missing cells, type coercions, and formatting anomalies.",
          "Scheduled automated ingestion with zero human intervention.",
        ],
        appliedProject: "COFICAB Group & DataForge",
        projectLink: "/projects",
      },
      {
        id: "data-quality",
        name: "Data Quality & Quarantine",
        category: "BI & Data Engineering",
        level: "Production Hygiene",
        rating: 93,
        yearsOrUsage: "Automated Validation Rules",
        accentColor: "from-purple-600 to-indigo-800",
        tagline: "Bad Record Isolation & Telemetry",
        svgIcon: (
          <svg className="w-8 h-8 fill-current text-purple-400" viewBox="0 0 24 24">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
          </svg>
        ),
        summary:
          "Automated verification rules, bad record quarantine isolation, error telemetry logs, and schema enforcement.",
        details: [
          "Constructed automated quarantine tables for invalid rows during ETL.",
          "Prevented corrupt manufacturing records from polluting production dashboards.",
          "Implemented error telemetry and alerting for plant engineers.",
        ],
        appliedProject: "COFICAB Data Integration",
        projectLink: "/projects",
      },
      {
        id: "dbt-transforms",
        name: "dbt (Data Build Tool)",
        category: "BI & Data Engineering",
        level: "Analytics Engineering",
        rating: 89,
        yearsOrUsage: "SQL Modular Transformations",
        accentColor: "from-orange-500 to-amber-600",
        tagline: "Modular SQL & Automated Data Testing",
        svgIcon: (
          <svg className="w-8 h-8 fill-current text-orange-400" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        ),
        summary:
          "Version-controlled SQL transformations, automated data testing, schema documentation, and reproducible analytical pipelines.",
        details: [
          "Applied modular DAG model structures for staging, intermediate, and marts layers.",
          "Configured uniqueness, not-null, and relationship tests on dimension keys.",
          "Enforced documentation of data lineage and metrics across the warehouse.",
        ],
        appliedProject: "Modern Analytics Engineering",
        projectLink: "/projects",
      },
      {
        id: "postgresql",
        name: "PostgreSQL & Relational Architecture",
        category: "BI & Data Engineering",
        level: "Relational Architecture",
        rating: 92,
        inTop10: 7,
        yearsOrUsage: "Normalized Modeling & CTEs",
        accentColor: "from-sky-600 to-blue-800",
        tagline: "Advanced Window Functions & Constraints",
        svgIcon: (
          <svg className="w-8 h-8 fill-current text-sky-400" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" />
          </svg>
        ),
        summary:
          "Advanced SQL queries, CTEs, window functions, relational modeling, foreign constraints, indexes, and automated audit triggers.",
        details: [
          "Modeled normalized relational schemas across multiple web platforms.",
          "Authored analytical queries utilizing CTEs, Window Functions, and subqueries.",
          "Built database triggers for auditing and automated record timestamping.",
        ],
        appliedProject: "Catemer360 & ESEN Manouba",
        projectLink: "/projects",
      },

      // 2. PROGRAMMING & ALGORITHMS
      {
        id: "cpp-algorithms",
        name: "C++ & Competitive Programming",
        category: "Programming & Algorithms",
        level: "National Contest Finalist",
        rating: 97,
        inTop10: 4,
        yearsOrUsage: "TCPC #32 National & Bee Battle Lead",
        accentColor: "from-red-600 to-rose-800",
        tagline: "Algorithms, Graph Theory & DP",
        svgIcon: (
          <svg className="w-8 h-8 fill-current text-red-500" viewBox="0 0 24 24">
            <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
          </svg>
        ),
        summary:
          "High-speed algorithmic problem solving, graph theory, trees, dynamic programming, and ICPC/TCPC competition rounds.",
        details: [
          "Ranked #32 nationally in the Tunisian Collegiate Programming Contest (TCPC).",
          "Problem setter and mentor for university coding competitions (Bee Battle).",
          "Deep mastery of time/space complexity optimization, STL, and memory management.",
        ],
        appliedProject: "TCPC National Contest & ESEN HiVE",
        projectLink: "/honors",
      },
      {
        id: "python-ml",
        name: "Python (Data Science & ML)",
        category: "Programming & Algorithms",
        level: "Predictive Engines",
        rating: 94,
        yearsOrUsage: "Scikit-Learn, Pandas & RFM",
        accentColor: "from-emerald-500 to-green-700",
        tagline: "Machine Learning & Statistical Clustering",
        svgIcon: (
          <svg className="w-8 h-8 fill-current text-emerald-400" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
          </svg>
        ),
        summary:
          "Scikit-Learn predictive modeling, Pandas/NumPy matrix math, RFM customer clustering, and machine learning evaluation.",
        details: [
          "Engineered predictive machine learning engines in SupplyChainIQ and MaintIQ.",
          "Applied K-Means clustering for RFM customer segmentation in SalesPulse.",
          "Evaluated models with Confusion Matrices, ROC-AUC, and Cross-Validation.",
        ],
        appliedProject: "SupplyChainIQ, SalesPulse & MaintIQ",
        projectLink: "/projects",
      },
      {
        id: "ibm-data",
        name: "IBM Data Fundamentals",
        category: "Programming & Algorithms",
        level: "IBM Certified",
        rating: 95,
        yearsOrUsage: "IBM SkillsBuild Certification",
        accentColor: "from-blue-600 to-indigo-800",
        tagline: "Certified Data Analysis Foundations",
        svgIcon: (
          <svg className="w-8 h-8 fill-current text-blue-400" viewBox="0 0 24 24">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
          </svg>
        ),
        summary:
          "Comprehensive industry certification in foundational data science, data warehousing, data governance, and analytics pipelines.",
        details: [
          "Awarded IBM Data Fundamentals credential via IBM SkillsBuild.",
          "Mastered data collection, cleaning, governance principles, and visualization.",
          "Applied foundational analytics standards across university and internship projects.",
        ],
        appliedProject: "IBM SkillsBuild Certification",
        projectLink: "/honors",
      },
      {
        id: "javascript-web",
        name: "JavaScript & Modern Logic",
        category: "Programming & Algorithms",
        level: "Proficient",
        rating: 88,
        yearsOrUsage: "ES6+, Async/Await & APIs",
        accentColor: "from-amber-400 to-yellow-600",
        tagline: "Asynchronous Web Logic & DOM State",
        svgIcon: (
          <svg className="w-8 h-8 fill-current text-yellow-400" viewBox="0 0 24 24">
            <path d="M3 3h18v18H3V3zm15 14.5v-7h-2.5v7H18zm-5 0v-4.5c0-1.1-.9-2-2-2s-2 .9-2 2v4.5h2.5V13c0-.3.2-.5.5-.5s.5.2.5.5v4.5H13z" />
          </svg>
        ),
        summary:
          "ES6+ async logic, DOM state handling, interactive browser events, and responsive front-end programming.",
        details: [
          "Developed rich user interactions and interactive client dashboards.",
          "Integrated REST endpoints with Promises and async/await flows.",
          "Structured clean modular code for frontend single-page experiences.",
        ],
        appliedProject: "Full-Stack Web Platforms",
        projectLink: "/projects",
      },

      // 3. WEB & APIS
      {
        id: "enterprise-ai",
        name: "Enterprise AI & NL-to-SQL",
        category: "Web & APIs",
        level: "AI Innovation",
        rating: 94,
        inTop10: 6,
        yearsOrUsage: "Conversational BI for Managers",
        accentColor: "from-purple-600 to-violet-800",
        tagline: "NL-to-SQL Assistant for Plant Leaders",
        svgIcon: (
          <svg className="w-8 h-8 fill-current text-purple-400" viewBox="0 0 24 24">
            <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.38-1 1.72V7h2a3 3 0 0 1 3 3v2h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v1a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-1H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h1v-2a3 3 0 0 1 3-3h2V5.72A2 2 0 0 1 10 4a2 2 0 0 1 2-2zm-4 9a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm8 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
          </svg>
        ),
        summary:
          "Natural Language to SQL querying assistants, conversational intelligence for plant managers, and LLM automation.",
        details: [
          "Developed conversational chatbot enabling managers to query metrics in plain English/French.",
          "Constructed prompt templates and schema context injection for precision.",
          "Reduced time required for plant leaders to extract daily performance metrics.",
        ],
        appliedProject: "COFICAB AI Assistant & Shadow-Code",
        projectLink: "/projects",
      },
      {
        id: "flask-api",
        name: "Flask & Microservices",
        category: "Web & APIs",
        level: "Production Backend",
        rating: 91,
        yearsOrUsage: "Internal Ingestion Microservices",
        accentColor: "from-cyan-500 to-blue-700",
        tagline: "Lightweight Python REST Backends",
        svgIcon: (
          <svg className="w-8 h-8 fill-current text-cyan-400" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l5.59-5.59L19 10l-7 7z" />
          </svg>
        ),
        summary:
          "Lightweight Python REST endpoints, file ingestion management, and backend microservices connecting to SQL Server.",
        details: [
          "Constructed secure API endpoints for data file management at COFICAB.",
          "Integrated Python business logic with backend database connection pools.",
          "Served dynamic JSON responses for Angular front-end clients.",
        ],
        appliedProject: "COFICAB Management Platform",
        projectLink: "/projects",
      },
      {
        id: "fastapi",
        name: "FastAPI & Async Services",
        category: "Web & APIs",
        level: "Modern High-Speed API",
        rating: 92,
        inTop10: 9,
        yearsOrUsage: "High-Throughput Endpoints & Docs",
        accentColor: "from-emerald-500 to-teal-700",
        tagline: "Pydantic Schemas & OpenAPI Documentation",
        svgIcon: (
          <svg className="w-8 h-8 fill-current text-teal-400" viewBox="0 0 24 24">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        ),
        summary:
          "Modern high-speed asynchronous APIs with Python, Pydantic type validation, automated OpenAPI interactive docs, and low-latency endpoints.",
        details: [
          "Architected async endpoints for real-time model inference and telemetry.",
          "Enforced strict request/response data contracts via Pydantic models.",
          "Achieved sub-10ms response times for analytical calculation microservices.",
        ],
        appliedProject: "Modern Microservice Stacks",
        projectLink: "/projects",
      },
      {
        id: "angular-ts",
        name: "Angular & TypeScript",
        category: "Web & APIs",
        level: "Enterprise UI",
        rating: 89,
        inTop10: 10,
        yearsOrUsage: "Internal COFICAB File Portal",
        accentColor: "from-rose-600 to-red-800",
        tagline: "Component Architecture & Reactive Forms",
        svgIcon: (
          <svg className="w-8 h-8 fill-current text-red-400" viewBox="0 0 24 24">
            <path d="M12 2.5L2 6l1.5 13L12 22.5 20.5 19 22 6 12 2.5zm0 3.2l5.7 12.8h-2.1l-1.2-3H9.6l-1.2 3H6.3L12 5.7zm1.6 7.6L12 9.2l-1.6 4.1h3.2z" />
          </svg>
        ),
        summary:
          "Component-driven single-page architecture, dependency injection, reactive forms, and plant operational UI.",
        details: [
          "Collaborated on building an internal file and data portal at COFICAB.",
          "Designed responsive forms with validation and real-time state feedback.",
          "Integrated RESTful service layers in strict TypeScript.",
        ],
        appliedProject: "COFICAB Internal Portal",
        projectLink: "/projects",
      },
      {
        id: "react-next",
        name: "React & Next.js Ecosystem",
        category: "Web & APIs",
        level: "Modern Web Apps",
        rating: 90,
        yearsOrUsage: "Portfolio & Interactive Web Apps",
        accentColor: "from-cyan-500 to-blue-600",
        tagline: "Server Components & Tailwind Systems",
        svgIcon: (
          <svg className="w-8 h-8 fill-current text-cyan-400" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.8c3.976 0 7.2 3.224 7.2 7.2s-3.224 7.2-7.2 7.2-7.2-3.224-7.2-7.2 3.224-7.2 7.2-7.2z" />
          </svg>
        ),
        summary:
          "Next.js App Router, React 19, server/client component boundaries, Tailwind CSS design systems, and rich interactive web experiences.",
        details: [
          "Constructed Netflix-themed interactive portfolio with pixel-perfect responsive UX.",
          "Designed reusable UI primitives with shadcn/ui and custom CSS animations.",
          "Optimized static page rendering, metadata, and dynamic routing.",
        ],
        appliedProject: "Netflix Portfolio & Web Applications",
        projectLink: "/projects",
      },

      // 4. DEVOPS & SYSTEMS
      {
        id: "docker-devops",
        name: "Docker & Containerization",
        category: "DevOps & Systems",
        level: "Infrastructure",
        rating: 90,
        inTop10: 8,
        yearsOrUsage: "Isolated Database & API Environments",
        accentColor: "from-sky-500 to-blue-700",
        tagline: "Multi-Container Compose Stacks",
        svgIcon: (
          <svg className="w-8 h-8 fill-current text-sky-400" viewBox="0 0 24 24">
            <path d="M19.5 9.5c-.3-2.1-1.9-3.8-4-4.2V5h-3v1H10V5H7v1H4.5C2 6.5 2 9 2 9s0 6 6 6h8c4 0 5-3 5-3s1-2 1-3.5c0-.4-.1-.7-.2-.9l-2.3 1.9z" />
          </svg>
        ),
        summary:
          "Containerizing data microservices, Docker Compose development environments, and deployment repeatability.",
        details: [
          "Created multi-container Docker Compose files for web apps and databases.",
          "Ensured consistent environments across local development and production staging.",
          "Isolated database engines and Python backend processes in clean containers.",
        ],
        appliedProject: "Containerized Data Stacks",
        projectLink: "/projects",
      },
      {
        id: "git-github",
        name: "Git & Version Control",
        category: "DevOps & Systems",
        level: "Team Workflows",
        rating: 95,
        yearsOrUsage: "GitHub Lead (@MrTBK) & CI Workflows",
        accentColor: "from-orange-500 to-amber-700",
        tagline: "Git Flow, Branch Governance & Reviews",
        svgIcon: (
          <svg className="w-8 h-8 fill-current text-orange-400" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
        ),
        summary:
          "Branching workflows, semantic commits, automated CI workflows, and code review governance on GitHub.",
        details: [
          "Maintained 10+ public engineering repositories on GitHub (@MrTBK).",
          "Managed pull requests, merge conflict resolutions, and project issues.",
          "Organized repository documentation, architecture diagrams, and release tags.",
        ],
        appliedProject: "GitHub (@MrTBK) Codebases",
        projectLink: "https://github.com/MrTBK",
      },
      {
        id: "linux-bash",
        name: "Linux & Shell Automation",
        category: "DevOps & Systems",
        level: "Environment Core",
        rating: 91,
        yearsOrUsage: "Bash Cron Automation & Systems",
        accentColor: "from-amber-500 to-yellow-700",
        tagline: "Shell Pipelines & Scheduled Cron Jobs",
        svgIcon: (
          <svg className="w-8 h-8 fill-current text-amber-400" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 13.5l-4-4 1.41-1.41L12 14.67l6.59-6.59L20 9.5l-8 8z" />
          </svg>
        ),
        summary:
          "Unix command-line data processing, cron scheduled pipeline scripts, text processing, and server environments.",
        details: [
          "Automated repetitive data tasks via Bash shell scripts and cron jobs.",
          "Streamlined file manipulation with grep, sed, awk, and curl.",
          "Administered Linux development machines and server configurations.",
        ],
        appliedProject: "Data Engineering Environments",
        projectLink: "/projects",
      },
      {
        id: "arduino-iot",
        name: "Arduino & Embedded Systems",
        category: "DevOps & Systems",
        level: "Trainer & Coach (2+ yrs)",
        rating: 93,
        yearsOrUsage: "Youth Yes We Care Coach",
        accentColor: "from-teal-500 to-emerald-700",
        tagline: "Embedded C++ & Autonomous Robotics",
        svgIcon: (
          <svg className="w-8 h-8 fill-current text-teal-400" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9v-2h2v2zm0-4H9V7h2v6zm4 4h-2v-2h2v2zm0-4h-2V7h2v6z" />
          </svg>
        ),
        summary:
          "Microcontroller C++ programming, ultrasonic obstacle detection, motor drivers, Bluetooth vehicles, and STEM coaching.",
        details: [
          "2+ years as Robotics Trainer at Youth Yes We Care Association.",
          "Taught embedded C++, sensor circuitry, and actuator controls.",
          "Mentored youth teams to regional & national robotics tournaments.",
        ],
        appliedProject: "Youth Yes We Care Association",
        projectLink: "/work-experience",
      },
    ],
    []
  );

  const CATEGORIES = [
    "All",
    "BI & Data Engineering",
    "Programming & Algorithms",
    "Web & APIs",
    "DevOps & Systems",
  ] as const;

  const spotlightSkill = useMemo(() => {
    return SKILLS.find((s) => s.id === spotlightId) || SKILLS[0];
  }, [SKILLS, spotlightId]);

  const top10Skills = useMemo(() => {
    return SKILLS.filter((s) => s.inTop10 !== undefined).sort(
      (a, b) => (a.inTop10 || 99) - (b.inTop10 || 99)
    );
  }, [SKILLS]);

  const biSkills = useMemo(
    () => SKILLS.filter((s) => s.category === "BI & Data Engineering"),
    [SKILLS]
  );
  const algoSkills = useMemo(
    () => SKILLS.filter((s) => s.category === "Programming & Algorithms"),
    [SKILLS]
  );
  const webSkills = useMemo(
    () => SKILLS.filter((s) => s.category === "Web & APIs"),
    [SKILLS]
  );
  const devopsSkills = useMemo(
    () => SKILLS.filter((s) => s.category === "DevOps & Systems"),
    [SKILLS]
  );

  const filteredSkills = useMemo(() => {
    return SKILLS.filter((skill) => {
      const matchesCat = activeCategory === "All" || skill.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        skill.name.toLowerCase().includes(q) ||
        skill.summary.toLowerCase().includes(q) ||
        skill.tagline.toLowerCase().includes(q) ||
        skill.appliedProject.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
  }, [SKILLS, activeCategory, searchQuery]);

  return (
    <SiteLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        
        {/* ========================================================= */}
        {/* 1. CINEMATIC BILLBOARD HERO (NETFLIX SPOTLIGHT)           */}
        {/* ========================================================= */}
        <div className="relative rounded-2xl overflow-hidden mb-10 sm:mb-14 border border-zinc-800 bg-gradient-to-r from-zinc-950 via-zinc-900 to-black p-6 sm:p-10 shadow-2xl">
          {/* Subtle Ambient Red Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            {/* Netflix Original Arsenal Badge */}
            <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
              <span className="px-2.5 py-0.5 rounded bg-red-600 text-white font-black text-[11px] tracking-widest uppercase">
                NETFLIX FEATURED TECH
              </span>
              <span className="text-gray-400 text-xs font-semibold">
                • {spotlightSkill.category}
              </span>
              <span className="text-emerald-400 text-xs font-bold font-mono">
                {spotlightSkill.rating}% Match
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-2">
              {spotlightSkill.name}
            </h1>

            {/* Tagline */}
            <p className="text-red-400 font-semibold text-xs sm:text-sm tracking-wide mb-3">
              {spotlightSkill.tagline}
            </p>

            {/* Description */}
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
              {spotlightSkill.summary}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setSelectedSkill(spotlightSkill)}
                className="px-5 py-2.5 rounded-lg bg-white hover:bg-gray-200 text-black font-bold text-xs sm:text-sm flex items-center gap-2 transition-transform hover:scale-105 cursor-pointer shadow-lg"
              >
                <svg className="w-4 h-4 fill-black" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Inspect Tech Specs
              </button>

              {spotlightSkill.projectLink && (
                <Link
                  href={spotlightSkill.projectLink}
                  className="px-5 py-2.5 rounded-lg bg-zinc-800/90 hover:bg-zinc-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 border border-zinc-700 transition-colors"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                  </svg>
                  Applied in {spotlightSkill.appliedProject.split("&")[0]} ↗
                </Link>
              )}
            </div>
          </div>

          {/* Quick Spotlight Switcher Tabs (Bottom of Hero) */}
          <div className="relative z-10 mt-8 pt-5 border-t border-zinc-800/80">
            <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 block mb-2">
              SELECT TECH TO SPOTLIGHT:
            </span>
            <div className="flex flex-wrap gap-2">
              {[
                { id: "sql-server", label: "SQL Server & SSIS" },
                { id: "power-bi", label: "Power BI & DAX" },
                { id: "star-schema", label: "Dimensional DW" },
                { id: "cpp-algorithms", label: "C++ & TCPC Finalist" },
                { id: "enterprise-ai", label: "Enterprise AI Chatbot" },
                { id: "python-etl", label: "Python ETL Staging" },
              ].map((pill) => (
                <button
                  key={pill.id}
                  type="button"
                  onClick={() => setSpotlightId(pill.id)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    spotlightId === pill.id
                      ? "bg-red-600 text-white shadow-md shadow-red-600/30 scale-105"
                      : "bg-zinc-900 text-gray-300 hover:bg-zinc-800 border border-zinc-800"
                  }`}
                >
                  {pill.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2. MODE SWITCHER & SEARCH BAR                             */}
        {/* ========================================================= */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-zinc-900/60 p-4 rounded-xl border border-zinc-800">
          {/* Mode Switcher */}
          <div className="flex items-center gap-2 bg-black/50 p-1 rounded-lg border border-zinc-800 w-full sm:w-auto justify-center">
            <button
              type="button"
              onClick={() => setViewMode("shelves")}
              className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                viewMode === "shelves"
                  ? "bg-[#E50914] text-white shadow"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <span>🎬</span> Netflix Browse Shelves
            </button>
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                viewMode === "grid"
                  ? "bg-[#E50914] text-white shadow"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <span>▦</span> All Skills Grid ({SKILLS.length})
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (e.target.value && viewMode !== "grid") {
                  setViewMode("grid"); // Auto-switch to grid on search for easy filtering
                }
              }}
              placeholder="Filter tech (SQL, Power BI, C++, Docker)..."
              className="w-full px-4 py-2 pl-9 rounded-lg bg-black/80 border border-zinc-700 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
              🔍
            </span>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-xs cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 3. NETFLIX SHELVES MODE (ROW-BASED BROWSING)              */}
        {/* ========================================================= */}
        {viewMode === "shelves" && !searchQuery ? (
          <div className="space-y-12">
            
            {/* ROW 1: THE ICONIC NETFLIX "TOP 10 TECH STACK" ROW */}
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-black bg-[#E50914] text-white tracking-wider">
                    TOP 10
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                    Top 10 Most In-Demand Skills in Aziz&apos;s Arsenal Today
                  </h2>
                </div>

                {/* Carousel Controls */}
                <div className="hidden sm:flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => scrollCarousel(top10Ref, -450)}
                    aria-label="Scroll Top 10 Left"
                    className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-red-600 text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollCarousel(top10Ref, 450)}
                    aria-label="Scroll Top 10 Right"
                    className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-red-600 text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    ›
                  </button>
                </div>
              </div>

              {/* Top 10 Carousel with Giant Numbers */}
              <div
                ref={top10Ref}
                className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 scroll-smooth no-scrollbar"
                style={{ scrollbarWidth: "none" }}
              >
                {top10Skills.map((skill) => (
                  <div
                    key={skill.id}
                    onClick={() => setSelectedSkill(skill)}
                    className="group relative flex items-center shrink-0 cursor-pointer select-none transition-transform hover:scale-105 duration-300"
                  >
                    {/* Giant Netflix Outline Rank Number */}
                    <div
                      className="text-[90px] sm:text-[120px] font-black leading-none select-none text-transparent shrink-0 tracking-tighter"
                      style={{
                        WebkitTextStroke: "3px #666",
                        textShadow: "0 0 15px rgba(0,0,0,0.9)",
                      }}
                    >
                      {skill.inTop10}
                    </div>

                    {/* Card Body */}
                    <div className="-ml-5 sm:-ml-7 relative z-10 w-52 sm:w-60 h-40 sm:h-44 rounded-xl bg-zinc-900 border border-zinc-800 group-hover:border-red-600 p-4 flex flex-col justify-between shadow-xl transition-all">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <div className="w-10 h-10 rounded-lg bg-black border border-zinc-800 flex items-center justify-center">
                            {skill.svgIcon}
                          </div>
                          <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded-full">
                            {skill.rating}% Match
                          </span>
                        </div>

                        <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-red-400 transition-colors line-clamp-1">
                          {skill.name}
                        </h3>
                        <p className="text-[11px] text-gray-400 line-clamp-2 mt-1">
                          {skill.tagline}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between text-[10px]">
                        <span className="text-gray-400 truncate max-w-[120px]">
                          📍 {skill.appliedProject.split("&")[0]}
                        </span>
                        <span className="text-red-500 font-bold">Details ▾</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ROW 2: BI & DATA ENGINEERING SHELF */}
            <div className="relative">
              <div className="flex items-center justify-between mb-3 border-b border-red-600/40 pb-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">📊</span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Business Intelligence &amp; Data Warehousing
                  </h3>
                  <span className="text-xs text-gray-400">({biSkills.length})</span>
                </div>

                <div className="hidden sm:flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => scrollCarousel(biRef, -400)}
                    aria-label="Scroll BI Left"
                    className="w-7 h-7 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center text-xs cursor-pointer"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollCarousel(biRef, 400)}
                    aria-label="Scroll BI Right"
                    className="w-7 h-7 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center text-xs cursor-pointer"
                  >
                    ›
                  </button>
                </div>
              </div>

              <div
                ref={biRef}
                className="flex gap-4 overflow-x-auto pb-4 scroll-smooth no-scrollbar"
                style={{ scrollbarWidth: "none" }}
              >
                {biSkills.map((skill) => (
                  <div
                    key={skill.id}
                    onClick={() => setSelectedSkill(skill)}
                    className="shrink-0 w-64 sm:w-72 bg-zinc-900 border border-zinc-800 hover:border-red-600 rounded-xl p-4 cursor-pointer hover:scale-105 transition-all shadow-md group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 rounded-lg bg-black border border-zinc-800 flex items-center justify-center">
                          {skill.svgIcon}
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-zinc-800 text-gray-300">
                          {skill.level}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-white group-hover:text-red-400 transition-colors">
                        {skill.name}
                      </h4>
                      <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                        {skill.summary}
                      </p>
                    </div>

                    <div className="mt-4 pt-2.5 border-t border-zinc-800 flex items-center justify-between text-xs">
                      <span className="text-emerald-400 font-mono font-bold">
                        {skill.rating}% Match
                      </span>
                      <span className="text-gray-400 text-[11px] hover:text-white">
                        Inspect ↗
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ROW 3: PROGRAMMING & ALGORITHMIC PROBLEM SOLVING */}
            <div className="relative">
              <div className="flex items-center justify-between mb-3 border-b border-red-600/40 pb-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">⚡</span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Competitive Programming &amp; Algorithmic Mastery
                  </h3>
                  <span className="text-xs text-gray-400">({algoSkills.length})</span>
                </div>

                <div className="hidden sm:flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => scrollCarousel(algoRef, -400)}
                    aria-label="Scroll Algo Left"
                    className="w-7 h-7 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center text-xs cursor-pointer"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollCarousel(algoRef, 400)}
                    aria-label="Scroll Algo Right"
                    className="w-7 h-7 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center text-xs cursor-pointer"
                  >
                    ›
                  </button>
                </div>
              </div>

              <div
                ref={algoRef}
                className="flex gap-4 overflow-x-auto pb-4 scroll-smooth no-scrollbar"
                style={{ scrollbarWidth: "none" }}
              >
                {algoSkills.map((skill) => (
                  <div
                    key={skill.id}
                    onClick={() => setSelectedSkill(skill)}
                    className="shrink-0 w-64 sm:w-72 bg-zinc-900 border border-zinc-800 hover:border-red-600 rounded-xl p-4 cursor-pointer hover:scale-105 transition-all shadow-md group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 rounded-lg bg-black border border-zinc-800 flex items-center justify-center">
                          {skill.svgIcon}
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-zinc-800 text-gray-300">
                          {skill.level}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-white group-hover:text-red-400 transition-colors">
                        {skill.name}
                      </h4>
                      <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                        {skill.summary}
                      </p>
                    </div>

                    <div className="mt-4 pt-2.5 border-t border-zinc-800 flex items-center justify-between text-xs">
                      <span className="text-emerald-400 font-mono font-bold">
                        {skill.rating}% Match
                      </span>
                      <span className="text-gray-400 text-[11px] hover:text-white">
                        Inspect ↗
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ROW 4: WEB & MICROSERVICES */}
            <div className="relative">
              <div className="flex items-center justify-between mb-3 border-b border-red-600/40 pb-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🌐</span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Web Platforms, APIs &amp; Enterprise AI
                  </h3>
                  <span className="text-xs text-gray-400">({webSkills.length})</span>
                </div>

                <div className="hidden sm:flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => scrollCarousel(webRef, -400)}
                    aria-label="Scroll Web Left"
                    className="w-7 h-7 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center text-xs cursor-pointer"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollCarousel(webRef, 400)}
                    aria-label="Scroll Web Right"
                    className="w-7 h-7 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center text-xs cursor-pointer"
                  >
                    ›
                  </button>
                </div>
              </div>

              <div
                ref={webRef}
                className="flex gap-4 overflow-x-auto pb-4 scroll-smooth no-scrollbar"
                style={{ scrollbarWidth: "none" }}
              >
                {webSkills.map((skill) => (
                  <div
                    key={skill.id}
                    onClick={() => setSelectedSkill(skill)}
                    className="shrink-0 w-64 sm:w-72 bg-zinc-900 border border-zinc-800 hover:border-red-600 rounded-xl p-4 cursor-pointer hover:scale-105 transition-all shadow-md group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 rounded-lg bg-black border border-zinc-800 flex items-center justify-center">
                          {skill.svgIcon}
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-zinc-800 text-gray-300">
                          {skill.level}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-white group-hover:text-red-400 transition-colors">
                        {skill.name}
                      </h4>
                      <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                        {skill.summary}
                      </p>
                    </div>

                    <div className="mt-4 pt-2.5 border-t border-zinc-800 flex items-center justify-between text-xs">
                      <span className="text-emerald-400 font-mono font-bold">
                        {skill.rating}% Match
                      </span>
                      <span className="text-gray-400 text-[11px] hover:text-white">
                        Inspect ↗
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ROW 5: DEVOPS, SYSTEMS & EMBEDDED */}
            <div className="relative">
              <div className="flex items-center justify-between mb-3 border-b border-red-600/40 pb-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🛠️</span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    DevOps, Systems &amp; Robotics Coaching
                  </h3>
                  <span className="text-xs text-gray-400">({devopsSkills.length})</span>
                </div>

                <div className="hidden sm:flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => scrollCarousel(devopsRef, -400)}
                    aria-label="Scroll DevOps Left"
                    className="w-7 h-7 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center text-xs cursor-pointer"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollCarousel(devopsRef, 400)}
                    aria-label="Scroll DevOps Right"
                    className="w-7 h-7 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center text-xs cursor-pointer"
                  >
                    ›
                  </button>
                </div>
              </div>

              <div
                ref={devopsRef}
                className="flex gap-4 overflow-x-auto pb-4 scroll-smooth no-scrollbar"
                style={{ scrollbarWidth: "none" }}
              >
                {devopsSkills.map((skill) => (
                  <div
                    key={skill.id}
                    onClick={() => setSelectedSkill(skill)}
                    className="shrink-0 w-64 sm:w-72 bg-zinc-900 border border-zinc-800 hover:border-red-600 rounded-xl p-4 cursor-pointer hover:scale-105 transition-all shadow-md group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 rounded-lg bg-black border border-zinc-800 flex items-center justify-center">
                          {skill.svgIcon}
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-zinc-800 text-gray-300">
                          {skill.level}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-white group-hover:text-red-400 transition-colors">
                        {skill.name}
                      </h4>
                      <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                        {skill.summary}
                      </p>
                    </div>

                    <div className="mt-4 pt-2.5 border-t border-zinc-800 flex items-center justify-between text-xs">
                      <span className="text-emerald-400 font-mono font-bold">
                        {skill.rating}% Match
                      </span>
                      <span className="text-gray-400 text-[11px] hover:text-white">
                        Inspect ↗
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        ) : (
          /* ========================================================= */
          /* 4. ALL SKILLS GRID MODE (FULL MATRIX VIEW)                */
          /* ========================================================= */
          <div>
            {/* Category Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
              {CATEGORIES.map((cat) => {
                const count =
                  cat === "All"
                    ? SKILLS.length
                    : SKILLS.filter((s) => s.category === cat).length;
                const isActive = activeCategory === cat;

                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#E50914] text-white shadow-md shadow-red-600/30 scale-105"
                        : "bg-zinc-800 text-gray-300 hover:bg-zinc-700 hover:text-white border border-zinc-700"
                    }`}
                  >
                    {cat} <span className="opacity-75 text-[11px] ml-1">({count})</span>
                  </button>
                );
              })}
            </div>

            {/* Grid Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
              {filteredSkills.map((skill) => (
                <div
                  key={skill.id}
                  onClick={() => setSelectedSkill(skill)}
                  className="group relative bg-[#181818] rounded-xl p-5 border border-zinc-800 hover:border-red-600 transition-all duration-300 shadow-md hover:shadow-2xl hover:shadow-red-600/25 hover:scale-[1.03] hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Icon + Category Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-black/60 border border-zinc-800 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                        {skill.svgIcon}
                      </div>

                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-zinc-800 text-gray-300 border border-zinc-700 uppercase tracking-wider">
                        {skill.level}
                      </span>
                    </div>

                    {/* Animated Name with Wave on Hover */}
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-red-400 transition-colors mb-1 flex flex-wrap">
                      {skill.name.split("").map((letter, lIdx) => (
                        <span
                          key={lIdx}
                          className="letter inline-block group-hover:-translate-y-0.5 transition-transform"
                          style={{ animationDelay: `${0.02 * lIdx}s` }}
                        >
                          {letter === " " ? "\u00A0" : letter}
                        </span>
                      ))}
                    </h3>

                    <p className="text-[11px] text-red-400 font-semibold mb-2">
                      {skill.tagline}
                    </p>

                    {/* Short Summary */}
                    <p className="text-xs text-gray-400 leading-relaxed mb-4 line-clamp-2">
                      {skill.summary}
                    </p>
                  </div>

                  <div>
                    {/* Progress bar / Match rating */}
                    <div className="mb-3">
                      <div className="flex items-center justify-between text-[11px] font-bold mb-1">
                        <span className="text-gray-400">Match Proficiency</span>
                        <span className="text-red-500 font-mono">{skill.rating}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-red-600 to-amber-500 rounded-full transition-all duration-500"
                          style={{ width: `${skill.rating}%` }}
                        />
                      </div>
                    </div>

                    {/* Footer: Where it's applied */}
                    <div className="pt-2.5 border-t border-zinc-800/80 flex items-center justify-between text-[11px]">
                      <span className="text-gray-400 truncate font-medium">
                        📍 {skill.appliedProject.split("&")[0]}
                      </span>
                      <span className="text-red-500 group-hover:translate-x-0.5 transition-transform font-bold shrink-0 ml-1">
                        Details ▾
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* 5. INTERACTIVE SKILL DEEP-DIVE MODAL                      */}
        {/* ========================================================= */}
        {selectedSkill && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setSelectedSkill(null)}
          >
            <div
              className="relative w-full max-w-xl bg-zinc-950 border border-zinc-800 rounded-2xl p-6 sm:p-7 shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top */}
              <div className="flex items-start justify-between gap-4 border-b border-zinc-800/80 pb-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 rounded-xl bg-black border border-zinc-800 flex items-center justify-center shrink-0">
                    {selectedSkill.svgIcon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-600/20 text-red-400 border border-red-500/30 uppercase tracking-wider">
                        {selectedSkill.category}
                      </span>
                      <span className="text-[10px] font-bold text-emerald-400 font-mono">
                        {selectedSkill.rating}% Match
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
                      {selectedSkill.name}
                    </h2>
                    <p className="text-xs text-gray-400 font-medium">
                      {selectedSkill.tagline}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedSkill(null)}
                  className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-red-600 text-gray-300 hover:text-white flex items-center justify-center font-bold text-sm transition-colors cursor-pointer shrink-0"
                >
                  ✕
                </button>
              </div>

              {/* Modal Description */}
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-medium">
                {selectedSkill.summary}
              </p>

              {/* Implementation Bullet Points */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                  Verified Technical Deliverables &amp; Usage:
                </h4>
                <ul className="space-y-2 text-xs text-gray-300">
                  {selectedSkill.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-red-500 font-bold shrink-0">▸</span>
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Project / Experience Context Box */}
              <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase font-bold tracking-wider">
                    PROVEN IN PRODUCTION / LEADERSHIP:
                  </span>
                  <span className="font-bold text-white text-sm">
                    {selectedSkill.appliedProject}
                  </span>
                  <span className="block text-gray-400 text-[11px] mt-0.5">
                    {selectedSkill.yearsOrUsage}
                  </span>
                </div>

                {selectedSkill.projectLink && (
                  <Link
                    href={selectedSkill.projectLink}
                    onClick={() => setSelectedSkill(null)}
                    className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-xs transition-colors shrink-0 text-center"
                  >
                    View Project ↗
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* 6. BOTTOM NAVIGATION (CONTINUE STREAMING PORTFOLIO)       */}
        {/* ========================================================= */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-zinc-900 via-neutral-900 to-zinc-900 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white">
              See Aziz&apos;s Skills in Production
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">
              Explore live data architecture, corporate BI dashboards, or national competition milestones.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <Link
              href="/projects"
              className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-semibold transition-colors shadow-md shadow-red-600/30 flex items-center gap-1.5"
            >
              <CodeIcon className="w-4 h-4" /> Live Projects
            </Link>
            <Link
              href="/work-experience"
              className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold transition-colors border border-zinc-700 flex items-center gap-1.5"
            >
              <BriefcaseIcon className="w-4 h-4 text-cyan-400" /> Work Experience
            </Link>
            <Link
              href="/education"
              className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold transition-colors border border-zinc-700 flex items-center gap-1.5"
            >
              <GraduationCapIcon className="w-4 h-4 text-amber-400" /> Education
            </Link>
            <Link
              href="/contact-me"
              className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold transition-colors border border-zinc-700"
            >
              Hire Aziz &rarr;
            </Link>
          </div>
        </div>

      </div>
    </SiteLayout>
  );
}
