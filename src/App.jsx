import { useEffect, useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Gameboard from "./Gameboard/Gameboard";
import Leaderboard from "./Leaderboard/Leaderboard";
import Homepage from "./Homepage/Homepage";
import ErrorPage from "./ErrorPage/ErrorPage";

function App() {
  const [error, setError] = useState({ state: false });
  const [menuVisible, setMenuVisible] = useState(false);
  const [gameboardId, setGameboardId] = useState("");

  useEffect(() => {
    const apiURL = `${import.meta.env.VITE_API_URL}/gameboards/`
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
        const firstGameboard = response[0]._id
        setGameboardId(firstGameboard)
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [])

  return (
    <>
      <Outlet />

      <Routes errorElement={<ErrorPage error={error} setError={setError} />}>
        <Route path="" element={<Homepage />} />
        <Route
          path="/play"
          element={
            <Gameboard
              menuVisible={menuVisible}
              setMenuVisible={setMenuVisible}
              gameboardId={gameboardId}
            />
          }
        />
        <Route
          path="/leaderboard"
          element={<Leaderboard gameboardId={gameboardId} />}
        />
        <Route
          path="*"
          element={<ErrorPage error={error} setError={setError} />}
        />
      </Routes>
    </>
  );
}

export default App;
