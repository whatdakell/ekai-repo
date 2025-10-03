import { useState, useEffect, useRef } from 'react';

export function useInView(options = {}) {
	const { once = false, threshold = 0.3, ...rest } = options;
	const ref = useRef(null);
	const [inView, setInView] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setInView(true);
					if (once && ref.current) {
						// stop observing after first intersection
						observer.unobserve(ref.current);
					}
				} else if (!once) {
					setInView(false);
				}
			},
			{ threshold, ...rest }
		);

		if (ref.current) observer.observe(ref.current);

		return () => {
			if (ref.current) observer.unobserve(ref.current);
		};
	}, [once, threshold, rest]);

	return [ref, inView];
}
