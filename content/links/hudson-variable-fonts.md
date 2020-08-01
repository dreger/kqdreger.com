---
date: 2016-09-15T00:00:00Z
link: https://medium.com/@tiro/https-medium-com-tiro-introducing-opentype-variable-fonts-12ba6cd2369#.6cxgnofmm
title: Introducing OpenType and Variable Fonts
---

John Hudson penned a joint announcement for Microsoft, Google, Apple, and Adobe, introducing the variable font format, which is set to be introduced with [OpenType 1.8][opentype]. Medium tells me the whole piece takes about 23 minutes to read, so I've gone ahead and picked out some of the better bits: 

> + The technology behind variable fonts is officially called OpenType Font Variations. It has been jointly developed by Microsoft, Google, Apple, and Adobe, in an unprecedented collaborative effort also involving technical experts from font foundries and font tool developers.
> 
> +  A variable font is a single binary with greatly-reduced comparable file size and, hence, smaller disc footprint and webfont bandwidth. This means more efficient packaging of embedded fonts, and faster delivery and loading of webfonts. The potential for dynamic selection of custom instances within the variations design space — or design-variations space, to use its technical name — opens exciting prospects for fine tuning the typographic palette, and for new kinds of responsive typography that can adapt to best present dynamic content to a reader’s device, screen orientation, or even reading distance.
> 
> + Within the design space created by the axes of variation in a font, the font maker can define specific positions as named instances. A named instance appears to users as if it were a separate font, e.g. a Light or Bold weight of a typeface, and can be utilised in documents exactly as if it were an individual non-variable font. Because these named instances are defined as coordinate positions within the design space, and not as masters, there is a great deal of freedom for the font maker in deciding how to arrange and name instances, and in fine-tuning the interpolation of the named instances.
> 
> + Because OpenType Font Variations is a new technology, it requires substantial updates to font handling infrastructure in operating systems and/or applications, and has very limited backwards compatibility; this also differs between the TrueType and CFF flavours.
> 
> + Five more-or-less common axes of variation have registered axis tags in the OpenType Font Variations specification — Weight <wght>, Width <wdth>, Optical size <opsz>, Italic <ital>, and Slant <slnt> — and these have some assumed behaviours. Font makers can also define custom axes with their own four-character tags and localisable names stored as strings in the ‘name’ table. Additional common axis tags may be registered in future, if these emerge as font makers engage with the technology.
> 
> + In the twenty years since OpenType was first invented, it has only grown more confusing, with the addition of new name IDs for specific platforms and style-mapping models. The concatenation of style names in fonts follow no fixed pattern among font makers, and may reach to ludicrous lengths. What one font maker calls ‘Acme UltraBlack Condensed Display Roman’ another may call ‘Acme Roman Super Black Display Condensed’.
> 
> + Like so much else driving change in the font business, a big part of the answer is webfonts, and the need for more compact and faster ways to deliver dynamic fonts for the Web. Variable fonts also have the potential to enable new kinds of typography for electronic documents, responsive to things like device orientation or even viewing distance. Compact and faster fonts also provide significant advantages for embedding fonts in devices, especially for East Asian (CJK) and other fonts with very large glyph sets and character coverage. The smaller device and disc footprint of variable fonts has been a major factor in encouraging support for the technology in software companies.
> 
> + It will be important for tools to provide font makers with intuitive ways to navigate the potentially complex design space of variable fonts with multiple axes, intermediate delta sets, and axis variation. As discussed previously, maintaining flexibility in the relationship of design masters and the arrangement of variations in a font will enable font makers to tailor fonts to the needs of customer.

There's a lot more in this piece, but a good deal of it revolves around the technical sides of the variable font spec. I find that stuff fascinating, but I'm already at, if not way over, what I consider a reasonable amount of quotes from a font format proposal. Regardless, the amount of thought, work, and collaboration that went into this format appears to be staggering. 

(**Pro tip:** the appendix and table terms is at the bottom of the post — no need to have Google open in another window like yours truly.)

In what amounts to humor in a font format announcement post, I enjoyed when Mr. Hudson began discussing how Microsoft, Google, Apple, and Adobe were working to integrate variable font support into their browsers and operating systems. On Apple: 

> Apple, characteristically, are least forthcoming about future plans, but they have a head start on variable font support in their TrueType GX infrastructure, and have played an active role in bringing the technology to OpenType.

"Least forthcoming" may be one of the more kinder assessments of Apple's future plan disclosure policy. 

[opentype]: https://www.microsoft.com/typography/otspec180/
