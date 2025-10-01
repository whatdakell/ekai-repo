import React from 'react';
import logo from './logo.svg';
import './styles/main.scss';
import Hero from './components/Hero';
import HeaderNav from './components/HeaderNav';
import SliderSection from './components/SliderSection';

function App() {
	return (
		<div className='App'>
			<div className='box-background'>
				<HeaderNav />
				{/* Just placeholder component */}
				<Hero headline='Free <em>your data</em>. Empower everyone.' copy='Ekai is an agentic AI platform making your organization’s data work easier for everyone—with value delivered faster. <br><br> Through our self-service platform, any business function can access and explore existing company analytical data independently. Your data is finally understandable, accessible, and actionable across your entire organization.' />

				<section className='content inner-max-width'>
					<div className='copy-box inner-max-width-tight'>
						<h2>
							Your organization has <em>the data...</em>
							<br />
							but why is it so <em>difficult</em> to use?
						</h2>
						<p>
							On average, data projects take <strong>3–6 months to complete</strong>. Collaboration between business and IT is often filled with friction, reducing time to value, velocity and—eventually—innovation.
						</p>
					</div>

					<div className='cards'>
						<div className='card'>
							<h3>Business teams face constant barriers</h3>
							<ul>
								<li>Business users don’t have the skills to quickly test data-driven ideas</li>
								<li>Accessing and exploring existing company data independently is difficult</li>
								<li>Reports and dashboards are not flexible for fast self-service</li>
							</ul>
						</div>
						<div className='card'>
							<h3>IT teams are overwhelmed</h3>
							<ul>
								<li>Small IT teams are burdened with too many projects and limited capacity</li>
								<li>Constant pressure to deliver quickly leads to long timelines or bloated headcount</li>
								<li>Developing business unit use cases consumes time and slows infrastructure management</li>
							</ul>
						</div>
					</div>
					<a href='#' className='btn btn-yellow'>
						Book a demo
					</a>
				</section>
				<SliderSection />
				<section className='features'>
					<h2>
						With Ekai, data projects can be measured <em>in hours</em>, not months
					</h2>
					<div className='feature-grid'>
						<div className='feature'>
							<h3>11X faster data project execution</h3>
							<p>Ekai has helped companies complete data projects that would have taken months in mere hours...</p>
						</div>
						<div className='feature'>
							<h3>Self-service operation</h3>
							<p>Our AI-assisted workflow means business teams can work independently without waiting for IT...</p>
						</div>
						<div className='feature'>
							<h3>Enterprise-grade security</h3>
							<p>All transformation and analytics code executes within your environment...</p>
						</div>
						<div className='feature'>
							<h3>Significant cost savings</h3>
							<p>Business teams reduce analytical development costs by 70–80% while making data available to everyone...</p>
						</div>
					</div>
					<button className='book-demo'>Book a demo</button>
				</section>
			</div>
		</div>
	);
}

export default App;
