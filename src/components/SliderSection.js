import React from 'react';
import '../styles/layout/_header.scss';
// import './styles/main.scss';
import Slider from './Slider';
import ViewportTrigger from './ViewportTrigger';
import Button from './Button';
function SliderSection({ content }) {
	return (
		<ViewportTrigger>
			<div className='slider-section vertical-spacing'>
				<div className='copy-box  copy-box-left inner-max-width'>
					<h2 dangerouslySetInnerHTML={{ __html: content.headline }}></h2>
					<div className='copy-box-p'>
						<p dangerouslySetInnerHTML={{ __html: content.copy }}></p>
					</div>
				</div>

				<section className='steps-section'>
					<Slider slides={content.steps} />
				</section>
				<Button href='#how' text='Learn more' btnStyle='btn-gradient center'></Button>
			</div>
		</ViewportTrigger>
	);
}

export default SliderSection;
