import Gameboard from "../Gameboard/Gameboard";
import styles from "./Body.module.css";

function Body() {
  return (
    <div className={styles.container}>
      <Gameboard />
    </div>
  );
}

export default Body;
