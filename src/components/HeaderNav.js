import React, { useState, useEffect } from 'react';
import '../styles/layout/_header.scss';
import Button from './Button';

function HeaderNav() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [animate, setAnimate] = useState(false);

	useEffect(() => {
		// Trigger animation when header mounts
		const timer = setTimeout(() => setAnimate(true), 400);
		return () => clearTimeout(timer);
	}, []);

	return (
		<header className={`navbar ${animate ? 'animate' : ''}`}>
			<div className='navbar-container'>
				{/* Logo */}
				<a className='logo' aria-label='ekai' href='/'>
					<img src='/images/logo.svg' alt='ekai logo' />
				</a>

				{/* Desktop Menu */}
				<nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
					<div className='nav-wrapper'>
						<a href='#about' className='active'>
							About
						</a>
						<a href='#how'>How It Works</a>
						<a href='#team'>Team</a>
						<a href='#pricing'>Pricing</a>
						<a href='#contact'>Contact</a>
					</div>
					<Button href='test' text='Book a demo' btnStyle='btn-gradient white' />
				</nav>

				{/* Hamburger Icon */}
				<div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		</header>
	);
}

export default HeaderNav;
