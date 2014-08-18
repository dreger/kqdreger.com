---
title: InstantClick.js
date: 2014-02-10 15:29
layout: post
categories: volume-one post
---
Incredibly smart JavaScript library from [Alex Dieulot](https://github.com/dieulot) that uses the [HTML5 pushState() spec](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history) to pre-load whichever link a user is currently hovering over. From the [InstantClick homepage](http://instantclick.io):  

> Latency is inevitable with today’s internet architecture so InstantClick cheats by preloading links you are likely to click on.
 
> Before a visitor clicks on a link, he hovers over that link. Between these two events, 200 ms to 300 ms usually pass by ([test yourself here](http://instantclick.io/click-test.html)). InstantClick makes use of that time to preload the page, so that the page is already there when you click.

Dieulot references the Nielsen Norman Group's [3 Important Limits](http://www.nngroup.com/articles/response-times-3-important-limits/) article, which lists the optimal response times for human-computer interaction. From the study:

> A delay of 0.2–1.0 seconds does mean that users notice the delay and thus feel the computer is "working" on the command, as opposed to having the command be a direct effect of the users' actions. Example: If sorting a table according to the selected column can't be done in 0.1 seconds, it certainly has to be done in 1 second, or users will feel that the UI is sluggish and will lose the sense of "flow" in performing their task. 

_Note: If you care about usability, the [whole article](http://www.nngroup.com/articles/response-times-3-important-limits/) is a really great read._

Ideas like InstantClick are not new, Ruby on Rails has [Turbolinks](https://github.com/rails/turbolinks) that accomplishes the same goal, but I have yet to see an implementation that is so simple to install for non-Rails projects. Include two lines of code (one of which calls the minified script), and you'll be off and running. 

If you are reading this, then the script should be running on my site now, albeit for desktop browsers only (Dieulot has mobile support via touchDown coming soon). To test it out, feel free to click through some of the articles in [the archives](/archives) or any of the stories on the front page; you should notice that pages seem to load near instantly. 

Even though static sites are fast by nature, I have been really impressed with the increase in speed that InstantClick has afforded me. I look forward to watching it develop. 

