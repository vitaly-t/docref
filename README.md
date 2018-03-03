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

This project is currently at the stage of writing [Specification].

See also the [Rationale] behind this project. 

[Specification]:./docs/spec.md
[Rationale]:./docs/rationale.md
