import React, { useState } from 'react';
import styles from './Filters.module.scss';
import Button from '../Button/Button';
import GameCard from '../GameCard/GameCard';

// Player Images
import player1 from '../../assets/players/Ellipse 5.png';
import player2 from '../../assets/players/Ellipse 6.png';
import player3 from '../../assets/players/Ellipse 7.png';
import player4 from '../../assets/players/Ellipse 8.png';
import player5 from '../../assets/players/Ellipse 9.png';
import player6 from '../../assets/players/Ellipse 10.png';

// Game Images
import game1 from '../../assets/games/game1.png';
import game2 from '../../assets/games/game2.png';
import game3 from '../../assets/games/game3.png';
import game4 from '../../assets/games/game4.png';
import game5 from '../../assets/games/game5.png';
import game6 from '../../assets/games/game6.png';

const Filters = () => {
	const cards = [
		{
			title: 'Core philosophies',
			name: 'Cameron Williamson',
			company: 'Gillette',
			image: player1,
			game: game1,
		},
		{
			title: 'Core philosophies',
			name: 'Dianne Russell',
			company: 'Louis Vuitton',
			image: player2,
			game: game2,
		},
		{
			title: 'Core philosophies',
			name: 'Jane Cooper',
			company: 'MasterCard',
			image: player3,
			game: game3,
		},
		{
			title: 'Core philosophies',
			name: 'Cody Fisher',
			company: 'The Walt Disney Company',
			image: player4,
			game: game4,
		},
		{
			title: 'Core philosophies',
			name: 'Wade Warren',
			company: 'Gillette',
			image: player5,
			game: game5,
		},
		{
			title: 'Core philosophies',
			name: 'Robert Fox',
			company: "L'Oréal",
			image: player6,
			game: game6,
		},
	];

	const [filterList, setFilterList] = useState([
		{
			title: 'NEWEST GAMES',
			selected: true,
		},
		{
			title: 'LATEST GAMES',
			selected: false,
		},
		{
			title: 'FIGHT GAMES',
			selected: false,
		},
		{
			title: 'SPORT GAMES',
			selected: false,
		},
	]);

	const handleFilter = (index: number) => {
		const updatedFilterList = filterList.map((filter, i) => {
			if (i === index) {
				return { ...filter, selected: true };
			}

			return { ...filter, selected: false };
		});

		setFilterList(updatedFilterList);
	};

	return (
		<section className={styles.filtersContainer}>
			<h2>
				Welcome to the top <span>games</span>
			</h2>
			<div className={styles.filterBtns}>
				{filterList.map((filter, index) => (
					<Button
						key={`filter-list-${index}`}
						variant={filter.selected ? 'background' : 'outline'}
						className={
							filter.selected ? styles.bold : styles.normal
						}
						onClick={() => handleFilter(index)}
					>
						{filter.title}
					</Button>
				))}
			</div>
			<div className={styles.gameCards}>
				{cards.map((card, index) => (
					<GameCard
						key={`game-card-${index}`}
						title={card.title}
						company={card.company}
						image={card.image}
						name={card.name}
						game={card.game}
					/>
				))}
			</div>
      <div className={styles.circle} />
		</section>
	);
};

export default Filters;
