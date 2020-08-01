---
title: "Google’s AlphaGo AI Defeats Reigning European Go Champion"
date: 2016-01-26T16:41:23-05:00
link: http://googleresearch.blogspot.com/2016/01/alphago-mastering-ancient-game-of-go.html
---

First off, this has nothing to do with Go, Google’s programming 
language (also referred to as Golang to prevent confusion). Rather, 
Google has developed a Go-playing AI that went 5-0 against reigning 
3-time European champion, Fan Hui. Google’s David Silver and Demis 
Hassabis, writing for the Google Research Blog:

> We first trained the policy network on 30 million moves from games 
played by human experts, until it could predict the human move 57% of 
the time (the previous record before AlphaGo was 44%). But our goal is 
to beat the best human players, not just mimic them. To do this, AlphaGo
 learned to discover new strategies for itself, by playing thousands of 
games between its neural networks, and gradually improving them using a 
trial-and-error process known as reinforcement learning. This approach 
led to much better policy networks, so strong in fact that the raw 
neural network (immediately, without any tree search at all) can defeat 
state-of-the-art Go programs that build enormous search trees.

This bit from Elizabeth Gibney, [reporting for Nature](http://www.nature.com/news/google-ai-algorithm-masters-ancient-game-of-go-1.19234), also touched on a difficulty in AI that I hadn’t thought much about:

> [DeepMind co-founder Demis Hassabis] says that many challenges 
remain in DeepMind’s goal of developing a generalized AI system. In 
particular, its programs cannot yet usefully transfer their learning 
about one system — such as Go — to new tasks; a feat that humans perform
 seamlessly. “We’ve no idea how to do that. Not yet,” Hassabis says.