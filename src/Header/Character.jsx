import styles from "./Header.module.css";

function character({ name, image }) {
  return (
    <div className={styles.character}>
      <img src={image} />
      <div>{name}</div>
    </div>
  );
}

export default character;
