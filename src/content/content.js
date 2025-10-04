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
				title: 'Generate context & code package',
				description: 'Workflow AI agents creates code, data models, and lineage',
			},
			{
				title: 'Publish & run your use case',
				description: 'All that’s left for you is to download a consolidated package for IT review and it’s ready to go live',
			},
		],
	},
	organizationModule: {
		headline: 'Your organization has <em>the data...</em><br />but why is it so <em>difficult</em> to use?',
		copy: 'On average, data projects take <strong>3–6 months to complete</strong>. Collaboration between business and IT is often filled with friction, reducing time to value, velocity, and—eventually—innovation.',
		cards: [
			{
				title: 'Business teams face constant barriers',
				cardList: ['Business users don’t have the skills to quickly test data-driven ideas', 'Accessing and exploring existing company data independently is difficult', 'Current standard reports and dashboards are not flexible enough for fast, accurate real time self-service'],
			},
			{
				title: 'IT teams are overwhelmed',
				cardList: ['Small IT teams are burdened with too many projects and limited capacity to support business needs', 'Constant pressure to deliver quickly means either long timelines to deliver or a bloated headcount', 'Developing individual use cases for business units consumes so much time that’s at odds with managing and maintaining the data platform and infrastructure'],
			},
		],
	},
	slider: {
		headline: 'Ekai exists because using data <em>should</em> be easy',
		copy: ' Our platform breaks through the data bottleneck and makes data usable by anyone by automatically transforming your business domain data into a self-service intelligence layer. <br><br>Then, any team member can explore data directly, ask business questions, and get the answers they’re looking for, regardless of technical skills.',
		steps: [
			{
				title: '1. Connect',
				text: 'Ekai connects with your data platforms and automatically builds logical models for whatever your analytics use case might be.',
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
		heading: '  Works with everything you <em>already</em> have',
		copy: 'Connect once to Ekai and automatically integrate with your entire stack. That includes data platforms, catalogs, observability tools, and repositories with no need to rip and replace.',
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
		heading: 'Your data platforms, ready for any situation',
		tableHeader: ['Role/Function', 'Challenge', 'With Ekai'],
		footnote: 'These are just a few examples. Everyone that has a question and access to ekai can connect the dots.',
		roles: [
			{
				role: 'Sales',
				challenge: 'Chasing low-quality leads, poor conversion rates, missing quota targets.',
				withEkai: 'Real-time lead scoring and insights means your sales teams can reduce sales cycles, boost their close rate, and hit that quota.',
			},
			{
				role: 'Marketing',
				challenge: 'No real-time campaign visibility, manual analysis delays optimization decisions.',
				withEkai: 'With an AI-assisted analytics workspace, marketing won’t be stuck with reporting vanity metrics when they want to be improving conversation rates.',
			},
			{
				role: 'Finance',
				challenge: 'Fragmented data systems and inconsistent KPIs across departments. Team silo and lack of trust in data.',
				withEkai: 'Automated financial reporting and budget tracking can help lower month-end cycles and provide better oversight to reduce budget overruns.',
			},
			{
				role: 'Head of Analytics',
				challenge: 'Fragmented data systems and inconsistent KPIs across departments. Team silo and lack of trust in data.',
				withEkai: 'Unify analytics across the organization with standardized semantic models and AI assisted self-service tools. Immediately improve data accessibility and literacy.',
			},
			{
				role: 'Data Engineer',
				challenge: 'Firefighting broken data pipes and fielding urgent data requests.',
				withEkai: 'Rapidly build logical data models and automate data flows with built-in validation. Self Service capability reduces dependency on data engineering teams.',
			},
		],
	},
	hoverTimeline: {
		heading: 'How it works',
		copy: 'Our platform understands your data and builds a logical model as the foundation for your analytics.<br><br>Guided by our AI assistant, your team can easily create semantic models tailored to your business use cases—making getting the answers you need both easy and actionable.<br><br>Our autonomous AI agents are designed to handle each step with a few questions from you.',
		steps: [
			{ id: 1, title: 'Connect', desc: 'Ekai connects with your data platforms and metadata and gets the foundation ready for your analytical use case. The only requirement at this step is providing access to your raw data storage in your data platform.' },
			{ id: 2, title: 'Model', desc: 'Our <i>Modelling AI agent</i> takes a look at your data, applies its prior knowledge on similar data, and generates a logical model based on the data profiling and received user input.<br><br>This logical model will reflect how your data is connected as well as provides the foundation to start creating semantic models for your analytical use case.' },
			{ id: 3, title: 'Discover', desc: 'Our <i>Discovery AI agent</i> asks a few questions and captures the relevant business requirements for the analytical use case you’re working on. <br><br>When the AI agent has gathered enough information, it will automatically generate the business requirement document which you can review and modify by talking to our AI agent.' },
			{
				id: 4,
				title: 'Contextualize',
				desc: 'Our <i>Modelling AI agent</i> automatically proposes key business context for validation by the user before finalizing them. <br><br>Our multi-agent technology retains context memory, allowing Ekai to perform better than stateless AI models.<br><br>At the same time, our platform builds and updates documentation for physical, logical, and semantic data. Agentic data systems are worthless without enterprise business context—Ekai builds that context for you.',
			},
			{ id: 5, title: 'Generate', desc: 'Our <i>Workflow AI agent</i> creates a full documentation package with logical data models and data concepts.<br><br>This includes analytical use case code and test cases, data quality checks, required measurements in detail,, data lineage, and relevant data catalog documentation. <br><br>At this stage, you have an instantly deployable package for your analytical use case.' },
			{
				id: 6,
				title: 'Publish',
				desc: 'Ekai provides several options for <i>publishing or running</i> the package.<br><br>1) You can just simply take the whole documentation package as single compressed folder or .zip file and continue with your IT reviews.<br>2) Automate content into relevant systems like data catalog or your code repository for further processing.<br>3) Ekai also provides possibility to run the code package within your data platform to get immediate insights on your data. To run the semantic models and the code in your data platform, we require permission from your IT admin.',
			},
			{
				id: 7,
				title: 'Insights',
				desc: 'When code has been run in your data platform, our <i>Reporting AI agent</i> generates insights and reports according to your business requirements and metrics.<br><br>With these insights, the user can ask relevant more detailed questions from our AI agent. Your analytical use case is immediately available for consumption.',
			},
		],
	},
	teamSection: {
		heading: 'Meet the team making your data work for <em>everyone.</em>',
		team: [
			{
				name: 'Mo Aidrus',
				title: 'Co-founder <br>& Chief Executive Officer',
				image: '/images/mo.jpg',
				shortBio: 'As a x2 founder, and a  long-time advocate for freeing trapped data value inside the enterprise, Mo spent 20+ years as Managing Director at Accenture & Rayn before setting out to build Ekai. ',
				fullBio: 'His goal was to fix three problems: the difficulty in accessing and exploring existing company data independently, not knowing the right numbers at the right time, and not being able to take full charge of data. Together with Hussnain, Ekai is meant to be the ultimate data companion for the business users to quickly test data-driven ideas without relying on busy IT teams. ',
			},
			{
				name: 'Hussnain Ahmed',
				title: 'Co-founder <br>& Chief AI Officer',
				image: '/images/hussnain.jpg',
				shortBio: 'Hussnain puts the AI in Ekai. He brings 20+ years of experience architecting innovative data strategy by introducing AI operations to tech teams.',
				fullBio: 'At Ekai, he has been pivotal in developing and cementing the AI-first principles that position Ekai as a “Business Data Lab” for BA’s or Analytic Engineers to build various data models without extensive IT involvement. ',
			},
			{
				name: 'Tero Miikki',
				title: 'Chief Commercial Officer <br>& Global Partnership Lead',
				image: '/images/tero.png',
				shortBio: 'Tero is a seasoned data leader and entrepreneur. As a CDO and data leader he has led major data/AI transformation and governance programs at UPM, a global manufacturing company and  advanced engineering practices at Microsoft.',
				fullBio: 'Tero has also shaped data strategy at Sanoma Media Finland. With expertise in business development, go-to-market data cloud strategies, and IT procurement, Tero has served management teams, chaired governance boards, and overseen complex data ecosystems. In addition to his CCO role, Tero currently leads Ekai’s global GTM efforts including its partnership with Snowflake.',
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
		footnote: 'Ekai also offers add-on pricing, volume, and payment discounts. <a href="#contact">Contact our team to learn more</a>.',
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
				answer: 'Business teams wait weeks for simple data answers because IT can only handle so much at once. Accessing and exploring existing company data independently is difficult. Ekai breaks this bottleneck by automatically transforming your technical databases into a self-service intelligence layer that everyone can use. Finally self-service yourself and build various data models without extensive IT involvement.',
			},
			{
				question: 'Who is Ekai for?',
				answer: `We like to say “Ekai is for everyone!” and we mean it.<br><br>Ekai empowers everyone who has a passion for data, with or without IT skills. Ekai enables any business function to skip waiting on data teams and get straight to prepped data they need, speeding up time-to-value. Businesses can rapidly innovate in their own data domains. IT meanwhile, gets full documentation for easy governance.`,
			},
			{
				question: 'How can Ekai help me or my team?',
				answer:
					"Remember that report you needed last month? And you’re still waiting on? Ekai is for literally everyone in the business. Ekai has worked for Data Engineers, Business Analysts, Analytic Engineers, Marketing Managers, Sales Leads, Head of Analytics, HR leaders…and the list only continues to grow.<br><br>With Ekai, as a self-service platform, you'd have gotten it that same day. We handle all the technical complexity so you can query data directly, get answers immediately, and make decisions while opportunities are still relevant.",
			},
			{
				question: 'Will my enterprise data remain safe with Ekai?',
				answer: 'Yes. Your data never leaves your environment and works within your existing security framework. No copies or third-party sharing involved.<br><br>Data and IT security are core to Ekai’s metadata-driven code generation and analytics, which runs directly on your infrastructure without copying data. Users can work within the platform without worrying about compliance or security risks. ',
			},
			{
				question: 'What data sources does Ekai support?',
				answer: 'Ekai currently supports both structured and unstructured data sources including (but not limited to) Postgres, Athena, MYSQL, Clickhouse, MSSQL PDFs, excel, presentations, text documents, neo4j, and more. <br><br>Our list of out-of-the-box support is always updating and we also offer custom integrations based on your specific needs. You can always reach out to our team to discuss options tailored to your organization’s needs.',
			},
			{
				question: 'How long does it take to implement Ekai?',
				answer:
					"The implementation timeline for Ekai largely depends on the data maturity and documentation quality of your organization. If your data is already modelled, the timeline is less than a day. For custom integrations or handling unstructured data, the process may take longer. In these cases, our team will work with you to provide additional hands-on support to get you started as quickly as possible.<br><br>From the very first step of our journey together, our goal is to build your trust and confidence in our platform. During onboarding, you'll have the opportunity to interact with our lead developers and get hands-on experience with the platform. We’re truly excited to invite you on this data journey and hope it will be a smooth and rewarding experience with us.",
			},
		],
	},
	liberateData: {
		heading: "Isn't it time to <em>liberate </em> your data?",
		copy: "While you're stuck waiting on answers, decisions stall. Join enterprises who've cut their data project timelines from 3-6 months down to a few hours",
	},
};
