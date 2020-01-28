---
date: 2014-05-24 21:18
link: http://recode.net/2014/05/22/apples-imessage-issue-goes-from-bad-to-worse-with-server-glitch/
expirydate: 2019-12-30
title:  iMessage Woes Continue
redirect_from:
- "/archives/14144-imessage-woes.html"
- "/imessage-woes.html"
---


Over at _Re/code_, Ina Fried sheds some more light on [that nasty bug in iMessage]({% post_url 2014-05-13-imessage %}): 

> iMessage relies on Apple’s messaging system to intercept a text message sent to another iOS device and re-routes it through its servers rather than sending it via the wireless carriers as a standard SMS or MMS message.

> The benefits of iMessage include bypassing a wireless carrier’s text messaging charges, enabling the ability to tell when a message is read or delivered and to send a message simultaneously to all of one’s iOS and Mac devices. However, Apple’s system has proved problematic in that in order to work properly, it needs to have an accurate knowledge of which phone numbers are actually associated with iPhones.

An intermittent fix appears to be turning off iMessage across all your devices, *before* switching to a non-iOS device:

> [...] users can avoid problems if they turn off iMessage on their iPhone and uncheck the phone numbers from any other Apple devices on which they are using iMessage before switching to a new non-Apple device. However, this requires some planning and still may not a guarantee a smooth transition.

Basically<sup>1</sup>, if you don't turn off iMessage before leaving iOS, any other iOS devices (that you have sent iMessages to in the past) will continue to send messages to you via iMessages, not SMS. Because iMessage is exclusive to iOS, iMessage-bound messages to non-iOS devices will never reach their recipient. 

What a mess. 

---

1. I rewrote this paragraph about eight times. This was the clearest I could get it. 
