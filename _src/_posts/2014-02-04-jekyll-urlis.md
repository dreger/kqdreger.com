---
title: Collision Resistant URIs in Jekyll
date: 2014-02-04 21:12
layout: post
published: false
---
One of the things I was really concerned about when I started updating this site a lot was that I would run out of usable URIs.

`site.com/posts/title-of-post`

or

`site.com/year/month/title-of-post`

Neither of these were anything I was interested in. The first was too basic, and I was sure that, given time, I would run into problems.

<aside>If I wrote two pieces about Apple, then `/posts/apple` might be taken by an earlier post, and I wouldn't know it.</aside>

Thankfully, I was able to write a small Jekyll plug-in that allows me to generate a nice, unique, post id and prepend it to all of my articles. This lets me keep all my posts in a single output folder `archives` and also sort them by name.