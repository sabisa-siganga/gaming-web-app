import React from "react";
import styles from "./Banner.module.scss";
import Button from "../Button/Button";
import LineStrip from "../LineStrip/LineStrip";

// Banner component responsible for rendering the main banner section of the webpage
const Banner = () => {
  return (
    <div className={styles.banner}>
      {/* Circle element */}
      <div className={styles.circle} />

      {/* Heading section with title and description */}
      <div className={styles.heading}>
        <h1>
          Let your mind <span>explore</span> new world
        </h1>
        <p>
          Playing electronic games, whether through consoles, computers, mobile
          phones or another medium altogether. Gaming is a nuanced term that
          suggests regular gameplay, possibly as a hobby.
        </p>

        {/* Button section with "BUY NOW" and "PLAY NOW" buttons */}
        <div className={styles.btns}>
          <Button variant="background" className={styles.buyNow}>
            BUY NOW
          </Button>
          <Button variant="outline" className={styles.playNow}>
            PLAY NOW
          </Button>
        </div>

        {/* Statistics section displaying various stats */}
        <div className={styles.statsContainer}>
          <div>
            <div className={styles.stat}>300</div>
            <div className={styles.descr}>Unique Style</div>
          </div>
          <div>
            <div className={`${styles.stat} ${styles.statBlend}`}>
              200 <span>+</span>
            </div>
            <div className={styles.descr}>Project Finished</div>
          </div>
          <div>
            <div className={styles.stat}>
              500 <span>+</span>
            </div>
            <div className={styles.descr}>Happy Customer</div>
          </div>
        </div>
      </div>

      {/* Artboard container*/}
      <div className={styles.artboardCont} />

      {/* Line strip component  */}
      <LineStrip hasBackground rotate className={styles.lineStrip} />
    </div>
  );
};

export default Banner;
