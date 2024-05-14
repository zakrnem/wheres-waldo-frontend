import { Link, useNavigate } from "react-router-dom";

function Logo({ styles }) {
  const navigate = useNavigate();
  return (
    <div className={styles.logo}>
      <Link to="/" className={styles.title}>
        Where's Wally?
      </Link>
      <div className={styles.rules}>
        Find all the characters as soon as possible
      </div>
    </div>
  );
}

export default Logo;
