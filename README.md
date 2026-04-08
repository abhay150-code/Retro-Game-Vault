# 🎮 Retro Game Vault

![Retro Game Vault Banner](https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop)

Retro Game Vault is a sleek, modern game discovery web application built completely from scratch using pure **HTML**, **CSS**, and **Vanilla JavaScript**. It leverages the **RAWG Video Games Database API** to deliver a visually stunning, highly interactive dark-themed UI.

## 🌟 Core Features

- **Infinite Scrolling Grid**: Seamlessly explore thousands of titles using native `IntersectionObserver` auto-pagination.
- **Lightning Fast Search**: Find any game instantly using a debounced 500ms search architecture.
- **Deep Game Details Modal**: Dive deep into screenshots, developer descriptions, release dates, genres, and ratings.
- **Favorites System**: Instantly save or remove games to your personalized vault, persisted locally via `localStorage`.
- **Compare Mode**: Select two games and launch a beautiful side-by-side modal to cross-reference stats.
- **Dynamic Filters & Sorting**: Filter down to PC, PlayStation, or Xbox and sort by top-rated or newest releases instantly.
- **Fully Responsive**: Carefully tuned CSS media queries ensure the layout gracefully degrades for tablets and mobile devices.

## 🛠 Tech Stack

- **HTML5**: Semantic tags, ARIA roles, scalable structure.
- **CSS3**: CSS Grid, Flexbox, Variable Tokens (`:root`), Glassmorphism filters, Custom Webkit Scrollbars.
- **Vanilla JS (ES6+)**: `async/await`, `fetch` API, DOM Manipulation, `Map` caching, Event Delegation, Closures (Debounce).
- **Zero Frameworks**: No React, No Tailwind, No jQuery. 100% browser native payload.

## 🚀 Local Setup

**Clone the repository**:
   ```bash
   git clone https://github.com/abhay150-code/Retro-Game-Vault.git
   cd Retro-Game-Vault
   ```


## 💡 Architecture Decisions

- **Frameworkless Challenge**: The objective was to produce a production-quality application minimizing toolchain overhead.
- **CSS Variables Design System**: All colors (e.g., `--accent-color: #00f0ff;`) and fonts are globally scoped to allow instant re-skinning in future updates.

## 🤝 Contributing
Open to active contributions. Create a new branch, push your feature to your fork, and open a Pull Request!
