# Himaja Kavuri — Portfolio Deployment Guide

## What you have
A complete React portfolio website with:
- Bold editorial design (cream + gold + ink color palette)
- Hero section with your name, summary, and CTAs
- Education strip (USC + IIT BHU)
- Work experience (Bank of India)
- 3 projects (Analytics Warehouse, LOS Prediction, Stroke Risk)
- Skills section (all your tools)
- Contact section
- Fully responsive (mobile + desktop)

## Step 1 — Install tools (one time only)

Download and install:
1. **Node.js** → https://nodejs.org (click "LTS" version)
2. **Git** → https://git-scm.com/downloads

Verify by opening Terminal (Mac) or Command Prompt (Windows) and typing:
```
node --version
git --version
```
Both should print a version number.

---

## Step 2 — Set up the project on your computer

1. Move the `himaja-portfolio` folder to wherever you keep your projects (e.g. Desktop or Documents)

2. Open Terminal / Command Prompt and navigate to it:
```
cd Desktop/himaja-portfolio
```

3. Install dependencies:
```
npm install
```
(This takes 1–2 minutes the first time)

4. Preview it locally:
```
npm start
```
Your browser will open at http://localhost:3000 — this is your site running locally.

---

## Step 3 — Put it on GitHub

1. Go to https://github.com and log in as HimajaKavuri23

2. Click the **+** button → **New repository**
   - Name it exactly: `HimajaKavuri23.github.io`
   - Set it to **Public**
   - Do NOT check "Add README"
   - Click **Create repository**

3. Back in Terminal, inside your portfolio folder:
```
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/HimajaKavuri23/HimajaKavuri23.github.io.git
git push -u origin main
```

---

## Step 4 — Deploy live

```
npm run deploy
```

Wait 2–3 minutes, then visit:
**https://HimajaKavuri23.github.io**

Your site is live! 🎉

---

## Step 5 — Every time you make changes

1. Edit the code (App.js or App.css)
2. In Terminal:
```
git add .
git commit -m "describe what you changed"
git push
npm run deploy
```

---

## How to update your content

All your content is at the top of `src/App.js`:
- **SKILLS** array → add/remove tools
- **EXPERIENCE** array → add new jobs
- **PROJECTS** array → add new projects as you build them

To add a new project, copy this block inside the PROJECTS array:
```js
{
  title: "Your Project Name",
  subtitle: "What it analyzes",
  tools: ["Python", "SQL", "Tableau"],
  period: "Month Year – Month Year",
  description: "What you built and what the results were.",
  tag: "Financial Analysis",
},
```

---

## Your URL to share with recruiters
`https://HimajaKavuri23.github.io`

Put this in:
- Your resume (header, next to LinkedIn)
- Your LinkedIn profile (under "Website")
- Your email signature
- Every job application

---

## Questions?
Ask Claude to help you modify anything — just share the code and describe what you want changed.
