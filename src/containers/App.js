import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

const App = (props) => {
	const [searchText, setSearchText] = useState("");
	const [robots, setRobots] = useState([]);

	const onTextChange = (event) => {
		setSearchText(event.target.value);
	}

	const filteredRobots = robots.filter((robot) => 
		robot.name.toLowerCase()
		.includes(searchText.trim().toLowerCase())
	);

	useEffect(() => fetch("https://jsonplaceholder.cypress.io/users")
		.then(response => response.json())
		.then(users => setRobots(users)),
		[] //This is a list of dependencies which is empty now so this fetch is not run on every re-render...
	);

	return !robots.length ? (
		<h1 className="tc f1 title">Loading...</h1>
	) : (
		<div className="tc">
			<div>
				<h1 className="title f1">Robo Friends</h1>
				<SearchBox searchTextChange={onTextChange}/>
			</div>
			<Scroll>
				<CardList robots={filteredRobots}/>
			</Scroll>
		</div>
	);
}

export default App;