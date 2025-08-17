# Mughees Khan - Architect Engineer Portfolio

A modern, responsive portfolio website showcasing architectural and engineering projects, built with React, Vite, and Tailwind CSS.

## 🏗️ About

This portfolio showcases the work of Mughees Khan, an Architect Engineer specializing in:
- Architectural Design & Planning
- Structural Engineering
- BIM Modeling & 3D Visualization
- Sustainable Design Solutions
- Project Management

## ✨ Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Project Showcase**: Interactive portfolio with image galleries and project details
- **Contact Information**: Easy-to-find contact details and social links
- **Performance Optimized**: Fast loading times with Vite build system
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 🛠️ Technologies Used

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
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
   Navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready for deployment.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── About.jsx       # About section
│   ├── Contact.jsx     # Contact information
│   ├── Experience.jsx  # Work experience timeline
│   ├── Footer.jsx      # Footer component
│   ├── Hero.jsx        # Hero/landing section
│   ├── Navbar.jsx      # Navigation bar
│   ├── Portfolio.jsx   # Project portfolio
│   └── Skills.jsx      # Skills section
├── assets/             # Static assets
├── App.jsx             # Main app component
├── main.jsx            # App entry point
└── index.css           # Global styles
```

## 🎨 Customization

### Adding New Projects

1. Add project images to `public/Images/` folder
2. Update the `projects` array in `src/components/Portfolio.jsx`
3. Include project details: title, description, images, technologies used

### Updating Contact Information

Edit the contact details in `src/components/Contact.jsx`:
- Email address
- Phone number
- Location

### Modifying Content

- **About Section**: Update personal information in `src/components/About.jsx`
- **Experience**: Modify work history in `src/components/Experience.jsx`
- **Skills**: Update skills list in `src/components/Skills.jsx`

## 🌐 Deployment

### GitHub Pages

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   - Push your code to GitHub
   - Go to repository Settings > Pages
   - Select source: "Deploy from a branch"
   - Choose branch: `main` and folder: `/ (root)`
   - Enable GitHub Actions for automatic deployment

### Netlify

1. **Connect to Netlify**
   - Push your code to GitHub
   - Connect your repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`

### Vercel

1. **Deploy to Vercel**
   - Install Vercel CLI: `npm i -g vercel`
   - Run: `vercel` in your project directory
   - Follow the prompts

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Mughees Khan** - [khanz.m.101@email.com](mailto:khanz.m.101@email.com)

**Phone**: +92 332 5516000

**Location**: Lahore, Pakistan

---

Made with ❤️ in Pakistan
