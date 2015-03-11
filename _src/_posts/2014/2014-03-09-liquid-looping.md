---
title: Looping with Liquid
date: 2014-03-09 18:37
layout: post
categories: volume-one post
 
---


In my `podcast.xml` file, I have a loop that goes through all my posts and identifies which ones are episodes of The Log:

{% highlight ruby %}
for post in site.posts limit:10
  if post.layout == 'post-log'
    # Do cool loopy stuff
{% endhighlight %}

This was working great, but I began to notice that only the latest two episodes of The Log were being displayed on [its iTunes page](https://itunes.apple.com/us/podcast/the-log/id830009186?mt=2). I spent about an hour searching the web, before I realized my mistake. I originally thought that `limit: 10` would grab the 10 most recent episodes of The Log, but because the logic of `if post.layout == 'post-log'` comes inside the loop, Liquid[^1] only cycles through the last ten items I've posted &mdash; regardless whether it was an article, link, or episode.

The temporary fix is easy, just remove the limit:

{% highlight ruby %}
for post in site.posts
  if post.layout == 'post-log'
    # Do cool loopy stuff
{% endhighlight %}

Seems to do the trick, but I may want to look into assigning each episode of The Log a category and looping through that specific category with `for post in site.the-log.posts`.

[^1]: Liquid is the markup language that Jekyll, the engine that powers this blog, users to parse through the various templates I've created. If you're just getting started with Liquid, Shopify has [a fantastic guide](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers) that I've consistently gone back to.
