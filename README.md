# 🌟 NGO Donation Dashboard

<div align="center">

![React](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3-cyan?style=for-the-badge&logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-4.4-purple?style=for-the-badge&logo=vite)

**A professional, accessible dashboard for NGOs to manage donations and track fundraising campaigns**

[Features](#-features) • [Demo](#-demo) • [Quick Start](#-quick-start) • [Tech Stack](#-tech-stack)

![Dashboard Preview](https://via.placeholder.com/1200x600/3B82F6/FFFFFF?text=NGO+Donation+Dashboard+-+Professional+Fundraising+Management)

</div>

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Development](#-development)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

## 🎯 Overview

The **NGO Donation Dashboard** is a modern, accessible web application designed specifically for non-profit organizations to manage donations, track fundraising campaigns, and analyze donor data. Built with a focus on user experience and accessibility, this dashboard provides real-time insights into fundraising efforts.

### ✨ Key Highlights

- **🏢 NGO-Focused**: Tailored specifically for non-profit fundraising needs
- **♿ Accessible**: WCAG 2.1 AA compliant with full keyboard navigation
- **🌙 Dark/Light Mode**: System-aware theme switching with persistence
- **📱 Responsive**: Perfect experience on desktop, tablet, and mobile
- **🚀 Production Ready**: Built with best practices and error handling

## 🚀 Features

### 📊 Dashboard & Analytics
- **Real-time Statistics**: Track total raised, donor count, campaign progress
- **Interactive Charts**: Beautiful data visualizations with Recharts
- **Campaign Tracking**: Monitor fundraising goals and deadlines
- **Donation Management**: View and manage recent donations with sorting/filtering

### 🎨 User Experience
- **Dark/Light Themes**: Automatic system preference detection
- **Responsive Design**: Mobile-first approach with seamless cross-device experience
- **Loading States**: Professional skeleton screens and loading indicators
- **Error Handling**: Graceful error boundaries and user-friendly messages

### 🔧 Advanced Functionality
- **Data Export**: Export donation data to CSV format
- **Notifications**: Toast notification system for user feedback
- **Multi-page Navigation**: Full routing between different dashboard sections
- **Accessibility**: Screen reader support, keyboard navigation, ARIA labels

### 📈 Pages & Sections
- **Dashboard**: Overview with key metrics and charts
- **Analytics**: Detailed insights and performance metrics
- **Donors**: Donor management and communication tools
- **Campaigns**: Fundraising campaign creation and tracking
- **Events**: Event planning and management
- **Settings**: Application configuration and preferences

## 🛠 Tech Stack

### Frontend
| Technology | Purpose | Version |
|------------|---------|---------|
| **React** | UI Framework | 18.2+ |
| **TypeScript** | Type Safety & Development | 5.0+ |
| **TailwindCSS** | Styling & Design System | 3.3+ |
| **Vite** | Build Tool & Dev Server | 4.4+ |
| **React Router** | Client-side Routing | 6.8+ |

### Data Visualization
| Library | Purpose | Features |
|---------|---------|----------|
| **Recharts** | Charts & Graphs | Composable, Accessible, Lightweight |

### Icons & UI
| Library | Purpose |
|---------|---------|
| **React Icons** | Icon Library | 30+ icon sets included |
| **Custom Components** | Reusable UI | Button, Card, ProgressBar, etc. |

### Development Tools
| Tool | Purpose |
|------|---------|
| **ESLint** | Code Linting |
| **TypeScript** | Static Type Checking |
| **PostCSS** | CSS Processing |
| **Autoprefixer** | CSS Vendor Prefixes |

## 🚀 Quick Start

### Prerequisites
- Node.js 16.0 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-username/ngo-donation-dashboard.git
cd ngo-donation-dashboard
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open your browser**
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
ngo-donation-dashboard/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── layout/        # Layout components (Header, Sidebar, MainLayout)
│   │   ├── dashboard/     # Dashboard-specific components
│   │   ├── charts/        # Data visualization components
│   │   └── ui/            # Reusable UI components
│   ├── contexts/          # React contexts (Theme, Notifications)
│   ├── hooks/             # Custom React hooks
│   ├── pages/             # Route components
│   ├── services/          # API and data services
│   ├── types/             # TypeScript type definitions
│   ├── utils/             # Utility functions
│   └── App.tsx            # Main application component
├── package.json
├── tailwind.config.js     # TailwindCSS configuration
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite configuration
```

## 🎨 Customization

### Theming

The dashboard uses a comprehensive theme system with light and dark modes. Customize colors in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#e5f7f7',
        500: '#009898',
        600: '#007575',
      },
      // Add your organization's brand colors
    }
  }
}
```

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Update the navigation in `src/components/layout/Sidebar.tsx`

Example:
```typescript
// In App.tsx
<Route path="/new-page" element={<NewPage />} />
```

### Data Integration

Replace mock data in `src/services/mockData.ts` with real API calls:

```typescript
// Example API integration
export const getDashboardData = async (): Promise<DashboardData> => {
  const response = await fetch('/api/dashboard');
  return await response.json();
};
```

## 🔧 Development

### Code Style

This project uses:
- **ESLint** for code linting
- **TypeScript** for type safety
- **Prettier** (recommended) for code formatting

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Accessibility Standards

This project follows WCAG 2.1 AA guidelines:
- Keyboard navigation throughout
- Screen reader compatibility
- Proper ARIA labels
- Color contrast compliance
- Focus management

## 🚀 Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Netlify

1. Build the project:
```bash
npm run build
```

2. Drag the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

### GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
{
  "homepage": "https://yourusername.github.io/ngo-donation-dashboard",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Process

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Reporting Issues

Found a bug? Please [open an issue](https://github.com/your-username/ngo-donation-dashboard/issues) with:
- Description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Browser/device information

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **TailwindCSS** for the utility-first CSS approach
- **Vite** for the fast build tooling
- **Recharts** for beautiful, accessible charts
- **React Icons** for the comprehensive icon library

## 📞 Support

Need help with setup or customization?
- 📧 Email: efrenpongase@gmail.com
- 🐛 [Issues](https://github.com/your-username/ngo-donation-dashboard/issues)
- 💬 [Discussions](https://github.com/your-username/ngo-donation-dashboard/discussions)

## 🏢 Built for NGOs

This dashboard is specifically designed for non-profit organizations to:
- 📊 Track fundraising progress in real-time
- 👥 Manage donor relationships effectively
- 🎯 Monitor campaign performance
- 📈 Make data-driven decisions
- 🌟 Increase fundraising efficiency

---

<div align="center">

### ⭐️ If this project helped you, please give it a star!

**Built with ❤️ for the non-profit community**

[⬆ Back to Top](#-ngo-donation-dashboard)

</div>