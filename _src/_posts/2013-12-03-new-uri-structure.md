---
title: A New URI Structure 
date: 2013-12-03 08:29
layout: post
published: false
---
Sometimes you have to do something bad in order to allow for future good. Yesterday, I did just that by changing the way this weblog handles URIs (URLs, permalinks, links, etc.). The good news: Things just got _a lot_ simpler for me in regards to posting and managing new content. The bad news: Until Google reindexes my site, all search results pointing back to this site will probably result in my [404 "not found" page](/404.html), which I've updated to point back to this post for explanation. 

Tim Berners-Lee, the _inventor_ the World Wide Web, wrote an article titled, "[Cool URIs don't change](http://www.w3.org/Provider/Style/URI.html)" &mdash; where he warns about the dangers of breaking exiting URIs. However, despite the title of his article, Berners-Lee does acknowledge the following: 

> Do you really feel that the old URIs cannot be kept running? If so, you chose them very badly. Think of your new ones so that you will be able to keep then running after the next redesign.

That's exactly what I'm doing with this change. 

The old format of my URIs followed a `/blog/:year/:month/:post-title` format. This was fine, but it posed some problems given the staticly-generated nature of my site. Although I love the lightweight nature and performance of static sites, the lack of a database or ability to check for URI collision (where two articles accidentally have the same URI) creates an several limitations. Primarilly, the fewer 

The primary way that most static sites seem to tackle the issue of URI collision is to put posts into a hiarchy of folders, usually following a `/:year/:month/:day/:post-title` format. This ensures that even if you have two articles written about Apple, each post will get a unique URI (as long as you don't write two articles with the same title on the same day): 

- `/2013/12/03/apple-buys-kdhq` 
- `/2013/12/04/apple-buys-kdhq`

Even though the slugs (the post title) are the same, the URIs are different. 

I dislike this approach for statically-generated sites. Not only isFor starters, a URI scheme that has the year, month, or day in it implies certain functionality. 

The new scheme is `/archives/YYDOY-post-title`. Where YY is the current two-digit year, and DOY is the three-digit day of the year that the post was written on. This is good for two reasons: 

1. All my posts are now generated into a single directory `/archves`, and I can sort that directory's contents by name to see all my articles in chronological order. 
2. My fear of URI collision is gone. I can write as many articles about Apple as I want, and each post will get a unique URI, provided those posts fall on different days.

Now, if you [check out my archives directory]({{ site.domain }}/public/cargo/kdhq-uris.png), you see that all my posts are in a single folder and able to be sorted by date. 