import React, { useState, useEffect } from 'react';
import '../styles/layout/_header.scss';
import Button from './Button';

function HeaderNav() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [animate, setAnimate] = useState(false);
	const [showHeader, setShowHeader] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	// Initial mount animation
	useEffect(() => {
		const timer = setTimeout(() => setAnimate(true), 400);
		return () => clearTimeout(timer);
	}, []);

	// Scroll listener for hide/show
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY < 50) {
				// Always show near top
				setShowHeader(true);
			} else if (window.scrollY > lastScrollY) {
				// scrolling down
				setShowHeader(false);
			} else {
				// scrolling up
				setShowHeader(true);
			}
			setLastScrollY(window.scrollY);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [lastScrollY]);

	return (
		<header className={`navbar ${animate ? 'animate' : ''} ${showHeader ? 'visible' : 'hidden'}`}>
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
						<a href='#about'>Team</a>
						<a href='#pricing'>Pricing</a>
						<a href='#contact'>Contact</a>
					</div>
					<Button href='#contact' text='Book a demo' btnStyle='btn-gradient white' />
				</nav>

				{/* Hamburger */}
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
