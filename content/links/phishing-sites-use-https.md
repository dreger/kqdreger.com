---
title: Half of All Phishing Sites Now Use HTTPs
date: 2018-12-04T21:34:53-04:00
link: https://krebsonsecurity.com/2018/11/half-of-all-phishing-sites-now-have-the-padlock/
---

Brian Krebs:

> Recent data from anti-phishing company [PhishLabs](https://www.phishlabs.com/) shows that 49 percent of all phishing sites in the third quarter of 2018 bore the padlock security icon next to the phishing site domain name as displayed in a browser address bar. [...] 

> This alarming shift is notable because a majority of Internet users have taken the age-old “look for the lock” advice to heart, and still associate the lock icon with legitimate sites. A PhishLabs survey conducted last year found more than 80% of respondents believed the green lock indicated a website was either legitimate and/or safe.

Years ago, I remember personally telling friends and family to "look for the lock" as an easy way of verifying that the site they were on was legitimate. Back then, paying for and setting up an SSL certificate was time consuming (or expensive) enough that most phishing websites didn't bother. Those days are long gone. 

I still believe that wide (and cheap) availability of SSL [is a good and necessary thing][https]. But all HTTPs and the accompanying lock symbol guarantees is that your connection with a sever is encrypted—not that you're safe. 

[https]: {{< ref "/notes/https.md" >}}
