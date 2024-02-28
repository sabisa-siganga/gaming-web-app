import React from 'react';
import styles from './Testimonials.module.scss';
import TestimonialCard from './TestimonialCard';

import user1 from '../../assets/testimonials/user1.png';
import user2 from '../../assets/testimonials/user2.png';
import LineStrip from '../LineStrip/LineStrip';

const Testimonials = () => {
	const cards = [
		{
			name: 'Arlene McCoy',
			company: "McDonald's",
			comment:
				'One of the standout features of this gaming website is its extensive library of game guides and tutorials. It has helped me level up my skills, conquer challenging quests, and discover hidden secrets within games. The guides are comprehensive, easy to follow, and have undoubtedly elevated my gaming performance.',
			image: user1,
		},
		{
			name: 'Kathryn Murphy',
			company: 'General Electric',
			comment:
				"Another aspect that sets this website apart is its vibrant and passionate community. The forum section provides a platform for gamers from all walks of life to connect, share their experiences, and discuss their favorite titles. I've made valuable friendships and found like-minded individuals who share my enthusiasm for gaming.",
			image: user2,
		},
	];

	return (
		<section className={styles.testimonialContainer}>
			<div className={styles.container}>
				{cards.map((card, index) => (
					<TestimonialCard
						key={`testimonial-card-${index}`}
						name={card.name}
						comment={card.comment}
						company={card.company}
						image={card.image}
					/>
				))}
			</div>

			<LineStrip hasBackground className={styles.lineStrip} />
		</section>
	);
};

export default Testimonials;
