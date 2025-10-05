import React, { memo } from 'react';
export default memo(function Button({ href, text, btnStyle }) {
	return (
		<a href={href ? href : '#'} className={`btn ${btnStyle}`}>
			{text}
		</a>
	);
});
