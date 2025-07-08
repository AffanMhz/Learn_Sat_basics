# 🚀 GitHub Deployment Guide

This guide will walk you through deploying your Satellite Data Analysis educational platform to GitHub Pages.

## 📋 Prerequisites

- A GitHub account (free)
- Git installed on your computer
- Your project built successfully (you've already done this!)

## 🔧 Step 1: Prepare Your Project for GitHub Pages

### 1.1 Update Vite Configuration
We need to configure Vite for GitHub Pages deployment. The base path should match your repository name.

Edit `vite.config.ts` and add the base configuration:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',  // Replace 'your-repo-name' with actual repo name
})
```

### 1.2 Add GitHub Pages Deployment Script
Add this script to your `package.json` in the scripts section:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### 1.3 Install gh-pages Package
```bash
npm install --save-dev gh-pages
```

## 📁 Step 2: Create GitHub Repository

### 2.1 Create Repository on GitHub
1. Go to [GitHub](https://github.com)
2. Click the "+" icon → "New repository"
3. Name your repository (e.g., `satellite-data-analysis`)
4. Make it Public
5. Don't initialize with README (we have files already)
6. Click "Create repository"

### 2.2 Initialize Git in Your Project
```bash
# Navigate to your project directory
cd /Users/originally/Desktop/space_Logistics3/rasterisation

# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Satellite Data Analysis Educational Platform"

# Add remote origin (replace YOUR_USERNAME and YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to main branch
git branch -M main
git push -u origin main
```

## 🌐 Step 3: Deploy to GitHub Pages

### 3.1 Update Vite Config with Correct Base Path
Update your `vite.config.ts` with your actual repository name:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/satellite-data-analysis/',  // Use your actual repo name
})
```

### 3.2 Deploy
```bash
# Install gh-pages if not already installed
npm install --save-dev gh-pages

# Build and deploy
npm run deploy
```

### 3.3 Configure GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Select "gh-pages" branch
6. Select "/ (root)" folder
7. Click "Save"

## 🎉 Step 4: Access Your Site

Your site will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

It may take a few minutes for the site to be live after first deployment.

## 🔄 Step 5: Future Updates

To update your deployed site:

```bash
# Make your changes
# Then commit and push changes
git add .
git commit -m "Update: description of changes"
git push origin main

# Deploy updated version
npm run deploy
```

## 🛠️ Troubleshooting

### Common Issues:

1. **404 Error on deployment**: Check that the base path in `vite.config.ts` matches your repository name exactly.

2. **CSS/JS files not loading**: Make sure you've set the correct base path and rebuilt the project.

3. **Routes not working**: This is expected with GitHub Pages for SPAs. Users need to access the specific page URLs through the navigation.

4. **Images not loading**: If using relative paths, ensure they're correctly referenced from the base path.

## 📱 Bonus: Custom Domain (Optional)

If you want to use a custom domain:

1. Create a `CNAME` file in your `public` folder with your domain name
2. Configure your domain's DNS to point to `YOUR_USERNAME.github.io`
3. Enable HTTPS in GitHub Pages settings

## 🎯 Summary

Your educational platform is now live and accessible to students worldwide! The deployment process:

1. ✅ Configured Vite for GitHub Pages
2. ✅ Created GitHub repository  
3. ✅ Pushed code to GitHub
4. ✅ Deployed using gh-pages
5. ✅ Configured GitHub Pages settings

Your platform includes:
- 📚 Comprehensive educational content on satellite data analysis
- 🖼️ Real images from Unsplash
- 📺 Educational YouTube videos
- 🎨 Modern, responsive design
- 🧭 Easy navigation between topics

Students can now access your platform at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/` and learn about:
- Rasterization fundamentals
- Satellite data processing
- Machine learning applications
- QGIS tutorials
- ISRO hackathon preparation
- Comprehensive preparation resources

Happy teaching! 🎓
