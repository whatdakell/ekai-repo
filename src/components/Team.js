import React, { useState } from 'react';
import '../styles/components/_team.scss';

import ViewportTrigger from './ViewportTrigger';

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
						<ViewportTrigger stagger key={index}>
							<div className={`team-card ${isExpanded ? 'expanded' : ''}`}>
								<h3>{member.name}</h3>
								<p className='title center' dangerouslySetInnerHTML={{ __html: member.title }}></p>
								<img src={member.image} alt={member.name} />
								<p className='bio'>{member.shortBio}</p>
								{isExpanded && <p className='bio'>{member.fullBio}</p>}
								<button className='read-more' onClick={() => toggleExpand(index)}>
									{isExpanded ? (
										<>
											Read less <img src='/images/keyboard_arrow_down.png' alt='arrow' style={{ transform: 'rotate(180deg)' }} />
										</>
									) : (
										<>
											Read more <img src='/images/keyboard_arrow_down.png' alt='arrow' />
										</>
									)}
								</button>
							</div>
						</ViewportTrigger>
					);
				})}
			</div>
		</div>
	);
}
