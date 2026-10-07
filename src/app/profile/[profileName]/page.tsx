"use client";

import React, { use, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/sites/sumanthsamala/Navbar";
import data from "@/components/sites/sumanthsamala/data.json";

interface TopPick {
  title: string;
  imgSrc: string;
  route: string;
}

const PICKS_BY_SECTION: Record<string, { imgSrc: string; route: string }> = {
  Education: {
    imgSrc: "/sites/sumanthsamala/picks/education.jpg",
    route: "/education",
  },
  Experience: {
    imgSrc: "/sites/sumanthsamala/picks/experience.jpg",
    route: "/work-experience",
  },
  Projects: {
    imgSrc: "/sites/sumanthsamala/picks/projects.jpg",
    route: "/projects",
  },
  Skills: {
    imgSrc: "/sites/sumanthsamala/picks/skills.jpg",
    route: "/skills",
  },
  Honors: {
    imgSrc: "/sites/sumanthsamala/picks/honors.jpg",
    route: "/honors",
  },
  Recommendations: {
    imgSrc: "/sites/sumanthsamala/picks/recommendations.jpg",
    route: "/recommendations",
  },
  "Contact Me": {
    imgSrc: "/sites/sumanthsamala/picks/contact.jpg",
    route: "/contact-me",
  },
};

function createPicks(order: string[]): TopPick[] {
  return order.map((title) => ({
    title,
    imgSrc: PICKS_BY_SECTION[title].imgSrc,
    route: PICKS_BY_SECTION[title].route,
  }));
}

const TOP_PICKS: Record<string, TopPick[]> = {
  recruiter: createPicks([
    "Education",
    "Experience",
    "Projects",
    "Skills",
    "Honors",
    "Recommendations",
    "Contact Me",
  ]),
  developer: createPicks([
    "Projects",
    "Skills",
    "Experience",
    "Education",
    "Honors",
    "Recommendations",
    "Contact Me",
  ]),
  stalker: createPicks([
    "Honors",
    "Education",
    "Experience",
    "Projects",
    "Skills",
    "Recommendations",
    "Contact Me",
  ]),
  adventurer: createPicks([
    "Projects",
    "Honors",
    "Experience",
    "Education",
    "Skills",
    "Recommendations",
    "Contact Me",
  ]),
};

interface ContinueWatchingItem {
  title: string;
  imgSrc: string;
  link: string;
  progress: number;
}

const CONTINUE_WATCHING: Record<string, ContinueWatchingItem[]> = {
  recruiter: [
    {
      title: "Education",
      imgSrc: "/sites/sumanthsamala/picks/education.jpg",
      link: "/education",
      progress: 95,
    },
    {
      title: "Experience",
      imgSrc: "/sites/sumanthsamala/picks/experience.jpg",
      link: "/work-experience",
      progress: 85,
    },
    {
      title: "Projects",
      imgSrc: "/sites/sumanthsamala/picks/projects.jpg",
      link: "/projects",
      progress: 92,
    },
    {
      title: "Honors",
      imgSrc: "/sites/sumanthsamala/picks/honors.jpg",
      link: "/honors",
      progress: 95,
    },
    {
      title: "Contact Me",
      imgSrc: "/sites/sumanthsamala/picks/contact.jpg",
      link: "/contact-me",
      progress: 100,
    },
  ],
  developer: [
    {
      title: "Projects",
      imgSrc: "/sites/sumanthsamala/picks/projects.jpg",
      link: "/projects",
      progress: 90,
    },
    {
      title: "Skills",
      imgSrc: "/sites/sumanthsamala/picks/skills.jpg",
      link: "/skills",
      progress: 85,
    },
    {
      title: "Experience",
      imgSrc: "/sites/sumanthsamala/picks/experience.jpg",
      link: "/work-experience",
      progress: 82,
    },
    {
      title: "Education",
      imgSrc: "/sites/sumanthsamala/picks/education.jpg",
      link: "/education",
      progress: 78,
    },
    {
      title: "Contact Me",
      imgSrc: "/sites/sumanthsamala/picks/contact.jpg",
      link: "/contact-me",
      progress: 100,
    },
  ],
  stalker: [
    {
      title: "Honors",
      imgSrc: "/sites/sumanthsamala/picks/honors.jpg",
      link: "/honors",
      progress: 100,
    },
    {
      title: "Education",
      imgSrc: "/sites/sumanthsamala/picks/education.jpg",
      link: "/education",
      progress: 90,
    },
    {
      title: "Experience",
      imgSrc: "/sites/sumanthsamala/picks/experience.jpg",
      link: "/work-experience",
      progress: 88,
    },
    {
      title: "Contact Me",
      imgSrc: "/sites/sumanthsamala/picks/contact.jpg",
      link: "/contact-me",
      progress: 100,
    },
  ],
  adventurer: [
    {
      title: "Projects",
      imgSrc: "/sites/sumanthsamala/picks/projects.jpg",
      link: "/projects",
      progress: 85,
    },
    {
      title: "Honors",
      imgSrc: "/sites/sumanthsamala/picks/honors.jpg",
      link: "/honors",
      progress: 90,
    },
    {
      title: "Experience",
      imgSrc: "/sites/sumanthsamala/picks/experience.jpg",
      link: "/work-experience",
      progress: 75,
    },
    {
      title: "Contact Me",
      imgSrc: "/sites/sumanthsamala/picks/contact.jpg",
      link: "/contact-me",
      progress: 100,
    },
  ],
};

const PROFILE_GIFS: Record<string, string> = {
  recruiter:
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTZ5eWwwbjRpdWM1amxyd3VueHhteTVzajVjeGZtZGJ1dDc4MXMyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/16u7Ifl2T4zYfQ932F/giphy.gif",
  developer:
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGNidDl5emZpejY2eGFxa2I4NW0zZGNpbWRlbnBrZ3N2dWhhbzM1MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TFPdmm3rdzeZ0kP3zG/giphy.gif",
  stalker:
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExc28yMjMyZmJ6eWtxbmNwdDV6cXk4dWZmcjFhZms2cXBjN2h5ZDJjeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QjZXUBUr89CkiWLPjL/giphy.gif",
  adventurer:
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmxib24ycWo2cjlmazh0NGV5NTZ2Mzd2YWY0M2tvam9oYXBwYW1ocCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ERKMnDK6tkzJe8YVa3/giphy-downsized-large.gif",
};

const PROFILE_AVATARS: Record<string, string> = {
  recruiter: "/sites/sumanthsamala/blue.9b293a4a6ef065903a8f.png",
  developer: "/sites/sumanthsamala/grey.bbfd7fb8e095529e355c.png",
  stalker: "/sites/sumanthsamala/red.6138d0c52611186c9d03.png",
  adventurer: "/sites/sumanthsamala/yellow.2631c5cf63f02f6bbfbf.png",
};

export default function ProfileDashboard({
  params,
}: {
  params: Promise<{ profileName: string }>;
}) {
  const router = useRouter();
  const resolvedParams = use(params);
  const rawName = resolvedParams.profileName?.toLowerCase();
  const profileKey = ["recruiter", "developer", "stalker", "adventurer"].includes(
    rawName
  )
    ? rawName
    : "recruiter";

  const topPicksRef = useRef<HTMLDivElement>(null);
  const continueRef = useRef<HTMLDivElement>(null);

  const banner = data.profilebanner;
  const bgGif = PROFILE_GIFS[profileKey];
  const profileAvatar = PROFILE_AVATARS[profileKey];
  const topPicks = TOP_PICKS[profileKey] || TOP_PICKS.recruiter;
  const continueWatching =
    CONTINUE_WATCHING[profileKey] || CONTINUE_WATCHING.recruiter;

  const scrollLeft = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#141414] min-h-screen text-white pb-16">
      <Navbar profileImage={profileAvatar} />

      {/* Hero Banner */}
      <div
        className="profile-page relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.9)), url(${bgGif})`,
        }}
      >
        <div className="profile-banner">
          <div className="banner-content">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-semibold mb-3">
              <span>● ACTIVE PROFILE: {profileKey.toUpperCase()}</span>
            </div>
            <h1 className="banner-headline text-3xl sm:text-5xl font-black tracking-tight" id="headline">
              {banner.headline}
            </h1>
            <p className="banner-description max-w-2xl text-gray-300 text-sm sm:text-base leading-relaxed">
              {banner.profileSummary}
            </p>
            <div className="banner-buttons flex flex-wrap gap-3 mt-4">
              <button
                className="play-button"
                type="button"
                onClick={() => {
                  const resumeUrl = (banner.resumeLink as { url?: string } | null)?.url;
                  if (resumeUrl) {
                    window.open(resumeUrl, "_blank");
                  } else {
                    window.open(banner.linkedinLink, "_blank");
                  }
                }}
              >
                <div className="icon-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="black"
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                  >
                    <path d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z" />
                  </svg>
                </div>
                <div className="spacer" />
                <span className="label font-bold">Resume (CV)</span>
              </button>

              <button
                className="more-info-button"
                type="button"
                onClick={() => window.open(banner.linkedinLink, "_blank")}
              >
                <div className="icon-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                    fill="white"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
                    />
                  </svg>
                </div>
                <div className="spacer" />
                <span className="label">LinkedIn</span>
              </button>

              <button
                className="more-info-button bg-zinc-800/90 hover:bg-zinc-700 border border-zinc-700"
                type="button"
                onClick={() => window.open(banner.githubLink || "https://github.com/MrTBK", "_blank")}
              >
                <div className="icon-container">
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </div>
                <div className="spacer" />
                <span className="label">GitHub (@MrTBK)</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Row 1: Today's Top Picks */}
      <div className="top-picks-row px-4 sm:px-8 mt-6 relative group/row">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <h2 className="row-title text-xl sm:text-2xl font-bold text-white tracking-wide !mb-0">
              Today&apos;s Top Picks for {profileKey.charAt(0).toUpperCase() + profileKey.slice(1)}
            </h2>
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded text-[11px] font-bold bg-[#E50914] text-white">
              TOP 10
            </span>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollLeft(topPicksRef)}
              aria-label="Scroll left"
              className="w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 border border-zinc-700 flex items-center justify-center text-white transition-all cursor-pointer"
            >
              ‹
            </button>
            <button
              onClick={() => scrollRight(topPicksRef)}
              aria-label="Scroll right"
              className="w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 border border-zinc-700 flex items-center justify-center text-white transition-all cursor-pointer"
            >
              ›
            </button>
          </div>
        </div>

        <div
          ref={topPicksRef}
          className="card-row flex gap-4 overflow-x-auto pb-4 scroll-smooth no-scrollbar"
        >
          {topPicks.map((item, idx) => (
            <div
              key={idx}
              className="pick-card group relative flex-shrink-0 w-52 sm:w-64 h-36 sm:h-44 rounded-lg overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-red-600 transition-all duration-300 hover:scale-105 hover:z-20 shadow-md hover:shadow-2xl hover:shadow-red-600/30 cursor-pointer"
              onClick={() => router.push(item.route)}
              style={{ animationDelay: `${0.1 * idx}s` }}
            >
              {/* Original Portfolio Picture */}
              <img
                src={item.imgSrc}
                alt={item.title}
                className="pick-image w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
              />

              {/* Dark Vignette / Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition-colors duration-300" />

              {/* Front text: in the same place like the original one */}
              <div className="absolute inset-0 flex items-center justify-center p-3 text-center pointer-events-none">
                <span className="pick-label text-white text-base sm:text-lg font-bold tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] group-hover:text-red-400 transition-colors duration-200 select-none">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Continue Watching */}
      <div className="continue-watching-row px-4 sm:px-8 mt-10 relative group/row">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <h2 className="row-title text-xl sm:text-2xl font-bold text-white tracking-wide !mb-0">
              Continue Watching for {profileKey.charAt(0).toUpperCase() + profileKey.slice(1)}
            </h2>
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded text-[11px] font-bold bg-zinc-800 text-zinc-300 border border-zinc-700">
              IN PROGRESS
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollLeft(continueRef)}
              aria-label="Scroll left"
              className="w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 border border-zinc-700 flex items-center justify-center text-white transition-all cursor-pointer"
            >
              ‹
            </button>
            <button
              onClick={() => scrollRight(continueRef)}
              aria-label="Scroll right"
              className="w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 border border-zinc-700 flex items-center justify-center text-white transition-all cursor-pointer"
            >
              ›
            </button>
          </div>
        </div>

        <div
          ref={continueRef}
          className="card-row flex gap-4 overflow-x-auto pb-4 scroll-smooth no-scrollbar"
        >
          {continueWatching.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              className="pick-card group relative flex-shrink-0 w-48 sm:w-60 h-32 sm:h-40 rounded-lg overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-zinc-500 transition-all duration-300 hover:scale-105 hover:z-20 shadow-md cursor-pointer block"
            >
              {/* Original Portfolio Picture */}
              <img
                src={item.imgSrc}
                alt={item.title}
                className="pick-image w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
              />

              {/* Dark Vignette / Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition-colors duration-300" />

              {/* Front text: in the same place like the original one */}
              <div className="absolute inset-0 flex items-center justify-center p-3 text-center pointer-events-none">
                <span className="pick-label text-white text-sm sm:text-base font-bold tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] group-hover:text-red-400 transition-colors duration-200 select-none">
                  {item.title}
                </span>
              </div>

              {/* Bottom: Progress bar */}
              <div className="absolute inset-x-0 bottom-0 p-3 z-10 pointer-events-none">
                <div className="w-full h-1 bg-zinc-700/80 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-red-600 rounded-full transition-all duration-500"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
