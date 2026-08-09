# John Kenneth Lopez — Portfolio

This is my personal portfolio site. I'm a BS Computer Engineering graduate (Naga College Foundation,
Inc., June 2026) and an aspiring full-stack developer. I built it to show during technical interviews —
it presents my real background, my real skills, and an honest account of what I'm still learning, with
no invented experience or statistics.

Live site: **https://jklopez817.github.io**

## About

The site covers who I am, my Computer Engineering background, my web-development experience, my
current technical skills, the professional practices I'm actively learning (REST APIs, testing, CI/CD,
security, deployment), my GitHub presence, and how to get in touch.

## Technologies

- HTML5 (semantic markup)
- CSS3 (custom properties, CSS Grid/Flexbox, no framework)
- Vanilla JavaScript (no dependencies)
- Google Fonts: JetBrains Mono, Inter

No build step, no framework, no package manager — I kept it simple so it's easy for me to read,
explain, and maintain.

## Project Structure

```
jklopez817.github.io/
├── index.html
├── style.css
├── script.js
├── assets/
└── README.md
```

## Running Locally

No build tools required. Either of these work:

**Option 1 — open directly**
Double-click `index.html`, or open it in your browser via File → Open.

**Option 2 — local server (recommended, avoids font/asset path quirks)**

```bash
# Python 3
python -m http.server 8000

# or Node (if you have it)
npx serve .
```

Then visit `http://localhost:8000`.

## Deployment (GitHub Pages)

This lives in a repository named exactly `jklopez817.github.io`, which GitHub Pages treats as a user
site served at `https://jklopez817.github.io` with no extra configuration.

**1. Create the repository**
On GitHub, create a new repository named `jklopez817.github.io` under my `JKLOPEZ817` account. Leave
it empty (no README/license) since the files already exist locally.

**2. Initialize git locally and connect it**

```bash
cd jklopez817.github.io
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/JKLOPEZ817/jklopez817.github.io.git
git push -u origin main
```

**3. Enable GitHub Pages**
In the repository: **Settings → Pages → Build and deployment → Source**, select **Deploy from a
branch**, choose branch **main** and folder **/ (root)**, then **Save**.

**4. Visit the live site**
After a minute or two, the site is live at:

```
https://jklopez817.github.io
```

## Updating the Website After Changes

```bash
git add .
git commit -m "Describe what changed"
git push
```

GitHub Pages redeploys automatically on every push to `main`, usually within a minute or two.

## Content I Still Need to Fill In

Nothing is currently showing as a placeholder on the live site — the two real projects (COE-PAY and
Smart EDGE E-Receipt) plus the internship cover the Technical Experience section. Email, LinkedIn,
phone, and programming languages are also filled in from my resume.

To add a new project later, open `index.html`, find the commented-out project template inside the
Technical Experience section (search for "PROJECT TEMPLATE"), copy it, fill it in, and move it above
the comment so it renders as a real `.project-card`.

I left off personal details like date of birth, home address, height/weight, and civil status on
purpose — they aren't relevant to a technical portfolio, and a full home address in particular
shouldn't be published publicly.

## Future Improvements

- Add real development projects as I complete them
- Add backend/API demonstrations once built
- Expand my GitHub portfolio with public repositories
- Add examples of automated testing
- Add a live deployment/CI-CD example