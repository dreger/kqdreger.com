---
title: Fix your mountunion.edu email
layout: post
date: 2013-01-03
---

This past week, my iPhone's email just stopped working. It wasn't long before many of my friends began complaining of similar problems. I knew that somewhere, a switch was flipped and the new Mount Union email system was finally set loose. 

Students of Mount Union - our webmail has changed. Unfortunately, it's taken a turn for the worse. While the increase in storage is nice, it's overshadowed by a terrible, terrible, user experience.

**The Good**: An upgrade in space from 30 MB to just under 25 GB, and better "reliability" and under-the-hood technology.

**The Bad**: Being forced to sign in **twice** on webmail.mountunion.edu. Seriously. 

**The Ugly**: Broke existing mobile clients without telling us how to fix them, and the new webmail interface is a complete cluster. 

Though the underlying technology took a step forward, we've taken five *usability* steps back. Overrun by a terrible color palette, unnecessary gradients and shadows, and unpredictable rendering - the new interface is a complete user experience failure. The old interface wasn't great, but at least it was simple and usable. 

Adding sprinkles to this cupcake from the netherworld, many of us who had set up Exchange on our smartphones and tablets had the entire system just stop working. *Forcing* us to the webmail client. 

> The only good thing about the change is we have more space.  
> - Anonymous Student  

Nearly 2,200 students use Mount's email daily. By the end of this post I hope we can fix your existing setup, give you a way to avoid the webmail interface completely, and start enjoying email again. 

### Welcome

To get started, scroll down to the section of instructions that applies to you. If everything else fails, take the Reference Instructions below and head to Google. I've [already created a search for you](https://www.google.com/search?q=imap+setup+for+myclient), just replace "myclient" with the name of the application you are trying to set up. 

Good luck, friend. 

### Reference Instructions 

These settings will be referenced in the sections that follow as we set up new email clients, and fix your existing one. 

    POP setting
    Server name: pod51008.outlook.com
    Port: 995
    Encryption method: SSL

    IMAP setting
    Server name: pod51008.outlook.com
    Port: 993
    Encryption method: SSL

    SMTP setting
    Server name: pod51008.outlook.com
    Port: 587
    Encryption method: TLS

You can also just hand this information to one of your technically-inclined friends, and I'm sure they'll know what to do with them.

### Fix your smartphone or tablet

**NOTE:** One of the new rules of setting up your mobile device with access to Mount's Exchange email server is that you **must have Passcode Lock on your device**. If you don't have one set (a 4-digit key to unlock your phone / tablet), you will be prompted to create one after finishing the Exchange setup. While I recommend setting one for general security, if you *really* don't want to be forced to unlock your phone, skip down "IMAP and POP clients". 

#### iOS Exchange

For the iOS devices, it's as simple as removing (then re-adding) your email account. 

    Homescreen > Settings.app > Mail, Contacts, Calendars

Select your Mount Union account. 

    *Scroll to bottom* > Delete Account

`Confirm` the delete and wait for it to finish removing your account. Once it's done, go back to `Mail, Contacts, Calendars`.

    Add Account... > Microsoft Exchange

Enter in your full `Email`, `Password` and give the `Description` something like "School". Once you're done, click `Next`.

If you get a "Cannot verify server identity" popup, just click `Continue`. If you've entered all your credentials in correctly, you should see everything verify with a checkmark. You can then resume using your email as usual. 

#### Android Exchange

Unfortunately, I don't have an Android device to test with. However, I anticipate the course of action being similar to iOS. Simply remove your existing Mount Union email account from the device, then re-add it back. **Note** that with Android Exchange, you may have to set your username in the form of `campus\yourusername`. 

If you have trouble setting up Exchange, jump down to the "IMAP and POP clients" section for general instructions which should work for you. 

### Fix your computer

Most of you probably access webmail.mountunion.edu through a web browser like Chrome, Safari, or Internet Explorer. However, having a standalone *client* to handle your email will be a faster, and overall better, experience. 

There are tens of email clients available for the Mac and PC, but I'm just going to walk you through instructions setting up the default clients that come pre-installed on your machine. Macs have Mail.app, and PCs have Windows Mail. 


#### Mac Mail.app

Setting up Mail.app is pretty straightforward. I'm using OS X 10.8.2, so these instructions are for the latest version of Mail.app, but they should be the same for most cases. 

    System Preferences.app > Mail, Contacts & Calendars

Click on `Microsoft Exchange` and enter in your `Name`, full `Email Address` and `Password`. You may get a "Can't verify the identity of the server" popup, but just click `Continue` when it comes up. 

Once it finds your account, click `Continue` and select the services you want set up. I usually uncheck all the boxes except for Mail and Contacts. Click `Add Account`. Go open up Mail.app and you should see your mail begin to download. Now whenever you want to check / write an email, just open Mail.app.

#### Windows Mail

Setting up Windows Mail is slightly less straightforward, you need the Reference Instructions from above, but it's pretty easy nonetheless. If this is your first time opening Windows Mail, I suggest this [excellent tutorial from Sonic.net](https://wiki.sonic.net/wiki/Windows_Mail_IMAP_Settings).

    Windows Mail > Tools menu > Accounts

Click `Add`, and then select `E-mail Account` as the type of account you wish to add. Click `Next`. Use the information from the Reference Instructions above to complete the setup. Make sure to use IMAP server setting for your `Incoming mail` and the SMTP server settings for `Outgoing e-mail`. 

I wasn't able to test these instructions, however in addition to the Sonic.net tutorial, I also found the [official Microsoft instructions](http://windows.microsoft.com/en-US/windows-vista/Windows-Mail-setting-up-an-account-from-start-to-finish). 

### IMAP and POP clients

**NOTE:** Coming here from the iOS / Android sections, or just want Passcode-less email? All you have to do is instead of selecting `Microsoft Exchange` as the email service you wish to set up, choose `Other` on iOS, and `IMAP account` on Android. Use the Reference Instructions from above to help you complete your account. *I haven't tested the Android set up, but [this tutorial from UCSanDiego](http://blink.ucsd.edu/technology/email/mobile/android-imap.html) has great pictures and instructions.*

If, for some reason, none of the sections above worked for you. You can try setting up your mail with IMAP, or POP, settings. These settings are basically another way of accessing your mail, but they won't give you access to the Exchange calendar, or contacts - odds are you don't need to worry much about this. 

#### General IMAP and POP instructions 

Open your mobile / desktop email client and `Add` an account. Select something like `Manual setup` so you can enter the Reference instruction information from above. For specific instructions, I recommend that you head to Google. I've [already created a search for you](https://www.google.com/search?q=imap+setup+for+myclient), just replace "myclient" with the name of the application you are trying to set up. 

### Wrap-up

Hopefully one of the above instructions worked for you. If not, I'd recommend taking your email client and laptop / phone / tablet down to Mount's IT department and having them set it up for you. If you have any comments, corrections or questions, feel free to shoot me an email at <dregerkq@mountunion.edu>. Cheers, everyone. 

You should follow me on twitter [here](http://twitter.com/dreger). 