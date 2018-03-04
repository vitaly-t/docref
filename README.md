# docref

Imports jsDoc comments from external files, via jsDoc-like reference:

```ts
/**
* @docref
* @file src/product.js
* @match Product.buy
*/
buy(id: string, count: number):Receipt
```

[![Build Status](https://travis-ci.org/vitaly-t/docref.svg?branch=master)](https://travis-ci.org/vitaly-t/docref)
[![Coverage Status](https://coveralls.io/repos/vitaly-t/docref/badge.svg?branch=master)](https://coveralls.io/r/vitaly-t/docref?branch=master)
[![Join the Chat](https://img.shields.io/gitter/room/vitaly-t/docref.svg)](https://gitter.im/vitaly-t/docref?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

This project is currently at the stage of writing [Specification].

See also the [Rationale] behind this project. 

# installing

```
$npm install docref -g
```

Run `docref` without arguments, to see the supported syntax.

[Specification]:./docs/spec.md
[Rationale]:./docs/rationale.md
