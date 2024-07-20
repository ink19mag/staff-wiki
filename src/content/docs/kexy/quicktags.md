---
title: Formatting with Quicktags
draft: true
author_name: Rose Petralia
author_email: rose@lacking.org
last_update: '2021-03-10T02:32:53.000+00:00'
---
## What are Quicktags?

Within Ink 19, "Quicktags" refers to the markup we use to render text and paragraph formatting as proper HTML on the website.

In general, you will not have to enter Quicktags yourself. When you submit a draft, article parts such as headline, byline, body, etc. are collected separately as plain text and then assembled into an article with the appropriate Quicktags inserted. For the most part, once they are in place they can be left alone, unless you have some very specific formatting need.

## Quicktags Overview

Fundamentally, Quicktags operates on text blocks, each block being defined by text on a line followed by one or more empty lines.
  
Here are a code sample and the final result, below.

---

```
This is the first block.

This is the second block.

   Indentation doesn't matter, even though
we may be used to reading indented
  paragraphs   from a book.
   Although this line is indented and
you would normally think it makes for a
separate paragraph, it is actually part
of the third block because it has no empty
 line before it.

And this is a fourth block.
```
---

This is the first block.

This is the second block.

   Indentation doesn't matter, even though
we may be used to reading indented
  paragraphs   from a book.
   Although this line is indented and
you would normally think it makes for a
separate paragraph, it is actually part
of the third block because it has no empty
 line before it.

And this is a fourth block.

---

## Quicktags Formatting Options

Apply formatting to all or part of a text block using one of three options below. Read more about each option below the list.

1. **Text formatting** within a block, such a making words **bold** or *italic* or converting a URL into a clickable link with a text label, is handled using [Markdown syntax](https://www.markdownguide.org/basic-syntax).  
2. **Entire block formatting** requires only a two-letter block tag preceded by a hyphen and followed by a space: `-bm `. The tag applies the correct formatting to the block.  
3. **Image formatting** does not need a block tag. In a new block, type the image title surrounded by double brackets: `[[Example Image]]`.  

### Text Formatting  

You can apply several types of text (inline) formatting within in an article block, but only italics are commonly used at Ink 19. Italicize by surrounding text with underscores, `_like this_`. Make text bold by using double asterisks, `**like this**`  (bold text within article copy is discouraged).

Bare urls -- like https://ink19.com -- will be auto-converted to links, but to craft a link with a label, put the label in square brackets and follow it immediately with the URL in parentheses: `[Ink 19 Home](https://ink19.com)`

*You can also use HTML for inline formatting, `<i>like this</i>`, but using Markdown is preferred, as it makes reading and proofing the text easier.*

A variety of typographic niceties are performed automatically, such as converting straight quotes and apostrophes into their appropriate curly equivalents.

### Block Formatting

The list of Ink 19 block tags has grown over the years, as the tag indicates not only how the block should be formatted but also what type of text it represents. Each Quicktag adds a specific CSS class to the block, and may change the block's HTML tag (by default `<p>`) into some other tag more appropriate to the type of text (eg `<h1>`).

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

### Image formatting

In Quicktags, inserting an image into an article only specifies its location within the article. To insert an image into an article, surround the title in double brackets (`[[uploaded_image.jpg]]`) or (`[[A Nicely Titled Image]]`) and place it in its own block. The text will be replaced with the image and its associated text.

The Images Manager is where alignment, captions, and credits are set. {need instructions}
