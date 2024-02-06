import test from 'ava';

import {range} from '#module';

const macro = (t, items) => {
	t.deepEqual(items.length, Array.from(items).length);
};

macro.title = (title, items) => title ?? `len(${items}) = len(list(${items}))`;

test(macro, range(3));
test(macro, range(3, 6));

test(macro, range(0, 0, 1));
test(macro, range(1, 1, 1));
test(macro, range(0, 1, 1));
test(macro, range(0, 7, 1));
test(macro, range(7, 0, -1));

test(macro, range(0, 1, 2));
test(macro, range(0, 1, 3));
test(macro, range(10, 0, -3));
test(macro, range(0, 10, -3));
