import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./Leaderboard.module.css";
import userIcon from "../assets/user-svgrepo-com.svg";
import { useNavigate } from "react-router-dom";

function Leaderboard({ gameboardId }) {
  const navigate = useNavigate();
  const [scores, setScores] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const apiURL = `${import.meta.env.VITE_API_URL}/gameboards/${gameboardId}/scores`;
    fetch(apiURL, {
      method: "get",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`,
          );
        }
        return response.json();
      })
      .then((response) => {
        setScores(response);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const scoresLength = Object.keys(scores).length;
  return (
    <div className={styles.leaderboard}>
      <h1>Leaderboard</h1>
      {loading && scoresLength < 1 && (
        <div className={styles.loading}>
          <div className={styles.loader} />
          Loading
        </div>
      )}
      {scoresLength > 0 && (
        <div className={styles.container}>
          {Object.keys(scores).map((index) => {
            const key = uuidv4();
            const date = scores[index].date;
            const score = scores[index].seconds;
            const user = scores[index].user;
            return (
              <div key={key} className={styles.item}>
                <div className={styles.title}>
                  <img src={userIcon} className={styles.usericon} />
                  {user}
                </div>
                <div className={styles.date}>{date}</div>
                <div>Score: {score}</div>
              </div>
            );
          })}
        </div>
      )}
      <button onClick={() => navigate("/")}>Return to homepage</button>
    </div>
  );
}

export default Leaderboard;
