import gameImage from "../assets/waldo-downtown.png";
import styles from "./Gameboard.module.css";

function Gameboard() {
  return (
    <>
      <img src={gameImage} className={styles.gameboard} />
    </>
  );
}

export default Gameboard;
