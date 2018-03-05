DocRef Specification
--------------------

**NOTE:** This specification is currently under development. PR-s are welcome!

See also [examples].

---

* [Introduction](#introduction)
* [Syntax](#syntax)
* [Reference Tags]
  - [@match]
  - [@pattern]
  - [@line]
* [Configuration]
* [Command Line]
  
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

# Optional Tags

## @docref-config

Configuration override for the local file.

Supports internally tags [@config] and [@declare].

## @declare

Declares a variable that can be used anywhere in the file where it is declared. 

<details>
<summary><b>Example</b></summary>

```
/**
* @docref-config
* @declare root=../src
*/
```

Usage Example:

```
/**
* @decref
* @file ${root}/input.js
* @match ClassName.methodName
*/
```

If configuration file has a variable with the same name (case-sensitive), the local
declaration overrides the value for the current file.

## @ignore

Indicates that the current comment block is to be ignored.

Stops parsing anything else in the block, and removes it from the destination file. 

## @exec

Executes a plug-in function defined in the configuration file.

# Configuration

Processing engine can be configured both internally, within the input file, and via an external file.

By default, the engine tries to locate `.docref.json` in the same folder as the input file,
and if not found - tries for `.docref.js`, to implement a module that exports the same configuration.

If you need to use processing plugins, then you have to use a module for configuration.
Otherwise, a simple JSON file is sufficient. See the examples below.

<details>
<summary><b>JSON File</b></summary>

```js
{
    "declarations": {
        "variable1": "value1",
        "variable2": "value2"
    }            
}
```
</details><br/>

<details>
<summary><b>Module File</b></summary>

```js
module.exports = {
    declarations: {
        variable1: 'value1',
        variable2: 'value2'
    },
    plugins: {
        func1: (config, input, params) => {
            // config: current configuration for the input
            // input: the complete original jsDoc block
            // params: parameters passed into the plugin function
            
            // process the input and return the resulting string
        },
        func2: (config, input, params) => {
            // same as above 
        }
    }             
}
```
</details><br/>

# Command Line

This module is primarily for use from the command line.

[Command Line]:#command-line
[Configuration]:#configuration
[Reference Tags]:#reference-tags
[@match]:#match
[@pattern]:#pattern
[@line]:#line
[examples]:./examples
