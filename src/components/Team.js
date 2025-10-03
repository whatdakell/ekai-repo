import React, { useState } from 'react';
import '../styles/components/_team.scss';

import ViewportTrigger from './ViewportTrigger';

const team = [
	{
		name: 'Mo Aidrus',
		title: 'Co-founder <br>& Chief Executive Officer',
		image: '/images/mo.jpg',
		shortBio: 'As a x2 founder, and a long-time advocate for freeing trapped data value inside the enterprise, Mo spent 20+ years as Managing Director at Accenture & Rayn before setting out to build Ekai.',
		fullBio: 'As a x2 founder, and a long-time advocate for freeing trapped data value inside the enterprise, Mo spent 20+ years as Managing Director at Accenture & Rayn before setting out to build Ekai. With deep experience in enterprise strategy and execution, Mo continues to lead Ekai’s mission to simplify analytics for all.',
	},
	{
		name: 'Hussnain Ahmed',
		title: 'Co-founder <br>& Chief AI Officer',
		image: '/images/hussnain.jpg',
		shortBio: 'Hussnain puts the AI in Ekai. He brings 20+ years of experience architecting innovative data strategy by introducing AI operations to tech teams.',
		fullBio: 'Hussnain puts the AI in Ekai. He brings 20+ years of experience architecting innovative data strategy by introducing AI operations to tech teams. Previously, he held senior leadership roles at IBM and Accenture, where he led enterprise-wide AI and automation initiatives.',
	},
	{
		name: 'Tero Miikki',
		title: 'Chief Commercial Officer <br>& Global Partnership Lead',
		image: '/images/tero.png',
		shortBio: 'Tero is a seasoned data leader and entrepreneur. As a CDO and data leader he has led major data/AI transformation and governance programs at UPM, a global manufacturing company & advanced engineering practices at Microsoft.',
		fullBio:
			'Tero is a seasoned data leader and entrepreneur. As a CDO and data leader he has led major data/AI transformation and governance programs at UPM, a global manufacturing company & advanced engineering practices at Microsoft. Tero has also shaped data strategy at Sanoma Media Finland. With expertise in business development, go-to-market data cloud strategies, and IT procurement, Tero has served management teams, chaired governance boards, and overseen complex data ecosystems. In addition to his CCO role, Tero currently leads Ekai’s global GTM efforts including its partnership with Snowflake.',
	},
];
export default function Team({ data: { heading, team } }) {
	const [expandedIndex, setExpandedIndex] = useState(null);

	const toggleExpand = (index) => {
		setExpandedIndex(expandedIndex === index ? null : index);
	};

	return (
		<div className='team-section'>
			<h2 dangerouslySetInnerHTML={{ __html: heading }}></h2>
			<div className='team-grid'>
				{team.map((member, index) => {
					const isExpanded = expandedIndex === index;
					return (
						<ViewportTrigger stagger>
							<div key={index} className={`team-card ${isExpanded ? 'expanded' : ''}`}>
								<h3>{member.name}</h3>
								<p className='title center' dangerouslySetInnerHTML={{ __html: member.title }}></p>
								<img src={member.image} alt={member.name} />

								<p className='bio'>{isExpanded ? member.fullBio : member.shortBio}</p>
								<button className='read-more' onClick={() => toggleExpand(index)}>
									{isExpanded ? 'Read less ^' : 'Read more v'}
								</button>
							</div>
						</ViewportTrigger>
					);
				})}
			</div>
		</div>
	);
}
