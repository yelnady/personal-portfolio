# 📦 1. Project Setup
- [ ] Initialize Next.js 15 project (App Router `/app`)
- [ ] Set up TypeScript
- [ ] Install and configure:
  - Tailwind CSS
  - `tailwindcss-animate`
  - ShadCN/ui
  - Framer Motion
  - MDX support (for blog/notes)
- [ ] Set up `globals.css` with custom fonts, base styles
- [ ] Add `/data/` directory for structured content files:
  - `data/resume.ts`
  - `data/projects.ts`
  - `data/notes.ts`
  - `data/publications.ts`
  - `data/videos.ts`
  - `data/skills.ts`
  - `data/socials.ts`

---

## 🏠 2. Homepage – `/app/page.tsx`
- [ ] Load from `data/resume.ts` → name, title, summary
- [ ] Render animated hero (Hi, I’m Yusuf…)
- [ ] Pull tagline dynamically
- [ ] Add decorative floating stars/icons
- [ ] Smooth scroll navigation to Work, Notes, About, Contact

---

## 👤 3. About Page – `/app/about/page.tsx`
- [ ] Load from `data/resume.ts`:
  - Bio
  - Work timeline (Fuse, VT, AI Camp, etc.)
  - Personal values/ethics section
- [ ] Render timeline dynamically
- [ ] Add profile image, location, and current weather (optional API)

---

## 💼 4. Work/Experience – `/app/work/page.tsx`
- [ ] Load from `data/resume.ts.experience[]`
- [ ] Create `ExperienceCard` component
- [ ] Map through work history (Fuse, VT, etc.)
- [ ] Animate on scroll or section reveal

---

## 🚀 5. Projects – `/app/projects/page.tsx`
- [ ] Load from `data/projects.ts`
- [ ] Card view with filters (e.g., NLP, LLMs, Healthcare)
- [ ] Each project has:
  - Title
  - Tech used
  - Impact
  - GitHub/demo link (optional)
- [ ] Reuse across other pages if needed (featured projects)

---

## 🧠 6. Skills – `/app/skills/page.tsx`
- [ ] Load from `data/skills.ts`
- [ ] Categorize: AI, MLOps, Soft Skills, Infra
- [ ] Render with tags/badges, sorted alphabetically or grouped
- [ ] Add animation or hover tooltips with explanations (optional)

---

## 📝 7. Notes/Blog – `/app/notes/page.tsx`
- [ ] Load from `data/notes.ts`
- [ ] Each note:
  - Title
  - Summary
  - Icon/category
  - Link to full post (MDX or `app/notes/[slug]/page.tsx`)
- [ ] Use `app/notes/[slug]/page.tsx` + dynamic route to render full content
- [ ] Optional: search or tags

---

## 🎥 8. YouTube Videos – `/app/videos/page.tsx`
- [ ] Load from `data/videos.ts` or fetch via YouTube API
- [ ] Embed videos using `<iframe>` or custom player
- [ ] Group by type (Talks, Tutorials, Shorts)

---

## 📅 9. Consultation – `/app/book/page.tsx`
- [ ] Form: name, email, message, goal
- [ ] Option 1: Link to Calendly
- [ ] Option 2: Integrate Google Calendar API
- [ ] Store responses or redirect on submit

---

## 📚 10. Publications – `/app/publications/page.tsx`
- [ ] Load from `data/publications.ts`
- [ ] Include:
  - Title, Author, Venue
  - Abstract or Summary
  - DOI or PDF link
- [ ] Allow filtering by year or topic (AI, Radiation Oncology, Education)

---

## 🎓 11. Education – `/app/education/page.tsx`
- [ ] Load from `data/resume.ts.education[]`
- [ ] Format as timeline or cards (VT, Radford)
- [ ] Mention GPA, honors, rank

---

## 📬 12. Contact – `/app/contact/page.tsx`
- [ ] Load contact links from `data/socials.ts`
- [ ] Form with basic validation
- [ ] Buttons: LinkedIn, GitHub, Email, Twitter
- [ ] Include a mission/value statement for collaboration

---

## 🧱 13. Shared Components
- [ ] `Navbar.tsx` with section highlight on scroll
- [ ] `Footer.tsx` with social icons
- [ ] `TimelineItem.tsx`
- [ ] `ProjectCard.tsx`
- [ ] `SkillBadge.tsx`
- [ ] `NoteCard.tsx`
- [ ] `SectionHeader.tsx`

---