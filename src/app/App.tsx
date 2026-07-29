import Header from '@components/layout/Header/Header';
import { BrowserRouter } from 'react-router';
import './App.css';
import { Footer } from '@components/layout/Footer/Footer';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<main></main>
				<Footer>Footer Content</Footer>
			</div>
		</BrowserRouter>
	);
}

export default App;
