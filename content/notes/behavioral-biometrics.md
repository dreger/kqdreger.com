---
title: Using Taps, Swipes, and Other Sensor Data to Verify You're You
title: Behavioral Biometrics Are a Cookie You Can’t Clear
date: 2018-08-24T20:42:23-04:00
---

[Stacy Cowley][sc], the *New York Times*, on how banks and retailers are using your taps, swipes, and other device sensor data to verify you're you: 

[sc]: https://www.nytimes.com/2018/08/13/business/behavioral-biometrics-banks-security.html

> The way you press, scroll and type on a phone screen or keyboard can be as unique as your fingerprints or facial features. To fight fraud, a growing number of banks and merchants are tracking visitors’ physical movements as they use websites and apps.

> Some use the technology only to weed out automated attacks and suspicious transactions, but others are going significantly further, amassing tens of millions of profiles that can identify customers by how they touch, hold and tap their devices.

> The data collection is invisible to those being watched. Using sensors in your phone or code on websites, companies can gather thousands of data points, known as “behavioral biometrics,” to help prove whether a digital user is actually the person she claims to be.

This sort of invisible "continuous authentication" — where my taps and swipes are tracked and checked against how I've tapped and swiped in the past — sounds great from a security perspective but not from a privacy one. Metadata can be [incredibly revealing][meta], and while I don't think behavioral biometrics are a bad idea, I dislike how the data would be collected in the background without my knowledge. Couldn't behavioral biometrics be an additional, opt-in security feature like two-factor authentication? Or is that too weird for most people to think about?

[meta]: https://www.washingtonpost.com/news/the-switch/wp/2013/08/27/heres-how-phone-metadata-can-reveal-your-affairs-abortions-and-other-secrets/

For now, it appears behavioral-tracking companies like [BioCatch][] are focused on banking and retail. But how long until these techniques are applied by the advertising industry to further track and maintain a profile on who you are? If advertisers rely more on a combination of sensor data and *how* a user behaves on a webpage, then it's possible that the user themselves become the ultimate cookie — one that's almost impossible to clear.

[biocatch]: https://www.biocatch.com

To prevent this sort of misuse, our devices should prompt us for permission whenever a website or app tries to read device data that could be revealing. Android and iOS already require permission prompts for certain kinds of user data, like access to your contacts or location. But these permission requests should extend to include data coming from the device itself, whether [device orientation][], [ambient lighting conditions][], or [battery levels][]. 

[device orientation]: https://developer.mozilla.org/en-US/docs/Web/API/Detecting_device_orientation
[ambient lighting conditions]: https://developer.mozilla.org/en-US/docs/Web/API/Ambient_Light_Events
[battery levels]: https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API
[chrome battery]: https://caniuse.com/#search=battery
[ff battery]: https://bugzilla.mozilla.org/show_bug.cgi?id=1313580
[safari battery]: https://webkit.org/status/#specification-battery-status-api


Allowing websites and apps to read device data isn’t inherently bad, and as our devices become more powerful we'll want our software to have access those capabilities. But unfettered visibility into my device and how I'm using it shouldn’t be available without my consent. Any less and I see it as an intentional leaking of private user information.
