# Deployment Guide

This guide will help you deploy your portfolio website to various platforms.

## 🚀 Quick Deploy Options

### 1. GitHub Pages (Recommended)

**Steps:**
1. Push your code to GitHub
2. Go to your repository Settings
3. Navigate to Pages section
4. Select "Deploy from a branch"
5. Choose `main` branch and `/ (root)` folder
6. Save the settings

**Automatic Deployment:**
- The included GitHub Actions workflow will automatically build and deploy your site
- Every push to the main branch will trigger a new deployment

### 2. Netlify (Easy & Free)

**Steps:**
1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect your GitHub repository
4. Set build command: `npm run build`
5. Set publish directory: `dist`
6. Click "Deploy site"

**Custom Domain:**
- Add your custom domain in Netlify dashboard
- Update DNS settings as instructed

### 3. Vercel (Fast & Modern)

**Steps:**
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Vercel will auto-detect it's a Vite project
4. Click "Deploy"

**CLI Method:**
```bash
npm i -g vercel
vercel
```

## 📝 Pre-Deployment Checklist

- [ ] All images are properly linked and working
- [ ] Contact information is correct
- [ ] Portfolio projects are complete
- [ ] No console errors in browser
- [ ] Site works on mobile devices
- [ ] All links are functional

## 🔧 Build Commands

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Domain Setup

### Custom Domain (Optional)

1. **Purchase a domain** from any registrar
2. **Point DNS** to your hosting provider
3. **Configure SSL** (usually automatic)
4. **Update portfolio links** to use your domain

### Free Subdomain Options

- **GitHub Pages**: `username.github.io/repository-name`
- **Netlify**: `random-name.netlify.app`
- **Vercel**: `project-name.vercel.app`

## 📱 Performance Optimization

After deployment, check:
- [ ] Page load speed
- [ ] Image optimization
- [ ] Mobile responsiveness
- [ ] SEO meta tags
- [ ] Social media previews

## 🛠️ Troubleshooting

### Common Issues:

1. **Images not loading**
   - Check file paths in `public/Images/`
   - Ensure images are committed to Git

2. **Build errors**
   - Run `npm install` to ensure all dependencies
   - Check for syntax errors in components

3. **404 errors on refresh**
   - Ensure SPA routing is configured
   - Check redirect rules in hosting platform

### Support:

If you encounter issues, check:
- Browser console for errors
- Build logs in deployment platform
- Network tab for failed requests

---

**Happy Deploying! 🎉**
