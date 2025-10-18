# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Protoreno website (protoreno.com), a static landing page for a French company that develops digital tools for building renovation professionals. The site is hosted on GitHub Pages and uses a single-page HTML architecture with inline CSS and vanilla JavaScript.

## Architecture

**Single-page static site:**
- `index.html` - Main landing page with embedded CSS and JavaScript (no build step required)
- All styles are inline in the `<style>` tag within the HTML file
- All JavaScript is inline in `<script>` tags within the HTML file
- Form submission handled via UseBasin API endpoint

**Content structure:**
- Header with logo and CTA to Tally survey
- Multiple sections explaining the company's mission, services, and approach
- Screenshot showcase section
- Contact form at the bottom
- Footer with contact email

**External dependencies:**
- Uses Tally (tally.so) for external survey form
- Uses UseBasin (usebasin.com) for contact form submission endpoint at `https://usebasin.com/f/e030c8ee3d47`
- No npm packages or build tools

**Assets:**
- Logos: `logo-protoreno.png`, `logo-protoreno vert.png`
- Favicons: Multiple sizes for different devices
- Screenshots: `capture1.png`, `capture2.png`, `capture3.png`, `capture4.png`
- SVG illustrations: Various "bro" style illustrations for visual interest
- Custom check icon: `check-green.png` (referenced in CSS for list items)

**Unused files:**
- `animation.js` - React/Framer Motion component that is not currently integrated into the site
- `chart.json` and `dashboard.json` - Large JSON data files (likely Lottie animations or data visualizations) not currently used

## Deployment

The site is deployed via GitHub Pages to `protoreno.com` (configured in `CNAME` file).

To deploy changes:
```bash
git add .
git commit -m "Description of changes"
git push origin main
```

Changes are automatically published to the live site after pushing to main.

## Development

No build process is required. To work on this site:

1. **Local preview:** Open `index.html` directly in a browser, or use a simple local server:
   ```bash
   python -m http.server 8000
   # or
   npx serve .
   ```

2. **Editing:** All HTML, CSS, and JavaScript are in `index.html`

3. **Testing the contact form:** The form submits to UseBasin's API. Test submissions will be sent to the configured endpoint.

## Key Design Patterns

**Styling:**
- CSS custom properties for consistent spacing: `--max-width: 800px`, `--padding-side: 1rem`
- Responsive design with media query at 1200px breakpoint
- Brand color (blue): `#084e9a`
- Mobile-first approach with centered content

**Form handling:**
- Async form submission using Fetch API
- Success/error messages shown inline without page reload
- Form data sent as FormData to UseBasin endpoint

**Interactive elements:**
- Screenshot zoom effect on hover (CSS transform scale)
- Custom list styling with green check marks via `::before` pseudo-elements

## Content Language

All content is in French. When making content changes, maintain:
- Professional but approachable tone ("vous" formal address)
- Focus on practical solutions for building renovation professionals
- Clear calls-to-action directing to Tally survey or contact form
