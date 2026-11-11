import { useState, useEffect } from "react";
import type { Game } from "../types";
import { API_URL } from "../api";
import GameCard from "../components/GameCard";

const GamesPage = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchGames = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${API_URL}/games`);
        if (!response.ok) {
        throw new Error("Failed to fetch games");
        }
        const data = await response.json();
        console.log ("API response:", data);
        setGames(data);
      } catch {
        setError("Failed to fetch games");
      } finally {
        setIsLoading(false);
      }
      console.log("Fetching from:", `${API_URL}/games`);

      const response = await fetch(`${API_URL}/games`);

      console.log("HTTP status:", response.status);
    };

    fetchGames();
  }, []);

  return (
    <div>
      <h1>My Questlog</h1>
      {isLoading && <p>Loading games...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && (
        <div>
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      )}
    </div>
  );
};

export default GamesPage;