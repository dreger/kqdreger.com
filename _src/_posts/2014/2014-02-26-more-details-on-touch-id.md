---
title: Some More Details on Touch ID's Security
date: 2014-02-26 18:56
layout: post
categories: volume-one post
permalink: "/archives/14057-more-details-on-touch-id.html"
---


For the typical consumer, Apple has not gone too far in explaining the details behind Touch ID's security. We know that your fingerprint data never leaves the Secure Enclave (a small, physical chip embedded on the processor), and that applications are restricted from ever asking for that data. However, for those of us who want to know more, particularly businesses, Apple has updated the security document that accompanies their [iPhone in Business](http://www.apple.com/iphone/business/) website to include a plethora of information.

From the ["iOS Security" PDF document](http://images.apple.com/iphone/business/docs/iOS_Security_Feb14.pdf):

> Touch ID can be trained to recognize up to five different fingers. With one finger enrolled, the chance of a random match with someone else is 1 in 50,000. However, Touch ID allows only five unsuccessful fingerprint match attempts before the user is required to enter a passcode to obtain access.

Originally, 1 in 50,000 seemed low to me. But considering that Touch ID only scans the part of your finger that touches the sensor, it seems more reasonable as there is less surface area to work with.<sup>1</sup>

In regards to the image that the sensor captures:

> The 88-by-88-pixel, 500-ppi raster scan is temporarily stored in encrypted memory within the Secure Enclave while being vectorized for analysis, and then it's discarded after. The analysis utilizes subdermal ridge flow angle mapping, which is a lossy process that discards minutia data that would be required to reconstruct the user's actual fingerprint. The resulting map of nodes never leaves iPhone 5s, is stored without any identity information in an encrypted format that can only be read by the Secure Enclave, and is never sent to Apple or backed up to iCloud or iTunes.

Essentially, if someone wanted to steal your fingerprints, it would be easier for them to somehow get one of your _actual fingers_ than to try and reconstruct any image from a stolen iPhone.

---

1. Now if only we could get Touch ID's failure rate down to 1 in 50,000.
