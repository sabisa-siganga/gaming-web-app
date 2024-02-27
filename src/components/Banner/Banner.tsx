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
        <div className="btns">
          <Button title="BUY NOW" />
          <Button title="PLAY NOW" />
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
