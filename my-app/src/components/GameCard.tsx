import type {Game} from '../types';

type GameCardProps = {
  game: Game;
};

const GameCard = ({ game }: GameCardProps) => {
  return (
    <div className='game-card' key={game.id}>
      <div key={game.id}>
              <h2>{game.title}</h2>
              <p>{game.platform}</p>
              <p>Status: {game.status}</p>
              <p>Rating: {game.rating !== null ? game.rating : "N/A"}</p>
              <p>Notes: {game.notes !== null ? game.notes : "N/A"}</p>
              {game.coverUrl && <img src={game.coverUrl} alt={`${game.title} cover`} />}
            </div>
      

    </div>

  )
}

export default GameCard