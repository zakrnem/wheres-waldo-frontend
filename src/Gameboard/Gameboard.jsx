import gameImage from "../assets/waldo-downtown.png";
import styles from "./Gameboard.module.css";
import Header from "../Header/Header";
import SelectionMenu from "../SelectionMenu/SelectionMenu";
import { useState } from "react";

function Gameboard({ time, menuVisible, setMenuVisible }) {
  const [position, setPosition] = useState([0, 0]);
  const handleClick = (e) => {
    console.log(e.pageX, e.pageY)
    setPosition([e.pageX-38, e.pageY-38]);
    setMenuVisible(true);
  };
  return (
    <div className={styles.gameboard}>
      <Header time={time} />
      <img src={gameImage} className={styles.gameboard} onClick={handleClick} />
      <SelectionMenu
        menuVisible={menuVisible}
        setMenuVisible={setMenuVisible}
        position={position}
      />
    </div>
  );
}

export default Gameboard;
