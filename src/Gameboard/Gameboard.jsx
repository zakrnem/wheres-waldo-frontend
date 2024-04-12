import gameImage from "../assets/waldo-downtown.png";
import styles from "./Gameboard.module.css";
import Header from "../Header/Header";
import SelectionMenu from "../SelectionMenu/SelectionMenu";

function Gameboard({ message, setMessage, time }) {
  return (
    <div className={styles.gameboard}>
      <Header time={time} />
      {/* <img src={gameImage} className={styles.gameboard} /> */}
      <SelectionMenu />
    </ div>
  );
}

export default Gameboard;
