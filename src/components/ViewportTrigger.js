import React, { Children, cloneElement, isValidElement } from 'react';
import { useInView } from '../hooks/useInView';

export default function ViewportTrigger({ children, stagger = false, threshold = 0.2, once = false, onlyScrollDown = false, parentClass = 'stagger' }) {
	const [ref, inView] = useInView({ threshold, once, onlyScrollDown });

	if (stagger) {
		const kidsArray = Children.toArray(children);

		const enhancedChildren = kidsArray.map((child, i) => {
			if (!isValidElement(child)) return child;

			const extraClasses = `stagger ${inView ? 'visible' : ''}`;

			return cloneElement(child, {
				key: child.key || i,
				className: [child.props.className, extraClasses].filter(Boolean).join(' '),
			});
		});

		if (kidsArray.length === 1 && isValidElement(kidsArray[0])) {
			const onlyChild = kidsArray[0];
			return cloneElement(onlyChild, {
				ref,
				className: [onlyChild.props.className, parentClass, inView ? 'visible' : ''].filter(Boolean).join(' '),
				children: enhancedChildren[0].props.children,
			});
		}

		return <>{enhancedChildren}</>;
	}

	return (
		<div ref={ref} className={`fade-in-up ${inView ? 'visible' : ''}`}>
			{children}
		</div>
	);
}
