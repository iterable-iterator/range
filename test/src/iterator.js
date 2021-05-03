import test from 'ava';

import {range} from '../../src/index.js';

const macro = (t, start, stop, step, expected) => {
	t.deepEqual(Array.from(range(start, stop, step)), expected);
};

macro.title = (title, start, stop, step, expected) =>
	title ??
	`list(range(${start}, ${stop}, ${step})) = ${JSON.stringify(expected)}`;

test(macro, 3, undefined, undefined, [0, 1, 2]);
test(macro, 3, 6, undefined, [3, 4, 5]);

test(macro, 0, 0, 1, []);
test(macro, 1, 1, 1, []);
test(macro, 0, 1, 1, [0]);
test(macro, 0, 1, 2, [0]);
test(macro, 0, 7, 1, [0, 1, 2, 3, 4, 5, 6]);
test(macro, 7, 0, -1, [7, 6, 5, 4, 3, 2, 1]);
