import React, { useState } from 'react';
import '../styles/components/_faq.scss';
import ViewportTrigger from './ViewportTrigger';

const faqs = [
	{
		question: 'What does Ekai do?',
		answer: 'Ekai helps you connect your data platforms, model logical and semantic data, and provide analytics-ready insights so business users can self-serve answers.',
	},
	{
		question: 'Who is Ekai for?',
		answer: `We like to say “Ekai is for everyone!” and we mean it.<br><br>Ekai empowers everyone who has a passion for data, with or without IT skills. Ekai enables any business function to skip waiting on data teams and get straight to prepped data they need, speeding up time-to-value. Businesses can rapidly innovate in their own data domains. IT meanwhile, gets full documentation for easy governance.`,
	},
	{
		question: 'How can Ekai help me or my team?',
		answer: 'Ekai enables business teams to operate independently while IT retains control and oversight, cutting project delivery from months to hours.',
	},
	{
		question: 'Will my enterprise data remain safe with Ekai?',
		answer: 'Yes. All data transformations run inside your environment, ensuring data security and governance compliance.',
	},
	{
		question: 'What data sources does Ekai support?',
		answer: 'Ekai integrates with popular data platforms, catalogs, observability tools, and repositories—without needing to replace existing tools.',
	},
	{
		question: 'How long does it take to implement Ekai?',
		answer: 'Ekai can be set up within hours, not months, thanks to its automated data modeling and AI-assisted workflow.',
	},
];

export default function Faq() {
	const [activeIndex, setActiveIndex] = useState(null);

	const toggle = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<div className='faq-section inner-max-width'>
			<h2>FAQs</h2>
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
}
