---
layout: default
---
Talk less, write more, publish sparingly. Follow nuggets of wisdom on Twitter [@Dreger](https://twitter.com/dreger) or subscribe via [RSS](/feeds/main.xml). 

<h2>Words, lots of them:</h2>
<ul>
{% for post in site.posts %}
 {% unless post.hidden %} 
  <li><a href="{{ post.url }}">{{ post.title }}</a></li>
 {% endunless %}
{% endfor %}
</ul>