---
title: "Big, Beautiful Images with CSS"
date: 2015-01-19
author: KD
published: false
redirect_from: 
- 2015/01/19/beautiful-images-with-css.html
- 2015/01/beautiful-images-with-css.html
---


_Note: This isn't a critique of The Newsprint's design, which I very much like; rather, Mr. Ginter's latest post just happened to be the reminder I needed to finish writing about this technique (sorry, Josh!)._

<!-- more -->

If you love art-directed posts with great photography, check out Josh Ginter's [The Newsprint](http://thenewsprint.co). It has been fun to watch him develop as a photographer, and his accompanying articles keep getting better. Here's how Mr. Ginter's latest post, a [photo review of the Hobonichi Techo planner](http://thenewsprint.co/2015/01/19/hobonichi-techo/), looks in Safari:

_![the newsprint](https://farm9.staticflickr.com/8655/16293073066_bec0012532_o_d.png)_

The images look great, and Mr. Ginter [alluded](https://twitter.com/joshuaginter/status/557028869442916352) that this was some of his best photography work yet &mdash; I agree.

However, with photography this good, I'd love to see his images larger than the `width: 37rem;` of the body text. A great example is to check out Andrew Kim's excellent [Minimally Minimal](http://www.minimallyminimal.com/), which really works to make his photos the main focus of the display. Particularly with macro shots, enlarging the images could really help us see the detail.

With that, I'd like to share a method that I have been using for a while, to accomplish a Markdown-based emphasized image design.

### Emphasized Markdown Images

Using The Newsprint's `37rem` as a base width, let's make our images `14rem` larger than the paragraph width and include an offset, so things are centered (note,  increase your image width by even numbers, so the offset is easy to calculate):

    img {
      max-width: 51rem; // 37 + 14
      margin-left: -7rem; // 14 / 2
	}

That leaves us with this:

_![big goruck](https://farm8.staticflickr.com/7470/15696474814_132247c345_o_d.png)_

Nice and big.

But this isn't ideal. Not all images are the same, and there may be some photographs that you want to show at the same width as the paragraph text. If we were using HTML, this would be easy: just attach a class to the `img` element, and style it up in CSS. However, cluttering up my Markdown files with HTML elements is less than ideal, and I would rather use standard Markdown syntax to distinguish between the images I want large and small.

The solution is to apply the same Markdown syntax for emphasizing text (wrapping the text in underscores) to images. Our regular images will use the standard `![]()` notation, while emphasized images can use `_![]()_`, which will be formatted in HTML as `<img>` and `<em><img></em>` respectfully.  

Aside from being simple, this technique also makes contextual sense, because we're _emphasizing_ the image.

Now that we're generating two different tags for images, we can easily style the emphasized variant, by telling our CSS to only enlarge photos that are direct children of `<em>` tags:

	img {
	  max-width: 100%; // fill parent's width
	}
	em img {
      max-width: 51rem;
      margin-left: -7rem;  
	}

Now, all regular images will now be constrained to the width of the paragraph text: `![an image](what-a-beauty.png)`:

_![small goruck](https://farm9.staticflickr.com/8668/15699003153_d84f251f7f_o_d.png)_

Unless we decide to include emphasis: `_![an emphasized image](what-a-beauty.png)_`:

_![big goruck](https://farm8.staticflickr.com/7470/15696474814_132247c345_o_d.png)_

Our final task is to ensure things look good on smaller devices. Big images are nice on a desktop, but for mobile ones, the distinction is less important. We can accomplish this by using a media query, which will be trigged when the window width is slightly larger than our emphasized image (em img rem + 2):

	@media screen and (max-width: 53rem) {
	  em img {
	    max-width: 100%;
	    margin-left: 0;
	  }
	}

Whenever a screen width gets close to that of our emphasized image, the media query rule will kick in, removing the negative margin and reseting our image's width to fill the parent paragraph container.

There are plenty of ways to accomplish what I have here, but I like this method for two reasons:

1. I get to use regular Markdown, without plug-ins or HTML elements.
2. My text document looks sensible and retains contextual value. I'm literally emphasizing an image, by wrapping an image in emphasis.

That's it &mdash; nice and simple. Now please, if you haven't, go read Mr. Ginter's excellent [review of the Hobonichi Techo planner](http://thenewsprint.co/2015/01/19/hobonichi-techo/), as I've spent enough time missing the forrest for the trees.
