import { useParams } from "react-router";
import { useEffect, useState } from "react";
import type { Game } from "../types";
import { API_URL } from "../api";

const GameDetailsPage = () => {
  const { id } = useParams();

  const [game, setGame] = useState<Game | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        setIsLoading(true);
        setError(null);
        setGame(null);

        const response = await fetch(`${API_URL}/games/${id}`);

        if (!response.ok) {
          throw new Error("Failed to fetch game details");
        }

        const data: Game = await response.json();
        setGame(data);

      } catch {
        setError("Failed to fetch game details");
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchGameDetails();
    }
  }, [id]);

  return (
    <>
      {!isLoading && !error && game && (
        <div>
          <h2>{game.title}</h2>
          <p>Platform: {game.platform}</p>
          <p>Status: {game.status}</p>
          <p>Rating: {game.rating ?? "Not rated"}</p>
          <p>Notes: {game.notes || "No notes available"}</p>
        </div>
      )}
    </>
  );
};

export default GameDetailsPage;