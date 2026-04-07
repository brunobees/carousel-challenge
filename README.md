# Carousel Challenge

## Setup

```
npm install
npm run dev
```

## Challenge

Build an image carousel from scratch.

The app currently renders a simple `<h1>Hello World</h1>`. Your job is to replace it with a fully functional carousel component.

Slide data is available in `src/data.js`. Each slide has `id`, `title`, `description` and `image` (a public URL).

## Rules

1. Create your carousel component(s) inside `src/`.
2. Import and use the `slides` array from `src/data.js`.
3. Wire your carousel into `src/App.jsx` so it renders instead of the Hello World heading.
4. Display one slide at a time showing its **image**, **title** and **description**.
5. Add **Previous** and **Next** navigation buttons.
6. **Previous** must be disabled on the first slide; **Next** must be disabled on the last slide.
7. Show position indicators (dots/bullets) below the carousel highlighting the active slide.
8. Display a visible counter (e.g. `2 / 5`).
9. Do not use external carousel libraries.
10. Style the component however you see fit (CSS, inline styles or CSS modules are all fine).

## Evaluation

- Correct use of React state and event handling.
- Proper conditional rendering and disabling of buttons.
- Clean, readable, well-structured code.
- Visual result and attention to detail.
