---
layout: post
categories: volume-zero post
title: Writing simple code
redirect_from: "/archives/11337-writing-simple-code.html"
---


With three different computer science classes this semester, I write a lot of code. However, being a minimalistic type of guy, I try to have my code require as little documentation as possible. I do this by writing my code so that it explains itself *without* the need for an army of comments.

Unfortunately, many of the coding tutorials online, and even sample code from my classes, end up looking like this:

	// method to generate tip and return it to the sender
	public float returnTheTipValue (float billTotalValue) {
		float theNewTip = .2 * billTotalValue; // calculate (20% of bill total)
		return theNewTip; // return value
	} // end returnTheTipValue()

The above code generates how much you should tip your waiter/waitress based on your bill total. However, between the variable names and the comments (content after "//"), this code is difficult understand by just glancing at it.

Now, let's approach the same problem with a self-documented coding style. Taking the example above, the exact same thing can be accomplished with this modified code:

	public float getTip (float billTotal) {
		float tip = .2 * billTotal; // calculate a generous tip
		return tip;
	}

Simple and to the point. This modified code is easier to read, and I can quickly understand what the method does by just looking at the name and its only comment.

While I personally write my code with this simple mindset, there are always situations where many comments and more complex variable names are not only useful, but essential. Most software companies have a coding style that outlines when programmers should document their code and how they should name their variables. Having consistent rules like this allows multiple programmers to work on the same code without worrying how the others are writing.

For me though, and for most college computer programmers, a simple, yet clear, approach to your documentation will save you lots of headaches down the road. Less is more.
