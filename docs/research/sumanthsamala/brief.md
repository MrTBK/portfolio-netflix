# Sumanth Samala Portfolio Clone - Research Brief

## Source Overview
- **Source URL**: https://sumanthsamala.com/
- **Theme**: Netflix UI / Interactive Developer Portfolio
- **Author**: Sumanth Samala (Senior Software Engineer @ Kajima London)
- **CMS / Data Source**: DatoCMS GraphQL endpoint

## Architecture & Routes
1. `/` — Netflix Intro landing with "ta-dum" sound and zooming logo animation.
2. `/browse` — Netflix profile selector ("Who's Watching?") with profiles: `recruiter`, `developer`, `stalker`, `adventurer`.
3. `/profile/[profileName]` — Netflix dashboard for the selected profile with Hero banner, "Today's Top Picks", and "Continue Watching" rows.
4. `/work-permit` — UK Work Permit card with live visa status & details.
5. `/work-experience` — Interactive vertical timeline for career roles (Kajima, Roostify, eKincare, LetsVenture) and education (Masters at Swansea University).
6. `/skills` — Technical skills catalog categorized into Backend, Frontend, DevOps, Database, Messaging, Cloud with letter animations.
7. `/projects` — Featured projects grid with technology tags (Form Management Web App, Multiutility Robot, Playasport).
8. `/recommendations` — Formal letter of reference from Chris Smith (Head of Kajima Community).
9. `/contact-me` — Custom LinkedIn profile badge, direct email, phone, and coffee invitation.
10. `/music` — Music interests with rock quote, genres, and favorite album covers.
11. `/reading` — Books that shaped my journey (Atomic Habits, Rich Dad Poor Dad, The Alchemist, Eat That Frog, Vennelo Adapilla, etc.).
12. `/blogs` — Published articles on Medium & Dev.to with external links.
13. `/certifications` — Certifications grid with credential details.

## Asset Map
All static media assets extracted directly from production bundle and stored in `public/sites/sumanthsamala/`:
- `logo-2.428ef53f18dcf64df8df.png` (Netflix-styled logo)
- `netflix-sound.a13a4aedfb5da5a27f04.mp3` (Intro sound)
- `blue.9b293a4a6ef065903a8f.png`, `grey.bbfd7fb8e095529e355c.png`, `red.6138d0c52611186c9d03.png`, `yellow.2631c5cf63f02f6bbfbf.png` (Netflix profile avatars)
- `sumanth.7debeeeb8c7c58cb52de.jpeg` (Personal portrait)
- `chris.c8b8e648ee695596bdd3.jpg` (Recommendation avatar)
- Book covers: `atomic_habits...`, `rich_dad_poor_dad...`, `alchemist...`, `eat_that_frog...`, `vennelo_adapilla...`, `vijayaniki_aidu_metlu...`
- Album covers: `Hotelcalifornia...`, `ac-dc...`, `guns-n-roses...`
