import MenuCharacter from "./MenuCharacter";
import styles from "./SelectionMenu.module.css";
import waldo from "../assets/waldo.png";
import wenda from "../assets/wenda.png";
import odlaw from "../assets/odlaw.png";
import wizard from "../assets/wizard.png";

function SelectionMenu({ menuVisible, setMenuVisible, position }) {
  return (
    <>
      {menuVisible && (
        <div className={styles.selmenu} style={{position: 'absolute', top: position[1], left: position[0]}}>
          <div className={styles.circle}></div>
          <MenuCharacter image={waldo} name={"Waldo"} styles={styles} />
          <MenuCharacter image={wenda} name={"Wenda"} styles={styles} />
          <MenuCharacter image={odlaw} name={"Odlaw"} styles={styles} />
          <MenuCharacter image={wizard} name={"Wizard"} styles={styles} />
        </div>
      )}
    </>
  );
}

export default SelectionMenu;
