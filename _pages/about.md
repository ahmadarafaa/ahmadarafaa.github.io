---
layout: page
title: About
permalink: /about/
---

<div class="about-hero">
  <h1>👋 Hi, I'm Ahmed Arafa</h1>
  <p class="hero-subtitle">DevOps Engineer | Converting Chaos into Order | Share the Journey</p>
</div>

## Who I Am

I'm a DevOps Engineer with a strong focus on **automation**, **problem-solving**, and **system reliability**. I enjoy simplifying complex infrastructure, optimizing deployments, and sharing practical lessons from real-world experience.

## What You'll Find Here

I write about DevOps best practices, production issues and solutions, CI/CD workflows, and infrastructure strategies. My blog is a mix of insights, tutorials, and reflections — with the occasional humorous take on life in DevOps.

I believe in keeping things **simple**, **reliable**, and **well-documented**. I'm passionate about continuous learning and mentoring others in the tech community.

## Let's Connect

Thanks for stopping by! Whether you're facing an infrastructure challenge, want to discuss automation strategies, or just feel like sharing DevOps stories, I'd love to hear from you.

**Reach out anytime:**

📧 **[Email](mailto:{{ site.email }})**  
🐙 **[GitHub](https://github.com/ahmadarafaa)**  
💼 **[LinkedIn]({{ site.social.linkedin }})**

Looking forward to connecting with you!

---

<div class="footer-fun">
  <p>🖥️ Currently running on: Linux, caffeine, and the persistent hope that this deployment won't break anything important.</p>
  <p>⏱️ Last system restart: Unknown (and we're keeping it that way)</p>
</div>

<style>
.footer-fun {
  background: var(--bg-secondary);
  border: 2px solid var(--accent);
  border-radius: 12px;
  padding: 1.5rem;
  margin-top: 3rem;
  text-align: center;
  box-shadow: 0 4px 15px var(--shadow);
  transition: all 0.3s ease;
}

.footer-fun:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px var(--shadow);
  border-color: var(--accent-hover, var(--accent));
}

.footer-fun p {
  margin: 0.8rem 0;
  font-size: 1rem;
  color: var(--text-primary);
  font-weight: 500;
  line-height: 1.6;
}

.footer-fun p:first-child {
  margin-top: 0;
}

.footer-fun p:last-child {
  margin-bottom: 0;
}

/* Dark mode specific styling */
body[data-theme="dark"] .footer-fun {
  background: var(--bg-tertiary, #4a5568);
  border-color: var(--accent);
}

body[data-theme="dark"] .footer-fun p {
  color: var(--text-primary, #edf2f7);
}

/* Light mode specific styling */
body[data-theme="light"] .footer-fun {
  background: var(--bg-secondary, #f8fafc);
  border-color: var(--accent, #3182ce);
}

body[data-theme="light"] .footer-fun p {
  color: var(--text-primary, #1a202c);
}

/* Responsive design */
@media (max-width: 768px) {
  .footer-fun {
    padding: 1rem;
    margin-top: 2rem;
  }
  
  .footer-fun p {
    font-size: 0.9rem;
  }
}
</style>
