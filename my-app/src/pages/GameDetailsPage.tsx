import { useParams } from "react-router";
import { useEffect, useState } from "react";
import type { Game, GamerStatus } from "../types";
import { API_URL } from "../api";
import { useNavigate } from "react-router";

const GameDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [selectedStatus, setSelectedStatus] = useState<GamerStatus>("want");
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
        setSelectedStatus(data.status);

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

  const handleUpdateStatus = async () => {
  try {
    const response = await fetch(`${API_URL}/games/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: selectedStatus,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to update game status");
    }

    const updatedGame: Game = await response.json();
    setGame(updatedGame);

  } catch (error) {
    console.error("Error updating game status:", error);
  }
};

const handleDeleteGame = async () => {
  const confirmed = window.confirm(
    "Are you sure you want to delete this game"
  );
  if (!confirmed) return;
  try {
    const response = await fetch(`${API_URL}/games/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete game");
    }

    const deletedGame: Game = await response.json();
    console.log("Game deleted successfully:", deletedGame);
    setGame(null);
    navigate("/");

  } catch (error) {
    console.error("Error deleting game:", error);
  }
};

  return (
    <>
      {isLoading && <p>Loading game details...</p>}
      {error && <p>{error}</p>}

      {!isLoading && !error && game && (
        <div>
          <h2>{game.title}</h2>
          <p>Platform: {game.platform}</p>
          <p>Status: {game.status}</p>
          <p>Rating: {game.rating ?? "Not rated"}</p>
          <p>Notes: {game.notes || "No notes available"}</p>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value as GamerStatus)}
          >
            <option value="want">Want to Play</option>
            <option value="playing">Playing</option>
            <option value="completed">Completed</option>
            <option value="dropped">Dropped</option>
          </select>
          <button type="button" onClick={handleUpdateStatus}>
            Save Status
          </button>
          <button type="button" onClick={handleDeleteGame}>
            Delete Game
          </button>
        </div>
      )}
    </>
  );
};

export default GameDetailsPage;