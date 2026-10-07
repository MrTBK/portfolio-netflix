"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SiteLayout } from "@/components/sites/sumanthsamala/Navbar";
import {
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  CoffeeIcon,
  ExternalLinkIcon,
  BriefcaseIcon,
  CodeIcon,
} from "@/components/sites/sumanthsamala/Icons";
import data from "@/components/sites/sumanthsamala/data.json";
import { asset } from "@/lib/asset";

export default function ContactMePage() {
  const contact = data.contactMe;
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2200);
    }
  };

  return (
    <SiteLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {/* Header note */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/20 text-red-500 text-xs font-bold uppercase tracking-wider mb-3">
            <span>📬 Connect &amp; Collaborate</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
            Get in Touch
          </h1>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Looking for a motivated Data Engineer, BI Specialist, or Algorithmic Problem Solver? Let&apos;s build something exceptional together.
          </p>
        </div>

        {/* Custom Profile Badge - Fully Responsive */}
        <div className="bg-zinc-900/95 border border-zinc-800 hover:border-zinc-700 rounded-2xl p-6 sm:p-8 shadow-2xl transition-all duration-300 mb-8 sm:mb-10">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            <div className="relative shrink-0">
              <img
                src={asset("/sites/mrtbk/avatar.jpg")}
                alt={contact.name}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-red-600/40 shadow-xl"
              />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-zinc-900" title="Available for opportunities" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {contact.name}
                </h2>
                <span className="inline-block self-center sm:self-auto px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  Open to Opportunities
                </span>
              </div>

              <p className="text-sm sm:text-base font-semibold text-red-400 mb-2">
                {contact.title}
              </p>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                {contact.summary}
              </p>
              <p className="text-xs font-medium text-gray-400 mb-5">
                📍 {contact.companyUniversity} &bull; Tunis, Tunisia
              </p>

              {/* Social and Profile Buttons */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
                <a
                  href={contact.linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#0077b5] hover:bg-[#006097] text-white text-xs sm:text-sm font-semibold transition-all shadow-md active:scale-95"
                >
                  <LinkedInIcon className="w-4 h-4 fill-current" />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href="https://github.com/MrTBK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white text-xs sm:text-sm font-semibold transition-all border border-zinc-700 active:scale-95"
                >
                  <ExternalLinkIcon className="w-4 h-4" />
                  <span>GitHub (@MrTBK)</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info Cards with 1-Click Copy */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 sm:mb-10">
          {/* Email Card */}
          <div className="bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 rounded-xl p-5 flex flex-col justify-between transition-all">
            <div className="flex items-start gap-3.5 mb-4">
              <div className="w-10 h-10 rounded-lg bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-500 shrink-0">
                <MailIcon className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium text-gray-400 mb-0.5">Email Address</p>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-sm font-bold text-white hover:text-red-400 transition-colors break-all block"
                >
                  {contact.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-3 border-t border-zinc-800/80">
              <button
                type="button"
                onClick={() => handleCopy(contact.email, "email")}
                className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 ${
                  copiedKey === "email"
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30"
                    : "bg-zinc-800 hover:bg-zinc-700 text-gray-200 border border-zinc-700"
                }`}
              >
                {copiedKey === "email" ? (
                  <>
                    <span>✓</span>
                    <span>Copied Email!</span>
                  </>
                ) : (
                  <>
                    <span>📋</span>
                    <span>Copy to Clipboard</span>
                  </>
                )}
              </button>
              <a
                href={`mailto:${contact.email}`}
                className="py-2 px-3 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-colors"
                title="Send Email"
              >
                Send ↗
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 rounded-xl p-5 flex flex-col justify-between transition-all">
            <div className="flex items-start gap-3.5 mb-4">
              <div className="w-10 h-10 rounded-lg bg-cyan-600/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                <PhoneIcon className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium text-gray-400 mb-0.5">Phone / WhatsApp</p>
                <a
                  href={`tel:${contact.phoneNumber}`}
                  className="text-sm font-bold text-white hover:text-cyan-400 transition-colors block"
                >
                  {contact.phoneNumber}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-3 border-t border-zinc-800/80">
              <button
                type="button"
                onClick={() => handleCopy(contact.phoneNumber, "phone")}
                className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 ${
                  copiedKey === "phone"
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30"
                    : "bg-zinc-800 hover:bg-zinc-700 text-gray-200 border border-zinc-700"
                }`}
              >
                {copiedKey === "phone" ? (
                  <>
                    <span>✓</span>
                    <span>Copied Phone!</span>
                  </>
                ) : (
                  <>
                    <span>📋</span>
                    <span>Copy to Clipboard</span>
                  </>
                )}
              </button>
              <a
                href={`tel:${contact.phoneNumber}`}
                className="py-2 px-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold border border-zinc-700 transition-colors"
                title="Call Phone"
              >
                Call ↗
              </a>
            </div>
          </div>
        </div>

        {/* Coffee Note */}
        <div className="p-4 sm:p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 flex items-center justify-between gap-4 mb-10 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="text-2xl">☕</span>
            <p className="text-xs sm:text-sm text-gray-300">
              Always up to talk about high-speed algorithms, data architecture, or modern tech stacks over coffee.
            </p>
          </div>
          <CoffeeIcon className="w-6 h-6 text-amber-400 shrink-0 hidden sm:block" />
        </div>

        {/* Bottom Navigation */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-zinc-900 via-neutral-900 to-zinc-900 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h3 className="text-base font-bold text-white">Explore My Work</h3>
            <p className="text-xs text-gray-400">Review industry experience or explore code repos.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <Link
              href="/work-experience"
              className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold transition-colors flex items-center gap-1.5 border border-zinc-700"
            >
              <BriefcaseIcon className="w-4 h-4 text-cyan-400" /> Experience
            </Link>
            <Link
              href="/projects"
              className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold transition-colors flex items-center gap-1.5 border border-zinc-700"
            >
              <CodeIcon className="w-4 h-4 text-red-500" /> Projects
            </Link>
            <Link
              href="/browse"
              className="px-4 py-2 rounded-lg bg-[#E50914] hover:bg-red-700 text-white text-xs font-semibold transition-colors"
            >
              Netflix Home &rarr;
            </Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
