# 🎮 Questlog

Questlog is a game tracking application built with **React, TypeScript and Vite**.

The application allows users to manage their personal game collection, track their progress and organize games based on their current playing status.

This project was developed as part of my Frontend Developer education at Medieinstitutet.

---

## 📸 Demo / Screenshots

**Live Demo:** https://gamelist-crested.vercel.app/

**GitHub Repository:** https://github.com/Crestedgaming/gamelist

![questlog Game Collection Header] (./Screenshot 2026-11-15 172955.png)

---

## 🚀 Features

- **Game List:** Display all games retrieved from the Questlog API.
- **Status Filtering:** Filter games by Want to Play, Playing, Completed or Dropped.
- **Game Details:** View individual games with information about platform, rating, status and notes.
- **Add Games:** Add new games through a form.
- **Update Games:** Change a game's playing status.
- **Delete Games:** Remove games from the collection.
- **Navigation:** Navigate between pages using React Router.
- **Error Handling:** Display loading indicators and error messages.
- **404 Page:** Display a custom page for unknown routes.

---

## 🛠️ Tech Stack

- **React** – Component-based user interface
- **TypeScript** – Static typing
- **Vite** – Development server and build tool
- **React Router** – Client-side routing
- **CSS** – Styling and responsive layout
- **Fetch API** – Communication with the external REST API

### API

The application uses the Questlog API:

`https://questlog-api.vercel.app/api/crested`

Supported operations:

| Method | Endpoint | Description |
|---|---|---|
| GET | `/games` | Retrieve all games |
| GET | `/games?status=playing` | Filter games by status |
| GET | `/games/:id` | Retrieve a specific game |
| POST | `/games` | Create a new game |
| PATCH | `/games/:id` | Update a game |
| DELETE | `/games/:id` | Delete a game |

---

## 📁 Project Structure

```text
src/
├── components/
│   ├── GameCard.tsx
│   ├── GameFilter.tsx
│   └── Header.tsx
├── layouts/
│   └── MainLayout.tsx
├── pages/
│   ├── AddGamePage.tsx
│   ├── GameDetailsPage.tsx
│   ├── GamesPage.tsx
│   └── NotFoundPage.tsx
├── api.ts
├── types.ts
├── App.tsx
└── main.tsx
```

### Components

- `GameCard` – Displays information about an individual game.
- `GameFilter` – Allows users to filter games by status.
- `Header` – Provides navigation between pages.
- `MainLayout` – Shared layout for application pages.

### Pages

- `GamesPage` – Displays the game collection and status filters.
- `GameDetailsPage` – Displays details and allows updating or deleting a game.
- `AddGamePage` – Contains the form for creating new games.
- `NotFoundPage` – Handles unknown routes.

---

## ⚙️ Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the application directory:

   ```bash
   cd my-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local address displayed in the terminal.

### Production Build

```bash
npm run build
```

---

## 🧠 Key Decisions

### Component-Based Architecture

The application is divided into reusable components and separate pages to keep the code organized and maintainable.

### State Management

React's `useState` is used to manage game data, selected filters, form inputs, loading states and errors.

### API Communication

The application uses `fetch()` and `useEffect()` to retrieve game information.

POST, PATCH and DELETE requests allow users to modify their game collection.

### Routing

React Router is used for navigation, including dynamic routes for individual game details.

---

## ♿ Accessibility

- Semantic HTML elements
- Labels for form inputs
- Descriptive alternative text for game cover images
- Navigation using React Router links
- Native buttons and form controls

---

## 📚 What I Learned

During this project, I practiced:

- Building a multi-page experience using React Router
- Working with dynamic URL parameters using `useParams()`
- Fetching and displaying data from a REST API
- Implementing CRUD operations
- Managing state with React hooks
- Creating controlled forms
- Handling asynchronous operations, loading states and errors
- Using TypeScript to define and manage data types

---

## 🔮 Future Improvements

Potential improvements include:

- More advanced game filtering and sorting
- Editing additional game information
- Improved visual design and animations
- Additional game statistics
- Search functionality

---

## 👤 Author

Created as part of the Frontend Developer program at Medieinstitutet.

**GitHub:** https://github.com/Crestedgaming
