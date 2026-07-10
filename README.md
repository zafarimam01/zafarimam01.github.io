# Zafar Imam — Portfolio

A playful, code-editor-themed developer portfolio built with React + Vite.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL in your browser. To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
├── data/            All editable content lives here — no JSX to touch
│   ├── profile.js    Name, bio, social links
│   ├── projects.js    Project list (Chronuro, etc.)
│   ├── skills.js      Skills by category
│   ├── coding.js       LeetCode / CodeChef / CSES profiles
│   └── blog.js          Placeholder blog posts
├── components/       One component + one CSS file per section
│   ├── Navbar.jsx / .css
│   ├── Hero.jsx / .css
│   ├── About.jsx / .css
│   ├── Projects.jsx / .css
│   ├── ProjectCard.jsx
│   ├── Skills.jsx / .css
│   ├── CodingProfiles.jsx / .css
│   ├── Blog.jsx / .css
│   ├── Contact.jsx / .css
│   └── Footer.jsx / .css
├── App.jsx           Page layout + nav tab config
├── main.jsx          React entry point
└── index.css         Design tokens (colors, fonts, spacing) + global styles
```

## Editing content

You should rarely need to touch component files. Almost everything lives in `src/data/`:

- **Add a project** → add an object to the array in `src/data/projects.js`.
- **Add a blog post** → add an object to the array in `src/data/blog.js`.
- **Update skills** → edit `src/data/skills.js`.
- **Update social/contact links** → edit `src/data/profile.js`.

## Notes

- Your Twitter/X link wasn't provided, so `socials.twitter` in `src/data/profile.js` is left empty and the Contact section only shows GitHub, YouTube, and Instagram. Fill it in and add a `{ flag: '--twitter', label: 'Twitter', url: socials.twitter }` entry in `src/components/Contact.jsx`'s `LINKS` array to show it.
- The blog posts are placeholders — replace the content in `src/data/blog.js` with your real posts whenever you're ready.
- Design: dark "IDE at night" theme with a mint/coral/gold/violet accent palette, JetBrains Mono for code-styled elements, Space Grotesk for headings. Nav bar behaves like editor tabs, Skills renders like a live JSON viewer, Hero types itself out like a terminal session.
