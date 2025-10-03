import React, { useState } from 'react';
import '../styles/components/_hoverTimeline.scss';

export default function HoverTimeline({ data: { heading, copy, steps } }) {
	const [active, setActive] = useState(null);

	const toggle = (index) => {
		setActive(index === active ? null : index);
	};

	return (
		<div className='how-section inner-max-width-tight'>
			<div className='how-header'>
				<h2>{heading}</h2>
				<p>{copy}</p>
			</div>
			{/* progress bar */}
			<div className='progress-bar'>
				<div
					className='progress-fill'
					style={{
						width: `${((active || 0) / steps.length) * 100}%`,
					}}
				/>
			</div>
			{/* steps */}
			<div className='timeline-steps'>
				{steps.map((step, index) => (
					<div key={index} className={`timeline-step ${active === index ? 'active' : ''}`} onClick={() => toggle(index)} onMouseEnter={() => setActive(index)} onMouseLeave={() => setActive(null)}>
						<div className='timeline-step-header'>
							<span className='timeline-step-num heading-3'>{`0${index + 1}`}</span>
							<span className='timeline-step-title heading-3'>{step.title}</span>
						</div>
						{active === index && (
							<div className='timeline-step-content'>
								<p>{step.desc}</p>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
}
