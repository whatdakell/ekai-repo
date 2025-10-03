import React from 'react';
import '../styles/components/_pricingTimeline.scss';
import ViewportTrigger from './ViewportTrigger';

export default function PricingTable({ data: { heading, plans, footnote } }) {
	return (
		<div className='pricing-section inner-max-width-tight'>
			<h2>{heading}</h2>

			<div className='pricing-grid'>
				{plans.map((plan, index) => (
					<ViewportTrigger stagger>
						<div key={index} className='pricing-card'>
							<h3>{plan.name}</h3>
							<div className='top-price border-card'>
								<p className='price t30-text'>{plan.price}</p>
								<ul className='description'>
									{plan.description.map((item, i) => (
										<li key={i}>
											<p>{item}</p>
										</li>
									))}
								</ul>
							</div>

							<div className='sub-card'>
								<h4 className='t30-text border-wrapper'>{plan.subPlan.title}</h4>
								<ul>
									{plan.subPlan.features.map((feature, i) => (
										<li className='list-items' key={i}>
											<p>{feature}</p>
										</li>
									))}
								</ul>
							</div>
						</div>
					</ViewportTrigger>
				))}
			</div>

			<p className='note center'>{footnote}</p>
		</div>
	);
}
