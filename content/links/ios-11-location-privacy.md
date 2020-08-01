---
date: 2017-06-08T23:31:36-04:00
link: https://mobile.twitter.com/rjonesy/status/872080961772630016
title: iOS 11 Tightens Location Privacy, Displays Banner When Location Is Being Accessed in the Background
---

In iOS 10, there are three options a user can select from when prompted for location access: 

- Only While Using the App
- Always Allow
- Don't Allow

Most apps should only ever need the first option, and even for ride sharing or locally aware services, some users would prefer to only reveal their location at explicit times, not constantly.

Unfortunately, users currently have little choice in the matter, as any app can remove the "Only While Using the App" option from the location prompt. This essentially forces users to either grant full, 24/7 location access or render the app useless. 

Thankfully, the current developer build of iOS 11 appears to make two key changes in this area. First, the "Only While Using the App" option is present for _all_ location permission prompts, even if the app had previously disabled it. Second, when an app accesses your location from the background, [a system-wide banner, like when you're on a phone call, will be displayed][sts]. This banner contains the name of the app that's using your location, and is far less subtle than the current status bar GPS icon. 

Both of these changes are subject to, well, change before iOS 11 releases this Fall, but I don't think they will, at least not drastically. Apple has repeatedly positioned themselves as staunch advocates for user privacy, whether it's end-to-end encryption for iMessage or their approach to training photo recognition software. [^1] 

Increasingly, it feels like a serious commitment to my privacy is included in the premium I pay for Apple products. iPhones and MacBooks can be more expensive than the competition, but I don't trust Google or Microsoft the way I do Apple. Maybe that's bias, but in a world of AI and machine learning, where more data is better and companies happily feed your information to their algorithms, Apple appears to be going _extremely_ out of its way to avoid compromising my identity. And that's something I don't mind paying a little extra for. 

[^1]: "Well, turns out, if you want to get pictures of mountains, you don't need to get it out of people's personal photo libraries." — Craig Federighi, SVP of Software Engineering, during [last year's episode of The Talk Show Live][tts]. 

[tts]: https://www.imore.com/our-full-transcript-talk-show-wwdc-2016-phil-schiller-and-craig-federighi
[sts]: https://mobile.twitter.com/stroughtonsmith/status/872769481298391040
[uber-tc]: https://techcrunch.com/2016/12/22/uber-explains-why-it-looks-like-its-app-is-still-tracking-your-location-long-after-drop-off/