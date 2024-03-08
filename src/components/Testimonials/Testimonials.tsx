import React from "react";
import styles from "./Testimonials.module.scss";
import "./slider.scss";
import TestimonialCard from "./TestimonialCard";

// Importing the Slider component from the react-slick library

import Slider from "react-slick";

// Importing user images
import user1 from "../../assets/testimonials/user1.png";
import user2 from "../../assets/testimonials/user2.png";
import user3 from "../../assets/players/Ellipse 7.png";
import user4 from "../../assets/players/Ellipse 5.png";
import user5 from "../../assets/players/Ellipse 9.png";

import LineStrip from "../LineStrip/LineStrip";

// Testimonials component
const Testimonials = () => {
  // Array of testimonial card objects
  const cards = [
    {
      name: "Arlene McCoy",
      company: "McDonald's",
      rating: 5,
      comment:
        "One of the standout features of this gaming website is its extensive library of game guides and tutorials. It has helped me level up my skills, conquer challenging quests, and discover hidden secrets within games. The guides are comprehensive, easy to follow, and have undoubtedly elevated my gaming performance.",
      image: user1,
    },
    {
      name: "Kathryn Murphy",
      company: "General Electric",
      rating: 4,
      comment:
        "Another aspect that sets this website apart is its vibrant and passionate community. The forum section provides a platform for gamers from all walks of life to connect, share their experiences, and discuss their favorite titles. I've made valuable friendships and found like-minded individuals who share my enthusiasm for gaming.",
      image: user2,
    },
    {
      name: "Cody Fisher",
      company: "The Walt Disney",
      rating: 3,
      comment:
        "Another aspect that sets this website apart is its vibrant and passionate community. The forum section provides a platform for gamers from all walks of life to connect, share their experiences, and discuss their favorite titles. I've made valuable friendships and found like-minded individuals who share my enthusiasm for gaming.",
      image: user3,
    },
    {
      name: "Robert Fox",
      company: "L'Oréal",
      rating: 5,
      comment:
        "Another aspect that sets this website apart is its vibrant and passionate community. The forum section provides a platform for gamers from all walks of life to connect, share their experiences, and discuss their favorite titles. I've made valuable friendships and found like-minded individuals who share my enthusiasm for gaming.",
      image: user4,
    },
    {
      name: "Wade Warren",
      company: "Gillette",
      rating: 2,
      comment:
        "Another aspect that sets this website apart is its vibrant and passionate community. The forum section provides a platform for gamers from all walks of life to connect, share their experiences, and discuss their favorite titles. I've made valuable friendships and found like-minded individuals who share my enthusiasm for gaming.",
      image: user5,
    },
    {
      name: "Arlene McCoy",
      company: "McDonald's",
      rating: 5,
      comment:
        "One of the standout features of this gaming website is its extensive library of game guides and tutorials. It has helped me level up my skills, conquer challenging quests, and discover hidden secrets within games. The guides are comprehensive, easy to follow, and have undoubtedly elevated my gaming performance.",
      image: user1,
    },
    {
      name: "Cody Fisher",
      company: "The Walt Disney",
      rating: 3,
      comment:
        "Another aspect that sets this website apart is its vibrant and passionate community. The forum section provides a platform for gamers from all walks of life to connect, share their experiences, and discuss their favorite titles. I've made valuable friendships and found like-minded individuals who share my enthusiasm for gaming.",
      image: user3,
    },
    {
      name: "Kathryn Murphy",
      company: "General Electric",
      rating: 4,
      comment:
        "Another aspect that sets this website apart is its vibrant and passionate community. The forum section provides a platform for gamers from all walks of life to connect, share their experiences, and discuss their favorite titles. I've made valuable friendships and found like-minded individuals who share my enthusiasm for gaming.",
      image: user2,
    },
    {
      name: "Wade Warren",
      company: "Gillette",
      rating: 2,
      comment:
        "Another aspect that sets this website apart is its vibrant and passionate community. The forum section provides a platform for gamers from all walks of life to connect, share their experiences, and discuss their favorite titles. I've made valuable friendships and found like-minded individuals who share my enthusiasm for gaming.",
      image: user5,
    },
    {
      name: "Robert Fox",
      company: "L'Oréal",
      rating: 5,
      comment:
        "Another aspect that sets this website apart is its vibrant and passionate community. The forum section provides a platform for gamers from all walks of life to connect, share their experiences, and discuss their favorite titles. I've made valuable friendships and found like-minded individuals who share my enthusiasm for gaming.",
      image: user4,
    },
  ];

  // Settings for the Slider component
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    arrows: false,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  return (
    //  Container for the testimonials section
    <section className={styles.testimonialContainer}>
      {/* Container for the testimonials */}
      <div className={styles.container}>
        {/* Slider component with settings */}
        <Slider {...settings}>
          {/*Mapping over the cards array */}
          {cards.map((card, index) => (
            <div
              // Adding a class for each slider card
              className={styles.sliderCard}
              // Assigning a unique key for each card
              key={`testimonial-card-${index}`}
            >
              {/* Testimonial card component */}
              <TestimonialCard
                name={card.name}
                comment={card.comment}
                company={card.company}
                image={card.image}
                rating={card.rating}
              />
            </div>
          ))}
        </Slider>
      </div>

      <LineStrip hasBackground className={styles.lineStrip} />
    </section>
  );
};

export default Testimonials;
