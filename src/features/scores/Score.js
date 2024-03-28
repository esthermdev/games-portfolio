import { formatDate } from '../../utils/formatDate'
import { Container, Row, Col, Card, CardBody, CardTitle, Table } from 'reactstrap';

const Score = ({ scores }) => {

    const { date, playerScores } = scores;
    const players = Object.entries(playerScores);

    return (
        <Container>
            <Card className='m-3'>
                <CardBody>
                    <CardTitle tag='h6'>
                        {formatDate(date)}
                    </CardTitle>
                    <Table hover>
                        <thead>
                            <tr>
                                <th>Players</th>
                                <th>Scores</th>
                            </tr>
                        </thead>
                        <tbody>
                            {players.map(([playerName, score]) => (
                                <tr key={playerName}>
                                    <td>{playerName}</td>
                                    <td>{score}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        </Container>
    );
};

export default Score;