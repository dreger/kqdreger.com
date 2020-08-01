---
date: 2017-03-14T21:34:26-04:00
title: Sketch’s New, Open File Format 
link: https://medium.com/sketch-app-sources/sketch-43-is-coming-to-town-with-a-new-game-an-open-file-format-ae62e7e7c223#.4g2vhqu93
---

Bohemian Coding's Sketch is a powerful design tool for MacOS, and a number of folks at my company, including me, use it daily. In the next version (43), Sketch will be switching to a JSON-based file format, which, among other things, means that Sketch files will become openly scriptable. [Jasim A. Basheer](https://medium.com/sketch-app-sources/sketch-43-is-coming-to-town-with-a-new-game-an-open-file-format-ae62e7e7c223#.4g2vhqu93) captures how exciting this is: 

> Can you imagine what kind of new things will now be possible? One word: design automation (okay, two words!). You want Artboards that showcase a font and its variations, like a Google Fonts page? There’s probably going to be a script to generate that file. There will be websites from which you can download freshly brewed Sketch files based on what you ask — say an image gallery, or a landing page, or a signup form. You’ll be able to pick your brand colors, choose a theme, randomize it, and voila! you have a Sketch design to start playing with. Someone could even build a Sketch equivalent that runs on the browser. The possibilities are many!

Additionally, aside from automation and cross-platform interoperability, switching to a JSON-based file format should make file versioning — tracking changes to a document over time — much simpler. Currently, if you have a Sketch file in version control, any changes you make are tracked as a single, opaque modification. With the new file format, you should be able to see not only that the document changed, but also what _parts_ of the design were modified. 

Using a JSON-based file format will let designers leverage the power and collaboration of version control, without sacrificing the context of their changes.
