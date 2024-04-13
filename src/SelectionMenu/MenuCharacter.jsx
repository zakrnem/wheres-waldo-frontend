import { useEffect } from "react";

function MenuCharacter({ image, name, styles }) {
  const handleClick = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <button
      id={name.toLowerCase()}
      className={styles.mcharacter}
      onClick={handleClick}
    >
      <img src={image} />
      <div>{name}</div>
    </button>
  );
}

export default MenuCharacter;
