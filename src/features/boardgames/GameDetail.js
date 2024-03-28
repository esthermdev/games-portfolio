import { Card, CardImg, CardText, CardBody, Col } from 'react-bootstrap';

const GameDetail = ({ game }) => {
    const { name, 
            category, 
            rating, 
            players, 
            duration, 
            description } = game;

    return (
        <div>
            <h3>{ name }</h3>
            <h5>{ category }</h5>
            <p>{ rating }</p>
            <p>Players: { players }</p>
            <p>Duration: { duration }</p>
            <p>Description: { description }</p>
        </div>
    );
};

export default GameDetail;