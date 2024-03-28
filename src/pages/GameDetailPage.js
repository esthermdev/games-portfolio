import { Container } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectBoardgameById } from '../features/boardgames/gamesSlice';
import GameDetail from '../features/boardgames/GameDetail';
import ScoresList from '../features/scores/ScoresList';

const GameDetailPage = () => {

    let { gameId } = useParams();
    gameId = parseInt(gameId);

    const game = selectBoardgameById(gameId);

    if (!game) {
        return <h2>Game Not Found</h2>
    }

    return (
        <Container>
            <GameDetail game={game}/>
            <ScoresList gameId={gameId}/>
        </Container>
    );
}

export default GameDetailPage;