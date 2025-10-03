import React, { useState } from 'react';
import '../styles/components/_hoverAccordion.scss';
import ViewportTrigger from './ViewportTrigger';
const roles = [
	{
		role: 'Sales',
		challenge: 'No real-time campaign visibility, manual analysis delays optimization decisions.',
		withEkai: 'With an AI-assisted analytics workspace, marketing won’t be stuck with reporting vanity metrics when they want to be improving conversation rates.',
	},
	{
		role: 'Marketing',
		challenge: 'No real-time campaign visibility, manual analysis delays optimization decisions.',
		withEkai: 'With an AI-assisted analytics workspace, marketing won’t be stuck with reporting vanity metrics when they want to be improving conversation rates.',
	},
	{
		role: 'Finance',
		challenge: 'No real-time campaign visibility, manual analysis delays optimization decisions.',
		withEkai: 'With an AI-assisted analytics workspace, marketing won’t be stuck with reporting vanity metrics when they want to be improving conversation rates.',
	},
	{
		role: 'Head of Analytics',
		challenge: 'No real-time campaign visibility, manual analysis delays optimization decisions.',
		withEkai: 'With an AI-assisted analytics workspace, marketing won’t be stuck with reporting vanity metrics when they want to be improving conversation rates.',
	},
	{
		role: 'Data Engineer',
		challenge: 'No real-time campaign visibility, manual analysis delays optimization decisions.',
		withEkai: 'With an AI-assisted analytics workspace, marketing won’t be stuck with reporting vanity metrics when they want to be improving conversation rates.',
	},
];
function HoverAccordion() {
	const [activeIndex, setActiveIndex] = useState(null);

	const toggle = (index) => {
		setActiveIndex(index === activeIndex ? null : index);
	};

	return (
		<div className='accordion-section inner-max-width-tight'>
			<h2>Ekai is for everyone</h2>
			<ViewportTrigger stagger threshold='0.5'>
				<div className='accordion border-card'>
					{/* Header row */}
					<div className='accordion-header'>
						<h4 className='t30-text'>Role/Function</h4>
						<h4 className='t30-text'>Challenge</h4>
						<h4 className='t30-text'>With Ekai</h4>
					</div>

					{/* Rows */}
					{roles.map((item, index) => (
						<div
							key={index}
							// onMouseEnter={() => setActiveIndex(index)} // 👈 add active on hover
							// onMouseLeave={() => setActiveIndex(null)}
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
