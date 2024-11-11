import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';

import './main.scss';

import Resume from './pages/resume';

const Main = () => {
	return (
		<HashRouter>
			<Routes>
				<Route path='/' element={<Resume />} />
			</Routes>
		</HashRouter>
	);
};

const reactContainer = document.querySelector('#application-container');

if (reactContainer === null) {
	console.error('Unknown container selector!');
} else {
	const root = createRoot(reactContainer);

	root.render(<Main />);
}
