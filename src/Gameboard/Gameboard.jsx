import gameImage from "../assets/waldo-downtown.png";
import styles from "./Gameboard.module.css";
import Header from "../Header/Header";

function Gameboard({ message, setMessage, time }) {
  return (
    <>
      <Header time={time} />
      <img src={gameImage} className={styles.gameboard} />
    </>
  );
}

export default Gameboard;
