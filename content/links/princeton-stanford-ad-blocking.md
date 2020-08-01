---
date: 2017-04-18T17:45:52-04:00
link: https://motherboard.vice.com/en_us/article/princetons-ad-blocking-superweapon-may-put-an-end-to-the-ad-blocking-arms-race
title: Princeton, Stanford Develop Perceptual Ad-Blocking, Which Uses Computer Vision to Block Ads
---
Researches Grant Storey, Dillon Reisman, Arvind Narayanan, and Jonathan Mayer, in a draft of an upcoming paper titled ["The Future of Ad Blocking:
An Analytical Framework and New Techniques" (PDF)][draft]: 

> Thus we propose _perceptual ad blocking_ which works radically differently from current ad blockers. It deliberately ignores useful
information in markup and limits itself to visually salient information, mimicking how a human user would recognize ads. We use lightweight computer vision techniques to implement such a tool and show that it defeats attempts to obfuscate the presence of ads.

[Jason Koebler][vice], _Vice_: 

> The Federal Trade Commission regulations require advertisements to be clearly labeled so that a human can recognize them, which has created a built-in advantage for consumers and, now, ad blockers. The team used several computer vision techniques to detect ads the same way that a human would, which they call "perceptual ad blocking." Because advertisers must comply with these regulations, the authors imagine an "end game" in which consumers—and ad blockers—ultimately win.

Because an ad is required to look like an ad, identification via computer vision or optical character recognition seems like a surefire way of blocking them indefinitely. A [proof of concept Chrome extension][chrome] is available, and it worked pretty well in my tests. The extension doesn't actually block ads, but overlays a watermark, proving its capability. 

The ad-blocking arms race isn't going to last forever. There will be a winner, and it will be the users. This is unfortunate, because advertising isn't the problem; rather, the past decade of overly aggressive, intrusive data collecting, and resource hogging online ads have doomed this particular format. If publishers and advertisers aren't attempting to completely rethink how online ads work, they're either crazy or delusional. 

[chrome]: https://chrome.google.com/webstore/detail/perceptual-ad-blocker/mahgiflleahghaapkboihnbhdplhnchp?hl=en0
[vice]: https://motherboard.vice.com/en_us/article/princetons-ad-blocking-superweapon-may-put-an-end-to-the-ad-blocking-arms-race
[draft]: http://randomwalker.info/publications/ad-blocking-framework-techniques.pdf