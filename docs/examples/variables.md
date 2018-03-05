This example shows advanced use of locally declared variables.

# Configuration

A variable can use variables declared above and from the configuration file.

```js
/**
* @docref-config
*
* @declare root = ../project/source
* @declare core = ${root}/core
* @declare helpers = ${root}/helpers
*
* @declare coreNamespace = CoreNamespace.CoreClass
*
* @declare replacement = bla
*/
```

# Usage

```js
/**
* @docref
* @file ${core}/index.js
* @match ${coreNamespace}.methodOne
*/
```

```js
/**
* @docref
* @file ${helpers}/index.js
* @match ${coreNamespace}.methodTwo
* @exec pluginName(123, 'something', ${replacement})
*/
```
