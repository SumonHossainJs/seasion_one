"user client";

import React, { useContext } from "react";
import styles from "./dark.module.css";
import { ThemeContext } from "@/app/Context/ThemeContext";

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div onClick={toggle} className={styles.container}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div className={`${styles.ball} ${mode === "light" ? styles.lightMode : styles.darkMode}`}></div>

    </div>
  );
};

export default DarkModeToggle;
