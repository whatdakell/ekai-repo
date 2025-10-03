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
import ContactForm from './components/ContactForm';
import CopyMediaBlock from './components/CopyMediaBlock';
import ViewportTrigger from './components/ViewportTrigger';
// s;
function App() {
	return (
		<div className='App'>
			{/* nav */}
			<HeaderNav />
			{/* hero with step timeline nested in component*/}
			<Hero headline={content.hero.headline} copy={content.hero.copy} steps={content.hero.steps} />

			<section className='inner-max-width center'>
				<ViewportTrigger>
					<div className='copy-box org inner-max-width-tight'>
						<h2 dangerouslySetInnerHTML={{ __html: content.organizationModule.headline }}></h2>
						<p dangerouslySetInnerHTML={{ __html: content.organizationModule.copy }}></p>
					</div>
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
					<Button href='#contact' text='Book a demo' btnStyle='btn-yellow'></Button>
				</ViewportTrigger>
			</section>

			<SliderSection content={content.slider} />

			<ViewportTrigger>
				<CopyMediaBlock data={content.orgData} />
			</ViewportTrigger>

			{/* Will make reusable */}
			<ViewportTrigger>
				<section className='content inner-max-width '>
					<div className='copy-box inner-max-width-tight'>
						<h2 dangerouslySetInnerHTML={{ __html: content.dataProject.heading }}></h2>
					</div>
					<ViewportTrigger stagger>
						<div className='cards two-grid'>
							{content.dataProject.cards.map((card, index) => (
								<div className='card' index={index}>
									<h3>{card.title}</h3>
									<p>{card.copy}</p>
								</div>
							))}
						</div>
					</ViewportTrigger>
					<Button href='#contact' text='Book a demo' btnStyle='btn-gradient'></Button>
				</section>
			</ViewportTrigger>
			<ViewportTrigger stagger>
				<div className='copy-box copy-box-left inner-max-width vertical-spacing'>
					<h2>{content.backedByAI.heading}</h2>
					<div className='copy-box-p'>
						<img src={content.backedByAI.imgSrc} />
					</div>
				</div>
			</ViewportTrigger>
			<ViewportTrigger>
				<div className='content ek-for-everyone'>
					<HoverAccordion data={content.accordion} />
					<div className='inner-max-width-tight'>
						<p className='larger-p margin-bottom-40'>{content.accordion.footnote}</p>
						<Button href='#contact' text='Book a demo' btnStyle='btn-gradient'></Button>
					</div>
				</div>
			</ViewportTrigger>
			<ViewportTrigger>
				<section className='content inner-max-width center anchor' id='about'>
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
					<div className=' copy-box copy-box-left  inner-max-width-tight'>
						<div className='copy-box-inner'>
							<h2 dangerouslySetInnerHTML={{ __html: content.liberateData.heading }}></h2>
							<p>{content.liberateData.copy}</p>
						</div>
						<Button href='#contact' text='Book a demo' btnStyle='btn-gradient'></Button>
					</div>
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
