# The Mentzer Method

> A modern web application dedicated to Mike Mentzer's revolutionary High-Intensity Training (HIT) philosophy, featuring an interactive workout tracker and educational resources.

**🌐 Live Site:** [mentzermethod.com](https://mentzermethod.com)

## 🏋️‍♂️ About the Project

The Mentzer Method is a comprehensive digital platform that brings Mike Mentzer's legendary Heavy Duty training system to modern fitness enthusiasts. Our mission is to educate and empower users through scientifically-backed, high-intensity training principles that maximize results while minimizing time investment.

### Key Features

- **🎯 Interactive Intensity Tracker**: Step-by-step workout companion that guides users through Heavy Duty sessions
- **📊 Real-time Progress Monitoring**: Track intensity levels and workout completion with detailed analytics
- **📚 Educational Content**: In-depth articles and resources about HIT methodology
- **💪 Muscle Group Targeting**: Specialized workouts for Chest, Back, Shoulders, Arms, Legs, and more
- **📱 Responsive Design**: Optimized experience across all devices

Visit [mentzermethod.com](https://mentzermethod.com) to experience the full platform.

## 🚀 Technology Stack

Built with modern web technologies for optimal performance and user experience:

- **Framework**: [Next.js 15.3.3](https://nextjs.org/) with App Router
- **Frontend**: [React 19](https://react.dev/) with TypeScript 5.6.2
- **Styling**: [Tailwind CSS 4.1.12](https://tailwindcss.com/) for modern, responsive design
- **Animations**: [Framer Motion 12.23.12](https://www.framer.com/motion/) for smooth interactions
- **Package Manager**: [Bun](https://bun.sh/) for lightning-fast dependency management
- **Deployment**: Optimized for Vercel and other modern hosting platforms

## 🛠️ Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 18+
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/mentzer-method.git
   cd mentzer-method
   ```

2. **Install dependencies**
   ```bash
   bun install
   # or: npm install
   ```

3. **Start development server**
   ```bash
   bun run dev
   # or: npm run dev
   ```

4. **Open your browser**

   Navigate to `http://localhost:3000` to see the application running locally.


## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start development server on port 3000 |
| `bun run build` | Build the application for production |
| `bun run start` | Start the production server |
| `bun run lint` | Run ESLint for code quality checks |
| `bun run lint:fix` | Automatically fix ESLint issues |
| `bun run format` | Format code with Prettier |
| `bun run format:check` | Check code formatting |
| `bun run type-check` | Run TypeScript type checking |

## 🏗️ Project Structure
```bash
src/
├── app/                  # Next.js App Router pages
│   ├── page.tsx          # Homepage
│   ├── about/            # About page
│   ├── blogs/            # Educational articles
│   ├── tracker/          # Interactive workout tracker
│   └── layout.tsx        # Root layout
├── constants/            # Application constants and data
├── helpers/              # Utility functions and analytics
├── types/                # TypeScript type definitions
└── ui/
    └── components/       # Reusable React components
```

## 🎯 The Intensity Tracker

The heart of [mentzermethod.com](https://mentzermethod.com) is our Interactive Intensity Tracker, featuring:

### Core Functionality
- **Progressive Exercise Flow**: Complete exercises one by one with automatic advancement
- **Real-time Intensity Calculation**: Algorithm-based scoring system measuring workout effectiveness
- **Muscle Group Selection**: Target specific muscle groups with tailored exercise routines
- **Progress Visualization**: Dynamic progress bars and completion statistics
- **Results Analysis**: Detailed post-workout breakdown with performance insights

### How It Works
1. **Select Target Muscle Group**: Choose from 7 different muscle group specializations
2. **Follow Exercise Progression**: Complete each exercise with weight and rep tracking
3. **Track Intensity**: Algorithm calculates intensity based on reps-to-failure ratio
4. **View Results**: Get detailed analysis with personalized recommendations

Experience the tracker live at [mentzermethod.com/tracker](https://mentzermethod.com/tracker).

## 🌐 SEO & Performance

The application is built with SEO and performance best practices:

- **Semantic HTML**: Proper heading hierarchy and accessibility features
- **Meta Tags**: Dynamic metadata for each page
- **Structured Data**: JSON-LD markup for search engines
- **Sitemap**: Auto-generated XML sitemap
- **Image Optimization**: Next.js Image component with proper alt attributes
- **Performance**: Optimized for Core Web Vitals

## 🚀 Deployment

### Vercel (Recommended)
The easiest deployment option for Next.js applications:

1. Push your code to a Git repository
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and configure everything

### Other Platforms
- **Netlify**: Use with Next.js runtime or static export
- **Railway**: Connect your Git repository for automatic deployments
- **Any Node.js Host**: Run `bun run build` then `bun run start`

## 🤝 Contributing

We welcome contributions to improve the Mentzer Method platform! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines
- Follow the existing code style and formatting
- Write TypeScript with proper type definitions
- Test your changes across different screen sizes
- Ensure accessibility standards are maintained

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚠️ Disclaimer

This is an independent educational project created for fitness enthusiasts interested in High-Intensity Training. It is not affiliated with, endorsed by, or connected to Mike Mentzer, his estate, or any official Mentzer organizations. The content is based on publicly available information about HIT training principles.

## 🔗 Links

- **Live Website**: [mentzermethod.com](https://mentzermethod.com)
- **Interactive Tracker**: [mentzermethod.com/tracker](https://mentzermethod.com/tracker)
- **About Page**: [mentzermethod.com/about](https://mentzermethod.com/about)

---

**Built with ❤️ for the Heavy Duty community**

*Train brief. Train intense. Train to failure.*
