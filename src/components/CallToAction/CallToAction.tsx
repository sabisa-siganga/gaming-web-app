import React from "react";
import styles from "./CallToAction.module.scss";
// Importing LineStrip component
import LineStrip from "../LineStrip/LineStrip";

// Importing image for the call to action section
import callToActionImg from "../../assets/call-to-action.png";
import Button from "../Button/Button";

const CallToAction = () => {
  return (
    // Section container with styles from the module
    <section className={styles.callToActionContainer}>
      {/* Main container with styles */}
      <div className={styles.container}>
        {/* Overlay for the background */}
        <div className={styles.overlay} />

        {/* Main content box */}
        <div className={styles.box}>
          {/* Container for the image */}
          <div className={styles.imgContainer}>
            {/* Image with call-to-action image */}
            <img src={callToActionImg} alt="Call to action" />
          </div>
          {/* Container for the content */}
          <div className={styles.content}>
            <div className={styles.title}>
              Discover the <span>Virtual</span> Reality Gaming
            </div>
            {/* Description of the section */}
            <div className={styles.descrip}>
              A well-designed gaming header often incorporates elements such as
              game characters, iconic symbols, vibrant colors, and dynamic
              visuals to convey excitement, adventure, and the immersive nature
              of gaming.
            </div>

            <Button variant="outline" className={styles.playNow}>
              PLAY NOW
            </Button>
          </div>
        </div>
      </div>
      <LineStrip />
      {/* Circle shape */}
      <div className={styles.circle} />
    </section>
  );
};

export default CallToAction;
