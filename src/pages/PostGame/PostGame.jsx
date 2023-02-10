import React from "react";
import { Link } from "react-router-dom";
import Buttons from "../../components/UiElements/Buttons";
import styles from "./PostGame.module.scss";

export default function PostGame() {
  return (
    <div className={styles.postGame}>
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <div className="titleGroup">
            <h1 className="title1">Hunt for</h1>
            <h1 className="title2">loose change</h1>
          </div>
          <h2 className="subTitle">
            Time’s up! [That sure went by fast.] You’ve found a lot of points,
            had some fun, and got to explore the city. How’d you stack up?
          </h2>
          <div className={styles.instructionGroup}>
            <div className={styles.instruction}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z" />
              </svg>
              <p>
                Find points with different values hidden throughout the city.
                Some are hidden and some are out in the open.
              </p>
            </div>
            <div className={styles.instruction}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M50.7 58.5L0 160H208V32H93.7C75.5 32 58.9 42.3 50.7 58.5zM240 160H448L397.3 58.5C389.1 42.3 372.5 32 354.3 32H240V160zm208 32H0V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192z" />
              </svg>
              <p>
                Find extra bonus items! Secret spots are hidden in the city and
                will earn you more points. Yes!
              </p>
            </div>
          </div>
          <h2 className={styles.totalHaulText}>Total haul</h2>{" "}
          <h1 className={styles.pointsText}>525 points</h1>
          <h2>
            Not bad! Do you think you can do better? Let&rsquo;s try to beat
            your high score.
          </h2>
          <div className={styles.buttonsGroup}>
            <Link to="/tutorial">
              <Buttons text={"Play Again"} />
              {/* <button className={styles.playAgainBtn}>Play Again</button> */}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
