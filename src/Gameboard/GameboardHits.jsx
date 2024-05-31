import styles from "./GameboardHits.module.css";
import { v4 as uuidv4 } from "uuid";

function GameboardHits({ hits }) {
  return (
    <div className={styles.hits}>
      {hits.map((hit) => {
        const key = uuidv4();
        return (
          <div
            key={key}
            className={styles.hit}
            style={{
              top: hit[1],
              left: hit[0],
            }}
          ></div>
        );
      })}
    </div>
  );
}

export default GameboardHits;
