# App Support Design System

## 1. Atmosphere & Identity

These pages are quiet legal and support documents for small iOS apps. The signature is a centered document card: plain language, generous line height, light borders, and one restrained app accent color.

## 2. Color

### Palette

| Role | Token | Light | Dark | Usage |
|------|-------|-------|------|-------|
| Surface/page | --surface-page | #F7F8FB | N/A | Browser background |
| Surface/card | --surface-card | #FFFFFF | N/A | Policy document card |
| Text/primary | --text-primary | #17191F | N/A | Headings and body |
| Text/secondary | --text-secondary | #667085 | N/A | Dates and secondary notes |
| Border/default | --border-default | #E4E7EC | N/A | Card borders and dividers |
| Accent/NightWeb | --accent-nightweb | #5B5CF6 | N/A | NightWeb links and eyebrow |

### Rules

- Use a light-only color scheme for legal pages.
- Use the app accent only for links and small labels.
- Do not use decorative gradients or large colored panels.

## 3. Typography

### Scale

| Level | Size | Weight | Line Height | Tracking | Usage |
|-------|------|--------|-------------|----------|-------|
| H1 | 30px | 700 | 1.2 | 0 | Policy title |
| H2 | 19px | 700 | 1.35 | 0 | Numbered policy sections |
| Body | 16px | 400 | 1.65 | 0 | Paragraphs and list items |
| Body/sm | 14px | 400 | 1.5 | 0 | Effective date and notes |

### Font Stack

- Primary: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
- Mono: Not used
- Serif: Not used

### Rules

- Body text never drops below 14px.
- Korean and English share the same system stack for predictable rendering on Apple devices.

## 4. Spacing & Layout

### Base Unit

All spacing derives from a base of 4px.

| Token | Value | Usage |
|-------|-------|-------|
| --space-2 | 8px | Heading gaps |
| --space-3 | 12px | Paragraph and list rhythm |
| --space-5 | 20px | Header divider spacing |
| --space-6 | 24px | Section rhythm |
| --space-8 | 32px | Card padding |
| --space-11 | 44px | Desktop page vertical padding |

### Grid

- Max content width: 760px
- Mobile page margin: 24px
- Mobile card max width: 300px
- Desktop page margin: 16px

### Rules

- Keep the document centered.
- Avoid multi-column legal text.

## 5. Components

### Policy Card

- Structure: page wrapper, single card, header, numbered sections.
- Variants: app accent color may change per app.
- Spacing: card uses --space-8 on desktop and --space-5 on compact screens.
- States: links underline on hover.
- Accessibility: one main landmark, one h1, semantic headings and lists.
- Motion: none.

## 6. Motion & Interaction

### Timing

No page motion is used.

### Rules

- Legal/support pages should remain static and readable.
- Interactive behavior is limited to links.

## 7. Depth & Surface

### Strategy

Mixed, but restrained: light border plus a very soft card shadow matching the existing support pages.

| Level | Value | Usage |
|-------|-------|-------|
| Card | 0 14px 36px rgba(16, 24, 40, 0.06) | Policy card |
| Border | 1px solid var(--border-default) | Card and header divider |
