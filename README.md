# Carousel Challenge

## Setup

```
npm install
npm run dev
```

## Challenge

Implement a functional carousel inside `src/Carousel.jsx`.

The component already receives an array of `slides` via props. Each slide has `id`, `title`, `description` and `color`.

The CSS and data are ready. You only need to write the logic.

## Rules

1. Display one slide at a time using its `title`, `description` and `color` as background.
2. Add **Previous** and **Next** buttons.
3. **Previous** must be disabled on the first slide.
4. **Next** must be disabled on the last slide.
5. Do not use external libraries.
6. Work only inside `src/Carousel.jsx`.

## Evaluation

- Correct use of React state (`useState`).
- Proper conditional rendering and disabling of buttons.
- Clean, readable code.
