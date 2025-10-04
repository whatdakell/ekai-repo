import React from 'react';
import '../styles/components/_footer.scss';

const Footer = () => {
	return (
		<footer className='footer vertical-spacing'>
			<div className='footer-content'>
				<div className='footer-left'>
					<a className='logo' aria-label='ekai' href='/'>
						<img src='/images/logo.svg'></img>
					</a>
					<p>Join our newsletter and stay up to date with Ekai.</p>

					<form className='newsletter-form'>
						<input type='text' placeholder='Enter your name' />
						<input type='email' placeholder='Enter your email' />
						<button type='submit'>Subscribe</button>
					</form>

					<p className='privacy'>
						By subscribing, you agree to our <a href='/privacy-policy'>Privacy Policy</a> and provide consent to receive updates from our company.
					</p>
				</div>

				{/* Right side icons */}
				<div className='footer-right'>
					<a href='https://www.linkedin.com/company/ekaiai/' target='_blank' rel='noopener noreferrer' className='linkedin'>
						<img src='/images/linkedin.svg' alt='LinkedIn' />
					</a>
					<div className='footer-bottom'>
						<p>©2025 EKAI INC. All rights reserved.</p>
						<p className='cooth'>
							Designed by{' '}
							<a href='https://cooth.com' target='_blank' rel='noopener noreferrer'>
								Cooth
							</a>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
