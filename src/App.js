import { Nav, Container, Navbar } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './components/HomePage';
import RandomPage from './components/RandomPage';
import { TEST_GAMES } from './TEST_GAMES';
import GamePage from './components/GamePage';


	function App() {
		
		const [gamesList, setGamesList] = useState( TEST_GAMES );

		return (
			<div>
				<Navbar bg="dark" data-bs-theme="dark">
					<Container>
						<Navbar.Brand as={Link} to="/">My Board Games</Navbar.Brand>
						<Nav className="me-auto">
							<Nav.Link as={Link} to="/">Home</Nav.Link>
							<Nav.Link as={Link} to="/random">Random</Nav.Link>
						</Nav>
					</Container>
				</Navbar>
				<Container className='mt-4'>
					<Routes>
						<Route path='/' element={ <HomePage gamesList={gamesList}/> } />
						<Route path='/random' element={ <RandomPage gamesList={gamesList}/> } />
						<Route path="/games/:gameId" element={ <GamePage gamesList={gamesList} /> } />
					</Routes>
				</Container>			
			</div>
		);
	}

export default App;
