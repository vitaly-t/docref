DocRef Specification
--------------------

**NOTE:** This specification is currently under development. PR-s are welcome!

---

* [Introduction](#introduction)
* [Syntax](#syntax)
* [Reference Tags]
  - [@match]
  - [@pattern]
  - [@line]
  
---

# Introduction

When a jsDoc comment contains tag `@docref`, it is to be replaced by jsDoc comment
from the source file, as specified by one of the [Reference Tags].

All jsDoc comments that do not have tag `@docref` are skipped.

# Syntax

DocRef syntax is meant to resemble jsDoc, so it can be viewed and highlighted by any IDE as a jsDoc comment. 

At the same time, the internally parsed syntax is simpler - all tags are single-line, in the format of
`@tagname value`. Parameter `value` can be required or optional, depending on the tag, and it includes
everything on the same line, following the tag name.

Text on lines outside of supported tags is ignored.

# Reference Tags

Reference tags [@match], [@pattern] and [@line] are supported. And there must be
exactly one of this tags specified, or else an error will be thrown.

## @match

Syntax: `@match value`.

Searches for the matching jsDoc comment using a text string (case-sensitive).

<details>
<summary><b>Example</b></summary>

```ts
/**
* @docref
* @file src/my-class.js
* @match MyClassName#someProperty
*/
```
</details><br/>

## @pattern

Syntax: `@pattern regEx`

Searches for the matching jsDoc comment by using a regular expression.

<details>
<summary><b>Example</b></summary>

```ts
/**
* @docref
* @file src/my-class.js
* @match ^prefix[0-1]*name$
*/
```
</details><br/>

## @line

Syntax: `@line number`

Locates the right jsDoc comment via the line number. It can be anywhere between
the start and end of the comment block.

<details>
<summary><b>Example</b></summary>

```ts
/**
* @docref
* @file src/my-class.js
* @line 123
*/
```
</details><br/>

[Reference Tags]:#reference-tags
[@match]:#match
[@pattern]:#pattern
[@line]:#line
