import React, { useState, useEffect, useRef } from 'react';
// import './styles/main.scss';

const steps = [
	{
		title: '1. Connect',
		text: 'Ekai connects with your data platforms and automatically builds logical models for whatever your analytics use case might be.',
	},
	{
		title: '2. Process',
		text: 'Once you’ve provided your requirements via our conversational chat interface, our platform automatically maps how all your data relates, learning and defining your business context so everyone can understand it.',
	},
	{
		title: '3. Generate',
		text: 'Ekai automatically builds technical documentation, models, and tables, and populates a business catalog with documented business concepts.',
	},
	{
		title: '4. Generate',
		text: 'Ekai automatically builds technical documentation, models, and tables, and populates a business catalog with documented business concepts.',
	},
	{
		title: '5. Generate',
		text: 'Ekai automatically builds technical documentation, models, and tables, and populates a business catalog with documented business concepts.',
	},
];

function Slider() {
	const [current, setCurrent] = useState(1); // start at first REAL slide
	const [transitioning, setTransitioning] = useState(true);
	const trackRef = useRef(null);

	const slides = [
		steps[steps.length - 1], // clone of last
		...steps,
		steps[0], // clone of first
	];

	const prevSlide = () => {
		setCurrent((prev) => prev - 1);
	};

	const nextSlide = () => {
		setCurrent((prev) => prev + 1);
	};

	const handleTransitionEnd = () => {
		if (current === 0) {
			// If we're on the fake last slide (clone), jump to real last
			setTransitioning(false);
			setCurrent(steps.length);
		} else if (current === steps.length + 1) {
			// If we're on the fake first slide (clone), jump to real first
			setTransitioning(false);
			setCurrent(1);
		}
	};

	// Re-enable transition AFTER jump (to avoid animation flicker)
	useEffect(() => {
		if (!transitioning) {
			requestAnimationFrame(() => {
				setTransitioning(true);
			});
		}
	}, [transitioning]);

	return (
		<div className='slider'>
			<div className='slider-wrapper'>
				<div
					ref={trackRef}
					className='slider-track'
					style={{
						transform: `translateX(-${current * 105}%)`,
						transition: transitioning ? 'transform 0.5s ease-in-out' : 'none',
					}}
					onTransitionEnd={handleTransitionEnd}
				>
					{slides.map((step, index) => (
						<div key={index} className='slide'>
							<h3>{step.title}</h3>
							<p>{step.text}</p>
						</div>
					))}
				</div>
			</div>
			<div className='nav-btns'>
				<button className='nav-btn left' disabled={current === 0} onClick={prevSlide}>
					&#8249;
				</button>
				<button className='nav-btn right' disabled={current === steps.length - 1} onClick={nextSlide}>
					&#8250;
				</button>
			</div>
		</div>
	);
}

export default Slider;
