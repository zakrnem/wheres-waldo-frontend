import { useState } from "react";
import "./App.css";
import Header from "./Header/Header";

function App() {
  const time = "00:00";

  return (
    <>
      <Header time={time} />
    </>
  );
}

export default App;
