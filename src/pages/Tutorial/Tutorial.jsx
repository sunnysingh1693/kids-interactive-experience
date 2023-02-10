import React from "react";
import Scoreboard from "../../components/Scoreboard/Scoreboard";
import styles from "./Tutorial.module.scss";

export default function Tutorial() {
  return (
    <div className={styles.tutorialWrapper}>
      <h1>Tutorial</h1>
      <Scoreboard />
    </div>
  );
}
