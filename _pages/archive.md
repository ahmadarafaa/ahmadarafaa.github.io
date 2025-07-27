---
layout: page
title: Archive
permalink: /archive/
---

<div class="archive-page">
    <h1>Post Archive</h1>
    <p class="archive-description">All blog posts organized by date</p>
    
    {% assign posts_by_year = site.posts | group_by_exp: 'post', 'post.date | date: "%Y"' %}
    
    {% for year_group in posts_by_year %}
        <details class="archive-year">
            <summary class="year-heading">{{ year_group.name }}</summary>
            
            {% assign posts_by_month = year_group.items | group_by_exp: 'post', 'post.date | date: "%B"' %}
            
            {% for month_group in posts_by_month %}
                <details class="archive-month">
                    <summary class="month-heading">{{ month_group.name }}</summary>
                    
                    <div class="archive-posts">
                        {% for post in month_group.items %}
                            <article class="archive-post">
                                <div class="post-meta">
                                    <time class="post-date" datetime="{{ post.date | date_to_xmlschema }}">
                                        {{ post.date | date: "%B %d" }}
                                    </time>
                                </div>
                                <div class="post-content">
                                    <h4 class="post-title">
                                        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
                                    </h4>
                                    {% if post.excerpt %}
                                        <p class="post-excerpt">{{ post.excerpt | strip_html | truncate: 120 }}</p>
                                    {% endif %}
                                    {% if post.categories.size > 0 %}
                                        <div class="post-categories">
                                            {% for category in post.categories %}
                                                <span class="category-tag">{{ category }}</span>
                                            {% endfor %}
                                        </div>
                                    {% endif %}
                                </div>
                            </article>
                        {% endfor %}
                    </div>
                </details>
            {% endfor %}
        </details>
    {% endfor %}
    
    {% if site.posts.size == 0 %}
        <div class="no-posts">
            <p>No posts yet. Check back soon!</p>
        </div>
    {% endif %}
</div>

<style>
.archive-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem 1rem;
}

.archive-description {
    color: var(--text-secondary);
    margin-bottom: 3rem;
    font-size: 1.1rem;
}

.archive-year {
    margin-bottom: 3rem;
    border: 1px solid var(--border-color, #e2e8f0);
    border-radius: 8px;
    overflow: hidden;
}

.year-heading {
    font-size: 2rem;
    color: var(--accent);
    margin: 0;
    padding: 1rem 1.5rem;
    background: var(--bg-secondary);
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: 'JetBrains Mono', monospace;
    font-weight: 600;
    border-bottom: 2px solid var(--accent);
    list-style: none;
    position: relative;
}

.year-heading:hover {
    background: var(--accent);
    color: white;
}

.year-heading::marker {
    content: '';
}

.year-heading::before {
    content: '▶';
    position: absolute;
    right: 1.5rem;
    transition: transform 0.3s ease;
    font-size: 1rem;
}

details[open] .year-heading::before {
    transform: rotate(90deg);
}

.archive-month {
    margin: 1rem 1.5rem 2rem 1.5rem;
    border: 1px solid var(--border-light, #f1f5f9);
    border-radius: 6px;
    overflow: hidden;
}

.month-heading {
    font-size: 1.3rem;
    color: var(--text-primary);
    margin: 0;
    padding: 0.8rem 1rem;
    background: var(--bg-primary);
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 600;
    border-left: 3px solid var(--accent);
    list-style: none;
    position: relative;
}

.month-heading:hover {
    background: var(--bg-secondary);
    color: var(--accent);
}

.month-heading::marker {
    content: '';
}

.month-heading::before {
    content: '▶';
    position: absolute;
    right: 1rem;
    transition: transform 0.3s ease;
    font-size: 0.8rem;
    color: var(--text-secondary);
}

details[open] .month-heading::before {
    transform: rotate(90deg);
}

.archive-posts {
    display: grid;
    gap: 1.5rem;
    padding: 1rem;
    background: var(--bg-primary);
}

.archive-post {
    display: grid;
    grid-template-columns: 100px 1fr;
    gap: 1.5rem;
    padding: 1.5rem;
    background: var(--bg-secondary);
    border-radius: 8px;
    border-left: 4px solid var(--accent);
    transition: all 0.3s ease;
}

.archive-post:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px var(--shadow);
}

.post-meta {
    display: flex;
    align-items: flex-start;
}

.post-date {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.9rem;
    color: var(--text-secondary);
    font-weight: 500;
    background: var(--bg-primary);
    padding: 0.5rem;
    border-radius: 4px;
    text-align: center;
    white-space: nowrap;
}

.post-content {
    min-width: 0;
}

.post-title {
    margin: 0 0 0.5rem 0;
    font-size: 1.3rem;
    line-height: 1.4;
}

.post-title a {
    color: var(--text-primary);
    text-decoration: none;
    transition: color 0.3s ease;
}

.post-title a:hover {
    color: var(--accent);
}

.post-excerpt {
    color: var(--text-secondary);
    margin: 0.5rem 0 1rem 0;
    line-height: 1.6;
}

.post-categories {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.category-tag {
    background: var(--accent);
    color: white;
    padding: 0.2rem 0.6rem;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 500;
}

.no-posts {
    text-align: center;
    padding: 3rem;
    color: var(--text-secondary);
    font-style: italic;
}

/* Responsive design */
@media (max-width: 768px) {
    .archive-post {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
    
    .post-date {
        align-self: flex-start;
        font-size: 0.8rem;
    }
    
    .year-heading {
        font-size: 1.5rem;
    }
    
    .month-heading {
        font-size: 1.2rem;
    }
}

/* Dark mode support */
body.theme-dark .post-date {
    background: var(--bg-tertiary);
}

body.theme-dark .archive-post {
    background: var(--bg-tertiary);
}

body.theme-dark .archive-year {
    border-color: var(--border-dark, #4a5568);
}

body.theme-dark .archive-month {
    border-color: var(--border-dark, #4a5568);
}

body.theme-dark .year-heading {
    background: var(--bg-tertiary);
    color: var(--accent);
}

body.theme-dark .year-heading:hover {
    background: var(--accent);
    color: var(--bg-primary);
}

body.theme-dark .month-heading {
    background: var(--bg-secondary);
    color: var(--text-primary);
}

body.theme-dark .month-heading:hover {
    background: var(--bg-tertiary);
    color: var(--accent);
}

body.theme-dark .archive-posts {
    background: var(--bg-secondary);
}
</style>
