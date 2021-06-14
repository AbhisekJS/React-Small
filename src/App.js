import './styles.css';
import React from 'react';
import Home from './Home';
import Modal from './Modal';
import Sidebar from './Sidebar';
import { AppProvider } from './context';

export default function App() {
	return (
		<AppProvider>
			<Home />
			<Modal />
			<Sidebar />
		</AppProvider>
	);
}
