---
layout: default
title: "Audacious Fox :: K.Q. Dreger"
---


# [dreger.me](/)/blog

Audacious Fox is my small column on design, product, and writing. Published from Ohio, made on a Mac. Updated multiple times a month, most of the time.

<!-- {% for post in site.posts %}
<article>
<h3>
<a href="{{ post.url }}">{{ post.title }}&nbsp;&rarr;</a>
</h3>
<p>{{ post.summary }}</p>
</article>
{% endfor %}
-->

{% for post in site.posts  %}
{% capture this_year %}{{ post.date | date: "%Y" }}{% endcapture %}
{% capture next_year %}{{ post.previous.date | date: "%Y" }}{% endcapture %}

{% if forloop.first %}
<h2 id="{{ this_year }}-ref">{{this_year}}</h2>

{% endif %}

<article>
<h3>
<a href="{{ post.url }}">{{ post.title }}&nbsp;&rarr;</a>
</h3>
<p>{{ post.summary }}</p>
</article>

{% if forloop.last %}

{% else %}
    {% if this_year != next_year %}

    <h2 id="{{ next_year }}-ref">{{next_year}}</h2>

    {% endif %}
{% endif %}
{% endfor %}