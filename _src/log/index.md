---
layout: default
title: The Log
---
# The Log Podcast
A weekly podcast by Kyle Dreger and guests on the topics of design, craft, and all sorts of technology. Check out all the available episodes below, and subscribe [on iTunes](https://itunes.apple.com/us/podcast/the-log/id830009186?mt=2).

<ul class="index podcast">
{% for post in site.categories.log-podcast %}
	<li value="{{ forloop.rindex0 }}">
	<a href="{{ post.url }}">{{ post.title }}</a><br>
	<span>{{ post.date | date: "%d %b %Y" }}</span>
	</li>
{% endfor %}
</ul>
