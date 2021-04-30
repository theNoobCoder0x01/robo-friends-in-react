import Card from './Card';

const CardList = ({ robots }) => {
	return (
		<>
			{ robots.map((robo, i) => (
					<Card
						key={i}
						id={robo.id}
						name={robo.name}
						email={robo.email}
					/>)
			) }
		</>
	);
}

export default CardList;