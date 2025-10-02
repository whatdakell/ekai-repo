import React from 'react';
export default function Button({ href, text, btnStyle }) {
	return (
		<a href={href ? href : '#'} className={`btn ${btnStyle}`}>
			{text}
		</a>
	);
}
