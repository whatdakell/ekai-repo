import React from 'react';
import '../styles/layout/_header.scss';
// import './styles/main.scss';
import Slider from './Slider';

function SliderSection({}) {
	return (
		<div className='slider-section'>
			<div className='copy-box  copy-box-left inner-max-width'>
				<h2>
					Ekai exists because using data <em>should</em> be easy
				</h2>
				<div className='copy-box-p'>
					<p> Our platform breaks through the data bottleneck and makes data usable by anyone by automatically transforming your business domain data into a self-service intelligence layer.</p>
					<p>Then, any team member can explore data directly, ask business questions, and get the answers they’re looking for, regardless of technical skills.</p>
				</div>
			</div>
			<section className='steps-section'>
				<Slider />
			</section>
			<button className='btn btn-gradient center'>Learn more</button>
		</div>
	);
}

export default SliderSection;
