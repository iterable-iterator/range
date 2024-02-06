import test from 'ava';

import {range} from '#module';

const macro = (t, args, expected) => {
	t.deepEqual(range(...args), expected);
};

macro.title = (title, args, expected) =>
	title ?? `range(${args}) is ${expected}`;

test(macro, [3], range(0, 3, 1));
test(macro, [3, 6], range(3, 6, 1));
