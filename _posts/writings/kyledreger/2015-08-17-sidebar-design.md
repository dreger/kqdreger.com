---
title: Sidebar design
date: 2015-08-17 11:14
redirect_from:
- "/archives/15229-sidebar-design.html"
- "/sidebar-design.html"
---


I'm designing a sidebar for a web application, which has a typical header-sidebar-content layout. The header holds the main navigation, the content area has content, but the sidebar has a lot more: 

- Two primary action buttons (think "create x" type). 
- Two collapsible lists of content (you click the header to collapse the list). 
- Two lists that are not collapsible.

_![sidebar sketch](/assets/images/sidebar-sketch-1.png)_

We've put a lot in that sidebar, arguably too much. There are too many competing methods of interacting with the content, and it's not clear what the user can actually click. One possible solution would be to have the sidebar serve a more traditional _navigation_ role, but that would uproot our two buttons, which aren't used for navigating. 

Everything in the sidebar has to stay for now. Sidestepping the buttons / navigation conflict, the biggest design challenge is creating enough visual distinction between a collapsible list and a list that's static. Right now, we have a small chevron floating to the right of the list title that denotes collapsible functionality. That works OK right now, but the collapsible / non-collapsible list titles look so similar that I'm concerned the user won't notice the difference. 

Do the lists need the ability to collapse? Yes. The content of each list can get quite long. One possible solution would be to have _all_ lists be collapsible. That would remove the ambiguity, and it would make the interaction with each list header consistent. 
