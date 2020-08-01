---
title: "HTTPS is Like Fluoride"
title: "The Web Should Be Secured"
title: "HTTPS and the Secure Web"
aliases:
 - /2018/the-web-should-be-secured/
date: 2018-03-11T19:50:10-04:00
---

Should every page you visit on the Internet be served over HTTPS? For banks and online stores, the answer is an obvious yes. But what about blogs, decades old web archives, and other bland online data? Do these documents deserve secured connections?  

Yes. 

However, for the past few weeks, spurred on by Google’s move to [mark HTTP-only sites as “Not Secure” in Chrome][dreger chrome], Dave Winer has asked a similar question, and argued — among other things — that [this is a move by Google to seize control of the web][winer http attack]:

> So now Google points a gun at the web and says "Do as we say or we'll tell users your site is not secure." What they're saying doesn't stand up to a basic bullshit-test. There's nothing insecure about my site. Okay I suppose it's *possible* you could get hurt using it, I'll grant you that. But I could get hurt getting up out of my chair and going into the kitchen to refill my coffee cup. Life is insecure. When Google says my old site is insecure what they really mean is "This is our platform now, and you do as we say or your site won't work." I don't believe for a minute that Google's motivation is protecting users. They seem to believe they can confuse users (they can) and that means they can do anything to the web they like. I suppose they can do that too. But it doesn't mean the web will cooperate. Imho, it won't.

[dreger chrome]: {{< ref "/links/this-page-is-not-secure.md" >}}
[winer http attack]: http://scripting.com/2018/02/23/174914.html
 
[Mr. Winer][web safe], again, earlier this month: 

> The web is not safe. That is correct. We don't want every place to be safe. So people can be wild and experiment and try out new ideas. It's why the web has been the proving ground for so much incredible stuff over its history.

> Lots of things aren't safe. Skiing. Bike riding in Manhattan. We do them anyway. You can't be safe all the time. Life itself isn't safe.

> If Google succeeds in making the web controlled and bland, we'll just have to reinvent the web outside of Google's sphere. Let's save some time, and create the new web out of the web itself.

> PS: Of course we want parts of the web to be safe. Banking websites, for example. But my [blog archive][winer] from 2001? Really there's no need for special provisions there.

[web safe]: http://scripting.com/2018/03/08/190311.html
[winer]: http://scripting.com/2001/09.html

We’ve got two arguments here: 1.) Google’s change in Chrome to display “Not Secure” on sites that don’t have HTTPS is the first in what could be a series of steps that eventually lead to HTTP sites being automatically blocked by Chrome, effectively killing the HTTP protocol; and 2.) the world isn’t safe, HTTPS isn’t a silver bullet, and there are simply some types of content that provide no risk and don’t deserve to be called out as insecure. 

There’s an additional argument, tangential and articulated by [Nick Heer][heer]: 

> I also agree with Winer on another key point: enforcing a pseudo-mandatory policy on HTTPS makes it that much harder for someone new to this stuff to even begin to understand it. As Frank Chimero [recently wrote][chimero], building stuff for the web has become vastly more complicated since even five years ago. I’m happy to keep learning new skills and growing my understanding of what the web can do, but I [don’t know where to begin][heer begin] on this modern web. I don’t intend to hold myself up as a barometer of the complexities of modern web programming or anything — I just don’t know what’s going on any more. I’ve been doing this stuff for nearly twenty years. I don’t know how someone who is eight years old could start digging into React, or Node.js, or any of the other modern JavaScript-based ways of writing `<h1>hello world</h1>`.

[heer]: https://pxlnv.com/blog/surfing-the-insecure-web/
[chimero]: https://frankchimero.com/writing/everything-easy-is-hard-again/
[heer begin]: https://pxlnv.com/linklog/everything-easy-is-hard-again/

Which brings us 3.) raising the barrier to entry (e.g. requiring someone understand how to set up HTTPS before they can get a site online) harms the approachability of creating something new online. 

I disagree on all three arguments, but I don’t think they come from unfounded places. I also have great respect for Mr. Winer’s [contribution to the web][winer wiki]. When Mr. Winer writes, which he [does a lot][scripting], I read. 

[winer wiki]: https://en.wikipedia.org/wiki/Dave_Winer
[scripting]: http://scripting.com

However, the last few weeks have left me scratching my head. I don’t disagree with Mr. Winer's general distrust of Google — I'm skeptical of Google's motives when it comes to [Chrome's ad-filter][dreger ad farm] or [the likes of AMP][dreger amp] — but his recent articles leave me feeling that we’ve missed the forest for the trees; that we’re overlooking the importance of encryption because we’re hung up on our sites being labeled insecure, which, truthfully, they are.  

<aside>
I'll sidestep the fact Mr. Winer has "<a href='http://scripting.com/2018/02/23/174914.html#a180341'>hundreds of domains</a>," which, honestly, sounds like it <em>would</em> be a nightmare to get all up and running with HTTPS. For most everyone else, people who have one or a few domains, the complexities of enabling HTTPS across their properties is far more manageable. 
</aside>

[dreger ad farm]: {{< ref "/notes/advertisement-farm.md" >}}
[dreger amp]: {{< ref "/links/amp-in-email.md" >}}

Regardless of what Chrome, Firefox, or Safari do, HTTPS is good for the web, and more sites should enable it for their content. Another way to put it: HTTPS is like fluoride. Fluoride is a [proven, safe chemical][cdc] that we add to water to help prevent cavities. Do you need it, if you consistently brush and floss twice a day? Ostensibly, no, but if there’s a way to help protect your teeth *in spite* of what is otherwise entirely reliant on your own self discipline and understanding of the risks, why wouldn’t you take advantage of it? The World Wide Web is different today than it was when Mr. Winer first created the content he now is struggling to find reason to provide over HTTPS, but that’s not the visitor’s fault. It’s not even his — yet. 

Unfortunately, the world wide landscape today desperately calls for us to encrypt what we can. We, as creators on the web, are obliged to help protect the privacy and security of our readers. Enabling HTTPS on a domain doesn’t hurt existing content, but it does provide your visitors with a little more protection, and — critically — it doesn’t require a change in their behavior. They get to keep just *using* the web.

[cdc]: https://www.cdc.gov/fluoridation/basics/index.htm

Not requiring a change in user behavior is important, because most users won't change. Recently we had some friends going on a mission trip, and we wanted to give them some money to help cover the costs. They sent us the link to the organization's site, but when I pulled it up and navigated to the donation page, it was still being served over HTTP. Yet, the page had all the trappings of a secure location. Little lock symbols near the form, a NORTON SECURE sticker — everything but the HTTPS. To someone not scrutinizing the location field for the missing`https://`, every other visual indicator suggested that one could safely submit their credit card information. A large “Not Secure” label would have made the actual page security (or lack thereof) immediately apparent. 

As for Google’s motives here, this change in Chrome doesn’t set off red flags for me quite yet. They’re [doing what their peers are][firefox] — trying to educate and protect a vulnerable population. I think a more secure web is good for everyone, and if Google wants to start calling out sites that don’t use HTTPS, that’s their prerogative. And unlike [Chrome’s built-in ad filtering][dreger ad farm], Google doesn’t make tens of billions based on whether or not a website uses HTTPS. 

[firefox]: https://blog.mozilla.org/security/2017/01/20/communicating-the-dangers-of-non-secure-http/

The web is a dangerous place to be sure, but in contrast with [skiing or bike riding in Manhattan][winer skiing], the consequences of an unsecured web often aren’t immediately felt. If I break my leg while skiing, I’m damn aware that it’s broken — the cause and effect are instantly apparent. But if I’m inadvertently tricked into submitting sensitive content on a site that’s not secure, I may not know about it until months later. Additionally, depending on what sort of information was compromised, it could affect parts of my life not related to the original incident. If someone gets access to my email or collects enough metadata on the content I’m visiting, it could damage me (or others) in ways I can’t even imagine. It’d be like waking up one day, months after a skiing trip to find your ankle is now sprained, but having no idea when or where it happened. 

[winer skiing]: http://this.how/googleAndHttp/#1520523527000

Finally, regarding HTTPS as contributing to the barrier preventing newcomers from getting started on the web — I think that’s a temporary problem. There used to be a time when I wouldn't have recommended WordPress to someone starting out in web publishing. It took too much time to configure a server, create the database, and manage the updates. But today, you can go to any web host, pay them $5 a month, click one button, and have a WordPress site up and running in minutes. Eventually, enabling HTTPS on a domain could be equally as easy. Some web hosts [are already offering free, one-click HTTPS][bluehost], and with services like [Let’s Encrypt][le], the technology to make HTTPS easy and accessible is rapidly improving. In short, the overhead required to get a site secure is quickly diminishing, and in a few years, it may well be one of the *simplest* parts of creating your next new thing. 

[bluehost]: https://my.bluehost.com/hosting/help/free-ssl
[le]: https://letsencrypt.org

---

Publishing to the web should be easy, accessible, and extremely affordable. But the content you publish should also be made available through a secure connection, even if you don’t think the content warrants being encrypted in transit. I think providing an HTTPS connection to your content will be as much a moral duty to web developers in the future as making accessible, open, and fast webpages are today. And although the browser vendors need to be kept in check, I don’t think their efforts to call out insecure sites are nefarious — rather, our world has changed, and our experience using world wide web needs to change with it. The more we can help push forward a fully secured web, the faster it will get here, and the easier it will be to maintain. 