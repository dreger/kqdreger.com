---
layout: default
title: "K.Q. Dreger"
---

Hi, I'm K.Q. Dreger. I work at [Patriot Software](https://patriotsoftware.com/) where I empower our product and design teams as the director of product. 

I have a deep love of writing, whether it's code for computers or words for humans. I think good writing is good design—and clarity in writing leads to clarity of thought. 

[About this site][about] &bull; [Email][] &bull; [Twitter][]

[about]: /about-site
[email]: https://audaciousfox.net/masthead
[twitter]: https://twitter.com/dreger



## Dispatches

I write occasionally. Observations. Notes. Musings. I call them dispatches. 

{% for post in site.posts  %}
<p><a href="{{ post.url }}">{{ post.title }}&nbsp;&rarr;</a><br><small><em>{{ post.date | date: "%B %Y" }}</em></small></p>
{% endfor %}

{% include contact.html %}




