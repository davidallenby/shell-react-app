import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App.tsx';
import './styles/styles.css';

const rootElem = document.getElementById('root');

if (!rootElem) {
	throw new Error('Root element not found. Unable to attach React.');
}

createRoot(rootElem).render(
	<StrictMode>
		<App />
	</StrictMode>
);
