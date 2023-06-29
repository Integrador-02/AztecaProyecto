import React, { useEffect, useState } from 'react';

import Modal from './modal';
import { Base1 } from '@layouts/Baseof';
const imgs = [
	{
		id: 1,
		img: '/img/facebook.png',
		alt: 'Facebook',
	},
	{
		id: 2,
		img: '/img/discord.png',
		alt: 'Discord',
	},
	{
		id: 3,
		img: '/img/instagram.png',
		alt: 'Instagram',
	},
	{
		id: 4,
		img: '/img/whatsapp.png',
		alt: 'WhatsApp',
	},
	{
		id: 5,
		img: '/img/google.png',
		alt: 'Google',
	}
];

const Card = ({ card, handleCardClick }) => {
	return (
		<div
			className={`drop-shadow-md flex items-center ${
				card.flipped ? '[transform: rotateY(10deg)]' : 'bg-white'
			} justify-center cursor-pointer h-16 w-16 hover:scale-105 rounded-xl transition-all duration-1000`}
			onClick={() => handleCardClick(card.id)}
		>
			<div>
				<img
					src={card.img}
					alt={card.alt}
					className={`h-16 scale-110 ${
						!card.flipped
							? '[transform:rotateY(180deg)] [backface-visibility:hidden] transition-all duration-1000'
							: ''
					}`}
				/>
			</div>
		</div>
	);
};
const shuffleArray = array => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
};

const Board = () => {
	const [cards, setCards] = useState([]);
	const [flippedCards, setFlippedCards] = useState([]);
	const [moves, setMoves] = useState(0);
	const [gameOver, setGameOver] = useState(false);
	const [isDisabled, setIsDisabled] = useState(false);

	const createBoard = () => {
		const duplicatecards = imgs.flatMap((img, i) => {
			const duplicate = {
				...img,
				id: img.id + imgs.length,
			};
			return [img, duplicate];
		});

		const newCards = shuffleArray(duplicatecards);
		const cards = newCards.map(card => {
			return {
				...card,
				flipped: false,
				matched: false,
			};
		});
		setCards(cards);
	};

	useEffect(() => {
		createBoard();
	}, []);

	const handleCardClick = id => {
		if (isDisabled) return;

		const [currentCard] = cards.filter(card => card.id === id);

		if (!currentCard.flipped && !currentCard.matched) {
			currentCard.flipped = true;

			const newFlippedCards = [...flippedCards, currentCard];
			setFlippedCards(newFlippedCards);

			if (newFlippedCards.length === 2) {
				setIsDisabled(true);
				const [firstCard, secondCard] = newFlippedCards;

				if (firstCard.img === secondCard.img) {
					firstCard.matched = true;
					secondCard.matched = true;
					setIsDisabled(false);
				} else {
					setTimeout(() => {
						firstCard.flipped = false;
						secondCard.flipped = false;
						setCards(cards);
						setIsDisabled(false);
					}, 1000);
				}

				setFlippedCards([]);
				setMoves(moves + 1);
			}

			setCards(cards);
		}

		if (cards.every(card => card.matched)) {
			setGameOver(true);
			setIsDisabled(true);
		}
	};

	const handleNewGame = () => {
		setCards([]);
		createBoard();
		setMoves(0);
		setGameOver(false);
		setIsDisabled(false);
	};

	return (
		<Base1>
		 <div style={{margin:'-5rem'}}>
			{gameOver && (
				<div className='fixed inset-0 bg-black opacity-10 z-10'></div>
			)}

			<div className='relative h-screen flex items-center'>
				<div className='mx-auto flex flex-col justify-center items-center'>
					<h1 className='font-bold text-xl my-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:text-5xl'>
						Memoria Azteca					</h1>
					<div className='grid grid-cols-5 gap-5 justify-center items-center px-2 py-5 my-3' style={{margin:'-2rem'}}>
						{cards.map(card => (
							<Card
								card={card}
								key={card.id}
								handleCardClick={handleCardClick}
							/>
						))}
					</div>
					<button style={{margin:'1.5rem'}}
						className='bg-black font-semibold text-white rounded-md px-5 py-1 hover:bg-green-500 hover:text-black transition-all mb-3'
						onClick={handleNewGame}
					>
						Nuevo Juego
					</button>
				</div>

				<Modal
					gameOver={gameOver}
					setGameOver={setGameOver}
					moves={moves}
					handleNewGame={handleNewGame}
				/>
			</div>
			</div>
		</Base1>
	);
};
export default Board;