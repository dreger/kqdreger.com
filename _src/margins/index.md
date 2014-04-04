---
layout: default
title: The Margins
---
# The Margins Podcast
A short, single-topic, daily-ish podcast on a variety of topics including: writing, iOS, apps, reading, running, eating, thinking, smiling, designing, speaking, and more. Hosted by me, Kyle Dreger. Usually in pajamas. 

<ul class="index podcast">
{% for post in site.categories.margins-podcast %}
	<li value="{{ forloop.rindex0 }}">
	<a href="{{ post.url }}">{{ post.title }}</a><br>
	<span>{{ post.date | date: "%d %b %Y" }}</span>
	</li>
{% endfor %}
</ul>
