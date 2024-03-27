import { useParams } from 'react-router-dom';

const GamePage = ({ gamesList }) => {

    let { gameId } = useParams();
    gameId = parseInt(gameId);

    const game = gamesList.find(g => g.id === gameId);

    if (!game) {
        return <h2>Game Not Found</h2>
    }

    return (
        <div>
            <h3>{ game.name }</h3>
            <p>{ game.category }</p>
            <p>{ game.rating }</p>
            <p>Players: { game.players }</p>
            <p>Duration: { game.duration }</p>
            <p>Description: { game.description }</p>
        </div>
    );
}

export default GamePage;