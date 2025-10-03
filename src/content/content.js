import { Accordion } from 'react-bootstrap';

export const content = {
	hero: {
		headline: 'Free <em>your data</em>.<br>Empower everyone.',
		copy: 'Ekai is an agentic AI platform making your organization’s data work easier for everyone—with value delivered faster. <br><br> Through our self-service platform, any business function can access and explore existing company analytical data independently. Your data is finally understandable, accessible, and actionable across your entire organization.',
		steps: [
			{
				title: 'Connect to data platforms',
				description: 'Modelling AI agents automatically generate logical models',
			},
			{
				title: 'Provide analytical requirements',
				description: 'Discovery AI agents creates requirement documents',
			},
			{
				title: 'Generate code package',
				description: 'Workflow AI agents creates code, data models, and lineage',
			},
			{
				title: 'Publish and review',
				description: 'All that’s left for you is to download a consolidated package for IT review and it’s ready to go live.',
			},
		],
	},
	organizationModule: {
		headline: 'Your organization has <em>the data...</em><br />but why is it so <em>difficult</em> to use?',
		copy: 'On average, data projects take <strong>3–6 months to complete</strong>. Collaboration between business and IT is often filled with friction, reducing time to value, velocity, and—eventually—innovation.',
		cards: [
			{
				title: 'Business teams face constant barriers',
				cardList: ['Business users don’t have the skills to quickly test data-driven ideas', 'Accessing and exploring existing company data independently is difficult', 'Reports and dashboards are not flexible for fast self-service'],
			},
			{
				title: 'IT teams are overwhelmed',
				cardList: ['Small IT teams are burdened with too many projects and limited capacity', 'Constant pressure to deliver quickly leads to long timelines or bloated headcount', 'Developing business unit use cases consumes time and slows infrastructure management'],
			},
		],
	},
	slider: {
		headline: 'Ekai exists because using data <em>should</em> be easy',
		copy: ' Our platform breaks through the data bottleneck and makes data usable by anyone by automatically transforming your business domain data into a self-service intelligence layer. <br><br>Then, any team member can explore data directly, ask business questions, and get the answers they’re looking for, regardless of technical skills.',
		steps: [
			{
				title: '1. Connect',
				text: 'Ekai connects with your data platforms and automatically builds logical models for whatever your analytics use case might be',
			},
			{
				title: '2. Process',
				text: 'Once you’ve provided your requirements via our conversational chat interface, our platform automatically maps how all your data relates, learning and defining your business context so everyone can understand it.',
			},
			{
				title: '3. Generate',
				text: "Ekai automatically builds the data model's code and technical documentation, including fact and dimension tables, and populates a business glossary with documented business concepts and metrics.",
			},
			{
				title: '4. Publish',
				text: 'Download the generated code and requirements for deployment.<br><br>Ekai also offers the possibility to run the package immediately within your data platform. This option will provide instant insights to your data.<br><br>Your data becomes instantly searchable and usable by everyone. Business users get answers directly while IT receives full documentation for governance.',
			},
			{
				title: '5. Insights',
				text: 'When code has been run in your data platform Ekai generates insights and reports  according to your business requirements and metrics.<br><br>On these insights the user can ask relevant more detailed questions from the AI agent. Your analytical use case is immediately available for consumption.',
			},
		],
	},
	orgData: {
		heading: 'Your organization has <em>the data...</em><br />but why is it so <em>difficult</em> to use?',
		copy: 'On average, data projects take <strong>3–6 months to complete</strong>. Collaboration between business and IT is often filled with friction, reducing time to value, velocity and—eventually—innovation.',
		src: '/images/business-fig.png',
		alt: 'Organization graphic',
		type: 'image',
	},
	dataProject: {
		heading: 'With Ekai, data projects can be measured <em>in hours</em>, not months',
		cards: [
			{
				title: '11X faster data project execution',
				copy: 'Ekai has helped companies complete data projects that would have taken months in mere hours. Our platform removes delays and makes analytical use cases available almost immediately.',
			},
			{
				title: 'Self-service operation with no more waiting for answers',
				copy: 'Our AI-assisted workflow means business teams can work independently without worrying about breaking things. Plus, our automated IT processes ensure everything is always kept up to date.',
			},
			{
				title: 'Enterprise-grade security and governance',
				copy: 'All transformation and analytics code executes within your environment and data never leaves your infrastructure. IT maintains full control with automated documentation, ensuring compliance and governance at scale.',
			},
			{
				title: 'Significant cost savings over time',
				copy: 'Business teams reduce analytical development costs by 70-80% while making your data available to everyone. This time and cost savings can be redistributed to other crucial projects.',
			},
		],
	},
	backedByAI: {
		heading: 'Backed by proud partners within the data and AI community',
		imgSrc: '/images/ai-community.png',
	},
	accordion: {
		heading: 'Ekai is for everyone',
		tableHeader: ['Role/Function', 'Challenge', 'With Ekai'],
		footnote: 'These are just a few examples. Everyone that has a question and access to ekai can connect the dots.',
		roles: [
			{
				role: 'Sales',
				challenge: 'No real-time campaign visibility, manual analysis delays optimization decisions.',
				withEkai: 'With an AI-assisted analytics workspace, marketing won’t be stuck with reporting vanity metrics when they want to be improving conversation rates.',
			},
			{
				role: 'Marketing',
				challenge: 'No real-time campaign visibility, manual analysis delays optimization decisions.',
				withEkai: 'With an AI-assisted analytics workspace, marketing won’t be stuck with reporting vanity metrics when they want to be improving conversation rates.',
			},
			{
				role: 'Finance',
				challenge: 'No real-time campaign visibility, manual analysis delays optimization decisions.',
				withEkai: 'With an AI-assisted analytics workspace, marketing won’t be stuck with reporting vanity metrics when they want to be improving conversation rates.',
			},
			{
				role: 'Head of Analytics',
				challenge: 'No real-time campaign visibility, manual analysis delays optimization decisions.',
				withEkai: 'With an AI-assisted analytics workspace, marketing won’t be stuck with reporting vanity metrics when they want to be improving conversation rates.',
			},
			{
				role: 'Data Engineer',
				challenge: 'No real-time campaign visibility, manual analysis delays optimization decisions.',
				withEkai: 'With an AI-assisted analytics workspace, marketing won’t be stuck with reporting vanity metrics when they want to be improving conversation rates.',
			},
		],
	},
	hoverTimeline: {
		heading: 'How it works',
		copy: 'Our platform understands your data and builds a logical model as the foundation for your analytics. Guided by our AI assistant, your team can easily create semantic models tailored to your business use cases—making getting the answers you need both easy and actionable. Our autonomous AI agents are designed to handle each step with a few questions from you.',
		steps: [
			{ id: 1, title: 'Connect', desc: 'Connect your data sources and instantly start building logical models.' },
			{ id: 2, title: 'Model', desc: 'Use our AI assistant to model your business context with ease.' },
			{ id: 3, title: 'Discover', desc: 'Explore your data semantically and find insights faster.' },
			{ id: 4, title: 'Contextualize', desc: 'Our Modelling AI agent validates with you on your key business context before finalizing them. Multi-agent technology retains context memory, building and updating documentation for physical, logical, and semantic data.' },
			{ id: 5, title: 'Generate', desc: 'Automatically generate code packages and queries tailored to your analytics stack.' },
			{ id: 6, title: 'Publish', desc: 'Publish to your team’s preferred platforms and keep documentation updated.' },
			{ id: 7, title: 'Insights', desc: 'Self-service analytics with clear insights accessible across your organization.' },
		],
	},
	teamSection: {
		heading: 'Meet the team making your data work for <em>everyone.</em>',
		team: [
			{
				name: 'Mo Aidrus',
				title: 'Co-founder <br>& Chief Executive Officer',
				image: '/images/mo.jpg',
				shortBio: 'As a x2 founder, and a long-time advocate for freeing trapped data value inside the enterprise, Mo spent 20+ years as Managing Director at Accenture & Rayn before setting out to build Ekai.',
				fullBio: 'As a x2 founder, and a long-time advocate for freeing trapped data value inside the enterprise, Mo spent 20+ years as Managing Director at Accenture & Rayn before setting out to build Ekai. With deep experience in enterprise strategy and execution, Mo continues to lead Ekai’s mission to simplify analytics for all.',
			},
			{
				name: 'Hussnain Ahmed',
				title: 'Co-founder <br>& Chief AI Officer',
				image: '/images/hussnain.jpg',
				shortBio: 'Hussnain puts the AI in Ekai. He brings 20+ years of experience architecting innovative data strategy by introducing AI operations to tech teams.',
				fullBio: 'Hussnain puts the AI in Ekai. He brings 20+ years of experience architecting innovative data strategy by introducing AI operations to tech teams. Previously, he held senior leadership roles at IBM and Accenture, where he led enterprise-wide AI and automation initiatives.',
			},
			{
				name: 'Tero Miikki',
				title: 'Chief Commercial Officer <br>& Global Partnership Lead',
				image: '/images/tero.png',
				shortBio: 'Tero is a seasoned data leader and entrepreneur. As a CDO and data leader he has led major data/AI transformation and governance programs at UPM, a global manufacturing company & advanced engineering practices at Microsoft.',
				fullBio:
					'Tero is a seasoned data leader and entrepreneur. As a CDO and data leader he has led major data/AI transformation and governance programs at UPM, a global manufacturing company & advanced engineering practices at Microsoft. Tero has also shaped data strategy at Sanoma Media Finland. With expertise in business development, go-to-market data cloud strategies, and IT procurement, Tero has served management teams, chaired governance boards, and overseen complex data ecosystems. In addition to his CCO role, Tero currently leads Ekai’s global GTM efforts including its partnership with Snowflake.',
			},
		],
	},
	videoBlock: {
		heading: 'See how data <em>can</em> be this easy in this short overview',
		src: '/videos/Ekai-AI.mp4',
		alt: 'Organization video',
		poster: '/images/thumbnail.png',
	},
	pricingTable: {
		heading: 'ekai - Business Data Lab pricing',
		footnote: 'Ekai also offers add-on pricing, volume, and payment discounts. Contact one of our team to learn more.',
		plans: [
			{
				name: 'Trial',
				price: 'Free',
				description: ['10-day free trial', 'One developer seat', '2 logical models (max 25 tables)', '5 semantic models'],
				subPlan: {
					title: 'Starter',
					features: ['Ekai cloud setup', 'Standard integrations', 'Logical data modelling', 'Semantic modelling'],
				},
			},
			{
				name: 'Enterprise',
				price: 'Custom pricing',
				description: ['Unlimited seats', 'Agreed logical models per month/installment', 'Agreed semantic models per month/installment', 'Agreed code runs with analytical questions'],
				subPlan: {
					title: 'Managed Cloud',
					features: ['Ekai managed cloud setup', 'Standard & custom integrations', 'Logical data modelling', 'Semantic modelling', 'Code run and analytics', 'Ekai 24/7 support'],
				},
			},
			{
				name: 'Enterprise+',
				price: 'Custom pricing',
				description: ['Unlimited seats', 'Agreed logical models per month/installment', 'Agreed semantic models per month/installment', 'Agreed code runs with analytical questions'],
				subPlan: {
					title: 'Customer Cloud',
					features: ['Customer cloud setup', 'Standard & custom integrations', 'Logical data modelling', 'Semantic modelling', 'Code run and analytics', 'Ekai customer specific L3 support'],
				},
			},
		],
	},
	faq: {
		heading: 'FAQs',
		faqs: [
			{
				question: 'What does Ekai do?',
				answer: 'Ekai helps you connect your data platforms, model logical and semantic data, and provide analytics-ready insights so business users can self-serve answers.',
			},
			{
				question: 'Who is Ekai for?',
				answer: `We like to say “Ekai is for everyone!” and we mean it.<br><br>Ekai empowers everyone who has a passion for data, with or without IT skills. Ekai enables any business function to skip waiting on data teams and get straight to prepped data they need, speeding up time-to-value. Businesses can rapidly innovate in their own data domains. IT meanwhile, gets full documentation for easy governance.`,
			},
			{
				question: 'How can Ekai help me or my team?',
				answer: 'Ekai enables business teams to operate independently while IT retains control and oversight, cutting project delivery from months to hours.',
			},
			{
				question: 'Will my enterprise data remain safe with Ekai?',
				answer: 'Yes. All data transformations run inside your environment, ensuring data security and governance compliance.',
			},
			{
				question: 'What data sources does Ekai support?',
				answer: 'Ekai integrates with popular data platforms, catalogs, observability tools, and repositories—without needing to replace existing tools.',
			},
			{
				question: 'How long does it take to implement Ekai?',
				answer: 'Ekai can be set up within hours, not months, thanks to its automated data modeling and AI-assisted workflow.',
			},
		],
	},
	liberateData: {
		heading: "Isn't it time to <em>liberate </em> your data?",
		copy: "While you're stuck waiting on answers, decisions stall. Join enterprises who've cut their data project timelines from 3-6 months down to a few hours",
	},
};
