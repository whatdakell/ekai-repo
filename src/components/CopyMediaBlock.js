import React, { useRef, useState, useEffect } from 'react';
import '../styles/components/_CopyMediaBlock.scss';
export default function CopyMediaBlock({ data }) {
	console.log(data);
	const mediaRef = useRef(null);
	const containerRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [isVisible, setIsVisible] = useState(false);

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

	// Sync state with actual video events (in case user uses keyboard/taps video)
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
		<section className='media-section inner-max-width-tight content' ref={containerRef}>
			<h2 className='media-title' dangerouslySetInnerHTML={{ __html: data.headline }}></h2>

			<div className={`media-wrapper ${isVisible ? 'zoomed' : ''}`}>
				{data.type === 'video' ? (
					<>
						<video
							ref={mediaRef}
							className='media-element'
							src={data.src}
							poster={data.poster}
							playsInline
							onClick={handlePlayPause} // allow clicking video itself
						/>
						{!isPlaying && (
							<button className='custom-play-btn' onClick={handlePlayPause}>
								<span className='play-icon'>▶</span>
							</button>
						)}
					</>
				) : (
					<img src={data.src} alt={data.alt || 'Media preview'} className='media-element' />
				)}
			</div>
			{data.copy && <p className='larger-p' dangerouslySetInnerHTML={{ __html: data.copy }}></p>}
		</section>
	);
}
