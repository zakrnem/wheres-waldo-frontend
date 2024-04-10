import { useState } from "react";
import "./App.css";
import Header from "./Header/Header";
import Body from "./Body/Body";

function App() {
  const time = "00:00";

  return (
    <>
      <Header time={time} />
      <Body />
    </>
  );
}

export default App;
