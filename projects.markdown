---
layout: page
title: Projects
permalink: /projects/
order: 2
---

<div class="grid-container">
  {% for project in site.projects %}
    <div class="grid-item">
      <a href="{{ project.github_link }}" class="card" target="_blank">
        <div class="image-container">
          <img src="/assets/images/projects/{{ project.image }}" alt="{{ project.title }} Image" onload="adjustCardHeight(this)" onerror="handleImageError(this)">
        </div>
        <div class="card-content">
          <h1 class="project-title">{{ project.title }}</h1>
          <p class="project-description">{{ project.description }}</p>
          <p class="learn-more">Learn more</p>
        </div>
      </a>
    </div>
  {% endfor %}
</div>

<script src="/assets/js/script.js">
</script>
