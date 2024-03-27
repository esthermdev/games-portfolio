import { useState } from 'react';
import GameCard from './GameCard';
import { selectAllBoardgames } from './gamesSlice';

const GamesList = () => {
    const boardgames = selectAllBoardgames();

    const [categoryFilter, setCategoryFilter] = useState("All");

    let filteredGames;
    if (categoryFilter === "All") {
        filteredGames = boardgames;
    } else {
        filteredGames = boardgames.filter(game => game.category === categoryFilter)
    };

    return (
        <div>
            <div>
                <button className='btn btn-primary m-2' onClick={() => setCategoryFilter("All")}>All</button>
                <button className='btn btn-primary m-2' onClick={() => setCategoryFilter("Family")}>Family</button>
                <button className='btn btn-primary m-2' onClick={() => setCategoryFilter("Strategy")}>Strategy</button>
                <button className='btn btn-primary m-2' onClick={() => setCategoryFilter("Party")}>Party</button>
			</div>
            { filteredGames.map( g => <GameCard key={g.id} game={g} /> ) }
        </div>
    );

}

export default GamesList;