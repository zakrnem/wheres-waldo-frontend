import { useEffect } from "react";

function MenuCharacter({ image, name, id, styles, setCharacterId }) {
  return (
    <button
      id={id}
      className={styles.mcharacter}
      onClick={() => setCharacterId(id)}
    >
      <img src={image} />
      <div>{name}</div>
    </button>
  );
}

export default MenuCharacter;
