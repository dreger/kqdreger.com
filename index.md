---
layout: default
---
Hello&mdash;I'm your host, K.Q. Dreger.

By day, I lead user experience at the Patriot Software Companies; by night, I write. Below, you can find some of my better writing. Great care was taken to un-design this site, and hopefully what's left is fast and readable. Thanks for reading.

<!-- <ul>
{% for post in site.categories.writings %}  
<li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul> -->


{% for post in site.categories.writings %}  
<article>
  <p><a href="{{ post.url }}">{{ post.title }}</a><br>
  <em>{{ post.subtitle }}</em> </p>
</article>
{% endfor %} 