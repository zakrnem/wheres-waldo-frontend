import Gameboard from "../Gameboard/Gameboard";
import styles from "./Body.module.css";

function Body({ message, setMessage }) {
  return (
    <div className={styles.body}>
      <Gameboard message={message} setMessage={setMessage} />
    </div>
  );
}

export default Body;
