---
title: "Proposed Changes to Chrome Would Hamper Ad Blockers"
date: 2019-01-26T09:11:05-05:00
link: https://www.wired.com/story/googles-proposed-changes-chrome-could-weaken-ad-blockers/
---

Klint Finley, _Wired_: 

> Google says the proposal is just, well, a proposal. "These changes are in the design process," a Google spokesperson said in a statement. The company is "working with extension developers to make sure their extensions continue to work," the spokesperson said.

> Ostensibly, the changes are designed to improve the security and performance of Chrome and Chromium. For example, Chrome extensions now can access your browsing history. That means a bad actor could offer an ad blocker that spies on you.

> Google is proposing to cut off extensions' access to browsing history and instead offer an interface that can generate instructions for the browser to block or modify certain content, including ads. The catch is that each extension would be limited to 30,000 rules it can apply.

Google runs the largest digital ad platform in the United States, the  world's most popular web browser, and the company [makes almost all of its money from advertisements]({{< ref "/notes/advertisement-farm.md" >}}). Google wants you to see more ads. Their business depends on it, in fact. 

Therefore, any Google-led changes to Chrome that restrict a user's ability to _block ads_ will inevitably be under intense scrutiny—and for good reason. Taken in the best light, this is Google trying to ensure Chrome continues to be as fast and secure as possible. Taken in the worst, these proposed changes are one more instance of Google using its dominance in search, advertising, and web browsing to benefit Google. 

This move isn't totally without precedence—Apple made a similar change in 2015 when it limited the number of rules a content blocker  could employ to 50,000. But a combination of Google's proposal limiting the number of rules to just 30,000 and Google being, well, Google has escalated this story to a whole other level. 

To be fair though, even though Apple allows content blockers to use 50,000 rules, popular ad blockers (read: ones that do the job well) often need hundreds of thousands of rules to be effective. I [use 1Blocker](https://1blocker.com) on my devices,  but even 1Blocker's developer skirts around the 50,000 rule limit by [implementing each rule "set" as a separate content blocker](https://twitter.com/1blockerapp/status/987214584376430592?lang=en), thereby allow 1Blocker to check against over 350,000 rules. 

At the end of the day, this change to Chrome is only a proposal. And if we're giving Google any kudos, it's that they're still conducting sensitive changes to Chromium [in the open](https://bugs.chromium.org/p/chromium/issues/detail?id=896897&desc=2#c23). I'm also not suggesting that Apple and Google are wholly wrong here. The pursuit of enhanced privacy while still allowing users to have some control over their browsers is a path filled with compromises. And since browser makers aren't going to _not_ evolve their products, I think it's important that you understand the motives that may be driving their decisions. 

---

(And now a brief primer on how ad blockers work for the non-tech savvy family members who read my site ♥. Ad blockers prevent certain webpage elements from displaying by (a) preventing your browser from talking to certain ad-related servers and (b) maintaining a custom list of elements that either you or the community at large have flagged as worth blocking. They do this by comparing requests your browser's resource requests against a list of tens of thousands of text patterns—if a request matches one of these rules, the content is blocked.  When using an ad blocker, browsing the web should feel faster, because your browser no longer has to wait on five different ads to download or tracking scripts to execute. Take a site like _The Verge_, the well-known tech site/advertisement billboard. Without an ad blocker installed, _The Verge's_ homepage weighs in at 5.8 MB with over 350 network requests to (I assume) ad and tracking servers. However, if you install an ad blocker [like uBlock Origin](https://github.com/gorhill/uBlock), _The Verge's_ homepage now only weighs 4.2 MB with fewer than 50 network requests.)