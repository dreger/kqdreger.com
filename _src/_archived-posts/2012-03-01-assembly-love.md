---
layout: post
category: post
title: Assembly language love affair
---

I have a love / hate relationship with assembly language.

### Things I hate:

It's an archaic language. Unless you are working on microchip design, you are probably never going to work with it. Assembly language programmers have to worry and keep track of every single byte of memory - you're minipulating it by hand. Basically, the training wheels of high-level languages like Java and C++ are off and you have to manage everything.

A simple statement in Java that outputs a string of text looks like this:

	System.out.println("Hello, World.");

Not bad. You can almost read along with the code. You are calling on the System to Print Out a Line with the contents of the quotation marks. Easy enough to understand.

This is the same statement, written in assembly:

	.data
	msg:	.asciiz	"Hello, World."
	.text
	main:
	li	$v0, 4
	la	$a0, msg
	syscall

Yup. Practically unreadable code, more machine than human, and more than four times as many lines to accomplish what we did above. Imagine coding logic into this.

### Things I love

You may know how to drive a car, but actually understanding how the motor and pistons drive it forward is a unique insight. Although I will never, ever, program anything substantial in assembly language, I feel I am a more conscientious coder because I understand the basics.

That being said, assembly and I probably won't end up together.