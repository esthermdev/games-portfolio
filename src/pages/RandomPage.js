import { selectRandomBoardgame } from '../features/boardgames/gamesSlice';

const RandomPage = () => {
    const randomGame = selectRandomBoardgame();
    
    return (
        <div>
            <h5>You should play...</h5>
            <h2 className='display-1'>{ randomGame.name }</h2>
        </div>
    );
}

export default RandomPage;