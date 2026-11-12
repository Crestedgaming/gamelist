import type { FilterStatus } from "../types";

type GameFilterProps = {
  status: FilterStatus;
  onStatusChange: (status: FilterStatus) => void;
};



const GameFilter = ({ status, onStatusChange }: GameFilterProps) => {
  return (
    <div className="game-filter">
      <button
        type="button"
        onClick={() => onStatusChange("all")}
        disabled={status === "all"}
        
      >
        All
      </button>

      <button
        type="button"
        onClick={() => onStatusChange("playing")}
        disabled={status === "playing"}
      >
        Playing
      </button>
      <button
  type="button"
  onClick={() => onStatusChange("want")}
  disabled={status === "want"}
>
  Want to play
</button>

<button
  type="button"
  onClick={() => onStatusChange("completed")}
  disabled={status === "completed"}
>
  Completed
</button>

<button
  type="button"
  onClick={() => onStatusChange("dropped")}
  disabled={status === "dropped"}
>
  Dropped
</button>
    </div>
  );
};

export default GameFilter;