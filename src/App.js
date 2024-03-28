import { Nav, Container, Navbar } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RandomPage from './pages/RandomPage'; 
import GameDetailPage from './pages/GameDetailPage';
import { BOARDGAMES } from './app/shared/BOARDGAMES';


	function App() {
		
		const gamesList = BOARDGAMES;

		return (
			<div>
				<Navbar bg="dark" data-bs-theme="dark">
					<Container>
						<Navbar.Brand as={Link} to="/">Boardgame Shelf</Navbar.Brand>
						<Nav className="me-auto">
							<Nav.Link as={Link} to="/">Home</Nav.Link>
							<Nav.Link as={Link} to="/random">Random</Nav.Link>
						</Nav>
					</Container>
				</Navbar>
				<Container className='mt-4'>
					<Routes>
						<Route path='/' element={ <HomePage /> } />
						<Route path='/random' element={ <RandomPage /> } />
						<Route path="/games/:gameId" element={ <GameDetailPage /> } />
					</Routes>
				</Container>			
			</div>
		);
	}

export default App;
