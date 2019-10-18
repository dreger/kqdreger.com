---
layout: post
title: Hierarchy of Product Team Needs
---

I was on a run and thinking about Maslow's hierarchy of needs and how it could apply to product teams. I looked online, but all existing "product hierarchy of needs" infographics weren't what I was looking for, so I made my own: 

[![pyramid of needs]({{ site.url }}/assets/images/pyramid.jpg)](/assets/images/pyramid.jpg)

Let’s walk through the levels.

**Level one: talk to your customers daily.** There's no way around this one. If you don’t have access to or reach out to customers, I have zero faith that you can build any sort of product that will work.

**Level two: quickly build and share prototypes.** Now that you have customer feedback, it's time to start creating solutions to their problems. A good product team should be able to quickly create prototypes and mockups (code, Figma, whatever) that are Just Enough™ to demonstrate the value and begin to unearth usability issues. Prototypes should be lightweight and shareable with a single link. 

**Level three: implement lightweight metrics.** You've built some stuff and now it's time to measure whether it worked. The metrics habit hole is rife with products and terms and general misdirection about what you truly need. Do a lot of reading, and then ignore most of it. A maturing product team does need some form of analytics and metrics—because you need some form of quantitative data to shore up what you're hearing from the customers themselves—but you do not, DO NOT, need to spend tens of thousands of dollars and two months integrating with one of the huge product analytics players. Not at the start. At this level, you only need to answer two questions: (a) what do we track to tell if the thing is working and (b) how will we report on this data. For (a), basic things like page views, clicks, and lower level database fields can help indicate behavior (Have they turned on feature X? Set a date field with the date they turn it on.) For (b), you'll either need to have direct access to the database and some SQL knowledge (it’s not hard to get the basics) or a web-based tool that simplifies the reporting for you. There are a lot of tools out there, just be extremely judicious about giving database access to a third party.

**Level four: have a process for team self-improvement.** Ding. Welcome to level four. At this point, you should be completing enough create->ship->research cycles that  recurring issues become apparent—especially if you're looking at multiple product teams.  Once you've identified these problem areas, you actually have to set aside time for growth or reflection otherwise you’ll never improve. Companies stuck at this stage will hemorrhage good people. Good product people are used to improving through iteration, and they won't hang around a company that doesn't treat the team as its most important product. Self-improvement at this level can be as simple as design reviews, a book club, or team retrospectives. 

**Level five: formal-ish delivery, release, and marketing ops.** This is the last one I could think of, and it’s all about making sure the people you’ve got doing the things on the bottom four levels are able to spend as much time as possible on those bottom three things. Once you reach a certain size, I think having a team or members of the team assisting in the delivery, release, marketing, and support of the things you’re shipping can be a big time saver—and it’s a thing that’s ripe for operationalizing. So much so our industry has actually given it a name: product ops. Regardless what you call it, it’s the acknowledgment that if you want product people talking to customers, creating prototypes, and looking at the data, then anything they do that aren’t those things is hurting those core layers of the pyramid.

I’m certain this isn’t one-size fits all. But in general, I think if you’ve got people pouring time into one of these levels without an equal or greater amount of effort going into the level below it, you’re wasting time.