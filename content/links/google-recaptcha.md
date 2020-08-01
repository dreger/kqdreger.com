---
title: "Google ReCAPTCHAs Will Occasionally Accept Incorrect Answers Because Real Humans Make Mistakes"
date: 2018-06-01T21:41:38-04:00
link: https://sites.google.com/site/bughunteruniversity/nonvuln/recaptcha-accepting-an-invalid-response-to-a-challenge
---
Fun bit of trivia regarding those "click on all the squares with street signs in them" prompts you tend to see on a login or sign up page: 

> reCAPTCHA’s verification uses several factors to determine the chances that a user is a human, not just the answer provided. We allow true humans to make mistakes in solving the challenge, while punishing bad bots even if they submit a correct answer.

> It is expected that, if the system determines you're likely a human, it accepts your answer despite knowing that it's an invalid one. In fact, this feature is necessary to be able to combat spam effectively - if we always require a correct answer, it would be easier to create an automated solution to bypass reCAPTCHA challenges. By accepting invalid answers (and sometimes rejecting valid ones!), creating such a bypass gets much more complicated for spammers.