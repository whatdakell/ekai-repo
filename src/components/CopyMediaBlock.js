import React, { useRef, useState, useEffect, forwardRef } from 'react';
import '../styles/components/_copyMediaBlock.scss';

const CopyMediaBlock = forwardRef(function CopyMediaBlock({ data: { type = 'video', src, poster, alt, heading, copy } }, forwardedRef) {
	const mediaRef = useRef(null);
	const containerRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [isVisible, setIsVisible] = useState(false);

	// 🪄 merge both refs (forwarded + local)
	const setRefs = (node) => {
		containerRef.current = node;
		if (typeof forwardedRef === 'function') forwardedRef(node);
		else if (forwardedRef) forwardedRef.current = node;
	};

	const handlePlayPause = () => {
		if (!mediaRef.current) return;
		if (isPlaying) {
			mediaRef.current.pause();
			setIsPlaying(false);
		} else {
			mediaRef.current.play();
			setIsPlaying(true);
		}
	};

	useEffect(() => {
		const video = mediaRef.current;
		if (!video) return;

		const onPlay = () => setIsPlaying(true);
		const onPause = () => setIsPlaying(false);

		video.addEventListener('play', onPlay);
		video.addEventListener('pause', onPause);

		return () => {
			video.removeEventListener('play', onPlay);
			video.removeEventListener('pause', onPause);
		};
	}, []);

	// Scroll observer for zoom animation
	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.5 });

		if (containerRef.current) observer.observe(containerRef.current);
		return () => {
			if (containerRef.current) observer.unobserve(containerRef.current);
		};
	}, []);

	return (
		<section
			className='media-section inner-max-width-tight content'
			ref={setRefs} // ✅ merged refs used here
		>
			<h2 className='media-title' dangerouslySetInnerHTML={{ __html: heading }}></h2>

			<div className={`media-wrapper ${isVisible ? 'zoomed' : ''}`}>
				{type === 'video' ? (
					<>
						<video ref={mediaRef} className='media-element' src={src} poster={poster} playsInline onClick={handlePlayPause} />
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

			{copy && <p className='larger-p' dangerouslySetInnerHTML={{ __html: copy }}></p>}
		</section>
	);
});

export default CopyMediaBlock;
