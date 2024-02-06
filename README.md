:mountain: [@iterable-iterator/range](https://iterable-iterator.github.io/range)
==

A range function for JavaScript.
See [docs](https://iterable-iterator.github.io/range/index.html).

> :warning: Depending on your environment, the code may require
> `regeneratorRuntime` to be defined, for instance by importing
> [regenerator-runtime/runtime](https://www.npmjs.com/package/regenerator-runtime).

```js
import {range} from '@iterable-iterator/range';
range( 3 ) ; // 0 1 2
range( 2 , 5 ) ; // 2 3 4
range( 5 , 2 , -1 ) ; // 5 4 3

range(Number.MAX_SAFE_INTEGER).has(1234); // true
range(0, 10, 2).get(3); // 6

// If you only use the iterator feature you can save bytes by calling the
// IterableIterator function directly
import {forwardRangeIterator, backwardRangeIterator} from '@iterable-iterator/range';

for (const x of forwardRangeIterator(0, 10, 1)) ...
for (const x of backwardRangeIterator(10, 0, -1)) ...
// caveat: This requires you to specify all parameters, and choose the correct
// implementation depending on the sign of the `step` parameter.

// For convenience, rangeIterator will return the correct kind of
// IterableIterator without constructing a Range object. It has the same signature
// as the range function.
import {rangeIterator as range} from '@iterable-iterator/range';
```

[![License](https://img.shields.io/github/license/iterable-iterator/range.svg)](https://raw.githubusercontent.com/iterable-iterator/range/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@iterable-iterator/range.svg)](https://www.npmjs.org/package/@iterable-iterator/range)
[![Tests](https://img.shields.io/github/workflow/status/iterable-iterator/range/ci:test?event=push&label=tests)](https://github.com/iterable-iterator/range/actions/workflows/ci:test.yml?query=branch:main)
[![Dependencies](https://img.shields.io/librariesio/github/iterable-iterator/range.svg)](https://github.com/iterable-iterator/range/network/dependencies)
[![GitHub issues](https://img.shields.io/github/issues/iterable-iterator/range.svg)](https://github.com/iterable-iterator/range/issues)
[![Downloads](https://img.shields.io/npm/dm/@iterable-iterator/range.svg)](https://www.npmjs.org/package/@iterable-iterator/range)

[![Code issues](https://img.shields.io/codeclimate/issues/iterable-iterator/range.svg)](https://codeclimate.com/github/iterable-iterator/range/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/iterable-iterator/range.svg)](https://codeclimate.com/github/iterable-iterator/range/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/iterable-iterator/range/main.svg)](https://codecov.io/gh/iterable-iterator/range)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/iterable-iterator/range.svg)](https://codeclimate.com/github/iterable-iterator/range/trends/technical_debt)
[![Documentation](https://iterable-iterator.github.io/range/badge.svg)](https://iterable-iterator.github.io/range/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@iterable-iterator/range)](https://bundlephobia.com/result?p=@iterable-iterator/range)
