import MenuCharacter from "./MenuCharacter";
import styles from "./SelectionMenu.module.css";
import { v4 as uuidv4 } from "uuid";

function SelectionMenu({
  menuVisible,
  position,
  setCharacterId,
  characters,
  inverseMenu,
}) {
  return (
    <>
      {menuVisible && (
        <div
          className={styles.selmenu}
          style={{
            flexDirection: inverseMenu ? "column-reverse" : "column",
            top: position[1],
            left: position[0],
          }}
        >
          <div className={styles.circle}></div>
          <div className={styles.characters}>
            {Object.keys(characters).map((item) => {
              const key = uuidv4();
              const image = `./${characters[item].img}`;
              const name = characters[item].name;
              const id = characters[item]._id;
              return (
                <div key={key}>
                  <MenuCharacter
                    image={image}
                    name={name}
                    id={id}
                    styles={styles}
                    setCharacterId={setCharacterId}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default SelectionMenu;
