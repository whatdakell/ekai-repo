This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

<!-- scale docu per component -->

# Install dependencies

npm install

# Start development server

npm start

# Build for production

npm run build

ekai-platform/
├── public/
│ ├── images/ # Static images
│ ├── videos/ # Video assets
│ └── index.html # HTML template
├── src/
│ ├── components/ # React components
│ ├── content/ # Content configuration
│ ├── hooks/ # Custom React hooks
│ ├── styles/ # SCSS styles
│ ├── utils/ # Utility functions
│ ├── App.js # Main application component
│ └── index.js # Application entry point
├── package.json # Dependencies and scripts
└── README.md # Documentation

Styling Guide

styles/
├── abstracts/
│ ├── \_variables.scss // Color, font, spacing variables
│ ├── \_mixins.scss // Reusable mixins
│ └── \_animations.scss // Animation definitions
├── base/
│ └── \_typography.scss // Typography rules
├── components/ // Component-specific styles
├── layout/ // Layout components (header,footer)
└── main.scss // Main stylesheet

BreakPoints
// Mobile first approach
@include bp(S) { } // < 768px
@include bp(M) { } // < 1024px
@include bp(desktop) { } // < 1200px
