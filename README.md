# YouTube Clone 🎥

A responsive YouTube clone built with **React**, **Tailwind CSS**, and the **YouTube Embed API**.  
This project replicates the core layout and functionality of YouTube, including video playback, sidebar navigation, and responsive design.

---

## 🚀 Features
- **Responsive Navbar** with search bar and icon partition styling (reverse‑engineered from YouTube’s layout)
- **Sidebar Navigation** with categories and subscriptions
- **Video Player Page** with embedded YouTube iframe
- **Recommended Videos Section** (horizontal carousel + sidebar list)
- **Responsive Layouts**:
  - Flex layout on small/medium screens
  - Stacked layout on mobile
  - Grid/block layout on large screens
- **Custom Styling**:
  - Tailwind utilities for spacing, flex, and breakpoints
  - Vanilla CSS for iframe responsiveness (`vh` units + media queries) — Tailwind properties weren’t applying correctly to iframe, so I handled it with CSS

---

## 🛠️ Tech Stack
- **React** (functional components, hooks)
- **Tailwind CSS** (utility‑first styling)
- **Vanilla CSS** (iframe responsiveness)
- **YouTube Embed API** for video playback

---

## 📱 Responsiveness
- Works across mobile, tablet, and desktop
- Sidebar collapses below `1024px`
- Video iframe scales with viewport height (`62vh` → `40vh`)

---

## 📌 Notes
- Tested responsiveness both via browser resizing and DevTools
- Sidebar + video layout collapses gracefully on mobile
- API key is securely managed via `.env` (not exposed in repo)

---

## 🌐 Deployment
This project is deployed on **Netlify**.  
👉 [Live Demo](https://your-netlify-link.netlify.app) *(replace with your actual link)*

---