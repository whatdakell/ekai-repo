import React from 'react';
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
import ContactForm from './components/ContactForm';
import CopyMediaBlock from './components/CopyMediaBlock';
import ViewportTrigger from './components/ViewportTrigger';
import CopyBox, { CopyBoxWithInner } from './components/CopyBox';

function App() {
	return (
		<div className='App'>
			<HeaderNav />
			<Hero headline={content.hero.headline} copy={content.hero.copy} steps={content.hero.steps} />

			<section className='inner-max-width center anchor' id='about'>
				<ViewportTrigger>
					<CopyBox variant='org' className='inner-max-width-tight' heading={content.organizationModule.headline} copy={content.organizationModule.copy} />
					<div className='cards'>
						{content.organizationModule.cards.map((card, index) => (
							<Card key={index}>
								<h3>{card.title}</h3>
								<ViewportTrigger stagger>
									<ul>
										{card.cardList.map((list, i) => (
											<li key={i}>{list}</li>
										))}
									</ul>
								</ViewportTrigger>
							</Card>
						))}
					</div>
					<Button href='#contact' text='Book a demo' btnStyle='btn-gradient' />
				</ViewportTrigger>
			</section>

			<SliderSection content={content.slider} />

			<ViewportTrigger>
				<ViewportTrigger stagger>
					<CopyMediaBlock data={content.orgData} />
				</ViewportTrigger>
			</ViewportTrigger>

			<ViewportTrigger>
				<section className='content inner-max-width'>
					<CopyBox className='inner-max-width-tight' heading={content.dataProject.heading} />
					<ViewportTrigger stagger>
						<div className='cards two-grid'>
							{content.dataProject.cards.map((card, index) => (
								<div className='card' key={index}>
									<h3>{card.title}</h3>
									<p>{card.copy}</p>
								</div>
							))}
						</div>
					</ViewportTrigger>
					<Button href='#contact' text='Book a demo' btnStyle='btn-gradient' />
				</section>
			</ViewportTrigger>

			<ViewportTrigger>
				<CopyBox variant='left' className='inner-max-width vertical-spacing' heading={content.backedByAI.heading} image={{ src: content.backedByAI.imgSrc }} />
			</ViewportTrigger>

			<ViewportTrigger>
				<div className='content ek-for-everyone'>
					<HoverAccordion data={content.accordion} />
					<div className='inner-max-width-tight'>
						<p className='larger-p margin-bottom-40'>{content.accordion.footnote}</p>
						<Button href='#contact' text='Book a demo' btnStyle='btn-gradient' />
					</div>
				</div>
			</ViewportTrigger>

			<ViewportTrigger>
				<section className='content inner-max-width center anchor' id='team'>
					<Team data={content.teamSection} />
				</section>
			</ViewportTrigger>

			<div className='anchor' id='how'>
				<HoverTimeline data={content.hoverTimeline} />
			</div>

			<ViewportTrigger>
				<CopyMediaBlock data={content.videoBlock} />
			</ViewportTrigger>

			<ViewportTrigger>
				<div className='anchor' id='pricing'>
					<PricingTable data={content.pricingTable} />
				</div>
			</ViewportTrigger>

			<div className='content'>
				<Faq data={content.faq} />
			</div>

			<ViewportTrigger>
				<div className='content'>
					<CopyBoxWithInner
						wrapperClass='inner-max-width-tight'
						heading={content.liberateData.heading}
						copy={content.liberateData.copy}
						button={{
							href: '#contact',
							text: 'Book a demo',
							style: 'btn-gradient',
						}}
					/>
				</div>
			</ViewportTrigger>

			<div className='anchor' id='contact'>
				<ContactForm />
			</div>

			<Footer />
		</div>
	);
}

export default App;
