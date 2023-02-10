import styles from "./Scoreboard.module.scss";

import React from "react";
import { Link } from "react-router-dom";
import Timer from "../Timer/Timer";
import ScoreCounter from "../ScoreCounter/ScoreCounter";
import Buttons from "../UiElements/Buttons";

export default function Scoreboard() {
  return (
    <div className={styles.scoreboardWrapper}>
      <div className={styles.scoreboard}>
        <div className={styles.logo}>LOGO</div>
        <Timer />
        <ScoreCounter />
        <div className={styles.buttonsGroup}>
          <Link to="/tutorial">
            <Buttons text={"Hint, please"} />
          </Link>
          <Link to="/post-game">
            <Buttons text={"I'm done here"} />
          </Link>
        </div>
      </div>
    </div>
  );
}
