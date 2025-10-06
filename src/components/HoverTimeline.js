import React, { useState } from 'react';
import '../styles/components/_hoverTimeline.scss';

export default function HoverTimeline({ data: { heading, copy, steps } }) {
	const [active, setActive] = useState(0);

	const progressIndex = active !== null ? active : -1;

	return (
		<div className='how-section inner-max-width-tight'>
			<div className='how-header'>
				<h2>{heading}</h2>
				<p dangerouslySetInnerHTML={{ __html: copy }}></p>
			</div>

			{/* progress bar */}
			<div className='progress-bar'>
				<div
					className='progress-fill'
					style={{
						width: progressIndex >= 0 ? `${((progressIndex + 1) / steps.length) * 100}%` : '0%',
					}}
				/>
			</div>

			{/* steps */}
			<div className='timeline-steps'>
				{steps.map((step, index) => (
					<div key={index} className={`timeline-step ${active === index ? 'active' : ''}`} onMouseEnter={() => setActive(index)} onMouseLeave={() => setActive(null)} onClick={() => setActive(index)}>
						<div className='timeline-step-header'>
							<span className='timeline-step-num heading-3'>{`0${index + 1}`}</span>
							<span className='timeline-step-title heading-3'>{step.title}</span>
						</div>

						{active === index && (
							<div className='timeline-step-content show'>
								<p dangerouslySetInnerHTML={{ __html: step.desc }}></p>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
}
