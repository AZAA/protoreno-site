# Identité Visuelle Protoreno

## 🎨 Palette de couleurs

### Couleurs principales
```css
--blue: #2563EB           /* Bleu principal - Boutons, CTA, logo */
--blue-dark: #1E40AF      /* Bleu foncé - Hover states */
--blue-light: #DBEAFE     /* Bleu clair - Backgrounds d'icônes, badges */
--navy: #0F172A           /* Navy - Texte principal, footer */
--slate: #334155          /* Slate - Texte secondaire */
--gray: #64748B           /* Gris - Texte tertiaire */
```

### Couleurs utilitaires
```css
--light-gray: #E2E8F0     /* Bordures */
--bg: #F8FAFC             /* Fond sections alternées */
--white: #FFFFFF          /* Fond principal */
```

### Utilisation
- **Bleu (#2563EB)** : Boutons, liens, icônes, logo
- **Navy (#0F172A)** : Titres, texte principal, sections sombres
- **Slate (#334155)** : Paragraphes, descriptions
- **Backgrounds** : Alterner blanc et #F8FAFC pour les sections

---

## 🏠 Logo

### Concept
**"Maison + Performance"**
- Maison stylisée représentant le secteur de la rénovation
- 3 barres verticales croissantes symbolisant l'amélioration des performances énergétiques
- Design épuré et moderne

### Fichiers
- `logo-a.svg` - Logo principal (100x100)
- `favicon.svg` - Favicon (même design, optimisé pour petites tailles)

### Variantes
1. **Standard** : Fond bleu (#2563EB), éléments blancs
2. **Navy** : Fond navy (#0F172A), éléments blancs
3. **Sur fond sombre** : Transparence avec éléments blancs

### Tailles d'utilisation
- **Navigation** : 36px × 36px
- **Hero** : 80px-120px × 80px-120px
- **Favicon** : 16px × 16px (le design reste lisible)

### Espacement
Toujours laisser 0.625rem (10px) entre le logo et le texte "Protoreno"

---

## ✍️ Typographie

### Police principale
**Inter** (Google Fonts)
- Weights utilisés : 400, 500, 600, 700, 800

### Hiérarchie
```css
h1: 4rem (64px), weight 800, letter-spacing -0.03em
h2: 2.75rem (44px), weight 700, letter-spacing -0.02em
h3: 1.375rem (22px), weight 600
Lead: 1.375rem (22px), weight 400
Body: 1.0625rem (17px), weight 400
Small: 0.9375rem (15px), weight 400-600
```

### Couleurs de texte
- Titres : `var(--navy)` #0F172A
- Paragraphes : `var(--slate)` #334155
- Texte secondaire : `var(--gray)` #64748B

---

## 🎯 Composants clés

### Buttons
```css
Primary: #2563EB, white text, border-radius 8px
Hover: #1E40AF, translateY(-1px)
Padding: 0.875rem 1.75rem (standard)
Padding large: 1.125rem 2.25rem
```

### Cards
```css
Background: white
Border: 1px solid #E2E8F0
Border-radius: 12px
Padding: 2.5rem-3rem
Hover: border-color #2563EB, translateY(-4px/-6px)
```

### Icons
```css
Size: 80px × 80px (dans cards)
Background: #DBEAFE (bleu clair)
Border-radius: 12px
Icon color: #2563EB
Icon SVG size: 40px × 40px
```

### Badges
```css
Background: #DBEAFE
Border: 1px solid #2563EB
Color: #1E40AF
Border-radius: 100px
Padding: 0.5rem 1rem
Font-size: 0.9375rem
Font-weight: 600
```

---

## 📐 Spacing & Layout

### Max-width
- Container standard : `1120px`
- Container narrow : `720px`

### Section padding
- Desktop : `7rem 0` (112px vertical)
- Mobile : `5rem 0` (80px vertical)

### Grid gaps
- 3 colonnes : `2.5rem` (40px)
- 2 colonnes : `4rem-5rem` (64px-80px)

---

## 🎨 Principes de design

### 1. Clarté avant tout
- Espaces blancs généreux
- Hiérarchie visuelle claire
- Une idée par section

### 2. Professionnalisme
- Couleurs sobres (bleu business)
- Typographie moderne (Inter)
- Pas d'effets excessifs

### 3. Performance visuelle
- Icônes SVG inline
- Pas d'images lourdes
- Transitions subtiles (0.2s-0.3s)

### 4. Cohérence
- Même border-radius partout (8px-12px)
- Même style de cards
- Même traitement des icônes

---

## 📱 Responsive

### Breakpoints
- Desktop : > 968px
- Tablet : 768px - 968px
- Mobile : < 768px

### Adaptations mobile
- Titres réduits (h1: 2.75rem, h2: 2.25rem)
- Grids passent en 1 colonne
- Padding réduit (5rem vs 7rem)
- Buttons full-width

---

## ✅ Checklist d'usage

Lors de la création de nouveaux composants :
- [ ] Utiliser la palette de couleurs définie
- [ ] Respecter la hiérarchie typographique
- [ ] Border-radius : 8px (petits) ou 12px (grands)
- [ ] Hover effects : translateY + border-color change
- [ ] Icons : 80×80 box, 40×40 SVG, fond #DBEAFE
- [ ] Espacement cohérent (multiples de 0.5rem)
- [ ] Tester en mobile

---

**Dernière mise à jour** : Janvier 2025
