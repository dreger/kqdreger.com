---
layout: default
title: Audacious Fox
published: false
---

# [dreger.me](/)/[af](/af)

Audacious Fox is a small column on design, product, and writing. Published from Ohio, made on a Mac. Updated multiple times a month, most of the time. Written by [K.Q. Dreger](/). 



{% for post in site.posts %}
<article>
  <h3>
    <a href="{{ post.url }}">{{ post.title }}&nbsp;&rarr;</a>
  </h3>
  <p><em>{{ post.date | date: "%A, %B %e, %Y" }}</em> &mdash; {{ post.summary }}</p>
</article>
{% endfor %}