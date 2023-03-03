# src/reach-helpers

This is a module for the SDK's implementation of the `@reach-sh` standard library. It contains type definitions and helper functions that depend on a reach instance. 

- [src/reach-helpers](#srcreach-helpers)
- [Files](#files)
    - [index.ts](#indexts)
    - [index.test.ts](#indextestts)


# Files


### index.ts
Module index. This is where the function for instantiating the `stdlib` is defined. Also contains the titular "reach helpers," such as:
- `createReachAPI`: access the current global instance of `stdlib` (if one exists)
- `formatAddress`: decode an `stdlib` blockchain address into a user-recognizable format
- `formatCurrency`: decode an atomic unit value (e.g. cents) into a user-friendly value (e.g. `100 -> 1.00`)

And other blockchain-related helpers like `getNetworkTokenBalance` and `tokenMetadata`.

---
### index.test.ts
JEST test file. This ignores async functions, since those can be situation-specific (e.g. get account balance). 
