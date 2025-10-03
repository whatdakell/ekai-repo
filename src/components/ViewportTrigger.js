import React, { Children, cloneElement, isValidElement } from 'react';
import { useInView } from '../hooks/useInView';

export default function ViewportTrigger({ children, stagger = false, threshold = 0.2, staggerDelay = 80, parentClass = 'stagger' }) {
	const [ref, inView] = useInView({ threshold });

	// CASE 1: stagger = true → enhance children + add parent class
	if (stagger) {
		const kidsArray = Children.toArray(children);

		const enhancedChildren = kidsArray.map((child, i) => {
			if (!isValidElement(child)) return child;

			const extraClasses = `stagger ${inView ? 'visible' : ''}`;

			return cloneElement(child, {
				key: child.key || i,
				className: [child.props.className, extraClasses].filter(Boolean).join(' '),
				// style: {
				// 	...(child.props.style || {}),
				// 	'--stagger-i': i,
				// 	'--stagger-delay': `${i * staggerDelay}ms`,
				// },
			});
		});

		// Wrap in original parent element if only one is passed (like <ul>…</ul>)
		if (kidsArray.length === 1 && isValidElement(kidsArray[0])) {
			const onlyChild = kidsArray[0];
			return cloneElement(onlyChild, {
				ref,
				className: [onlyChild.props.className, parentClass, inView ? 'visible' : ''].filter(Boolean).join(' '),
				children: enhancedChildren[0].props.children, // keep li’s staggered
			});
		}

		return <>{enhancedChildren}</>;
	}

	// CASE 2: no stagger → fallback to original wrapper div
	return (
		<div ref={ref} className={`fade-in-up ${inView ? 'visible' : ''}`}>
			{children}
		</div>
	);
}
