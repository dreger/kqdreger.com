---
layout: page
title: Archive
---
<div class="archive-list">
	<ul>
		{% for post in site.posts %}
		<li><span class="date">{{ post.date | date: "%b %d, %Y" }}</span> - <a href="{{ post.url }}">{{ post.title }}</a></li>
		{% endfor %}
	</ul>
</div>