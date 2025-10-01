import React from 'react';
import '../styles/layout/_header.scss';
// import './styles/main.scss';

function HeaderNav({}) {
	return (
		<header>
			<div className='logo'>
				<strong>exai</strong>
			</div>
			<nav>
				<a href='#'>About</a>
				<a href='#'>How It Works</a>
				<a href='#'>Team</a>
				<a href='#'>Pricing</a>
				<a href='#'>Contact</a>
			</nav>
			<a href='#' className='btn btn-gradient'>
				Book a demo
			</a>
		</header>
	);
}

export default HeaderNav;
