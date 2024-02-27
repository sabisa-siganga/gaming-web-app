import React from "react";
// import { ReactComponent as Artboard } from "../../assets/artboard.svg";
// import board from "../../assets/board.png";
import styles from "./Banner.module.scss";
import Button from "../Button/Button";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.heading}>
        <h1>Let your mind explore new world</h1>
        <p>
          Playing electronic games, whether through consoles, computers, mobile
          phones or another medium altogether. Gaming is a nuanced term that
          suggests regular gameplay, possibly as a hobby.
        </p>
        <div className={styles.btns}>
          <Button title="BUY NOW" />
          <Button title="PLAY NOW" />
        </div>

        <div className={styles.statsContainer}>
          <div className="first-one">
            <div className={styles.stat}>300+</div>
            <div className={styles.descr}>Unique Style</div>
          </div>
          <div className="sec-one">
            <div className={styles.stat}>200+</div>
            <div className={styles.descr}>Project Finished</div>
          </div>
          <div className="third-one">
            <div className={styles.stat}>500+</div>
            <div className={styles.descr}>Happy Customer</div>
          </div>
        </div>
      </div>

      <div className={styles.artboardCont}>
        {/* <Artboard className={styles.artboard} /> */}
        {/* <img src={board} alt="board" /> */}
      </div>
    </div>
  );
};

export default Banner;
