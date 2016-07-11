---
title: "Interview: Loren Brichter"
date: 2016-06-28 22:22
---

After [noticing that Letterpress had been sold to Solebon LLC][me], I reached out to Atebit's founder and sole proprietor, Loren Brichter. After we waited a few weeks to let things settle down, Mr. Brichter agreed to do a small interview over email. What follows is our conversation about selling Letterpress, iOS, and developing on the web. 

---

<div class="interview" markdown="1">

**K.Q. Dreger:** Hello, Loren. Thanks for agreeing to do this interview. I'll cut right to the chase: Why decide to sell  Letterpress? From [my correspondence with Solebon][me], I know that they originally approached you in early 2015, but you weren't interested. What changed from 2Q to 4Q?

**Loren Brichter:** For the last few years(!?) I’ve been trying to find some time to invest in the game, but other projects kept getting in the way, I ultimately realized that it would be a long time before I could get around to doing all the things I wanted to do, and these folks had the time and motivation to work on it right now. Just seemed like the game deserved some love, and I couldn’t give it.


## Gamecenter + 2.0

**Dreger:** Solebon recently released version 2.0 of Letterpress, their first major update since the acquisition. Two of the headlining features are a new user account system, as opposed to Game Center, and a new "secured" copy of Merriam-Webster's dictionary, which they'll use as the database for playable words.

Both of these changes are in stark contrast to your original approach: matchmaking and user accounts were managed entirely by Game Center, and [the entire Letterpress dictionary](https://github.com/Atebits/Words) was available to the public on GitHub. Were these changes something you advised, or were they already in Solbon's roadmap for  Letterpress?  

**Loren Brichter:** I had actually looked into licensing an official dictionary. Maintaining a word list is tough, loads of gray areas, impossible to make everyone happy, so I understand why they did it. (Super super happy they re-added the ability to play bad words though, I would have been fucking bummed otherwise).

Switching off Game Center was priority #1 for me, and when they said they could build a new backend for the game it pretty much sealed the deal. Game Center was rough. It was my mistake to use it. The game had always been cross-platform (Mac+iOS), but there were so many bugs in Game Center for Mac that if I had launched it I would have been crushed under the weight of tech support.


**Dreger:** In the past, you've not been shy about [poking fun](https://twitter.com/lorenb/status/737678840135311360) at Game Center. Indeed, even though  Letterpress launched to critical acclaim, I think a good number of early players ran into the infamous [`SILLY ERROR -1001, 23`](http://www.Atebits.com/support/faq/gamecenter-sillyerror/). [Many](http://kotaku.com/5955318/apples-game-center-seems-to-be-malfunctioning-today-blame-letterpress) [speculated](http://www.imore.com/no-skin-game-center) that it was  Letterpress's popularity that was highlighting the limitations of Game Center.

**Brichter:** Yep. Nobody could play the game for a while after it launched. If I cared to track attrition rates I’m sure I would have crawled into a hole.

**Dreger:** [Last week's service outage](http://mashable.com/2016/06/02/apple-service-outages/#XjQHPAf3RaqM) notwithstanding, if you were developing  Letterpress today, would Game Center still be a part of your original stack?

**Brichter:** [Nope][nope].

**Dreger:** Shareable replays were one of my favorite parts of playing  Letterpress. Reliving victories and analyzing defeats became a core part of my, and I'm sure other's, strategy. Shortly after launching sharable replays in 2012, Macstories' Federico Viticci [interviewed you about the feature][ms]:

> But I [Viticci] also wanted to ask Brichter about the technological component of Replay; he told me that, with this technology in place, he could now consider other neat visualizations for Letterpress games: for instance, he mentioned charts for scores and word lengths as possible implementations of the Replay webpage, which simply requires server-side updates. Brichter is also thinking about documenting the data format to allow other developers to build analysis tools for Letterpress.

We never saw some of these ideas come to light, but did any of them make it into any sort of development?

**Brichter:** Hadn’t gotten that far, sadly!

## Design

**Dreger:** How do you feel about the design direction of iOS, now that the flat, simplified aesthetic of iOS 7 has had a couple of years to mature?

**Brichter:** I’m surprised it hasn’t changed much. And every iPhone user I know over 40 has all those visual accessibility features (button shapes, etc) turned on, and those are an ocular abomination (and shouldn’t be necessary at all).

Now, if some of the Apple TV aesthetic makes it back to iOS, whoooomama, then we’d be talking.

**Dreger:** Even though the aesthetic of Letterpress was a precursor to what we would see with iOS 7, one of the big differences was your use of shadows and animation to help illustrate depth. Looking at it today, Letterpress seems to share more in common with Google's Material Design than it does with iOS. Would you agree with that?

**Brichter:** Absolutely! When Google announced Material Design I was very excited that somebody was attempting to formalize a wholistic approach to modern software design. It wasn’t precisely what I would have done, but definitely had a familiar vibe ;). Overall I thought it was a fantastic step in the right direction.


**Dreger:** In a 2012 interview with Gigaom, Erica Ogg wrote about how you "built his own version of the user interface framework," when designing the graphics for  Letterpress. Today, that sounds a lot like Metal, the low-level hardware-accelerated graphics API that debuted with iOS 8. Had Metal been around back when you were developing  Letterpress, would that have changed how you approached developing the UI?

**Brichter:** Probably not. Metal is awesome (ditto for Vulkan), but draw calls were never my bottleneck. Plus I tend to err on the side of using things that aren’t blatantly proprietary, GL was good enough, despite the huge warts.


## Atebits

**Dreger:** This is going to sound a bit odd, but I've always wanted to ask: you tend to use a lot of "us" or "we" on the [Atebits](http://www.Atebits.com/contact/) site. Are you still the sole employee at Atebits?

**Brichter:** Mostly just me, there were a few periods where I’d have people help with tech support and whatnot.

**Dreger:** I love your use of Museo Sans Rounded on Atebits.com and in  Letterpress itself. Any particular reason you went with Museo Sans over another family that offers a rounded variant, like Proxima Nova, Gotham, or FF Din?

**Brichter:** Just liked it. Seemed friendly and casual.

**Dreger:** You've mentioned in past interviews that  Letterpress was "a testbed for more stuff." Any chance I can get a hint at what that stuff might be? Can I assume that it's going to be iOS related, or do you see yourself playing more with web-based products (considering your experience building shareable replays)?

**Brichter:** I haven’t launched Xcode (on purpose) in a long time. My work for the last few years has been on the web, and honestly, it’s a breath of fresh air. Instant refreshing, surprisingly good debugging / perf tools, intrinsically multi-platform, and most importantly, open.

Web tech gets a lot of shit from native devs (some of it deserved). But the alternatives are worse. I find the entire concept of App Review morally questionable despite Apple’s good intentions. So I sleep better at night not being part of that anymore. Sure, the web is messy, and it’s delicate, but it’s important and good and getting better fast.

Wouldn’t be surprised if I never went back.

**Dreger:** Are there any games you're playing now that you really enjoy? iOS or otherwise.

**Brichter:** I started playing [Threes][3s] again. It’s still amazing.

**Dreger:** Current iPhone model? (I have my money on iPhone SE)

**Brichter:** I clung to my iPhone 5 for as long as I could, but some iOS update made it unusable (if you accidentally touched an iMessage notification the whole UI would lock up for a minute or two), so I succumbed and got a 6S. Definitely going back to the 4” form factor the next chance I get.

**Dreger:** Last one, and it's a surprise question: will I ever get to see an [update to Scribbles][scribbles]? (Yes, I still have a copy, and yes it's still excellent.)

**Brichter:** I’d love to do it! But it will definitely be a web app.

</div>

---

Thanks again to Mr. Brichter and Atebits for doing this interview.

[3s]: http://asherv.com/threes/
[ms]: https://www.macstories.net/links/letterpress-1-2-brings-html5-replay-feature/
[scribbles]: http://mac.appstorm.net/general/scribbles-simple-intuitive-drawing-for-mac/
[nope]: http://i.imgur.com/1VCcECJ.gifv
[me]: {% post_url 2016-02-08-letterpress-solebon %}
