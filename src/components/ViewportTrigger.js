import React from 'react';
import { useInView } from '../hooks/useInView';

export default function ViewportTrigger({ children, stagger = false }) {
	const [ref, inView] = useInView({ threshold: 0.2 });

	return (
		<div ref={ref} className={`${stagger ? 'stagger' : 'fade-in-up'} ${inView ? 'visible' : ''}`}>
			{children}
		</div>
	);
}
