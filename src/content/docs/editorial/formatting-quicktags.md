---
title: Formatting
status: Published
author_name: Rose Petralia
author_email: rose@lacking.org
last_update: '2022-04-22T10:48:42.000-04:00'
---
_Ink 19_ relies on Markdown syntax and "Quicktags" to format text and paragraphs in published content. In general, you will not have to enter Quicktags yourself&mdash;tags for article parts such as headline, byline, body, etc. are inserted when you submit a draft. Once they are in place, they can be left alone, unless you need some very specific formatting changes.

## Quicktags Overview

Every paragraph in your reviews must start with a Quicktag. Fundamentally, Quicktags operate on text blocks, each block being defined by text on a line followed by one or more empty lines. 

## Formatting Options

Apply formatting to all or part of a text block using one of three options below. Read more about each option below the list.

1. __Entire paragraph/block formatting__ requires only a two-letter block tag preceded by a hyphen and followed by one space: `-bm `. The tag applies the correct formatting to the block.  
3. __Image formatting__ does not need a block tag. In a new block, type the image title surrounded by double brackets: `[[Example Image]]`.  
2. __Special text formatting__ within a block, such a making words __bold__ or _italic_ or converting a URL into a clickable link with a text label, is handled using [Markdown syntax](https://www.markdownguide.org/basic-syntax).  

### Text Formatting  

- You can apply several types of text (inline) formatting within in an article block.
- Italics are commonly used at _Ink 19_. Italicize by surrounding text with underscores, `_like this_`. Make text bold by using double underscores, `__like this__`  (bold text within article copy should be used incredibly sparingly).
- Bare urls (like https://ink19.com) will be auto-converted to links, but to craft a link with a label, put the label in square brackets and follow it immediately with the URL in parentheses: `[Ink 19 Home](https://ink19.com)`.
- You can use HTML for inline formatting, `<i>like this</i>`, but using Markdown is preferred, as it makes reading and proofing the text easier.
- A variety of typographic niceties are performed automatically, such as converting straight quotes and apostrophes into their appropriate curly equivalents.

### Image formatting

- The Images Manager is where uploads, alignment, captions, and credits are set. Image uploads are typically managed by the editors.
- Inserting an image into an article only specifies its location within the article. To insert an uploaded image into an article, surround the title in double brackets ``[[uploaded_image.jpg]]`` or ``[[A Nicely Titled Image]]`` and place it in its own block. The text will be replaced with the image and its associated caption.

### Block Formatting

- The list of _Ink 19_ block tags has grown over the years, as the tag indicates not only how the block should be formatted but also what type of text it represents. 
- Each Quicktag adds a specific CSS class to the block, and may change the block's HTML tag (by default `<p>`) into some other tag more appropriate to the type of text (e.g. `<h1>`).
- Remember to add a hyphen before and a space after when you use them (`-bf `) and be sure the hyphen is the first character of the line.
- See commonly used Quicktags below! 

|Quicktag|HTML Block    |CSS Class        |
|--------|--------------|-----------------|
|ft      |`<h1>`        |main-title       |
|fh      |`<h1>`        |hidden-title     |
|fs      |`<h2>`        |main-subtitle    |
|it      |`<h1>`        |main-title       |
|is      |`<h2>`        |main-subtitle    |
|ma      |`<h1>`        |music-artist     |
|mt      |`<h2>`        |music-title      |
|ml      |`<h3>`        |music-label      |
|st      |`<h1>`        |screen-title     |
|sc      |`<h2>`        |screen-cast      |
|ss      |`<h3>`        |screen-studio    |
|pt      |`<h1>`        |print-title      |
|pa      |`<h2>`        |print-author     |
|pp      |`<h3>`        |print-publisher  |
|gp      |`<h1>`        |gear-product     |
|gt      |`<h2>`        |gear-type        |
|gm      |`<h3>`        |gear-manufacturer|
|bp      |`<p>`         |body-plain       |
|bb      |`<h4>`        |body-byline      |
|bf      |`<p>`         |body-first       |
|bm      |`<p>`         |body-plain       |
|bc      |`<p>`         |body-center      |
|bs      |`<h3>`        |body-subhead     |
|bq      |`<p>`         |body-question    |
|ba      |`<blockquote>`|body-answer      |
|ra      |`<p>`         |review-address   |
|rb      |`<h4>`        |review-byline    |
|lh      |`<h1>`        |live-headline    |
|ls      |`<h2>`        |live-supporting  |
|lp      |`<h3>`        |live-location    |
|wa      |`<h1>`        |music-artist     |
|wt      |`<h2>`        |music-title      |
|wl      |`<h3>`        |music-label      |
|wf      |`<p>`         |body-first       |
|wm      |`<p>`         |body-middle      |
|wd      |`<p>`         |review-address   |
|wb      |`<h4>`        |review-byline    |

&nbsp;
