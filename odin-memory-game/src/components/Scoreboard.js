function Scoreboard(props) {
  const {score, highscore} = props;

  return (
    <div>
      <div>Score: {score} | Highscore: {highscore}</div>
    </div>
  );
}

export default Scoreboard;