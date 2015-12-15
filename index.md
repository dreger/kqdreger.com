---
layout: default
---
<a href="/"><img class="logo" src="/assets/images/dreger.png"></a>

**Hello**&mdash;I'm Kyle Dreger, and I work for [Patriot Software](https://patriotsoftware.com). I write about design, gadgets I can afford, and whatever interesting things my brother texts me. 

Rare tweets [@Dreger](https://twitter.com/dreger). *New!* [RSS](/feed.xml). I <3 [email](mailto:comments@dreger.me). 

---

{% for post in site.posts %}
  <article>
    <h1 class="post-title"><a href="{{post.url}}">{{ post.title }}</a></h1>
    {{ post.content | strip_html | truncate: 250 }}
  </article>
{% endfor %}
