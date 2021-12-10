import React from 'react';
import './Card.css';

const CardList = ({cards}) => (
	<main className="all-cards">
		{cards.map((card) => (
			<section className="single-card">
			<h1 className="h1-card-title">
				<strong className="card-title">{card.title}</strong>	
			</h1>
			<ul className="cards">
				{card.children.map((item) => (
					
					<li key={item.id} className="card">{item.text}</li>
				))}
			</ul>
			<span className="add-card">
			<i className="fas fa-plus icon-add" />
			{' Add another card'}
		</span>
		</section>
		))}
	</main>
);

export default CardList;









