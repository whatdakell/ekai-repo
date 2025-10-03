import React, { useEffect, useState } from 'react';
import '../styles/components/_hero.scss';
import Button from './Button';
// import Steps from './Steps';
function Hero({ headline, copy, steps }) {
	const [animate, setAnimate] = useState(false);

	useEffect(() => {
		// Trigger animation once component mounts
		const timer = setTimeout(() => setAnimate(true), 500);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className='Hero'>
			<div className='inner-max-width-tight moveUp'>
				<h1 className='heading-level-1' dangerouslySetInnerHTML={{ __html: headline }}></h1>
				<p dangerouslySetInnerHTML={{ __html: copy }}></p>
				<Button href='#' text='Contact us'></Button>
			</div>
			{/* <Steps steps={steps}></Steps> */}
			<div className='steps-container'>
				<div className={`line ${animate ? 'draw' : ''} desktop`}></div>
				<div className={`line ${animate ? 'draw' : ''} mobile`}></div>
				<ul className='steps'>
					{steps.map((step, index) => {
						return (
							<li className='step moveUp' key={`step-${index}`}>
								<div className='step-wrapper'>
									{index + 1}. <span className='li-separator'>{step.title}</span>
								</div>
								{step.description && <p className='step-description'>{step.description}</p>}
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default Hero;
