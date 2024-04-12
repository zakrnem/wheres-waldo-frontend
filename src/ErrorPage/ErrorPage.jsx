import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ErrorPage.module.css";

function ErrorPage({ error, setError }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!error.state) {
      setError({
        title: "Oops!",
        message:
          "The page you're looking for doesn't seem to exist. Please check the URL and try again.",
        state: true,
      });
    }
  });

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className={styles.error}>
      {error.state && (
        <div className={styles.window}>
          <h1>{error.title}</h1>
          <p>{error.message}</p>
          <button onClick={handleClick}>Return to homepage</button>
        </div>
      )}
    </div>
  );
}

export default ErrorPage;
