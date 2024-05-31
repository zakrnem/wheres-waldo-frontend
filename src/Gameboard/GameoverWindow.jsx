import styles from "./GameoverWindow.module.css";
import { useNavigate } from "react-router-dom";

function GameoverWindow({ score, gameover, saveScore }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    if (username !== "") {
      saveScore(username);
      navigate("/leaderboard");
    } else {
      const message = document.getElementById("message");
      message.style.fontWeight = "bold";
      message.style.color = "red";
    }
  };

  return (
    <div>
      {gameover && (
        <div className={styles.window}>
          <div className={styles.title}>Congratulations! </div>
          <p>Your score is: {score}</p>
          <form className={styles.form}>
            <label htmlFor="username" id="message">
              Please enter a username:{" "}
            </label>
            <input
              type="text"
              id="username"
              placeholder="Your username"
            ></input>
            <button onClick={handleSubmit}>Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default GameoverWindow;
