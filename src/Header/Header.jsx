import styles from "./Header.module.css";
import waldo from "../assets/waldo.png";
import wenda from "../assets/wenda.png";
import odlaw from "../assets/odlaw.png";
import wizard from "../assets/wizard.png";
import Character from "./Character";
import Logo from "./Logo";

function Header({ time }) {
  return (
    <div className={styles.header}>
      <Logo styles={styles} />
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
