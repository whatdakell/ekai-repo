import React, { useState, memo } from 'react';
import '../styles/components/_faq.scss';
import ViewportTrigger from './ViewportTrigger';

export default memo(function Faq({ data: { heading, faqs } }) {
	const [activeIndex, setActiveIndex] = useState(null);

	const toggle = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<div className='faq-section inner-max-width'>
			<h2>{heading}</h2>
			<ViewportTrigger stagger>
				<div className='faq-list'>
					{faqs.map((faq, index) => (
						<div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`} onClick={() => toggle(index)}>
							<div className='faq-question'>
								<span className='t30-text'>{faq.question}</span>
								<span className='icon'>{activeIndex === index ? '−' : '+'}</span>
							</div>
							{activeIndex === index && (
								<div className='faq-answer'>
									<p dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
								</div>
							)}
						</div>
					))}
				</div>
			</ViewportTrigger>
		</div>
	);
});
