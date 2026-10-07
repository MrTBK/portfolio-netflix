"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { asset } from "@/lib/asset";

interface NavbarProps {
  currentProfile?: string;
  profileImage?: string;
}

export function Navbar({ profileImage = asset("/sites/sumanthsamala/blue.9b293a4a6ef065903a8f.png") }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeAvatar, setActiveAvatar] = useState(profileImage);
  const [homeLink, setHomeLink] = useState("/browse");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);

    const storedImage = sessionStorage.getItem("profileImage");
    const storedProfile = sessionStorage.getItem("currentProfile");
    if (storedImage && storedImage !== profileImage) {
      setTimeout(() => setActiveAvatar(storedImage), 0);
    }
    if (storedProfile) {
      setTimeout(() => setHomeLink(`/profile/${storedProfile}`), 0);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [profileImage]);

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-left">
          <Link href="/" className="navbar-logo">
            <img
              src={asset("/sites/sumanthsamala/aziz-tabakh-logo.png")}
              alt="AZIZ TABAKH"
              style={{ height: "35px", width: "auto" }}
            />
          </Link>
          <ul className="navbar-links">
            <li>
              <Link href={homeLink} className={pathname.startsWith("/profile") || pathname === "/browse" ? "font-bold text-white text-[#E50914]" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/education"
                className={pathname === "/education" ? "font-bold text-white text-[#E50914]" : ""}
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                href="/work-experience"
                className={pathname === "/work-experience" ? "font-bold text-white text-[#E50914]" : ""}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link href="/skills" className={pathname === "/skills" ? "font-bold text-white text-[#E50914]" : ""}>
                Skills
              </Link>
            </li>
            <li>
              <Link href="/projects" className={pathname === "/projects" ? "font-bold text-white text-[#E50914]" : ""}>
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/honors"
                className={pathname === "/honors" ? "font-bold text-white text-[#E50914]" : ""}
              >
                Honors
              </Link>
            </li>
            <li>
              <Link
                href="/recommendations"
                className={pathname === "/recommendations" ? "font-bold text-white text-[#E50914]" : ""}
              >
                Recommendations
              </Link>
            </li>
            <li>
              <Link href="/contact-me" className={pathname === "/contact-me" ? "font-bold text-white text-[#E50914]" : ""}>
                Hire Me
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-right flex items-center gap-3">
          <a
            href={asset("/sites/mrtbk/resume.pdf")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#E50914] hover:bg-red-700 text-white text-xs font-bold transition-all shadow-md active:scale-95"
            title="Download / View Resume"
          >
            <span>Resume</span>
          </a>

          <div
            className="hamburger cursor-pointer p-1"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle navigation menu"
          >
            <div />
            <div />
            <div />
          </div>

          <Link href="/browse" title="Switch Profile">
            <img
              src={asset(activeAvatar)}
              alt="Profile"
              className="profile-icon hover:scale-110 transition-transform"
              style={{ width: "32px", height: "32px", borderRadius: "4px", cursor: "pointer" }}
            />
          </Link>
        </div>
      </nav>

      <div
        className={`sidebar-overlay !z-[99] ${sidebarOpen ? "open" : ""}`}
        onClick={closeSidebar}
      />

      <div className={`sidebar !z-[100] ${sidebarOpen ? "open" : ""}`}>
        <div className="w-full flex items-center justify-between px-6 mb-4">
          <div className="sidebar-logo">
            <img
              src={asset("/sites/sumanthsamala/aziz-tabakh-logo.png")}
              alt="AZIZ TABAKH"
              style={{ height: "35px", width: "auto" }}
            />
          </div>
          <button
            type="button"
            onClick={closeSidebar}
            className="w-8 h-8 rounded-full bg-zinc-800 text-gray-300 hover:text-white flex items-center justify-center text-lg font-bold"
            aria-label="Close sidebar"
          >
            ✕
          </button>
        </div>

        <ul className="w-full">
          <li>
            <Link href={homeLink} onClick={closeSidebar}>
              🏠 Home
            </Link>
          </li>
          <li>
            <Link href="/education" onClick={closeSidebar}>
              🎓 Education
            </Link>
          </li>
          <li>
            <Link href="/work-experience" onClick={closeSidebar}>
              💼 Experience
            </Link>
          </li>
          <li>
            <Link href="/projects" onClick={closeSidebar}>
              🚀 Projects
            </Link>
          </li>
          <li>
            <Link href="/skills" onClick={closeSidebar}>
              ⚡ Skills
            </Link>
          </li>
          <li>
            <Link href="/honors" onClick={closeSidebar}>
              🏆 Honors &amp; Awards
            </Link>
          </li>
          <li>
            <Link href="/recommendations" onClick={closeSidebar}>
              💬 Recommendations
            </Link>
          </li>
          <li>
            <Link href="/contact-me" onClick={closeSidebar}>
              📬 Hire Me
            </Link>
          </li>
          <li className="pt-2 border-t border-zinc-800">
            <a
              href={asset("/sites/mrtbk/resume.pdf")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeSidebar}
              className="text-red-500 font-bold flex items-center gap-2"
            >
              📄 Download Resume (PDF)
            </a>
          </li>
          <li>
            <Link href="/browse" onClick={closeSidebar} className="text-gray-400 text-sm block">
              🔄 Switch Profile
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#141414] text-white">
      <Navbar />
      <div className="content pt-16 sm:pt-20">{children}</div>
    </div>
  );
}
