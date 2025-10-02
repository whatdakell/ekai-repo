import React from 'react';
import logo from './logo.svg';
import './styles/main.scss';
import Hero from './components/Hero';
import HeaderNav from './components/HeaderNav';
import SliderSection from './components/SliderSection';
import HoverAccordion from './components/HoverAccordion';
import Team from './components/Team';
import HoverTimeline from './components/HoverTimeline';

import PricingTable from './components/PricingTable';
import Faq from './components/Faq';
import Footer from './components/Footer';
import { content } from './content/content';
import Button from './components/Button';
import Card from './components/Card';

function App() {
	return (
		<div className='App'>
			<div className='box-background'>
				{/* Main Nav */}
				<HeaderNav />
				{/* Hero Component */}
				<Hero headline={content.hero.headline} copy={content.hero.copy} steps={content.hero.steps} />

				<section className='vertical-spacing inner-max-width center'>
					<div className='copy-box inner-max-width-tight'>
						<h2 dangerouslySetInnerHTML={{ __html: content.organizationModule.headline }}></h2>
						<p dangerouslySetInnerHTML={{ __html: content.organizationModule.copy }}></p>
					</div>
					<div className='cards'>
						{content.organizationModule.cards.map((card, index) => (
							<Card key={index}>
								<h3>{card.title}</h3>
								<ul>
									{card.cardList.map((list, i) => (
										<li key={i}>{list}</li>
									))}
								</ul>
							</Card>
						))}
					</div>
					<Button href='#' text='Book a demo' btnStyle='btn-yellow'></Button>
				</section>
				<div className='box-background vertical-spacing'>
					<SliderSection />
					<section className='inner-max-width center vertical-spacing'>
						<div className='copy-box inner-max-width-tight'>
							<h2>
								Your organization has <em>the data...</em>
								<br />
								but why is it so <em>difficult</em> to use?
							</h2>
							<img className='figure' src='/images/business-fig.png' />
							<p className='larger-p'>
								On average, data projects take <strong>3–6 months to complete</strong>. Collaboration between business and IT is often filled with friction, reducing time to value, velocity and—eventually—innovation.
							</p>
						</div>
					</section>
				</div>

				{/* Will make reusable */}
				<div className='box-background reverse'>
					<section className='content inner-max-width'>
						<div className='copy-box inner-max-width-tight'>
							<h2>
								With Ekai, data projects can be measured <em>in hours</em>, not months
							</h2>
						</div>

						<div className='cards two-grid'>
							<div className='card'>
								<h3>11X faster data project execution</h3>
								<p>Ekai has helped companies complete data projects that would have taken months in mere hours. Our platform removes delays and makes analytical use cases available almost immediately.</p>
							</div>
							<div className='card'>
								<h3>Self-service operation with no more waiting for answers</h3>
								<p>Our AI-assisted workflow means business teams can work independently without worrying about breaking things. Plus, our automated IT processes ensure everything is always kept up to date.</p>
							</div>
							<div className='card'>
								<h3>Enterprise-grade security and governance</h3>
								<p>All transformation and analytics code executes within your environment and data never leaves your infrastructure. IT maintains full control with automated documentation, ensuring compliance and governance at scale.</p>
							</div>
							<div className='card'>
								<h3>Significant cost savings over time</h3>
								<p>Business teams reduce analytical development costs by 70-80% while making your data available to everyone. This time and cost savings can be redistributed to other crucial projects.</p>
							</div>
						</div>
						<a href='#' className='btn btn-gradient'>
							Book a demo
						</a>
					</section>
					<div className='copy-box  copy-box-left inner-max-width'>
						<h2>Backed by proud partners within the data and AI community</h2>
						<div className='copy-box-p'>
							<img src='/images/ai-community.png' />
						</div>
					</div>
				</div>
			</div>
			<div className='box-background full'>
				<div className='content ek-for-everyone'>
					<HoverAccordion />
					<div className='inner-max-width-tight'>
						<p className='larger-p margin-bottom-40'>
							On average, data projects take <strong>3–6 months to complete</strong>. Collaboration between business and IT is often filled with friction, reducing time to value, velocity and—eventually—innovation.
						</p>
						<a href='#' className='btn btn-gradient'>
							Book a demo
						</a>
					</div>
				</div>
				<section className='content inner-max-width center'>
					<Team />
				</section>
				<HoverTimeline />
			</div>
			<div className='box-background full'>
				<section className='content inner-max-width center'>
					<div className='copy-box inner-max-width-tight'>
						<h2>
							See how data <em>can</em> be this easy in this short overview
						</h2>
						<img className='figure' src='/images/business-fig.png' />
					</div>
				</section>

				<PricingTable />

				<div className='content'>
					<Faq />
				</div>
			</div>
			<div className='box-background reverse'>
				<div className='content'>
					<div className=' copy-box copy-box-left  inner-max-width-tight'>
						<div className='copy-box-inner'>
							<h2>
								Isn't it time to <em>liberate </em>
								your data?
							</h2>
							<p>While you're stuck waiting on answers, decisions stall. Join enterprises who've cut their data project timelines from 3-6 months down to a few hours</p>
						</div>

						<a href='#' className='btn btn-gradient'>
							Book a demo
						</a>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default App;
