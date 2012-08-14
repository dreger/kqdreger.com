---
layout: page
title: Archive
---
<div class="index-list">
	<ul>
		{% for post in site.posts %}
		<li>
			<h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
			<span class="date">{{ post.date | date: "%B %Y" }}</span>
		</li>
		{% endfor %}
	</ul>
</div>