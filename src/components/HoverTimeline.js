import React, { useState } from 'react';
import '../styles/components/_hoverTimeline.scss';
// import './styles/main.scss';
// import Slider from './Slider';

const steps = [
	{ id: 1, title: 'Connect', desc: 'Connect your data sources and instantly start building logical models.' },
	{ id: 2, title: 'Model', desc: 'Use our AI assistant to model your business context with ease.' },
	{ id: 3, title: 'Discover', desc: 'Explore your data semantically and find insights faster.' },
	{ id: 4, title: 'Contextualize', desc: 'Our Modelling AI agent validates with you on your key business context before finalizing them. Multi-agent technology retains context memory, building and updating documentation for physical, logical, and semantic data.' },
	{ id: 5, title: 'Generate', desc: 'Automatically generate code packages and queries tailored to your analytics stack.' },
	{ id: 6, title: 'Publish', desc: 'Publish to your team’s preferred platforms and keep documentation updated.' },
	{ id: 7, title: 'Insights', desc: 'Self-service analytics with clear insights accessible across your organization.' },
];

export default function HoverTimeline() {
	const [active, setActive] = useState(1);

	return (
		<div className='how-section inner-max-width-tight'>
			<div className='how-header'>
				<h2>How it works</h2>
				<p>Our platform understands your data and builds a logical model as the foundation for your analytics. Guided by our AI assistant, your team can easily create semantic models tailored to your business use cases—making getting the answers you need both easy and actionable. Our autonomous AI agents are designed to handle each step with a few questions from you.</p>
			</div>

			{/* Progress Bar */}
			<div className='progress-bar'>
				<div
					className='progress-fill'
					style={{
						width: `${((active || 0) / steps.length) * 100}%`,
					}}
				/>
			</div>

			{/* Steps */}
			<div className='timeline-steps'>
				{steps.map((step) => (
					<div key={step.id} className={`timeline-step ${active === step.id ? 'active' : ''}`} onMouseEnter={() => setActive(step.id)} onMouseLeave={() => setActive(null)}>
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
