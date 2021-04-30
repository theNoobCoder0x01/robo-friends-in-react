const Card = ({ id, name, email }) => (
	<div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
		<img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
		<div>
			<h3>{name}</h3>
			<p className="email">{email}</p>
		</div>
	</div>
);

export default Card;