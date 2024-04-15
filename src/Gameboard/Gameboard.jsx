import gameImage from "../assets/waldo-downtown.png";
import styles from "./Gameboard.module.css";
import Header from "../Header/Header";
import SelectionMenu from "../SelectionMenu/SelectionMenu";
import { useEffect, useState } from "react";

function Gameboard({ time, menuVisible, setMenuVisible }) {
  const [position, setPosition] = useState([0, 0]);
  const [coordinates, setCoordinates] = useState([0,0])

  useEffect(() => {
    console.log("Inner html position: ", position)
    console.log("Absolute coordinates: ", coordinates)
  }, [position, coordinates])

  const handleClick = (e) => {
    const userClickX = e.pageX
    const userClickY = e.pageY

    const headerHeight = document.querySelector('#header').offsetHeight;
    const imageWidth = document.querySelector('#gameimage').offsetWidth
    const imageHeight = document.querySelector('#gameimage').offsetHeight

    const absCoordinateX = Math.round((userClickX/imageWidth)*100)
    const absCoordinateY = Math.round(( (userClickY - headerHeight ) / imageHeight) * 100)
    setCoordinates([absCoordinateX, absCoordinateY])

    setPosition([e.pageX-38, e.pageY-38]);
    setMenuVisible(true);
  };
  return (
    <div className={styles.gameboard}>
      <Header time={time} />
      <img src={gameImage} id="gameimage" className={styles.gameboard} onClick={handleClick} />
      <SelectionMenu
        menuVisible={menuVisible}
        setMenuVisible={setMenuVisible}
        position={position}
      />
    </div>
  );
}

export default Gameboard;
