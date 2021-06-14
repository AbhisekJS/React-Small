import React from 'react';
import logo from './logo.svg';
import { FaTimes } from 'react-icons/fa';
import { social, links } from './data';
import { useGlobalContext } from './context';

export default function Sidebar() {
	const { isSidebarOpen, closeSidebar } = useGlobalContext();

	return (
		<aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
			<div className="sidebar-header">
				<img src={logo} className="logo" alt="Logo" />
				<button className="close" onClick={closeSidebar}>
					<FaTimes />
				</button>
			</div>
			<ul className="links">
				{links.map((link) => {
					const { id, url, text, icon } = link;
					return (
						<li key={id}>
							<a href={url}>
								{icon}
								{text}
							</a>
						</li>
					);
				})}
			</ul>
			<ul className="social-icons">
				{social.map((item) => {
					const { id, url, icon } = item;
					return (
						<li key={id}>
							<a href={url}>{icon}</a>
						</li>
					);
				})}
			</ul>
		</aside>
	);
}
