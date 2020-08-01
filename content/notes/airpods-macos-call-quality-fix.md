---
title: "Fixing Extremely Poor or Muffled Call Quality When Using AirPods and MacOS"
date: 2017-10-23T21:38:00-04:00
---

**The Fix:** You need to change your MacOS sound settings so that your output goes to the AirPods and your input is set to "Internal Microphone" — if you use the AirPods for both input and output, the audio quality takes a noticeable hit. 

A few months ago, the voice and video call audio on my Mac took a nosedive. Call participants sounded hollow and fuzzy, and I sounded the same to them. I blamed network connectivity issues, but my problem persisted regardless of location. One day, forgetting [my much loved AirPods][my airpods] at home, audio calls sounded fine again. The AirPods were to blame. 

Turns out, I wasn't alone. There are [numerous][ex1] [complaints][ex2] [online][ex3] about the "terrible" AirPods' audio quality when both connected to a Mac and conducting a voice or video call. After an hour of troubleshooting, I finally found an answer [by way of the Ask Different Q&A site][se]: 

> Ever since I purchased the AirPods a month ago, they demonstrate extremely poor quality while activating the AirPod Mic, whilst they are connected to a Mac. When activating the Mic to record audio, it seems that both the _recording quality_ AND _audio playback_ quality severely drops to a substandard level (Mono 8.0 kHz). [...]

> Current best practice is to use the Internal Microphone for Recording, and the AirPods for playback when conducting calls. Input and Output devices can be selected in System Settings > Sound or by ⌥-clicking the Volume icon in the macOS Menu Bar, and selecting devices there.

Essentially, the crux of this issue is that when you're using AirPods for a voice or video call on MacOS, AirPods switch over to Bluetooth's SCO (Synchronous Connection-Oriented) codec to handle the audio input and output, which tanks the overall audio quality. However, by manually selecting your Mac's internal microphone as the primary input device, you allow AirPods to switch off SCO, and the quality improves. 

According to [this user on the Apple Discussion boards][apple], Apple is aware of the issue, and they recommend the aforementioned mic-swapping method as a temporary workaround. Having tried it myself, I can confirm it works. Calls sound appreciably better, which is worth the manual tinkering. 

I'm not familiar enough with Bluetooth codecs (shocker) and wireless audio to know whether this issue could be addressed in a  future firmware update, but it'd be great if it was. Regardless, I would like to believe Apple wants to fix this, if only because AirPods' call quality on my iPhone is perfect, and that experience should be one shared with the Mac. Put another way: there should be no scenario where a FaceTime call coming through Apple headphones sounds like a landline in 1990; but there is, and it does. 

[ex1]: https://origin-discussions-us.apple.com/thread/7842000
[ex2]: https://productforums.google.com/forum/#!topic/hangouts/qpzl6ar_-qI;context-place=topicsearchin/hangouts/category$3Ai-found-a-bug%7Csort:relevance%7Cspell:false
[ex3]: https://twitter.com/chrismaddern/status/850464518962413568

[se]: https://apple.stackexchange.com/questions/282705/airpods-extremely-poor-mic-quality-on-mac

[apple]: https://discussions.apple.com/message/31255072#31255072
[my airpods]: {{< ref "airpods.md" >}}
[firmware]: https://www.macrumors.com/2017/05/24/airpods-firmware-update/