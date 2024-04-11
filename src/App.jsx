import { useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Gameboard from "./Gameboard/Gameboard";
import Leaderboard from "./Leaderboard/Leaderboard";
import Homepage from "./Homepage/Homepage";
import ErrorPage from "./ErrorPage/ErrorPage";

function App() {
  const [time, setTime] = useState("00:00");
  const [error, setError] = useState({ state: false });

  return (
    <>
      <Outlet />

      <Routes errorElement={<ErrorPage error={error} setError={setError} />}>
        <Route path="" element={<Homepage />} />
        <Route path="/play" element={<Gameboard time={time} />} />
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
