import React, { memo } from 'react';
import Button from './Button';
import '../styles/components/_copyBox.scss';

// Main CopyBox component
const CopyBox = memo(function CopyBox({ heading, copy, image, button, children, className = '', variant = 'default', id }) {
	const classes = ['copy-box', variant !== 'default' && `copy-box-${variant}`, variant === 'org' && 'org', className].filter(Boolean).join(' ');

	const renderHTML = (content) => (typeof content === 'string' && content.includes('<') ? <p dangerouslySetInnerHTML={{ __html: content }} /> : <p>{content}</p>);

	return (
		<div className={classes} id={id}>
			{heading && <h2 dangerouslySetInnerHTML={{ __html: heading }} />}
			{copy && renderHTML(copy)}

			{image && (
				<div className='copy-box-p'>
					<img src={image.src} alt={image.alt || ''} />
				</div>
			)}

			{children}

			{button && <Button href={button.href || '#'} text={button.text} btnStyle={button.style || 'btn-gradient'} />}
		</div>
	);
});

// Named export for the wrapper version
export const CopyBoxWithInner = memo(function CopyBoxWithInner({ heading, copy, button, className = '', wrapperClass = '' }) {
	return (
		<div className={`copy-box copy-box-left ${wrapperClass}`}>
			<div className={`copy-box-inner ${className}`}>
				{heading && <h2 dangerouslySetInnerHTML={{ __html: heading }} />}
				{copy && <p>{copy}</p>}
			</div>

			{button && <Button href={button.href || '#'} text={button.text} btnStyle={button.style || 'btn-gradient'} />}
		</div>
	);
});

export default CopyBox;
