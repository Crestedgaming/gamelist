import type { GamerStatus } from '../types';

type GameFilterProps = {
  status: GamerStatus;
  onStatusChange: (status: GamerStatus) => void;
};

const GameFilter: React.FC<GameFilterProps> = ({ status, onStatusChange }) => {
  return (
    <div>GameFilter</div>
  )
}

export default GameFilter