"use client";

import React from "react";
import Link from "next/link";
import { asset } from "@/lib/asset";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between relative overflow-hidden select-none">
      {/* Background Vignette */}
      <div className="absolute inset-0 bg-radial from-transparent via-black/60 to-black z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-950/20 via-black to-black z-0 pointer-events-none" />

      {/* Top Header */}
      <header className="relative z-10 px-6 sm:px-12 py-6 flex items-center justify-between border-b border-zinc-900 bg-black/60 backdrop-blur-md">
        <Link href="/browse" className="hover:opacity-90 transition-opacity">
          <img
            src={asset("/sites/sumanthsamala/aziz-tabakh-logo.png")}
            alt="AZIZ TABAKH"
            className="h-7 sm:h-9 w-auto"
          />
        </Link>
        <Link
          href="/browse"
          className="text-xs sm:text-sm font-semibold text-gray-300 hover:text-white px-3 py-1.5 rounded border border-zinc-800 hover:border-zinc-700 transition-colors"
        >
          Switch Profile
        </Link>
      </header>

      {/* Main 404 Hero */}
      <main className="relative z-10 max-w-2xl mx-auto px-6 py-16 text-center flex flex-col items-center justify-center my-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/20 text-red-500 text-xs font-bold tracking-widest uppercase mb-6">
          <span>🔴 ERROR CODE: NSES-404</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight mb-4">
          Lost in the Upside Down?
        </h1>

        <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-lg mb-8">
          Sorry, we can&apos;t find that title on the catalog. You&apos;ll find lots of engineering projects, data pipelines, and experience on the home page.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <Link
            href="/browse"
            className="w-full sm:w-auto px-8 py-3.5 rounded-md bg-[#E50914] hover:bg-red-700 text-white font-bold text-sm tracking-wide transition-all shadow-lg shadow-red-600/40 text-center"
          >
            Netflix Home
          </Link>
          <Link
            href="/projects"
            className="w-full sm:w-auto px-8 py-3.5 rounded-md bg-zinc-800 hover:bg-zinc-700 text-gray-200 font-bold text-sm tracking-wide transition-all border border-zinc-700 text-center"
          >
            Explore Projects
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-6 sm:px-12 py-6 text-center text-xs text-zinc-600 border-t border-zinc-900 bg-black/40">
        <p>Mohamed Aziz Tabakh &bull; Business Intelligence &amp; Data Engineering Portfolio</p>
      </footer>
    </div>
  );
}
