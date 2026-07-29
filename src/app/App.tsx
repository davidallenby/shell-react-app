import Header from '@components/layout/Header/Header';
import { BrowserRouter } from 'react-router';

function App() {
	return (
		<BrowserRouter>
			<div>
				<Header />
				<h1 className="font-bold text-3xl text-red-500 underline">Hello world!</h1>
			</div>
		</BrowserRouter>
	);
}

export default App;
