import { useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Gameboard from "./Gameboard/Gameboard";
import Leaderboard from "./Leaderboard/Leaderboard";
import Homepage from "./Homepage/Homepage";
import ErrorPage from "./ErrorPage/ErrorPage";

function App() {
  const [error, setError] = useState({ state: false });
  const [menuVisible, setMenuVisible] = useState(false);
  const [gameboardId, setGameboardId] = useState('66244310eee0531455982e73')

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
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route
          path="*"
          element={<ErrorPage error={error} setError={setError} />}
        />
      </Routes>
    </>
  );
}

export default App;
