import React, { useState } from 'react';
import '../styles/components/_contactForm.scss';
import Card from './Card';

export default function ContactForm() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		company: '',
		role: '',
		message: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Form submitted:', formData);
		// Hook up AWS
	};

	return (
		<div className='contact-form-container'>
			<h2 className='contact-title'>Get in touch</h2>
			<Card>
				<form className='contact-form' onSubmit={handleSubmit}>
					<div className='form-row'>
						<div className='form-group'>
							<label className='t30-text'>
								Name <span className='required'>*</span>
							</label>
							<input type='text' name='name' placeholder='Enter your name' value={formData.name} onChange={handleChange} required />
						</div>
						<div className='form-group'>
							<label className='t30-text'>
								Email <span className='required'>*</span>
							</label>
							<input type='email' name='email' placeholder='Enter your email' value={formData.email} onChange={handleChange} required />
						</div>
					</div>

					<div className='form-row'>
						<div className='form-group'>
							<label className='t30-text'>
								Company <span className='required'>*</span>
							</label>
							<input type='text' name='company' placeholder='Enter your company' value={formData.company} onChange={handleChange} required />
						</div>
						<div className='form-group'>
							<label className='t30-text'>Role</label>
							<input type='text' name='role' placeholder='Enter your company role' value={formData.role} onChange={handleChange} />
						</div>
					</div>

					<div className='form-group'>
						<label className='t30-text'>Message</label>
						<input type='text' name='message' placeholder='Let us know what you need help with' value={formData.message} onChange={handleChange} />
					</div>

					<button type='submit' className='send-btn btn btn-yellow'>
						Send
					</button>
					<p className='mandatory-note'>* Mandatory field</p>
				</form>
			</Card>
		</div>
	);
}
