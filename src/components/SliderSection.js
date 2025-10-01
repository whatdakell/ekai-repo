import React from 'react';
import '../styles/layout/_header.scss';
// import './styles/main.scss';
import Slider from './Slider';

function SliderSection({}) {
	return (
		<div className='slider-section'>
			<div className='copy-box  copy-box-left inner-max-width-tight'>
				<h2>
					Ekai exists because using data <em>should</em> be easy
				</h2>
				<p>Our platform breaks through the data bottleneck and makes data usable by automatically transforming your business domain data into a self-service intelligence layer.</p>
			</div>
			<section className='steps-section'>
				<Slider />
			</section>
			<button className='btn btn-gradient center'>Learn more</button>
		</div>
	);
}

export default SliderSection;
