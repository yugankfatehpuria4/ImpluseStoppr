# ImpulseStopper

**ImpulseStopper** is an AI-powered web application designed to help users curb impulse shopping and make more mindful spending decisions. It acts as your personal shopping guardian, providing real-time interventions, analytics, and an AI therapist to support healthier financial habits.

## Features

- **AI Shopping Interventions:**  
  When you attempt to make a purchase, the app pops up with AI-generated prompts, cost breakdowns, and alternative perspectives to encourage thoughtful decision-making.

- **Dashboard Analytics:**  
  Visualize your savings, track stopped impulses, analyze shopping triggers, and monitor your progress with interactive charts and stats.

- **AI Therapist:**  
  Chat with an empathetic AI therapist to explore the emotions behind your shopping urges and build better habits.

- **Personalized Settings:**  
  Customize your hourly wage, AI personality, notification preferences, and strictness of interventions.

- **Connected Services:**  
  Integrate with your bank account, Chrome extension, and expense tracker for a seamless experience.

- **Modern UI:**  
  Built with React, Tailwind CSS, and Framer Motion for a beautiful, responsive, and interactive user experience.

## Screenshots

*(Add screenshots of Dashboard, Popup Intervention, and AI Therapist here)*

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd impulse-stopper
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in your browser:**  
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
.
├── public/                # Static assets (if any)
├── src/
│   ├── components/        # Reusable UI components (Layout, BoltBadge)
│   ├── pages/             # Main app pages (Dashboard, Popup, Settings, Therapist)
│   ├── App.tsx            # Main app and routing
│   ├── main.tsx           # Entry point
│   └── index.css          # Tailwind and global styles
├── index.html             # App entry HTML
├── package.json           # Project metadata and scripts
├── tailwind.config.js     # Tailwind CSS config
├── vite.config.ts         # Vite config
└── ...                    # Other config files
```

## Tech Stack

- **React 18**
- **TypeScript**
- **Vite** (for fast development and builds)
- **Tailwind CSS** (utility-first styling)
- **Framer Motion** (animations)
- **Recharts** (data visualization)
- **Lucide React** (icons)
- **React Router** (routing)

## Customization

- **Hourly Wage:**  
  Set your hourly wage in Settings to see purchases in terms of work hours.
- **AI Personality:**  
  Choose how the AI therapist interacts with you (witty, gentle, strict, funny).
- **Strict Mode:**  
  Make it harder to bypass interventions for extra accountability.
- **Notifications:**  
  Enable reminders to stay on track with your savings goals.

## Contributing

Contributions are welcome! Please open issues or pull requests for new features, bug fixes, or suggestions.

