---
title: "Start With Words"
date: 2018-01-04T18:41:59-05:00
---

I start most of my interface designs in [TextEdit][]. Why? Because it forces me to focus on the words. Words are like stock in a delicious stew. If you don't have good stock, the whole meal feels off. 

TextEdit-the-design-tool is surprisingly robust. Let me give you an example. 

Say we've got to design a rather standard looking confirmation modal with two options for the user. Open TextEdit and start writing: 

```
Are you sure you want to cancel?
----------

Your account will remain active until 2/1/2018.

- If you resubscribe by 3/10/2018 you will retain your data.
- If you resubscribe after 3/10/2018 you'll have create a new account.
- You may download your data until 3/10/2018.

[ No ] [ Yes ] 
```

You can almost _see_ the modal, can't you? You can tell that "Are you sure you want to cancel?" is some sort of header. You also know that `[ No ]` and `[ Yes ]` are buttons. If you're feeling fancy, you can even bump up the border radius: 

```
( No ) ( Yes )
```

Joking. 

Now here's where the real magic happens — the editing. Before opening Sketch or a new HTML document, continue to iterate on the language. Sometimes it helps to pretend like I have to actually speak these words to someone who's sitting right in front of me. How would I write this for another human to read? 


```
Are you sure you want to cancel?

Your account will remain active until 2/1/2018.

Come back anytime before 3/15/2018 to reactivate your account or request a copy of your data. After 3/15, your account and data will be permanently deleted.

[ Nevermind ] [ Cancel my account ]
```

Better. Fewer bullets, more readable. 

Constraints help create better designs. TextEdit forces me to focus on the smallest (yet arguably most important) part of any design: the words. Because there's no functional UI yet, my copy can't hide behind appealing aesthetic, and I'm less prone to overwriting. 

TextEdit (plain text mode, or `CMD + Shift + T`) is what I use, but pen and paper, Google Docs, or — yes — Sketch work equally as well. Whatever you use, start with words, and then build your design from there. 

[textedit]: {{<  ref "textedit.md" >}}