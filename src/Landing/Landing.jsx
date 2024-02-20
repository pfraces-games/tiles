import Game from './Game/Game.jsx';
import { LandingModule } from './Landing.module.css';

export default function Landing() {
  return (
    <div className={LandingModule}>
      <Game />
    </div>
  );
}
