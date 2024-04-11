import { useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Gameboard from "./Gameboard/Gameboard";
import Leaderboard from "./Leaderboard/Leaderboard";
import Homepage from "./Homepage/Homepage";
import MessageWindow from "./MessageWindow/MessageWindow";

function App() {
  const [time, setTime] = useState("00:00");
  const [message, setMessage] = useState({
    title: "Title",
    message: "Message lorem ipsum dolorum",
    state: true,
  });

  return (
    <>

      <Outlet />

      <Routes>
        <Route path="" element={<Homepage />} />
        <Route path="/play" element={<Gameboard time={time} />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="*" element={<MessageWindow />} />
      </Routes>
    </>
  );
}

export default App;
