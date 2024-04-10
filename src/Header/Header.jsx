import styles from "./Header.module.css";
import waldo from "../assets/waldo.png";
import wenda from "../assets/wenda.png";
import odlaw from "../assets/odlaw.png";
import wizard from "../assets/wizard.png";
import Character from "./Character";

function Header({ time }) {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <a href="https://github.com/zakrnem/" className={styles.title}>Where's Wally?</a>
        <div className={styles.rules}>
          Find all the characters as soon as possible
        </div>
      </div>
      <div className={styles.time}>{time}</div>

      <div className={styles.characters}>
        <Character name={"Waldo"} image={waldo} />
        <Character name={"Wenda"} image={wenda} />
        <Character name={"Odlaw"} image={odlaw} />
        <Character name={"Wizard"} image={wizard} />
      </div>
    </div>
  );
}

export default Header;
