# Muhammed Aflah — Premium Developer Portfolio

A responsive Gen-Z developer portfolio built with **HTML5, CSS3 and Vanilla JavaScript only**.

## Project structure

```text
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── profile.jpg
│   ├── about.jpg
│   ├── project-1.jpg
│   ├── project-2.jpg
│   ├── project-3.jpg
│   └── project-4.jpg
└── README.md
```

## How to run

No Node.js, npm, framework or build tool is required.

1. Put your images inside `assets/`.
2. Open `index.html` directly in a browser.
3. The portfolio works as a static website.

The Google Fonts and Devicon stylesheet are loaded from CDNs, so those resources need internet access for the exact typography/icons. The page itself does not require a build step.

## Replace images

Use these exact filenames:

- `assets/profile.jpg` — hero/profile image
- `assets/about.jpg` — About section image
- `assets/project-1.jpg` — DevConnect
- `assets/project-2.jpg` — Ajwa Bakery
- `assets/project-3.jpg` — Fashion Hub
- `assets/project-4.jpg` — Coral Ways

Keep the filenames the same and replace the files, or edit the corresponding `src` values in `index.html`.

## Edit personal information

Open `index.html` and search for:

- `Muhammed Aflah`
- `Full Stack Developer`
- `Kerala, India`
- About section paragraphs
- Project names/descriptions
- Journey entries
- Currently Exploring cards
- Email address

## Edit social links

Replace the current placeholder GitHub, LinkedIn and Instagram URLs in `index.html`.

Search for:

```text
https://github.com/
https://www.linkedin.com/
https://www.instagram.com/
```

Then replace them with your actual profile URLs.

## Edit project links

The GitHub links are ready to be replaced with each project's repository.

The `Live Demo` buttons intentionally do not pretend to send users to a real site. They show a small message until you add your actual URL.

For a live project, replace:

```html
<a href="#" data-demo>Live Demo ↗</a>
```

with:

```html
<a href="YOUR-LIVE-URL" target="_blank" rel="noopener">Live Demo ↗</a>
```

## Contact form

There is no backend.

The form performs client-side validation only and displays:

`Message validated successfully.`

It does **not** claim that an email was sent.

## Theme

The site defaults to dark mode.

The theme button toggles dark/light mode and stores the choice in `localStorage`.

## Accessibility

The site includes semantic sections, image alt text, labels, keyboard-focusable controls, visible focus states, ARIA labels/status messaging and a `prefers-reduced-motion` mode.
