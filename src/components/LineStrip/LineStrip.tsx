import React from "react";
import styles from "./LineStrip.module.scss";
import star from "../../assets/star.png";

// Interface for props with optional properties
interface Props {
  // Indicates if the line strip has a background
  hasBackground?: boolean;
  // Indicates if the line strip should be rotated
  rotate?: boolean;
  className?: string;
}

// Functional component representing a line strip
const LineStrip = (props: Props) => {
  // Destructuring props
  const { className, hasBackground, rotate } = props;

  return (
    <div
      // Generating dynamic class names based on props and styles
      className={`${styles.lineContainer} ${
        hasBackground ? styles.background : ""
      } ${rotate ? styles.rotate : ""} ${className || ""}`}
    >
      {/* Overlay for visual effect */}
      <div className={styles.overlay} />
      {/* Container for words */}
      <div className={styles.words}>
        {/* Individual word sections with star icons */}
        <div>
          {/* Star icon */}
          <img src={star} alt="Star" />
          {/* Text */}
          <span>Gaming spaning</span>
        </div>
        <div>
          <img src={star} alt="Star" />
          <span>
            Action <span>-</span> packed
          </span>
        </div>
        <div>
          <img src={star} alt="Star" />
          <span>
            mind <span>-</span> bending
          </span>
        </div>
        <div>
          <img src={star} alt="Star" />
          <span>collection og games</span>
        </div>
      </div>
    </div>
  );
};

export default LineStrip;
