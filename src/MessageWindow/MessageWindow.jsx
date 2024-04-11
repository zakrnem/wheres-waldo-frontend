import styles from "./MessageWindow.module.css";

function MessageWindow({ message, setMessage }) {
  return (
    <div className={message.state ? styles.active : ""}>
      {message.state && (
        <div className={styles.window}>
          <h1>{message.title}</h1>
          <p>{message.message}</p>
        </div>
      )}
    </div>
  );
}

export default MessageWindow;
