# Lameck Kariuki — Portfolio Website

Static site: HTML + CSS + JavaScript. No build step, no dependencies.

## Structure
- `index.html`  – page markup (all sections)
- `css/styles.css` – styles, dark and light themes (variables at the top and in the theme block at the bottom)
- `js/config.js` – YOUR details: email, phone, GitHub, LinkedIn, photo and gallery  <- edit this
- `js/main.js` – behaviour: nav, theme toggle, skills tabs, project pop-ups, gallery viewer, form validation
- `images/` – put your photo and gallery images here

## Quick edits
1. Open `js/config.js`. Add your LinkedIn URL (`linkedin:"https://..."`).
2. Copy images into `images/`, then set `photo:"images/me.jpg"` and
   `gallery:[{src:"images/a.jpg",cap:"Caption"}]`.
3. Project and skill text live at the top of `js/main.js` (`SK`, `LV`, `PR`, `SV`).
4. Colours: change the `--ac` (accent) and `--vi` variables in `css/styles.css`.

## Run locally
Open `index.html` in a browser, or run `python3 -m http.server` in this folder.

## Deploy free
Upload the folder to Netlify (drag and drop), GitHub Pages, or Vercel.

## Notes
- The contact form opens the visitor's email app (no server needed). To receive messages directly, connect a service such as Formspree.
- Set `MEDIA.edit:true` in `config.js` only to try browser-side photo uploads on your own machine; keep it `false` on the live site.
