import React from 'react';
import styles from './LineStrip.module.scss';
import star from '../../assets/star.png';

interface Props {
	hasBackground?: boolean;
	rotate?: boolean;
	className?: string;
}

const LineStrip = (props: Props) => {
	const { className, hasBackground, rotate } = props;

	return (
		<div
			className={`${styles.lineContainer} ${
				hasBackground ? styles.background : ''
			} ${rotate ? styles.rotate : ''} ${className || ''}`}
		>
			<div className={styles.overlay} />
			<div className={styles.words}>
				<div>
					<img src={star} alt='Star' />
					<span>Gaming spaning</span>
				</div>
				<div>
					<img src={star} alt='Star' />
					<span>
						Action <span>-</span> packed
					</span>
				</div>
				<div>
					<img src={star} alt='Star' />
					<span>
						mind <span>-</span> bending
					</span>
				</div>
				<div>
					<img src={star} alt='Star' />
					<span>collection og games</span>
				</div>
			</div>
		</div>
	);
};

export default LineStrip;
