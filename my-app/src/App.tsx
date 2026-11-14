import { Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLAyout";
import GamesPage from "./pages/GamesPage";
import GameDetailsPage from "./pages/GameDetailsPage";
import AddGamePage from "./pages/AddGamePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/add-game" element={<AddGamePage />} />
        <Route path="/" element={<GamesPage />} />
        <Route path="/games/:id" element={<GameDetailsPage />} />
        <Route path="/games/" element={<GamesPage />} />
        <Route path="*" element={<NotFoundPage/>} />
      </Route>
    </Routes>
  );
}

export default App;
