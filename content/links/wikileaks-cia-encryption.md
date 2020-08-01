---
link: https://www.washingtonpost.com/world/national-security/wikileaks-says-it-has-obtained-trove-of-cia-hacking-tools/2017/03/07/c8c50c5c-0345-11e7-b1e9-a05d3c21f7cf_story.html 
date: 2017-03-08T23:13:07-05:00
title: The C.I.A. Didn’t Break Encryption, but They Might Not Need To
---

Yesterday, WikiLeaks’ Twitter account [posted the following](https://twitter.com/wikileaks/status/839120909625606152): 

> WikiLeaks #Vault7 confirms CIA can effectively bypass Signal + Telegram + WhatsApp + Confide encryption
https://wikileaks.org/ciav7p1 

The link in that tweet takes you to a WikiLeaks’ press release, where the organization details their latest leak, “Vault 7”:  8,761 documents supposedly outlining a vast number of secret C.I.A. hacking tools and methods. The data dump covers 2013 to 2016, and WikiLeaks is calling it, “the largest ever publication of confidential documents on the agency.”  

From this dump, the most reported bits are related to dozens of exploits and malware the C.I.A. is claimed to have used in targeting smart devices and operating systems. To start, there’s “Weeping Angel”, an attack aimed at Samsung smart TVs: 

> After infestation, Weeping Angel places the target TV in a 'Fake-Off' mode, so that the owner falsely believes the TV is off when it is on. In 'Fake-Off' mode the TV operates as a bug, recording conversations in the room and sending them over the Internet to a covert CIA server.

That’s another hard hit against smart TVs, which only seem to get press for creepy privacy violations. Last month, [VIZIO agreed to settle charges](https://www.consumer.ftc.gov/blog/vizio-settlement-smart-tvs-should-not-track-your-shows-without-your-ok) that unauthorized tracking of user’s watching habits violated the law. Next month, I can only assume we’ll read about smart TVs that secretly analyze the best times for telemarketers to robocall you.
 
Also heavily reported in the leak were details about C.I.A.-created malware that was used to infect iOS and Android devices: 

> These techniques permit the CIA to bypass the encryption of WhatsApp, Signal, Telegram, Wiebo, Confide and Cloackman by hacking the "smart" phones that they run on and collecting audio and message traffic before encryption is applied.

The above pull quote, coupled with the aforementioned @WikiLeaks’ tweet, are where I want to focus for the moment. 

There’s nothing insignificant about the information WikiLeaks released, but it’s deceiving to say the C.I.A. “can effectively bypass Signal + Telegram + WhatsApp + Confide encryption”. The named apps, and their underlying encryption, were not compromised; the device itself was. Encrypted messaging app Telegram [detailed the difference](http://telegra.ph/Wikileaks-Vault7-NEWS) in a blog post, emphasis theirs: 

> This is not an app issue. It is relevant on the level of **devices** and **operating systems** like iOS and Android. For this reason, naming any particular app in this context is **misleading**.

Even the _New York Times_ failed to clarify this distinction, and [deleted the original tweet to their story](https://twitter.com/nytimes/status/839161021369573378), in order to “provide more context”. The deleted tweet: 

> WikiLeaks release said CIA managed to bypass encryption on popular services such as Signal, WhatsApp, and Telegram

The [new one](https://twitter.com/nytimes/status/839160771674255360), emphasis mine: 

> WikiLeaks release said CIA managed to bypass encryption in mobile apps _by compromising the entire phone_

[Greg Miller and Ellen Nakashima](https://www.washingtonpost.com/world/national-security/wikileaks-says-it-has-obtained-trove-of-cia-hacking-tools/2017/03/07/c8c50c5c-0345-11e7-b1e9-a05d3c21f7cf_story.html), of the _Washington Post_, got it right: 

> In a statement, WikiLeaks said the files enable the agency to bypass popular encryption-enabled applications — including [WhatsApp], Signal and Telegram — used by millions of people to safeguard their communications.

> But experts said that rather than defeating the encryption of those applications, the CIA’s methods rely on exploiting vulnerabilities in the devices on which they are installed, a method referred to as “hacking the endpoint.”

This distinction might appear to be an issue of semantics. If my “phone” is compromised, what does it matter if it’s the OS or the apps? However, understanding the difference between a _compromised device_ and _broken encryption_ is important. Encryption is hard, if not impossible, to break. The fact that the C.I.A. is now resorting to and focusing on device-level attacks only indicates the strength of our current encryption methods.

That said, a phone running malware-infested iOS or Android offers the same protection as letting a stranger use your device unlocked; encryption matters little if the attacker can see every keypress before it’s been encrypted. WikiLeaks noted multiple of these device-level exploits, 14 for iOS alone, classifying them as undisclosed vulnerabilities or “zero days”. 

<aside>A zero day vulnerability is a software hole that is unknown to the vendor. They literally have zero days to get a fix out once it’s active.</aside> 

This all seems incredibly serious, but how authentic are these documents? Yesterday, the _New York Times_ [asked the C.I.A.](https://www.nytimes.com/2017/03/07/world/europe/wikileaks-cia-hacking.html), but a spokesman, Dean Boyd, said, “We do not comment on the authenticity or content of purported intelligence documents.” However, also yesterday, when asked about the leak, Apple provided a statement to [April Glaser](http://www.recode.net/2017/3/8/14854726/apple-security-wikileaks-cia-documents) at _Recode_, indicating that some of the noted iOS vulnerabilities did exist: 

>  While our initial analysis indicates that many of the issues leaked today were already patched in the latest iOS, we will continue work to rapidly address any identified vulnerabilities. We always urge customers to download the latest iOS to make sure they have the most recent security updates.

8,761 documents is a lot of data to dig through, so expect the reverberations of this leak to continue for a while. However, if the documents are genuine, it appears the C.I.A. has been slowly strengthening its ability to gain unauthorized access to any number of smartphones and devices, with intent to capture private data before it’s been encrypted. Unless you’re a journalist, work in government, or are simply unlucky, there’s a chance you haven’t been targeted. At this point though, it’s hard to say with any certainty to what extent or how often these tools have been used. 

In the meantime, basic security advice still stands: update all your software and operating systems to the latest versions, enable [two-factor authentication](https://twofactorauth.org) for your primary email address and important online accounts, and continue to rely on encrypted messaging apps for communicating sensitive information. These steps might not stop the C.I.A., but taking simple security seriously makes it harder on anyone without the resources of the United States government. 

[whatsapp]: https://www.washingtonpost.com/world/national-security/whatsapp-the-messaging-service-announces-full-encryption-on-all-platforms/2016/04/05/80f071f6-fb3e-11e5-9140-e61d062438bb_story.html