---
date: 2017-01-19T21:10:09-05:00
title: Google Goes After Interstitial Ads
link: https://www.scribblrs.com/google-now-penalizing-mobile-ads/
---

Eric Brantner, on the recent update to Google's page rank algorithm, which [targets overly obnoxious interstitial ads on mobile][goog]: 

> Google is targeting what they call “problematic transitions,” and gave three specific examples of pages that would be affected. The first is pages that show a pop up that opens right after a user clicks a link or as they scroll through a page, hiding the page’s content. Also affected are pages that show an interstitial ad that must be closed out before the user gets to their desired content and pages that keep content “under the fold” with an interstitial on the top of the page. Google has noted that “small” pop ups won’t be affected by these rules, but they didn’t give any details about what specific size constitutes “small.” [...]

> Of course, there are some caveats. The new rule applies only to the first click on a page from Google. Once you’re on a web page, there are no penalties if you encounter the ads following another link.

This change feels like a half measure. On their [Webmasters Blog][goog], Google specifies they're only targeting (emphasis mine) "pages where content is not easily accessible to a user _on the transition from_ the mobile search results". Google's only focusing on the transition from result to page; the part of the experience most closely tied to them. This is not an attempt to purge these _terrible_ fullscreen roadblocks from the web. 

To an extent, that's fair; Google's entitled to only focus on the parts of searching they can control: the results and the certain parts of the result itself. Additionally, judging from my own analytics, most Google traffic tends to read what they came for and leave. For those people, interstitial ads after the first page aren't an issue. 

However, if Google's opinion is truly that "intrusive interstitials provide a poorer experience to users than other pages where content is immediately accessible", why not apply the same site-wide expectations they do for [mobile-friendly webpages][mobile]? If Google's crawler is smart enough to determine the difference between an interstitial ad (penalized) and one displayed for legal obligations (exempted), I think the new ranking algorithm should consider the entire site, not just the individual pages. 

Intrusive, distasteful interstitials hurt the mobile web, and Google should oppose them on principle, not passively. 

[goog]: https://webmasters.googleblog.com/2016/08/helping-users-easily-access-content-on.html
[https everywhere]: https://audaciousfox.net/linked/2016/09/09/this-page-is-not-secure
[mobile]: https://webmasters.googleblog.com/2014/11/helping-users-find-mobile-friendly-pages.html
