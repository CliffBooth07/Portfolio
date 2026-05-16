# 🚀 Pawan Tiwari's Portfolio Website

A stunning, modern, and futuristic portfolio website built with **HTML5**, **CSS3**, and **JavaScript** featuring advanced 3D animations, smooth scrolling effects, and glassmorphism design.

## ✨ Features

### 🎨 **Design & Visual Effects**
- **3D Animated Cube** - Rotating hero cube with parallax effects
- **Glassmorphism Design** - Modern frosted glass effect throughout
- **Smooth Scroll Animations** - Elements fade in as you scroll
- **Gradient Backgrounds** - Beautiful linear gradients with floating spheres
- **Parallax Scrolling** - Background elements move at different speeds
- **Hover Effects** - Interactive card and button animations
- **Mouse Following** - Cube rotates based on mouse position

### 🌐 **Responsive Design**
- Mobile-first approach
- Fully responsive on all devices (mobile, tablet, desktop)
- Touch-friendly navigation
- Adaptive grid layouts

### 📱 **Sections**
1. **Hero Section** - Eye-catching introduction with 3D cube
2. **About Me** - Personal summary and quick stats
3. **Skills** - Organized skill categories with tags
4. **Experience** - Timeline with work history and achievements
5. **Projects** - Featured projects with descriptions and tech stack
6. **Achievements** - Certifications and accomplishments
7. **Education** - Educational background
8. **Contact** - Contact form and methods

### ⚡ **Performance**
- Lightweight and fast loading
- Smooth 60fps animations
- Optimized CSS and JavaScript
- Intersection Observer for efficient animations

## 🚀 Quick Start

### Option 1: Open Directly
Simply open the `index.html` file in your web browser:
```bash
# Windows
start index.html

# Mac
open index.html

# Linux
xdg-open index.html
```

### Option 2: Use a Local Server
For better development experience, use a local server:

**Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Node.js (http-server):**
```bash
npx http-server
```

**VSCode Live Server:**
- Install "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

Then open `http://localhost:8000` in your browser.

## 📁 File Structure

```
Portfolio/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # Interactivity and JavaScript
└── README.md           # This file
```

## 🎯 Customization Guide

### 1. **Update Personal Information**
Edit `index.html`:
- Replace "PAWAN TIWARI" with your name
- Update email and phone number
- Modify social media links
- Change company and client names

### 2. **Modify Colors**
Edit `styles.css`:
```css
:root {
    --primary: #667eea;      /* Change primary color */
    --secondary: #764ba2;    /* Change secondary color */
    --accent: #f093fb;       /* Change accent color */
    --dark: #0f0f1e;         /* Change background */
}
```

### 3. **Add/Remove Sections**
- Copy and modify section blocks in `index.html`
- Add corresponding CSS in `styles.css`
- Update navigation links

### 4. **Update Skills**
Find the `<section id="skills">` and modify skill tags:
```html
<span class="skill-tag">Your Skill</span>
```

### 5. **Add Projects**
Duplicate `.project-card` in the projects grid:
```html
<div class="project-card">
    <div class="project-image" style="background: YOUR_GRADIENT;">
        <i class="YOUR_ICON"></i>
    </div>
    <div class="project-content">
        <h3>Your Project Title</h3>
        <p>Your project description</p>
        <!-- Add more details -->
    </div>
</div>
```

## 🎮 Interactive Features

### Keyboard Shortcuts
- **/** - Jump to About section
- **C** - Jump to Contact section
- **Tab** - Navigate with keyboard

### Mouse Effects
- Hover over cards for 3D lifting effect
- Cube rotates based on mouse position
- Smooth transitions on all interactive elements

## 🔧 Customization Examples

### Change Hero Title Animation Speed
In `styles.css`, modify:
```css
@keyframes rotateCube {
    /* Change from 10s to your desired duration */
}
```

### Modify Section Padding
```css
.section-container {
    padding: 4rem 2rem; /* Change these values */
}
```

### Add Your Own Fonts
Add to `index.html` in `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap" rel="stylesheet">
```

Then update `body { font-family: }` in CSS.

## 🎨 Color Scheme Reference

**Current Palette:**
- Primary Blue: `#667eea`
- Secondary Purple: `#764ba2`
- Accent Pink: `#f093fb`
- Dark Background: `#0f0f1e`
- Light Text: `#e0e0e0`

**Popular Alternatives:**
- Modern Green: `#10b981`, `#059669`
- Ocean Blue: `#0ea5e9`, `#0284c7`
- Sunset: `#f97316`, `#ea580c`

## 📊 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🚀 Deployment

### Deploy to Netlify
1. Create account at [netlify.com](https://netlify.com)
2. Drag and drop your portfolio folder
3. Your site is live! 🎉

### Deploy to GitHub Pages
1. Create a GitHub repository
2. Push your files to the repo
3. Go to Settings → Pages
4. Select main branch
5. Your site is live at `https://yourusername.github.io`

### Deploy to Vercel
1. Create account at [vercel.com](https://vercel.com)
2. Import your repository
3. Deploy with one click

## 📝 SEO Optimization

The portfolio includes:
- Semantic HTML structure
- Meta tags for social sharing
- Responsive design (mobile-friendly)
- Fast loading performance
- Accessible design

### To add more SEO:
Edit `index.html` head:
```html
<meta name="description" content="Your portfolio description">
<meta name="keywords" content="QA, Automation, Testing, AI">
<meta name="author" content="Your Name">
```

## 🎯 Enhancement Ideas

1. **Dark/Light Theme Toggle** - Already partially implemented
2. **Blog Section** - Add a blog showcase
3. **Testimonials** - Add client testimonials
4. **Timeline Interactive** - Click to expand experience
5. **Skill Progress Bars** - Animated progress indicators
6. **Download CV** - Add downloadable resume
7. **Language Switcher** - Multi-language support
8. **Analytics** - Add Google Analytics

## 🐛 Troubleshooting

### Animations not working?
- Check if JavaScript is enabled
- Clear browser cache (Ctrl+Shift+Del)
- Try in a different browser

### Images not showing?
- Verify file paths are correct
- Check file naming (case-sensitive on Linux)
- Ensure files are in the same directory

### Form not submitting?
- Currently logs to browser console
- To add backend: Update `script.js` form handler
- Use services like Formspree or Netlify Forms

## 📞 Support

For issues or customization help:
- Check the inline comments in code
- Review CSS Grid and Flexbox documentation
- Consult JavaScript MDN documentation

## 📜 License

Free to use and modify for personal or commercial projects.

## 🎉 Have Fun!

This portfolio is yours to customize and make your own. Experiment with colors, add new sections, and make it reflect your personality and work!

---

**Happy Coding! 🚀**

Built with ❤️ for Pawan Tiwari
