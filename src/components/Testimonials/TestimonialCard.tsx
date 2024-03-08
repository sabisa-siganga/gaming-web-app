import React from "react";
import styles from "./Testimonials.module.scss";

// Images
import arrows from "../../assets/arrows.png";
import { ReactComponent as Star } from "../../assets/white-star.svg";
import { ReactComponent as Badge } from "../../assets/badge.svg";

// Defining the interface for props
interface Props {
  image: string;
  comment: string;
  name: string;
  company: string;
  rating: number;
}

// Functional component for rendering a testimonial card
const TestimonialCard = (props: Props) => {
  // Destructuring props for easier access
  const { image, comment, name, company, rating } = props;

  return (
    //  Container for the testimonial card
    <div className={styles.card}>
      {/* Overlay for visual effect */}
      <div className={styles.overlay} />
      {/* Arrows image */}
      <img className={styles.arrows} src={arrows} alt="Arrows" />
      {/* Container for testimonial content */}
      <div className={styles.content}>
        {/* Container for star ratings */}
        <div className={styles.stars}>
          {/* Mapping through an array to render star icons based on rating */}
          {[...Array(rating)].map((_, index) => (
            // Rendering star icon
            <Star key={`star-${index}`} />
          ))}
        </div>
        {/* Displaying testimonial comment */}
        <div className={styles.descrip}>{comment}</div>
        {/* Line break */}
        <div className={styles.linebreak} />
        {/* Container for user details and verification */}
        <div className={styles.bottom}>
          {/* Container for user details */}
          <div className={styles.userDetails}>
            {/* User image */}
            <img src={image} alt="User" />
            <div>
              {/* Displaying user name */}
              <div className={styles.name}>{name}</div>
              {/* Displaying company name */}
              <div className={styles.company}>{company}</div>
            </div>
          </div>
          {/* Container for verification badge */}
          <div className={styles.verified}>
            {/* Displaying verification badge */}
            <Badge />
            {/* Displaying verification status */}
            Verified
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
