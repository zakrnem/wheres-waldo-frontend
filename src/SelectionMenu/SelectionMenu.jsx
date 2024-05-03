import MenuCharacter from "./MenuCharacter";
import styles from "./SelectionMenu.module.css";
import waldo from "../assets/waldo.png";
import wenda from "../assets/wenda.png";
import odlaw from "../assets/odlaw.png";
import wizard from "../assets/wizard.png";

function SelectionMenu({
  menuVisible,
  setMenuVisible,
  position,
  setCharacterId,
}) {
  return (
    <>
      {menuVisible && (
        <div
          className={styles.selmenu}
          style={{ position: "absolute", top: position[1], left: position[0] }}
        >
          <div className={styles.circle}></div>
          <MenuCharacter
            image={waldo}
            name={"Waldo"}
            id={"6632d6710c27cd1c7ff4df09"}
            styles={styles}
            setCharacterId={setCharacterId}
          />
          <MenuCharacter
            image={wenda}
            name={"Wenda"}
            id={"6632d6710c27cd1c7ff4df0a"}
            styles={styles}
            setCharacterId={setCharacterId}
          />
          <MenuCharacter
            image={odlaw}
            name={"Odlaw"}
            id={"6632d6710c27cd1c7ff4df0b"}
            styles={styles}
            setCharacterId={setCharacterId}
          />
          <MenuCharacter
            image={wizard}
            name={"Wizard"}
            id={"6632d6710c27cd1c7ff4df0c"}
            styles={styles}
            setCharacterId={setCharacterId}
          />
        </div>
      )}
    </>
  );
}

export default SelectionMenu;
