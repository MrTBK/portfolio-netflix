"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { asset } from "@/lib/asset";

interface ProfileItem {
  name: string;
  image: string;
  backgroundGif: string;
}

export const PROFILES: ProfileItem[] = [
  {
    name: "recruiter",
    image: asset("/sites/sumanthsamala/blue.9b293a4a6ef065903a8f.png"),
    backgroundGif:
      "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTZ5eWwwbjRpdWM1amxyd3VueHhteTVzajVjeGZtZGJ1dDc4MXMyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/16u7Ifl2T4zYfQ932F/giphy.gif",
  },
  {
    name: "developer",
    image: asset("/sites/sumanthsamala/grey.bbfd7fb8e095529e355c.png"),
    backgroundGif:
      "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGNidDl5emZpejY2eGFxa2I4NW0zZGNpbWRlbnBrZ3N2dWhhbzM1MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TFPdmm3rdzeZ0kP3zG/giphy.gif",
  },
  {
    name: "stalker",
    image: asset("/sites/sumanthsamala/red.6138d0c52611186c9d03.png"),
    backgroundGif:
      "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExc28yMjMyZmJ6eWtxbmNwdDV6cXk4dWZmcjFhZms2cXBjN2h5ZDJjeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QjZXUBUr89CkiWLPjL/giphy.gif",
  },
  {
    name: "adventurer",
    image: asset("/sites/sumanthsamala/yellow.2631c5cf63f02f6bbfbf.png"),
    backgroundGif:
      "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmxib24ycWo2cjlmazh0NGV5NTZ2Mzd2YWY0M2tvam9oYXBwYW1ocCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ERKMnDK6tkzJe8YVa3/giphy-downsized-large.gif",
  },
];

export default function BrowsePage() {
  const router = useRouter();

  const handleSelectProfile = (profile: ProfileItem) => {
    // Store selected profile in localStorage/session
    if (typeof window !== "undefined") {
      sessionStorage.setItem("currentProfile", profile.name);
      sessionStorage.setItem("profileImage", profile.image);
      sessionStorage.setItem("backgroundGif", profile.backgroundGif);
    }
    router.push(`/profile/${profile.name}`);
  };

  return (
    <div className="browse-container !h-auto min-h-screen py-12 px-4">
      <p className="who-is-watching text-3xl sm:text-5xl font-medium tracking-tight mb-6">
        Who&apos;s Watching?
      </p>
      <div className="profiles !mb-6 sm:!mb-12">
        {PROFILES.map((p, index) => (
          <div
            key={index}
            className="profile-card"
            onClick={() => handleSelectProfile(p)}
          >
            <div className="image-container">
              <img
                src={p.image}
                alt={`${p.name} profile`}
                className="profile-image"
              />
            </div>
            <h3 className="profile-name">{p.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
