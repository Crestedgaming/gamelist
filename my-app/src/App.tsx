import { Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLAyout";
import GamesPage from "./pages/GamesPage";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<GamesPage />} />
      </Route>
    </Routes>
  );
}

export default App;
