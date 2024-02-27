import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Bag } from "../../assets/bag.svg";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <Logo className={styles.logo} />
        <div className={styles.title}>board</div>
      </div>
      <div className={styles.links}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <a className={styles.navLink} href="/">
              PRODUCTS
            </a>
          </li>
          <li className={styles.listItem}>
            <a className={styles.navLink} href="/">
              APPS & GAMES
            </a>
          </li>
          <li className={styles.listItem}>
            <a className={styles.navLink} href="/">
              FEATURES
            </a>
          </li>
          <li className={styles.listItem}>
            <a className={styles.navLink} href="/">
              SUPPORT
            </a>
          </li>
          <li className={styles.listItem}>
            <a className={styles.navLink} href="/">
              ABOUT
            </a>
          </li>
          <li className={styles.listItem}>
            <a className={styles.navLink} href="/">
              PRODUCTS
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.bagContainer}>
        <Bag className={styles.bag} />
      </div>
    </div>
  );
};

export default Header;
