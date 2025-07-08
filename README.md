# Satellite Data Guide

A comprehensive educational web application for learning satellite data processing, rasterization techniques, and geospatial analysis. Built with React, TypeScript, Tailwind CSS, and Vite.

## 🛰️ About

This educational platform provides in-depth guides and tutorials covering:

- **Rasterization Fundamentals** - Converting vector data to raster format
- **Satellite Data Processing** - Working with multispectral imagery and Earth observation data
- **Machine Learning Applications** - AI/ML techniques for satellite data analysis
- **QGIS Tutorials** - Comprehensive guides for the open-source GIS platform
- **ISRO Hackathon Preparation** - Specific guidance for space technology competitions
- **Practice Resources** - Datasets, coding exercises, and project ideas

## 🚀 Features

- **Modern React Architecture** - Built with React 19, TypeScript, and Vite
- **Responsive Design** - Mobile-first design with Tailwind CSS
- **Educational Content** - Comprehensive tutorials with code examples
- **Interactive Navigation** - Smooth routing with React Router
- **Professional UI** - Clean, modern interface optimized for learning

## 📦 Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Routing**: React Router
- **Development**: ESLint + TypeScript ESLint

## 🛠️ Development Setup

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone or navigate to the project directory:
   ```bash
   cd rasterisation
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Navbar.tsx      # Navigation component
│   └── Footer.tsx      # Footer component
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── Rasterization.tsx
│   ├── SatelliteData.tsx
│   ├── MachineLearning.tsx
│   ├── QGIS.tsx
│   ├── ISROHackathon.tsx
│   └── Preparation.tsx
├── data/               # Static data and configurations
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles and Tailwind directives
```

## 🎨 Styling

The project uses Tailwind CSS with custom utility classes and components:

- **Custom Colors**: Primary and secondary color schemes
- **Components**: Reusable classes for cards, buttons, and layouts
- **Responsive Design**: Mobile-first approach with breakpoint-specific styles
- **Animations**: Smooth transitions and hover effects

## 📚 Educational Content

### Core Topics Covered

1. **Rasterization**
   - Vector to raster conversion
   - Spatial resolution concepts
   - Coordinate systems
   - Processing tools and techniques

2. **Satellite Data**
   - Data types (optical, radar, thermal, hyperspectral)
   - Major satellite missions
   - Processing pipelines
   - Common applications

3. **Machine Learning**
   - Supervised and unsupervised learning
   - Deep learning for satellite data
   - Time series analysis
   - Best practices and challenges

4. **QGIS**
   - Installation and setup
   - Essential plugins
   - Processing workflows
   - Advanced applications

5. **ISRO Hackathons**
   - Problem-solving strategies
   - Technical skills required
   - Sample problems and solutions
   - Winning strategies

6. **Preparation Resources**
   - Learning path and schedule
   - Practice datasets
   - Coding exercises
   - Development environment setup

## 🌟 Key Features

- **Comprehensive Tutorials**: Step-by-step guides with practical examples
- **Code Examples**: Python and QGIS code snippets for hands-on learning
- **Interactive Design**: Engaging UI with smooth animations and transitions
- **Mobile Responsive**: Works seamlessly across all device sizes
- **Easy Navigation**: Intuitive routing between topics and sections

## 🚀 Deployment

### GitHub Pages Deployment

This project is ready for deployment to GitHub Pages. Follow these steps:

1. **Update Vite Configuration**: Edit `vite.config.ts` and set the base path:
   ```typescript
   base: '/your-repo-name/',
   ```

2. **Deploy Commands**:
   ```bash
   # Initialize git and push to GitHub
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   
   # Deploy to GitHub Pages
   npm run deploy
   ```

3. **Configure GitHub Pages**: 
   - Go to repository Settings → Pages
   - Select "gh-pages" branch as source
   - Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

📖 **Detailed guides**: See `DEPLOYMENT_GUIDE.md` and `QUICK_DEPLOY.md` for complete instructions.

## 🎯 What's Included

### 🖼️ Real Images & Media
- Professional satellite imagery from Unsplash
- Space and technology-themed visuals
- Responsive image loading and optimization

### 📺 Educational Videos
- 12+ carefully selected YouTube tutorials
- Topics covering all major learning areas
- Embedded links for extended learning

### 📚 Comprehensive Content
- **6 Main Topic Areas**: Complete coverage of satellite data analysis
- **Step-by-step Tutorials**: Beginner to advanced progressions
- **Practical Examples**: Real-world applications and case studies
- **Resource Lists**: Tools, datasets, and further reading

## 🤝 Contributing

This is an educational project. Contributions to improve content, add examples, or enhance the user experience are welcome.

## 📄 License

This project is for educational purposes. Please respect the licensing terms of any third-party content or datasets referenced in the tutorials.

## 🔗 Useful Links

- [QGIS Official Website](https://qgis.org/)
- [Google Earth Engine](https://earthengine.google.com/)
- [ISRO Official Website](https://www.isro.gov.in/)
- [Sentinel Hub](https://www.sentinel-hub.com/)
- [USGS Earth Explorer](https://earthexplorer.usgs.gov/)

---

**Happy Learning! 🛰️📡🌍**
