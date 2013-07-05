---
layout: default
---
{% for post in site.posts limit:5 %}
<article class="article">
<h2 class="article-title">{{post.title}}</h2>
{{ post.content | split: '<!-- more -->' | first }}
<a class="continue-reading" href="{{post.url}}">read more</a>
</article>
{% endfor %}