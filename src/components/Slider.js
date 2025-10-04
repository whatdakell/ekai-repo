// Slider.jsx
import React, { useState, useEffect } from 'react';
import '../styles/components/_slider.scss';

function Slider({ slides }) {
	const [current, setCurrent] = useState(0);
	const [slidesPerView, setSlidesPerView] = useState(3);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 768) {
				setSlidesPerView(1);
			} else if (window.innerWidth < 1024) {
				setSlidesPerView(2);
			} else {
				setSlidesPerView(3);
			}
		};

		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		// Reset index if it's out of bounds when slidesPerView changes
		if (current > slides.length - slidesPerView) {
			setCurrent(Math.max(0, slides.length - slidesPerView));
		}
	}, [slidesPerView, current, slides.length]);

	const maxScroll = slides.length - slidesPerView;

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
						transform: `translateX(-${current * (100 / slidesPerView)}%)`,
					}}
				>
					{slides.map((step, index) => (
						<div
							className='slide'
							key={index}
							style={{
								flex: `0 0 calc(${100 / slidesPerView}% - ${slidesPerView > 1 ? '20px' : '0px'})`,
							}}
						>
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
