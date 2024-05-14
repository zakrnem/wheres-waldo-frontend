import styles from "./Header.module.css";
import Character from "./Character";
import Logo from "./Logo";

function Header({ time }) {
  return (
    <div className={styles.header} id="header">
      <Logo styles={styles} />
      <div className={styles.time}>{time}</div>

      <div className={styles.characters}>
        <Character name={"Waldo"} image={"./waldo.png"} />
        <Character name={"Wenda"} image={"./wenda.png"} />
        <Character name={"Odlaw"} image={"./odlaw.png"} />
        <Character name={"Wizard"} image={"./wizard.png"} />
      </div>
    </div>
  );
}

export default Header;
