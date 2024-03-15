import GameCard from './GameCard'

const gamesList = [
		{
			id: 0,
			name: "Terra Mystica",
			rating: null,
			category: "Strategy"
		},

		{
			id: 1,
			name: "Everdell",
			rating: null,
			category: "Strategy"
		},

		{
			id: 2,
			name: "Dominion",
			rating: null,
			category: "Deck Building"
		}
	]

	function App() {
		return (
			<div>
				<h1>My Board Games</h1>
				 { gamesList.map( g => <GameCard game={g}/> ) }
			</div>
		);
	}

export default App;
