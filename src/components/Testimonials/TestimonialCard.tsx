import React from 'react';
import styles from './Testimonials.module.scss';

// Images
import arrows from '../../assets/arrows.png';
import { ReactComponent as Star } from '../../assets/white-star.svg';
import { ReactComponent as Badge } from '../../assets/badge.svg';

interface Props {
	image: string;
	comment: string;
	name: string;
	company: string;
	rating: number;
}

const TestimonialCard = (props: Props) => {
	const { image, comment, name, company, rating } = props;

	return (
		<div className={styles.card}>
			<div className={styles.overlay} />
			<img className={styles.arrows} src={arrows} alt='Arrows' />
			<div className={styles.content}>
				<div className={styles.stars}>
					{[...Array(rating)].map((_, index) => (
						<Star key={`star-${index}`} />
					))}
				</div>
				<div className={styles.descrip}>{comment}</div>
				<div className={styles.linebreak} />
				<div className={styles.bottom}>
					<div className={styles.userDetails}>
						<img src={image} alt='User' />
						<div>
							<div className={styles.name}>{name}</div>
							<div className={styles.company}>{company}</div>
						</div>
					</div>
					<div className={styles.verified}>
						<Badge />
						Verified
					</div>
				</div>
			</div>
		</div>
	);
};

export default TestimonialCard;
