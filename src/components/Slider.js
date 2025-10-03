import React, { useState, useEffect, useRef } from 'react';
// import './styles/main.scss';
import ViewportTrigger from './ViewportTrigger';

function Slider({ slides }) {
	const [current, setCurrent] = useState(0);
	const maxScroll = 2.5;
	const prevSlide = () => {
		if (current > 0) setCurrent(current - 1);
	};

	const nextSlide = () => {
		if (current < maxScroll) {
			setCurrent(current + 1);
		}
	};
	return (
		<div className='slider'>
			<div className='slider-wrapper'>
				<div
					className='slider-track'
					style={{
						transform: `translateX(-${current * 100}%)`,
					}}
				>
					{slides.map((step, index) => (
						<div className='slide'>
							<h3>{step.title}</h3>
							<p dangerouslySetInnerHTML={{ __html: step.text }}></p>
						</div>
					))}
				</div>
			</div>
			<div className='nav-btns'>
				<button className='nav-btn left' disabled={current === 0} onClick={prevSlide}>
					&#8249;
				</button>
				<button className='nav-btn right' disabled={current >= maxScroll} onClick={nextSlide}>
					&#8250;
				</button>
			</div>
		</div>
	);
}

export default Slider;
