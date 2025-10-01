import React from 'react';
import '../styles/components/_pricingTimeline.scss';

const plans = [
	{
		name: 'Trial',
		price: 'Free',
		description: ['10-day free trial', 'One developer seat', '2 logical models (max 25 tables)', '5 semantic models'],
		subPlan: {
			title: 'Starter',
			features: ['Ekai cloud setup', 'Standard integrations', 'Logical data modelling', 'Semantic modelling'],
		},
	},
	{
		name: 'Enterprise',
		price: 'Custom pricing',
		description: ['Unlimited seats', 'Agreed logical models per month/installment', 'Agreed semantic models per month/installment', 'Agreed code runs with analytical questions'],
		subPlan: {
			title: 'Managed Cloud',
			features: ['Ekai managed cloud setup', 'Standard & custom integrations', 'Logical data modelling', 'Semantic modelling', 'Code run and analytics', 'Ekai 24/7 support'],
		},
	},
	{
		name: 'Enterprise+',
		price: 'Custom pricing',
		description: ['Unlimited seats', 'Agreed logical models per month/installment', 'Agreed semantic models per month/installment', 'Agreed code runs with analytical questions'],
		subPlan: {
			title: 'Customer Cloud',
			features: ['Customer cloud setup', 'Standard & custom integrations', 'Logical data modelling', 'Semantic modelling', 'Code run and analytics', 'Ekai customer specific L3 support'],
		},
	},
];

export default function PricingTable() {
	return (
		<div className='pricing-section inner-max-width-tight'>
			<h2>ekai - Business Data Lab pricing</h2>

			<div className='pricing-grid'>
				{plans.map((plan, index) => (
					<div key={index} className='pricing-card'>
						<h3>{plan.name}</h3>
						<div className='top-price border-card'>
							<p className='price t30-text'>{plan.price}</p>
							<ul className='description'>
								{plan.description.map((item, i) => (
									<li key={i}>{item}</li>
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
				))}
			</div>

			<p className='note'>Ekai also offers add-on pricing, volume, and payment discounts. Contact one of our team to learn more.</p>
		</div>
	);
}
