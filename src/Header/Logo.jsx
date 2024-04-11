function Logo({ styles }) {
  return (
    <div className={styles.logo}>
      <a href="https://github.com/zakrnem/" className={styles.title}>
        Where's Wally?
      </a>
      <div className={styles.rules}>
        Find all the characters as soon as possible
      </div>
    </div>
  );
}

export default Logo;
