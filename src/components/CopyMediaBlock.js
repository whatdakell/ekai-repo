import React, { useRef, useState, useEffect } from 'react';
import '../styles/components/_CopyMediaBlock.scss';
export default function CopyMediaBlock({ type = 'video', src, poster, alt }) {
	const mediaRef = useRef(null);
	const containerRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [isVisible, setIsVisible] = useState(false);

	const handlePlayPause = () => {
		if (!mediaRef.current) return;
		if (isPlaying) {
			mediaRef.current.pause();
		} else {
			mediaRef.current.play();
		}
		setIsPlaying(!isPlaying);
	};

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.3 });

		if (containerRef.current) observer.observe(containerRef.current);
		return () => {
			if (containerRef.current) observer.unobserve(containerRef.current);
		};
	}, []);

	return (
		<section className='media-section' ref={containerRef}>
			<h2 className='media-title'>
				See how data <em>can</em> be this easy <br />
				in this short overview
			</h2>

			<div className={`media-wrapper ${isVisible ? 'zoomed' : ''}`}>
				{type === 'video' ? (
					<>
						<video ref={mediaRef} className='media-element' src={src} poster={poster} playsInline />
						{!isPlaying && (
							<button className='custom-play-btn' onClick={handlePlayPause}>
								<span className='play-icon'>▶</span>
							</button>
						)}
					</>
				) : (
					<img src={src} alt={alt || 'Media preview'} className='media-element' />
				)}
			</div>
		</section>
	);
}
