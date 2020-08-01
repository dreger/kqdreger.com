---
title: "The NYT is Now Available as a Tor Onion Service"
date: 2017-10-30T21:36:54-04:00
link: https://open.nytimes.com/https-open-nytimes-com-the-new-york-times-as-a-tor-onion-service-e0d0b67b7482
---

Runa Sandvik, Director of Information Security at _The New York Times_: 

> The New York Times’ Onion Service is both experimental and under development. This means that certain features, such as logins and comments, are disabled until the next phase of our implementation. We will be fine-tuning site performance, so there may be occasional outages while we make improvements to the service. Our goal is to match the features currently available on the main New York Times website.

As pointed out by Ms. Sandvik, _the Times_ joins—among others—Facebook and ProPublic, each of which provide their own Onion Services. For background on why this matters, here’s [this 2014 post](https://blog.torproject.org/facebook-hidden-services-and-https-certs) from the Tor Project’s blog (emphasis mine): 

> [Hidden services](https://www.torproject.org/docs/hidden-services) provide a variety of useful security properties. First - and the one that most people think of - because the design uses [Tor circuits](https://www.torproject.org/about/overview#thesolution), it's hard to discover where the service is located in the world. But second, because the address of the service is [the hash of its key](https://gitweb.torproject.org/torspec.git/blob/HEAD:/rend-spec.txt#l527), they are self-authenticating: *if you type in a given .onion address, your Tor client guarantees that it really is talking to the service that knows the private key that corresponds to the address.* A third nice feature is that the rendezvous process provides end-to-end encryption, even when the application-level traffic is unencrypted.

Essentially, you can now be reasonably sure that when you access `nytimes3xbfgragh.onion`, you're getting the real thing. Additionally, having a growing number of real-world publications make their sites available as Onion Services doesn't hurt Tor's credibility.

The nuances of Tor and .onion addresses get a little… nerdy, but here’s the bigger takeaway: although you could always access `nytimes.com` through a Tor browser (which provided an additional level of anonymity to your browsing), the availability of a fully fledged .onion URL run by _the Times_ speaks to a growing worldwide desire for encrypted and unmonitored use of the Internet, particularly when it comes to accessing the news. I can’t imagine any meaningful percentage of readers will switch to using the new .onion address, but as with most things Tor, if you can (a) already access _The New York Times_ and (b) do so without worry, this service probably isn’t aimed at you. 