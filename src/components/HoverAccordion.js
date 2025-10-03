import React, { useState } from 'react';
import '../styles/components/_hoverAccordion.scss';
import ViewportTrigger from './ViewportTrigger';

function HoverAccordion({ data: { heading, tableHeader, roles } }) {
	const [activeIndex, setActiveIndex] = useState(null);

	const toggle = (index) => {
		setActiveIndex(index === activeIndex ? null : index);
	};

	return (
		<div className='accordion-section inner-max-width-tight'>
			<h2>{heading}</h2>
			<ViewportTrigger stagger threshold='0.5'>
				<div className='accordion border-card'>
					{/* Header row */}
					<div className='accordion-header'>
						{tableHeader.map((copy, index) => (
							<h4 className='t30-text' key={index}>
								{copy}
							</h4>
						))}
					</div>

					{/* Rows */}
					{roles.map((item, index) => (
						<div
							key={index}
							onMouseEnter={() => setActiveIndex(index)} // 👈 add active on hover
							onMouseLeave={() => setActiveIndex(null)}
							className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
							onClick={() => toggle(index)}
						>
							<div className='accordion-title'>
								<span className='t30-text'>{item.role}</span>
								<span className='arrow'>
									<img src='/images/keyboard_arrow_down.png' />
								</span>
							</div>

							{activeIndex === index && (
								<div className='accordion-content'>
									<p>{item.challenge}</p>
									<p>{item.withEkai}</p>
								</div>
							)}
						</div>
					))}
				</div>
			</ViewportTrigger>
		</div>
	);
}

export default HoverAccordion;
