import React from 'react';
import styles from './Banner.module.scss';
import Button from '../Button/Button';

const Banner = () => {
	return (
		<section className={styles.banner}>
			<div className={styles.heading}>
				<h1>Let your mind explore new world</h1>
				<p>
					Playing electronic games, whether through consoles,
					computers, mobile phones or another medium altogether.
					Gaming is a nuanced term that suggests regular gameplay,
					possibly as a hobby.
				</p>
				<div className={styles.btns}>
					<Button variant='background' className={styles.buyNow}>BUY NOW</Button>
					<Button variant='outline' className={styles.playNow}>PLAY NOW</Button>
				</div>
			</div>

			<div className={styles.artboardCont} />
		</section>
	);
};

export default Banner;
