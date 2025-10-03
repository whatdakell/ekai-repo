import React from 'react';
import { useInView } from '../hooks/useInView';

const ViewportTrigger = ({ children, className = '' }) => {
	const [ref, inView] = useInView();

	return (
		<div ref={ref} className={`fadeUp ${inView ? 'in-viewport' : ''} ${className}`}>
			{children}
		</div>
	);
};

export default ViewportTrigger;
