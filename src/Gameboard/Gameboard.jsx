import gameImage from "../assets/waldo-downtown.png";
import MessageWindow from "../MessageWindow/MessageWindow";
import styles from "./Gameboard.module.css";
import Header from "../Header/Header";

function Gameboard({ message, setMessage, time }) {
  return (
    <>
      <Header time={time} />
      <MessageWindow message={message} setMessage={setMessage} />
      {/* <img src={gameImage} className={styles.gameboard} /> */}
    </>
  );
}

export default Gameboard;
