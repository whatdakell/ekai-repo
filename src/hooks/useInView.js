import { useState, useEffect, useRef } from 'react';

export function useInView(options = {}) {
	const ref = useRef(null);
	const [inView, setInView] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setInView(true);
				} else {
					setInView(false);
				}
			},
			{ threshold: 0.3, ...options } // 20% visible by default
		);

		if (ref.current) observer.observe(ref.current);

		return () => {
			if (ref.current) observer.unobserve(ref.current);
		};
	}, [options]);

	return [ref, inView];
}
