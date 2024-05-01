import gameImage from "../assets/waldo-downtown.png";
import styles from "./Gameboard.module.css";
import Header from "../Header/Header";
import SelectionMenu from "../SelectionMenu/SelectionMenu";
import { useEffect, useState } from "react";

function Gameboard({ menuVisible, setMenuVisible, gameboardId }) {
  const [position, setPosition] = useState([0, 0]);
  const [coordinates, setCoordinates] = useState([0, 0]);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [timeString, setTimeString] = useState("00:00");

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 1000);
    }
    const minutes = Math.floor(time / 60);
    const seconds = (time > 59) ? time-(60*(Math.floor(time/60))) : time;
    setTimeString(
      `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`,
    );

    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  useEffect(() => {
    const apiURL = `${import.meta.env.VITE_API_URL}/gameboards/${gameboardId}/start`;
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
          setIsRunning(true)
        }
        return response.json();
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        getCurrentTime()
        console.log(error.message);
      });
  }, []);

  const getCurrentTime = async() => {
    const apiURL = `${import.meta.env.VITE_API_URL}/gameboards/${gameboardId}/current`;
    await fetch(apiURL, {
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
        }
        return response.json();
      })
      .then((response) => {
        const currentTime = Math.floor(response.time)
        setTime(currentTime)
        setIsRunning(true)
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  const getScore = async() => {
    const apiURL = `${import.meta.env.VITE_API_URL}/gameboards/${gameboardId}/end`;
    await fetch(apiURL, {
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
        }
        return response.json();
      })
      .then((response) => {
        console.log("Score: ", response.time)
        const currentTime = Math.floor(response.time)
        setTime(currentTime)
        setIsRunning(false)
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  useEffect(() => {
    console.log("Inner html position: ", position);
    console.log("Absolute coordinates: ", coordinates);
  }, [position, coordinates]);

  const handleClick = (e) => {
    const userClickX = e.pageX;
    const userClickY = e.pageY;

    const headerHeight = document.querySelector("#header").offsetHeight;
    const imageWidth = document.querySelector("#gameimage").offsetWidth;
    const imageHeight = document.querySelector("#gameimage").offsetHeight;

    const absCoordinateX = Math.round((userClickX / imageWidth) * 100);
    const absCoordinateY = Math.round(
      ((userClickY - headerHeight) / imageHeight) * 100,
    );
    setCoordinates([absCoordinateX, absCoordinateY]);

    setPosition([e.pageX - 38, e.pageY - 38]);
    setMenuVisible(true);
    getScore()
  };
  return (
    <div className={styles.gameboard}>
      <Header time={timeString} />
      <img
        src={gameImage}
        id="gameimage"
        className={styles.gameboard}
        onClick={handleClick}
      />
      <SelectionMenu
        menuVisible={menuVisible}
        setMenuVisible={setMenuVisible}
        position={position}
      />
    </div>
  );
}

export default Gameboard;
