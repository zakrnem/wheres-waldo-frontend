import gameImage from "../assets/waldo-downtown.png";
import styles from "./Gameboard.module.css";
import Header from "../Header/Header";
import SelectionMenu from "../SelectionMenu/SelectionMenu";
import { useEffect, useState } from "react";
import { useStopwatch, useTimer } from 'react-timer-hook';

function Gameboard({ time, menuVisible, setMenuVisible }) {
  const [position, setPosition] = useState([0, 0]);
  const [coordinates, setCoordinates] = useState([0,0])
  const gameboardId = "66244310eee0531455982e73"

  const {
    totalSeconds,
    seconds,
    minutes,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useStopwatch({ autoStart: false });

  const timeVal = `${minutes}:${seconds}`

  useEffect(() => {
    const apiURL = `${import.meta.env.VITE_API_URL}/gameboards/${gameboardId}/start`
    fetch(apiURL, {
      method: "post",
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
        } else {
          start()
        }
        return response.json()
      })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error.message);
      })
  }, [])
  
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
      <Header time={timeVal} />
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
