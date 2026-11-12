import { useState, useEffect } from "react";
import type { FilterStatus, Game } from "../types";
import { API_URL } from "../api";
import GameCard from "../components/GameCard";
import GameFilter from "../components/GameFilter";



const GamesPage = () => {
  const [status, setStatus] = useState<FilterStatus>('all');
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchGames = async () => {
      try {
        setIsLoading(true);
        setError(null);
const url =
  status === "all"
    ? `${API_URL}/games`
    : `${API_URL}/games?status=${status}`;

const response = await fetch(url);
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

    };

    fetchGames();
  }, [status]);

return (
  <div>
    <h1>My Questlog</h1>

    <GameFilter
      status={status}
      onStatusChange={setStatus}
    />

    {isLoading && <p>Loading games...</p>}
    {error && <p>{error}</p>}

    {!isLoading && !error && (
      <div>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
        {games.length === 0 && <p>No games found.</p>}
      </div>
    )}
  </div>
);
};

export default GamesPage;