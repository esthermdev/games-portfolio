import { Col, Row } from 'reactstrap';
import { getScoresByBoardgameId } from './scoresSlice';
import Score from './Score';

const ScoresList = ({ gameId }) => {
    const gameScores = getScoresByBoardgameId(gameId);
    
    if (gameScores && gameScores.length > 0) {
        return (
            <Row>
                <h4>Scores</h4>
                {gameScores.map((scores) => {
                    return <Score key={scores.id} scores={scores}/>
                })}
            </Row>
        );
    };

    return(
        <Col>
            <h4>Scores</h4>
            There are no scores for this game.
        </Col>
    );
};

export default ScoresList;