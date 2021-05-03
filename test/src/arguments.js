import test from 'ava';

import {range} from '../../src/index.js';

const macro = (t, start, stop, step, expected) => {
	t.deepEqual(range(start, stop, step), expected);
};

macro.title = (title, start, stop, step, expected) =>
	title ?? `range(${start}, ${stop}, ${step}) = ${expected}`;

test(macro, 3, undefined, undefined, range(0, 3, 1));
test(macro, 3, 6, undefined, range(3, 6, 1));
