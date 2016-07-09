---
layout: default
---
Talk less, write more, publish sparingly. 

Your host: K.Q. Dreger. Tweeting [@Dreger](https://twitter.com/dreger). 

<ul>
{% for post in site.posts %}
 {% unless post.hidden %} 
  <li><a href="{{ post.url }}">{{ post.title }}</a></li>
 {% endunless %}
{% endfor %}
</ul>