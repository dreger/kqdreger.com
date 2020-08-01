---
date: 2016-09-09T00:00:00Z
link: https://security.googleblog.com/2016/09/moving-towards-more-secure-web.html
title: 'Warning: This Page Is Not Secure'
---

Somewhat buried by all the news surrounding Apple's recent product event, Google announced that it will be using Chrome's strength in the browser market to push for HTTPS everywhere. This will come in the form of, eventually, all HTTP pages being labeled with red `Not secure` messages in the address bar. Emily Schechter, for the Chrome Security Team:

> Studies show that users do not perceive the lack of a “secure” icon as a warning, but also that users become blind to warnings that occur too frequently. Our plan to label HTTP sites more clearly and accurately as non-secure will take place in gradual steps, based on increasingly stringent criteria. Starting January 2017, Chrome 56 will label HTTP pages with password or credit card form fields as "not secure," given their particularly sensitive nature.

> In following releases, we will continue to extend HTTP warnings, for example, by labelling HTTP pages as “not secure” in Incognito mode, where users may have higher expectations of privacy. Eventually, we plan to label all HTTP pages as non-secure, and change the HTTP security indicator to the red triangle that we use for broken HTTPS.

That last sentence should hit hard, because this is a huge change in the world's most popular web browser. It's also just the latest step in Google's quest for all HTTPS all the time. Two years ago, on their official Webmaster blog, Google hinted at the importance of secured content by announcing that [HTTPS would become one of the ranking signals][seo] used to determine where search results appear on the page:

> For now it's only a very lightweight signal—affecting fewer than 1% of global queries, and carrying less weight than other signals such as high-quality content—while we give webmasters time to switch to HTTPS. But over time, we may decide to strengthen it, because we’d like to encourage all website owners to switch from HTTP to HTTPS to keep everyone safe on the web.

Google search rankings are important, but arguably less so than they used to be. Folks are getting more of their news and content from social networks, so there's a diminishing influence Google can have on encouraging users and webmasters to use HTTPS. However, slapping a big red `Not secure` message on every HTTP URL &mdash; now that's a direct statement. Additionally, because this change is _in_ Chrome itself, there's no way to circumvent Google's opinion on the security of the page you're on. If a page isn't secure, they want you to know.

This is good for the web. Even so, I can't help but feel a little melancholy. My first webpage, and many of the ones I first enjoyed on the web were all simple HTML, served over plain HTTP. Seeing an HTTPS page usually meant you were at your bank's website or on a checkout page. To think, in a few years, someone's first webpage will be adorned with a red `Not secure` label is a little disheartening. Even with services like [Let's Encrypt][le], which offer free SSL certificates, it still takes some technical knowhow and server access in order to enable and maintain a good HTTPS connection. The bar has been raised.

However, there's no reasonable argument for HTTP over HTTPS. With today's premium on privacy, secured content is only going to become more important; a basic web-citizen's right, even. The future is HTTPS everywhere, and Google's not waiting around.

[seo]: https://webmasters.googleblog.com/2014/08/https-as-ranking-signal.html
[le]: https://letsencrypt.org
