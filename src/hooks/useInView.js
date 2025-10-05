import { useState, useEffect, useRef } from 'react';

export function useInView(options = {}) {
	const { once = false, threshold = 0.3, ...rest } = options;
	const ref = useRef(null);
	const [inView, setInView] = useState(false);

	useEffect(() => {
		const node = ref.current; // ✅ snapshot the current element once
		if (!node) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setInView(true);

					// stop observing if once = true
					if (once) observer.unobserve(node);
				} else if (!once) {
					setInView(false);
				}
			},
			{ threshold, ...rest }
		);

		observer.observe(node);

		// cleanup uses the same node reference
		return () => {
			if (node) observer.unobserve(node);
		};
	}, [once, threshold, rest]);

	return [ref, inView];
}
