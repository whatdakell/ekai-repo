import React from 'react';
import '../styles/components/_card.scss';

export default function Card({ children, className }) {
	return <div className={`card ${className || ''}`}>{children}</div>;
}
