import React from "react";
import styles from "./GameCarousel.module.scss";

const GameCarousel = () => {
  return (
    <div>
      <h2 className={styles.title}>
        CHOOSE YOUR <span className="">FAVORITE</span> GAMES
      </h2>
      <p>
        Offer sneak peeks and previews of upcoming games, including trailers,
        screenshots, and information about release.
      </p>
    </div>
  );
};

export default GameCarousel;
