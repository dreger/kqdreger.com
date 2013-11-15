---
title: Statflix.rb
date: 2013-11-12 07:43
layout: post
published: false
---
I've always been curious as to why Netflix doesn't offer some sort of personal analytics for your account. As a user, and as some who loves statistics, I would find it immensely fascinating to see how many hours, shows, Gigabytes, etc. my family watches throughout the week. Seeing a breakdown of peak hours that we use the service might even help to keep our productivity in check when new seasons get released (_a la Breaking Bad_).

Unfortunately, eight months ago, [Netflix shut down their public API](http://developer.netflix.com/blog/read/Changes_to_the_Public_API_Program), esentially cutting off their data from any 3rd-party applications. Since there was no longer an "official" way to access data from Netflix, I decided to try and roll my own solution.

### Ruby web scraping

The first thing I needed was a way to access the data found on my Netflix "[Viewing Activity](https://movies.netflix.com/WiViewingActivity)" (VA) page. Unfortunately, there were two problems with this:

1. The data only went back about a week.
2. The data was being generated with an AJAX call on page creation

[![netflix api](/public/cargo/netflix-api.png)](/public/cargo/netflix-api.png)

http://mechanize.rubyforge.org/

http://nokogiri.org/