import styles from "./GameoverWindow.module.css";
import { useNavigate } from "react-router-dom";

function GameoverWindow({ score, gameover }) {
  const navigate = useNavigate();
  const handleHomepage = () => {
    console.log("homepage");
    navigate("/");
  };
  const handleLeaderboard = () => {
    console.log("leaderboard");
    navigate("/leaderboard");
  };
  return (
    <div>
      {gameover && (
        <div className={styles.window}>
          <h1>Congratulations! </h1>
          <p>Your score is: {score}</p>
          <div className={styles.buttons}>
            <button onClick={handleHomepage}>Homepage</button>
            <button onClick={handleLeaderboard}>Best scores</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default GameoverWindow;
