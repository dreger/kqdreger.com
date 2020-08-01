---
title: "Cloudflare Launches 1.1.1.1, a Privacy-First Consumer DNS Service "
title: "Cloudflare Launches Privacy-First Consumer DNS Service"
date: 2018-04-02T23:14:40-04:00
link: https://blog.cloudflare.com/announcing-1111/
---

"Whenever you click on a link, send an email, open a mobile app, often one of the first things that has to happen is your device needs to look up the address of a domain." That's Matthew Prince, CEO and co-founder of Cloudflare, in his company's blog post [announcing their new public DNS service](https://blog.cloudflare.com/announcing-1111/), `1.1.1.1`. 

**What is this?** `1.1.1.1` is a DNS service. A DNS service lets you visit websites by entering word-based domain names like `audaciousfox.net` instead of an obscure (and changing) IP address. Technically, you can get to a site by typing in the domain or IP address, but the domain name is far easier to remember

**Why does it matter?**

- New competition to existing, core Internet infrastructure is a *really* healthy thing to have; especially when the new product is more privacy conscientious than the incumbents. 
- Cloudflare's network operates on a global scale with nearly 150 data centers around the world; which means they have the support and experience to run this type of service. 
- Cloudflare has a track record of [supporting encryption](https://blog.cloudflare.com/introducing-universal-ssl/) and [protecting their users](https://blog.cloudflare.com/unmetered-mitigation/); two things you definitely want in a DNS provider. 

It might surprise you to know that you even have a choice in DNS providers. Most people probably use their ISP's default DNS service without knowing it. For why this isn't the best idea, we'll go back to Mr. Prince:

> What many Internet users don't realize is that even if you're visiting a website that is encrypted — has the little green lock in your browser — that doesn't keep your DNS resolver from knowing the identity of all the sites you visit. That means, by default, your ISP, every wifi network you've connected to, and your mobile network provider have a list of every site you've visited while using them.

> Network operators have been licking their chops for some time over the idea of taking their users' browsing data and finding a way to monetize it. In the United States, that got easier a year ago when the Senate [voted to eliminate rules](https://arstechnica.com/information-technology/2017/03/how-isps-can-sell-your-web-history-and-how-to-stop-them/) that restricted ISPs from selling their users' browsing data. With all the concern over the data that companies like Facebook and Google are collecting on you, it worries us to now add ISPs like Comcast, Time Warner, and AT&T to the list. And, make no mistake, this isn't a US-only problem — ISPs around the world see the same privacy-invading opportunity.

If you've never switched your DNS resolver before, it's really easy to do, and Cloudflare has [quick, two minute tutorials](https://1.1.1.1) for all of your devices — phone, computer, and router. And if the privacy benefits aren't a compelling enough reason to switch, there are speed advantages too. `1.1.1.1` currently sits at, ahem, #1 for [fastest worldwide DNS resolvers](https://www.dnsperf.com/#!dns-resolvers). As of today, Cloudflare's DNS is already 28% faster than Cisco's OpenDNS and around 60% more quick than Google's own `8.8.8.8`. 

You've heard the adage that "when the service is free, you're the product being sold," and that's been true for a long time. But it becomes dangerous when whatever free service you're using is the *only* comparable option available. That's how we end up with Facebook's monopoly on social networking or Google's hold on search and video. Having good, privacy focused alternatives to our standard, core digital and social infrastructure — whether DNS resolves or social networks — is phenomenally important. And when an alternative is both more private *and* faster than what's already out there, then it's simply phenomenal. 

[1.1.1.1]: 	https://1.1.1.1