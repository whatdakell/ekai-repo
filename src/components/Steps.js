import React, { useEffect, useState } from 'react';
// import '../styles/components/_steps.scss';

function Steps({ steps }) {
	const [animate, setAnimate] = useState(false);

	useEffect(() => {
		// Trigger animation once component mounts
		const timer = setTimeout(() => setAnimate(true), 400);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className='steps-container'>
			<div className={`line ${animate ? 'draw' : ''}`}></div>
			<ul className='steps'>
				{steps.map((step, index) => (
					<li key={index} className={`step moveUp ${animate ? 'fade-in' : ''}`}>
						<span className='step-number'>{index + 1}.</span> <span className='step-title'>{step.title}</span>
						{step.description && <div className='step-description'>{step.description}</div>}
					</li>
				))}
			</ul>
		</div>
	);
}

export default Steps;
