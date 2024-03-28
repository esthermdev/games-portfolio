import { SCORES } from '../../app/shared/SCORES';

export const getScoresByBoardgameId = (gameId) => {
    return SCORES.filter(
        (scores) => scores.gameId === parseInt(gameId)
    );
};