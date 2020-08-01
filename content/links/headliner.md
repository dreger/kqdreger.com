---
date: 2016-09-01T00:00:00Z
link: http://audaciousfox.net/projects/headliner
redirect_from:
- linked/2016/09/01/headliner-js
title: Orphaned Words in Headlines
---

I find headlines with orphaned words visually unappealing, so AF headlines are pre-processed to add a non-breaking space between the last two words. Now instead of this:

    U.S Broadband Speeds Reach New
    High

I get: 

    U.S Broadband Speeds Reach
    New High

I have both a Liquid implementation (for pre-processing in Jekyll) and a JavaScript version (for post-processing in any webpage). Check them out, and let me know if you have any ideas for improvements or other languages. 
