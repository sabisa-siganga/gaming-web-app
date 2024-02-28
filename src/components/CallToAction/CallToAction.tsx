import React from 'react';
import styles from './CallToAction.module.scss';
import LineStrip from '../LineStrip/LineStrip';

// Image
import callToActionImg from '../../assets/call-to-action.png';
import Button from '../Button/Button';

const CallToAction = () => {
	return (
		<section className={styles.callToActionContainer}>
			<div className={styles.container}>
				<div className={styles.overlay} />

				<div className={styles.box}>
					<div className={styles.imgContainer}>
						<img src={callToActionImg} alt='Call to action' />
					</div>
					<div className={styles.content}>
						<div className={styles.title}>
							Discover the <span>Virtual</span> Reality Gaming
						</div>
						<div className={styles.descrip}>
							A well-designed gaming header often incorporates
							elements such as game characters, iconic symbols,
							vibrant colors, and dynamic visuals to convey
							excitement, adventure, and the immersive nature of
							gaming.
						</div>

						<Button variant='outline' className={styles.playNow}>PLAY NOW</Button>
					</div>
				</div>
			</div>
			<LineStrip  />
			<div className={styles.circle} />
		</section>
	);
};

export default CallToAction;
