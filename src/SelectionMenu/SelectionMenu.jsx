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
            id={"66244310eee0531455982e75"}
            styles={styles}
            setCharacterId={setCharacterId}
          />
          <MenuCharacter
            image={wenda}
            name={"Wenda"}
            id={"66244310eee0531455982e76"}
            styles={styles}
            setCharacterId={setCharacterId}
          />
          <MenuCharacter
            image={odlaw}
            name={"Odlaw"}
            id={"66244310eee0531455982e77"}
            styles={styles}
            setCharacterId={setCharacterId}
          />
          <MenuCharacter
            image={wizard}
            name={"Wizard"}
            id={"66244310eee0531455982e78"}
            styles={styles}
            setCharacterId={setCharacterId}
          />
        </div>
      )}
    </>
  );
}

export default SelectionMenu;
