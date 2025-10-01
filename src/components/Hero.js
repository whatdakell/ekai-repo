import React from 'react';
import '../styles/components/_hero.scss';
// import './styles/main.scss';

function Hero({ headline, copy }) {
	return (
		<div className='Hero'>
			<div className='inner-max-width-tight'>
				<h1 className='heading-level-1' dangerouslySetInnerHTML={{ __html: headline }}></h1>
				<p dangerouslySetInnerHTML={{ __html: copy }}></p>
				<a href='#' className='btn'>
					Contact us
				</a>
			</div>
			<ul className='steps'>
				<li className='step'>
					1. <span className='li-separator'>Connect to data platforms</span>
				</li>
				<li className='step'>
					2. <span className='li-separator'>Provide analytical requirements</span>
				</li>
				<li className='step'>
					3. <span className='li-separator'>Generate code package</span>
				</li>
				<li className='step'>
					4. <span className='li-separator'>Publish and review</span>
				</li>
			</ul>
		</div>
	);
}

export default Hero;
