---
layout: page
title: Archive
---
<div class="archive-list">
	<ul>
		{% for post in site.posts %}
		<li><span class="date">{{ post.date | date: "%b %d, %Y" }}</span> &#8811; <a href="{{ post.url }}">{{ post.title }}</a></li>
		{% endfor %}
	</ul>
</div>