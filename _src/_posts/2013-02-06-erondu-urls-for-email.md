---
title: URLs for Email
date: 2013-02-06
layout: post
categories: volume-zero post
permalink: "/archives/13037-erondu-urls-for-email.html"
---


This morning I read an interesting article by Jared Erondu titled [If Emails Worked Like URLs](http://blog.jarederondu.com/if-emails-worked-like-urls). His idea revolves around the notion of prematurely assigning subfolders to an email message based on the addressed it was sent to. In his example, sending an email to `john@johndoe.com/hire` would automatically sort the email into a folder/label named "hire."

<!-- more -->

As he noted in his post, Gmail already lets you do something like this. For instance, messages sent to `johndoe@gmail.com` and `johndoe+hire@gmail.com` all go to the same inbox where you could then use a filter to tack on a corresponding label. However, where Erondu's idea jumps miles ahead of Gmail's +tag syntax is this simple fact: you don't change the core email address.

### Tagging makes a unique address

Online services treat Gmail's email+tag syntax as unique email addresses. That means that `john+social@gmail.com`, `john+hire@gmail.com` and `john+personal@gmail.com` are all **unique addresses** in the eyes of the database. This creates a problem when it comes to remembering which email you used to sign up for any given account. Even though all the emails come to `john@gmail.com`, trying to log in with that address will get you nowhere. Of all the times I've switched friends and family to Gmail, I've never mentioned the +tag feature for this reason - no need for extra confusion.

Erondu's solution is more elegant. An online service could easily regex the core email address for log in, and then tag on the subfolder when emails had to be sent out. This way, regardless whether you're signing in to Facebook or Apple, your core email address will always get you in. It's simple, and users don't have to remember anything extra.

Kudos, Jared for coming up with a slick idea - you're a smart man. It may hold more promise than you think.

