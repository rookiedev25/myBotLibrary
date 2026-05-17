# Bot Library Landing Page

A responsive web application that serves as a centralized launcher and directory for SiemensGPT chatbots.

## Features

- 🎯 **Bot Discovery**: Browse and view all available chatbots with descriptions
- 🚀 **Quick Launch**: Click to launch any bot in a new browser tab
- 📌 **Recent Launches**: Quick access to your 5 most recently used bots
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- 🎨 **Minimal Design**: Clean, modern interface following Siemens design standards

## Tech Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Linting**: ESLint

## Project Structure

```
src/
├── components/
│   └── BotCard.jsx          # Individual bot card component
├── hooks/
│   └── useRecentBots.js     # Hook for managing recent bot history
├── data/
│   └── bots.js              # Bot configuration and metadata
├── App.jsx                   # Main application component
├── main.jsx                  # React entry point
└── index.css                 # Global styles with Tailwind
```

## Getting Started

### Prerequisites

- Node.js 16+ and npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

### Linting

```bash
# Run ESLint
npm run lint
```

## Configuration

### Adding New Bots

Edit [src/data/bots.js](src/data/bots.js) and add a new bot object:

```javascript
{
  id: 'unique-bot-id',
  name: 'Bot Display Name',
  description: 'Brief description of what this bot does',
  emoji: '🎯',
  siemensGptUrl: 'https://siemensgpt.example.com/bot/your-bot',
}
```

### Customizing SiemensGPT Integration

Update the `siemensGptUrl` in [src/data/bots.js](src/data/bots.js) with your actual SiemensGPT endpoint URLs.

## Features Explained

### Recent Launches
- Automatically tracks the last 5 bots you launched
- Stored in browser session storage (cleared when browser closes)
- Provides quick access buttons at the top of the page

### Bot Launch Behavior
- Each bot opens in a new browser tab
- Allows users to interact with multiple bots simultaneously
- Preserves the landing page for easy navigation

### Responsive Layout
- Desktop: 3-column grid layout
- Tablet: 2-column grid layout
- Mobile: Single column layout

## Future Enhancements

- Authentication and SSO integration
- Conversation history storage
- Advanced bot filtering and search
- Bot categories and tags
- User preferences and bookmarks
- Analytics and usage tracking

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

Internal - Siemens

## Support

For issues or feature requests, contact the development team.
