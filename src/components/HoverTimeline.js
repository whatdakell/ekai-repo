import React, { useState } from 'react';
import '../styles/components/_hoverTimeline.scss';

export default function HoverTimeline({ data: { heading, copy, steps } }) {
	const [active, setActive] = useState(1);

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
				{steps.map((step) => (
					<div key={step.id} className={`timeline-step ${active === step.id ? 'active' : ''}`} onClick={() => setActive(step.id)} onMouseEnter={() => setActive(step.id)} onMouseLeave={() => setActive(null)}>
						<div className='timeline-step-header'>
							<span className='timeline-step-num heading-3'>{`0${step.id}`}</span>
							<span className='timeline-step-title heading-3'>{step.title}</span>
						</div>
						{active === step.id && (
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
