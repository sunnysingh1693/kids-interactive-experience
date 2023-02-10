import React from "react";
import styles from "./Buttons.module.scss";

export default function Buttons({ text, clickHandler }) {
  const buttonsClickHandler = (clickHandler) => {
    if(clickHandler === "timer") {
      let isMinZero = false;
      let countdownTimer = setInterval(() => {
        setSec((prevSecState) => {
          if (prevSecState == 0) {
            setMin((prevMinState) => {
              if (prevMinState == 0) {
                isMinZero = true;
                return 0;
              } else return prevMinState - 1;
            });
            if (isMinZero && prevSecState == 0) {
              clearInterval(countdownTimer);
              return 0;
            } else return seconds - 1;
          } else {
            return prevSecState - 1;
          }
        });
      }, 1000);
    }
  };

  return (
    <div>
      <button
        className={styles.button18}
        role="button"
        onClick={() => buttonsClickHandler(clickHandler)}
      >
        {text}
      </button>
    </div>
  );
}
