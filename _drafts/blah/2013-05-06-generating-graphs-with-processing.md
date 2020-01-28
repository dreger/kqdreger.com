---
expirydate: 2019-12-30
title:  Generating graphs with Processing
starred: true
redirect_from:
- "/archives/13126-generating-graphs-with-processing.html"
- "/generating-graphs-with-processing.html"
---


[Ben Barry's post](http://designforfun.com/display.php?id=128) on designing the 2011 Facebook f8 Conference remains one of my favorite pieces about design on the internet. As I was reading back through it the other day, I came across how Barry had gone about generating those signature Facebook graph images.

<!-- more -->

> While working on [f8 2010](http://designforfun.com/display.php?id=99) we developed a rudimentary Processing script that allowed us to generate graph imagery. For 2011 we dusted it off and polished it up. With a some additional work we developed a robust tool that allowed us to rapidly iterate and develop graphics for a variety of applications. Because of the speed and flexibility it afforded us the entire graphic system for this years f8 was built using imagery generated with Processing.


With nothing to do on my Saturday night, I downloaded [Processing](http://www.processing.org/) and thought I'd try to recreate Barry's technique.

![more graphs](http://cargo.kyledreger.com.s3.amazonaws.com/graphs/922.68256graph.png)
![more graphs](http://cargo.kyledreger.com.s3.amazonaws.com/graphs/3835.7178graph.png)
![more graphs](http://cargo.kyledreger.com.s3.amazonaws.com/graphs/3344.5784graph.png)

I ended up getting pretty close.

My script, which I ended up calling GraphMaker, starts by randomly placing nodes on the canvas. It then goes through every node and gets a list of nodes within a certain distance to that particular one. Then it's a simple matter of drawing lines from the original node to a limited number of close neighbors.

The results looked good, and I spent at least half an hour **just** tweaking all the parameters that go with each node (color, size, max distance a line can be between two nodes).

However, even though the graphs from my script look similar to the ones from f8, there's one significant flaw that I could never figure out how to fix: overlapping nodes.

Regardless how dense Barry's graphs, no node ever overlaps any of its neighbors - mine do. It's a subtle difference, but one that significantly impacted the quality of my images at the beginning. Eventually, I was able to compensate by having each node retain a slight transparency which enables you to still see individual nodes even when they overlap.

For now, my random-graph-making itch has been scratched, but I hope to revisit this one day and implement a check to ensure that each new node has a little space from its neighbor. Until then, feel free to check out the [script on GitHub](https://gist.github.com/kyledreger/5519425) and have some fun.

The final interesting thing from this experiment, that my girlfriend actually pointed out to me, is that each image resembles a constellation. Funny, yet oddly profound when taken in context with our own social graphs and the world around us.

**UPDATE:** A reader, Lalith P., sent me an email with [his solution](https://github.com/cuttarug/graph-imagery) to the overlapping-nodes problem I was having. Thanks, Lalith!
