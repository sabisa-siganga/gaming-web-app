import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Twitch } from "../../assets/brands/twitch.svg";
import { ReactComponent as Roblox } from "../../assets/brands/roblox.svg";
import { ReactComponent as Asus } from "../../assets/brands/asus.svg";
import { ReactComponent as Canon } from "../../assets/brands/canon.svg";
import { ReactComponent as Microsoft } from "../../assets/brands/microsoft.svg";
import { ReactComponent as Twitter } from "../../assets/socials/twitter.svg";
import { ReactComponent as Facebook } from "../../assets/socials/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/socials/Instagram.svg";
import { ReactComponent as Github } from "../../assets/socials/github.svg";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footerCont}>
      <div className={styles.alignLinks}>
        <div className={styles.footer}>
          <div className={styles.logoContainer}>
            <Logo className={styles.logo} />
            <div className={styles.title}>board</div>
          </div>
          <div className={styles.paragraph}>
            <p>
              A well-designed gaming header often incorporates elements such as
              game characters, iconic symbols, vibrant colors, and dynamic
              visuals.
            </p>
          </div>
        </div>

        <div className={styles.link}>
          <div className={styles.heading}>COMPANY</div>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <a href="/">Products</a>
            </li>
            <li className={styles.listItem}>
              <a href="/">Apps & Games</a>
            </li>
            <li className={styles.listItem}>
              <a href="/">Features</a>
            </li>
          </ul>
        </div>

        <div className={styles.link}>
          <div className={styles.heading}>HELP</div>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <a href="/">Support</a>
            </li>
            <li className={styles.listItem}>
              <a href="/">About</a>
            </li>
            <li className={styles.listItem}>
              <a href="/">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className={styles.link}>
          <div className={styles.heading}>RESOURCES</div>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <a href="/">Youtube playlist</a>
            </li>
            <li className={styles.listItem}>
              <a href="/">How To - Blog</a>
            </li>
            <li className={styles.listItem}>
              <a href="/">Terms & Conditions</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.brands}>
        <Twitch />
        <Roblox />
        <Asus />
        <Canon />
        <Microsoft />
      </div>
      <div className={styles.copyright}>
        <div className={styles.socials}>
          <Twitter />
          <Facebook />
          <Instagram />
          <Github />
        </div>
        <div className={styles.copTitle}>
          &copy; Copyright 2023, All Rights Reserved by board
        </div>
      </div>
    </div>
  );
};

export default Footer;
