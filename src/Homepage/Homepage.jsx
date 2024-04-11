import Logo from "../Header/Logo";
import styles from "./Homepage.module.css";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/play");
  };

  return (
    <div className={styles.home}>
      <Logo styles={styles} />
      <button className={styles.button} onClick={handleClick}>
        Play Now
      </button>
    </div>
  );
}

export default Homepage;
