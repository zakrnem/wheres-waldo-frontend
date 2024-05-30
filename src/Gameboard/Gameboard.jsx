import gameImage from "../assets/waldo-downtown.png";
import styles from "./Gameboard.module.css";
import Header from "../Header/Header";
import SelectionMenu from "../SelectionMenu/SelectionMenu";
import { useEffect, useState } from "react";
import GameoverWindow from "./GameoverWindow";

function Gameboard({
  menuVisible,
  setMenuVisible,
  gameboardId,
  characters,
  getGameboardId,
}) {
  const [position, setPosition] = useState([0, 0]);
  const [coordinates, setCoordinates] = useState([0, 0]);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [timeString, setTimeString] = useState("00:00");
  const [characterId, setCharacterId] = useState("");
  const [gameover, setGameover] = useState(false);
  const [inverseMenu, setInverseMenu] = useState(false); 

  // Stopwatch
  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 1000);
    }
    const minutes = Math.floor(time / 60);
    const seconds = time > 59 ? time - 60 * Math.floor(time / 60) : time;
    setTimeString(
      `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`,
    );

    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  // Start stopwatch request
  useEffect(() => {
    if (gameboardId === "") {
      getGameboardId();
    } else {
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
            setIsRunning(true);
          }
          return response.json();
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          getCurrentTime();
          console.log(error.message);
        });
    }
  }, [gameboardId]);

  // Sets timer on page refresh
  const getCurrentTime = async () => {
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
        const currentTime = Math.floor(response.time);
        setTime(currentTime);
        setIsRunning(true);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

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

    let menuOffset = 38;
    if (absCoordinateY > 60) {
      setInverseMenu(true);
      menuOffset = 405;
    } else {
      setInverseMenu(false);
    }

    setCoordinates([absCoordinateX, absCoordinateY]);
    setPosition([e.pageX - 38, e.pageY - menuOffset]);
    !gameover ? setMenuVisible(true) : setMenuVisible(false);
  };

  useEffect(() => {
    if (characterId !== "") sendCoordinates();
  }, [characterId]);

  const sendCoordinates = async () => {
    const apiURL = `${import.meta.env.VITE_API_URL}/gameboards/${gameboardId}/move`;
    const data = { coordinates, character: characterId };
    fetch(apiURL, {
      method: "post",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`,
          );
        }
        if (response.status === 201) {
          // Gameover status code
          executeGameover();
        }
        return response.json();
      })
      .then((response) => {
        console.log("sendCoordinates response ", response);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // Gameover callbacks
  const executeGameover = async () => {
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
        const currentTime = Math.floor(response.time);
        setGameover(true);
        setMenuVisible(false);
        setTime(currentTime);
        setIsRunning(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const saveScore = async (user) => {
    const apiURL = `${import.meta.env.VITE_API_URL}/gameboards/${gameboardId}/scores`;
    fetch(apiURL, {
      method: "post",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ time, user }),
    })
      .then((response) => {
        if (response.status === 400) {
          throw new Error(`The coordinates didn't match`);
        }
        if (response.status === 401) {
          throw new Error(`The gameboard doesn't match the session cookie`);
        }
        return response.json();
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className={styles.gameboard}>
      <Header time={timeString} />
      <GameoverWindow
        score={time}
        gameover={gameover}
        saveScore={saveScore}
      />
      <img
        src={gameImage}
        id="gameimage"
        className={styles.gameboard}
        onClick={handleClick}
      />
      <SelectionMenu
        menuVisible={menuVisible}
        position={position}
        coordinates={coordinates}
        setCharacterId={setCharacterId}
        characters={characters}
        inverseMenu={inverseMenu}
      />
    </div>
  );
}

export default Gameboard;
