# React Practice

A collection of small React practice projects. Add new exercises under `practices/`.

## Practices

| Practice | Description |
| --- | --- |
| [reusable-mega-navbar](practices/reusable-mega-navbar) | Reusable navbar with a dropdown submenu |
| [reusable-card](practices/reusable-card) | Reusable `Card` component mapped from profile data |
| [toggle-visibility](practices/toggle-visibility) | Toggle message visibility with `useState` |
| [fruits-search](practices/fruits-search) | Debounced fruit search with `useEffect` and fetch |

## What I learned

- **reusable-mega-navbar** — Build a reusable navbar component with a dropdown submenu and accessible markup (`aria-expanded`, `aria-label`).
- **reusable-card** — Pass data through props and render a list with `map()` and `key`.
- **toggle-visibility** — Store UI state with `useState` and show or hide content with conditional rendering.
- **fruits-search** — Keep an input controlled, debounce a fetch inside `useEffect`, and clear the timeout on cleanup.

## Setup

```bash
npm install
```

## Run

```bash
npm run dev
```

Opens a practice index at `http://localhost:5173/`. Click any practice to open it.

To open one practice directly:

```bash
npm run dev:navbar
npm run dev:card
npm run dev:toggle
npm run dev:fruits
```
