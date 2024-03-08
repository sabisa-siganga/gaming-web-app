import React from "react";
import styles from "./GameCard.module.scss";
import Button from "../Button/Button";

interface Props {
  title: string;
  company: string;
  image: string;
  name: string;
  game: string;
}

const GameCard = (props: Props) => {
  // props destructuring
  const { title, company, image, name, game } = props;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardImg}>
        <img src={game} alt="Game" />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.userInfo}>
        <img src={image} alt="Player" />
        <div className={styles.details}>
          <div className={styles.name}>{name}</div>
          <div className={styles.company}>{company}</div>
        </div>
      </div>
      <div className={styles.cardBtn}>
        <Button variant="background" className={styles.liveDemoBtn}>
          LIVE DEMO
        </Button>
      </div>
    </div>
  );
};

export default GameCard;
