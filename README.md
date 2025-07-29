# ShellBlog

A clean, modern Jekyll theme with terminal-inspired design, perfect for technical blogs and developer portfolios.

## Features

- **Terminal-inspired header** with command prompt styling
- **Dark/Light mode toggle** with system preference detection
- **Responsive design** optimized for all devices
- **Dynamic tag system** with instant filtering
- **Built-in search** functionality
- **Syntax highlighting** with Rouge
- **Social sharing** buttons
- **SEO optimized** with meta tags and structured data

## Quick Start

1. **Fork and clone this repository**
   ```bash
   git clone https://github.com/yourusername/shellblog.git
   cd shellblog
   ```

2. **Install dependencies**
   ```bash
   bundle install
   ```

3. **Configure your site**
   Edit `_config.yml` with your information:
   ```yaml
   title: "Your Name"
   email: "your.email@example.com"
   description: "Your site description"
   
   author:
     name: "Your Name"
     bio: "Your bio"
   
   social:
     github: "yourusername"
     linkedin: "https://linkedin.com/in/yourprofile"
   ```

4. **Run locally**
   ```bash
   bundle exec jekyll serve
   ```

## 📝 Writing Posts

Create posts in the `_posts` directory with the format `YYYY-MM-DD-title.md`:

```markdown
---
layout: post
title: "Your Post Title"
date: 2025-01-27 10:00:00 +0000
categories: [devops, tutorial]
excerpt: "A brief description of your post"
---

Your post content goes here...

<!--more-->

Additional content after the "Read More" break.
```

### Post Front Matter Options

- `title`: Post title
- `date`: Publication date
- `categories`: Post categories (array)
- `tags`: Post tags (array)
- `excerpt`: Custom excerpt (optional)
- `layout`: Use `post` for blog posts

## 🎨 Customization

### Colors

Edit the CSS variables in `assets/css/main.scss`:

```scss
:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f8fafc;
  --text-primary: #1a202c;
  --accent: #3182ce;
  // ... more variables
}
```

### Typography

The theme uses two main fonts:
- **Inter**: For body text and headings
- **JetBrains Mono**: For code and terminal elements

### Layout Structure

```
_layouts/
├── default.html     # Base layout
├── home.html        # Homepage layout
├── post.html        # Blog post layout
└── page.html        # Static page layout

_includes/
├── header.html      # Site header with navigation
├── footer.html      # Site footer
└── reading-time.html # Reading time calculation

_pages/
└── about.md         # About page

_posts/
└── your-posts.md    # Blog posts
```

## 🔧 Configuration Options

### `_config.yml` Settings

```yaml
# Site Information
title: "Site Title"
email: "contact@example.com"
description: "Site description"
baseurl: ""
url: "https://yourdomain.com"

# Author Information
author:
  name: "Author Name"
  bio: "Author bio"
  location: "Location"

# Social Links
social:
  github: "username"
  linkedin: "profile-url"

# Theme Settings
theme_color: "#2d3748"
accent_color: "#4299e1"
footer_tagline: "Your tagline"
footer_disclaimer: "Disclaimer text"

# Features
reading_time: true

# SEO
twitter:
  username: "twitter_handle"
  card: summary
```

### Navigation

Edit `_includes/header.html` to customize navigation links:

```html
<nav class="main-nav">
    <a href="{{ '/' | relative_url }}" class="nav-link">Home</a>
    <a href="{{ '/about' | relative_url }}" class="nav-link">About</a>
    <!-- Add more navigation items -->
</nav>
```

## 📱 Social Sharing

The theme includes built-in social sharing buttons for:
- **Twitter**: Shares post title and URL
- **LinkedIn**: Creates rich preview with post information
- **Email**: Pre-fills subject and body

### Customizing Share Buttons

Edit `_layouts/post.html` to modify sharing options or add new platforms.

## 🌙 Dark Mode

The theme includes an automatic dark/light mode toggle. Users can:
- Click the floating toggle button
- System preference is respected by default
- Choice is saved in localStorage

## 📊 SEO & Analytics

### Built-in SEO Features

- Automatic meta tags generation
- Open Graph tags for social sharing
- Twitter Card support
- Structured data markup
- XML sitemap generation

### Adding Analytics

Add your analytics code to `_includes/analytics.html` and include it in `_layouts/default.html`.

## 🚀 Deployment

### GitHub Pages

1. Push your code to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Set source to main branch
4. Your site will be available at `https://username.github.io`

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `bundle exec jekyll build`
3. Set publish directory: `_site`
4. Deploy!

### Custom Domain

Add a `CNAME` file to your repository root with your domain:
```
yourdomain.com
```

Update `_config.yml`:
```yaml
url: "https://yourdomain.com"
```

## 🛠️ Development

### Local Development

```bash
# Install dependencies
bundle install

# Run development server
bundle exec jekyll serve

# Build for production
bundle exec jekyll build

# Update dependencies
bundle update
```

### File Structure

```
├── _config.yml          # Site configuration
├── _data/               # Data files
├── _includes/           # Reusable components
├── _layouts/            # Page layouts
├── _pages/              # Static pages
├── _posts/              # Blog posts
├── _sass/               # Sass partials
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
├── Gemfile              # Ruby dependencies
├── index.md             # Homepage
└── README.md            # This file
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This theme is available as open source under the terms of the [MIT License](LICENSE).
