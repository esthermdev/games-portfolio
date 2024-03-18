import { useState } from 'react';
import GameCard from './GameCard';

export default function HomePage({ gamesList }) {

    const [categoryFilter, setCategoryFilter] = useState("Strategy");

    let filteredGames;
		if (categoryFilter === "All") {
			filteredGames = gamesList
		} else {
			filteredGames = gamesList.filter(game => game.category === categoryFilter)
		};

    return (
        <div>
            <div>
                <button className='btn btn-primary m-2' onClick={() => setCategoryFilter("All")}>All</button>
                <button className='btn btn-primary m-2' onClick={() => setCategoryFilter("Deck Building")}>Deck Building</button>
                <button className='btn btn-primary m-2' onClick={() => setCategoryFilter("Strategy")}>Strategy</button>
			</div>
            { filteredGames.map( g => <GameCard game={g}/> ) }
        </div>
    );
}