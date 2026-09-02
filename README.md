# Vidath Kodippili — Portfolio

A four-page portfolio site built from my resume. Plain HTML/CSS/JS — no build step, no dependencies.

## Files

- `index.html` — About me (summary + links)
- `projects.html` — Projects & training
- `experience.html` — Work experience
- `education.html` — Education & certificates
- `styles.css` — all styling, shared across pages
- `script.js` — small entrance animation on the About page's hero (skips itself if the visitor prefers reduced motion)

Every page has the same nav bar at the top so you can jump straight to any section.

## Publish it with GitHub Pages (free)

1. Create a new repository on GitHub — name it whatever you like, or name it
   `your-username.github.io` if you want it at the root of your GitHub domain.
2. Upload all the files above to the repo, either by dragging them into the
   GitHub web UI ("Add file" → "Upload files") or via git:
   ```bash
   git init
   git add index.html projects.html experience.html education.html styles.css script.js README.md
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/your-username/your-repo.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to "Deploy from a branch",
   branch `main`, folder `/ (root)`, then Save.
5. GitHub gives you a URL a minute or two later:
   - `https://your-username.github.io/your-repo/` (normal repo name), or
   - `https://your-username.github.io/` (if you named the repo `your-username.github.io`)

## Before you publish

- Open `index.html` and replace `github.com/your-username` in the hero links
  with your actual GitHub profile URL.
- I left your phone number off the page on purpose — a public phone number
  tends to get scraped. Add it back into the `.hero-links` block if you'd
  rather have it visible.
- Update the LinkedIn link if your handle changes.

## Making changes later

Everything is in three plain files, so you can edit `index.html` for content,
`styles.css` for colors/spacing/type, and `script.js` for the one bit of
motion — no framework, no `npm install`, no build.
