---
layout: default-log
title: The Log
---
A daily-ish podcast by Kyle Dreger and guests on the topics of design, craft, and technology. Check out all the available episodes below, and subscribe [on iTunes](https://itunes.apple.com/us/podcast/the-log/id830009186?mt=2).

<ul class="index podcast">
{% for post in site.posts %}
{% if post.layout == 'post-log' %}
<li value="{{ forloop.rindex0 }}">
<a href="{{ post.url }}">{{ post.title }}</a><br>
<span>{{ post.date | date: "%d %b %Y" }}</span>
</li>
{% endif %}
{% endfor %}
</ul>
