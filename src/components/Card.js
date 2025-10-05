import React, { memo } from 'react';
import '../styles/components/_card.scss';

export default memo(function Card({ children, className }) {
	return <div className={`card ${className || ''}`}>{children}</div>;
});
