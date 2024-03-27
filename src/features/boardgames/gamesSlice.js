import { BOARDGAMES } from '../../app/shared/BOARDGAMES';

export const selectAllBoardgames = () => {
    return BOARDGAMES
}

export const selectBoardgameById = (id) => {
    return BOARDGAMES.find(
        (game) => game.id === parseInt(id)
    );
};

export const selectBoardgameByName = (name) => {
    return BOARDGAMES.find(
        (game) => game.name === name
    );
};

export const selectRandomBoardgame = () => {
    return BOARDGAMES[ Math.floor(Math.random() * BOARDGAMES.length) ];
}