---
title: "The Privacy We Give Away"
date: 2018-01-30T12:34:59-05:00
---

Last November, Strava — the "social network for athletes" — released their [annual global heatmap of user activity](https://medium.com/strava-engineering/the-global-heatmap-now-6x-hotter-23fc01d301de) or "a direct visualization of Strava’s global network of athletes." The report consists of 1 billion activities, 3 trillion latitude/longitude points, and over 10 terabytes of raw data. In short, it's a staggering amount of personal data, anonymized and aggregated, and overlaid on a map. 

For two months, the report made little fanfare. But this week, Nathan Ruser, an Australian university student studying the Middle East and security, [pointed out on Twitter](https://twitter.com/Nrg8000/status/957318498102865920) that Strava's heatmap revealed more than just popular jogging paths. [Alex Hern][tg], *The Guardian*: 

> In locations like Afghanistan, Djibouti and Syria, the users of Strava seem to be almost exclusively foreign military personnel, meaning that bases stand out brightly. In Helmand province, [Afghanistan](https://www.theguardian.com/world/afghanistan), for instance, the locations of forward operating bases can be clearly seen, glowing white against the black map.

> Zooming in on one of the larger bases clearly reveals its internal layout, as mapped out by the tracked jogging routes of numerous soldiers. The base itself is not visible on the satellite views of commercial providers such as Google Maps or Apple’s Maps, yet it can be clearly seen through Strava.

[Tim Cushing][], *Techdirt*: 

> Strava does allow users to geofence "private" areas to prevent tracking in those areas. But it's not a default option. If you don't want to share every movement with Strava, you have to opt out. Most users don't. And most users are seemingly unaware of how much data they're leaving behind.

> This "metadata" -- something our government refers to [as harmless](https://www.techdirt.com/articles/20130708/01453123733/anyone-brushing-off-nsa-surveillance-because-its-just-metadata-doesnt-know-what-metadata-is.shtml) when gathered in bulk -- can result in real-world security issues.

And [Jeffrey Lewis][tdb], _The Daily Beast_: 

> No one is really at fault here, other than individual users who may have violated security procedures. What the heat map does illustrate, though, is that we’re living in a very different age than the one where we developed a lot of our ideas about deterrence and strategic stability.

The amount of data the average smartphone user generates on a day-to-day basis is tremendous. Even when that data is anonymized and presented in aggregate, the results can reveal patterns and routines we might otherwise think are private. It's fair to ask whether Strava should have attempted to scrub the more sensitive data from their results, but the longterm solution is to educate friends, family, and our military about the personal information we're passively giving away. 

This whole story reminded me of back in 2010, when website [Please Rob Me](http://pleaserobme.com/why) used public Twitter and Foursquare checkins to demonstrate how easy it was to know when someone was away from home. Please Rob Me was the first social-networking PSA I remember where freely shared, public data was used to illustrate opportunity for malicious intent. Since 2010, the issue has only become more widespread, as hundreds of millions more smartphones have started cataloging the edges of everything we do. 

Following this explosion of mobile devices, an inexorable side-effect is that we now live in a sort of reverse [herd immunity](https://en.wikipedia.org/wiki/Herd_immunity) when it comes to privacy. Meaning that even if I don't have any social media accounts or smart devices, my face (and voice) can still end up in the background of an Instagram photo or video, to be later analyzed by Facebook's image processing A.I. and added to some database of faces — along with the time and place the data was captured. All of this just by walking in the park, going out to eat, or doing any number of public and private activities. I'm not saying it's reasonable to expect complete anonymity when you're out in public — that's never been the case. Rather, when you consider how our devices are not only exposing our own routines and habits, but also filling in the metadata portraits of those around us, it's easier to see how important the next decade will be when it comes to personal digital privacy and any laws that support or strip away those rights. 

Given that companies won't stop trying to learn more about their customers, smartphones won't become less capable at recording our surroundings, and we the people won't suddenly become any less lax about clicking through "I agree" prompts, the situation can seemingly only be improved by our laws or the device manufacturers. Writing privacy into the law takes time, but the European Union has already taken steps towards this with the [European Data Protection Directive](https://en.wikipedia.org/wiki/Right_to_be_forgotten), and I expect (hope) we'll see similar efforts or echoes of it from other countries in the future. 

However, for now, the fastest road to broadly available increased security and privacy protection lies in the hands of the smartphone/speaker/Internet-connected-device manufacturers. They control the hardware and (to an extent) underlying operating systems. Implementing things like end-to-end encryption, [differential privacy](https://www.wired.com/2016/06/apples-differential-privacy-collecting-data/), or even [making it visually apparent]({{< ref "ios-11-location-privacy.md" >}}) when apps are using your location are examples of ways to help educate, inform, and protect us while we wait for more comprehensive, enforceable protections to be written into law. It's not an ideal situation, but it's all we have. In the meantime, take some time to poke around the privacy settings of your most used apps. You'll probably be surprised at the data you've been giving away. 

[tim cushing]: https://www.techdirt.com/articles/20180129/09121039108/fitness-tracker-data-exposes-military-operations-shows-what-damage-that-can-be-done-with-just-metadata.shtml
[tdb]: https://www.thedailybeast.com/strava-fitness-tracker-app-exposes-taiwans-missile-command-center
[tg]: https://www.theguardian.com/world/2018/jan/28/fitness-tracking-app-gives-away-location-of-secret-us-army-bases
