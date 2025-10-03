import React from 'react';
import '../styles/components/_hero.scss';
import Button from './Button';
function Hero({ headline, copy, steps }) {
	return (
		<div className='Hero'>
			<div className='inner-max-width-tight moveUp'>
				<h1 className='heading-level-1' dangerouslySetInnerHTML={{ __html: headline }}></h1>
				<p dangerouslySetInnerHTML={{ __html: copy }}></p>
				<Button href='#' text='Contact us'></Button>
			</div>
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
	);
}

export default Hero;
