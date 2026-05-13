import Scoreboard from './Scoreboard';
import Level from './Level';
import '../styles/header.css'

function Header(props) {
  const {score, highscore, level} = props;

  return (
    <div id='header'>
      <div className='title'>Gwent: Memory Game</div>
      <Scoreboard score={score} highscore={highscore}></Scoreboard>
      <Level level={level}></Level>
    </div>
  );
}

export default Header;