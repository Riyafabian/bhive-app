# BHive Web App

A React-based web application built with TypeScript and Vite.

## 📋 Overview

BHive is a modern web application that currently features a home screen. The project is built using React, TypeScript, and Vite for a fast development experience with hot module replacement.

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd bhive-web-app
```

2. Install dependencies

```bash
npm install
# or
yarn
```

3. Start the development server

```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Project Structure

```
bhive-web-app/
├── node_modules/         # Dependencies
├── src/                  # Source code
│   ├── api/              # API services and utilities
│   ├── assets/           # Static assets
│   │   ├── icons/        # Icon files
│   │   ├── images/       # Image files
│   │   └── videos/       # Video files
│   ├── components/       # Reusable React components
│   ├── data/             # Static data and constants
│   ├── layouts/          # Layout components
│   ├── pages/            # Page components
│   ├── redux/            # Redux store configuration and slices
│   ├── services/         # Business logic and services
│   ├── styles/           # Global styles and theme
│   ├── types/            # TypeScript type definitions
│   ├── App.css           # App-specific styles
│   ├── App.tsx           # Main App component
│   ├── index.css         # Global CSS
│   ├── main.tsx          # Entry point
│   └── vite-env.d.ts     # Vite environment declarations
├── .gitignore            # Git ignore configuration
├── eslint.config.js      # ESLint configuration
├── index.html            # HTML entry point
├── package-lock.json     # Dependency lock file
├── package.json          # Project metadata and dependencies
├── postcss.config.js     # PostCSS configuration
├── README.md             # Project documentation
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.app.json     # TypeScript configuration for app
├── tsconfig.json         # Main TypeScript configuration
├── tsconfig.node.json    # TypeScript configuration for Node.js
└── vite.config.ts        # Vite configuration
```

## 🌟 Features

- Modern React development with functional components and hooks
- Type safety with TypeScript
- Fast development experience with Vite
- Styling with Tailwind CSS
- State management with Redux
- Responsive layouts

## 🧰 Tech Stack

- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Static type checking
- [Vite](https://vitejs.dev/) - Build tool and development server
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Redux](https://redux.js.org/) - State management
- [ESLint](https://eslint.org/) - Code quality tool

## 📈 Future Development

- Additional pages and features
- User authentication
- Backend integration
- Testing implementation
- Deployment pipeline

## 📄 License

[MIT](LICENSE)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a pull request
