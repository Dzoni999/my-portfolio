# Nikola Sajic Portfolio

Modern personal portfolio website for Nikola Sajic, a backend developer from Serbia. Built with Angular 20 standalone components and Tailwind CSS.

## Features

- Angular 20 standalone architecture
- Tailwind CSS dark theme
- Routed pages: Home, About, Skills, Contact
- Sticky responsive navigation with mobile menu
- Scroll reveal animations
- Glassmorphism panels and interactive skill cards
- SEO metadata service
- Accessible landmarks, labels, focus states, and skip link
- Persistent dark/light mode toggle with localStorage
- Editable project placeholders and reusable project cards
- Validated contact form prepared for Formspree or EmailJS
- Production build configuration

## Project Structure

```text
src/
  app/
    core/
      reveal.directive.ts
      seo.service.ts
    data/
      portfolio.data.ts
    layout/
      footer.component.ts
      header.component.ts
    pages/
      about/
      contact/
      home/
      projects/
      skills/
    shared/
      project-card.component.ts
      section-heading.component.ts
      skill-card.component.ts
    app.component.ts
    app.config.ts
    app.routes.ts
  index.html
  main.ts
  styles.css
public/
  favicon.svg
```

## Setup

```bash
npm install
npm start
```

Open `http://127.0.0.1:4200/`.

## Production Build

```bash
npm run build
```

The production files are generated in `dist/nikola-sajic-portfolio`.

## Personal Links

Most content is centralized in `src/app/data/portfolio.data.ts`.

Update this file to edit:

- Email, GitHub, LinkedIn, and CV URL
- Skill names and proficiency levels
- Project titles, descriptions, badges, GitHub links, and demo links

The current CV download points to `public/Nikola-Sajic-CV.txt`. Replace it with a final PDF when ready and update `cvUrl`.

## Contact Form Integration

The contact form validates locally. To connect Formspree, set `FORMSPREE_ENDPOINT` in `src/app/pages/contact/contact.component.ts`.

For EmailJS, call the EmailJS send method inside `submit()` after `contactForm.valid` is true.
