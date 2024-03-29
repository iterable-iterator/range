import test from 'ava';

import {range} from '#module';

const repr = (x) => JSON.stringify(x);

const has = (t, items, x) => {
	t.true(items.has(x));
};

has.title = (title, items, x) => title ?? `${items}.has(${repr(x)}) is true`;

const doesnothave = (t, items, x) => {
	t.false(items.has(x));
};

doesnothave.title = (title, items, x) =>
	title ?? `${items}.has(${repr(x)}) is false`;

test(has, range(0, 1, 2), 0);
test(doesnothave, range(0, 1, 2), 1);
test(doesnothave, range(0, 1, 2), 2);
test(doesnothave, range(0, 1, 2), -1);

test(has, range(10), 7);
test(doesnothave, range(0, 10, 2), 7);
test(doesnothave, range(0, 9, 2), 7);
test(has, range(9, 0, -2), 7);
test(has, range(100_000_000), 9999);
test(doesnothave, range(0, 100_000_000, 2), 9999);
test(has, range(0, 100_000_000, 2), 10_000);
test(doesnothave, range(0, 100_000_000, 2), -9999);
test(doesnothave, range(0, 100_000_000, 2), -10_000);
test(has, range(99_999_999_999, 0, -2), 9999);
test(doesnothave, range(99_999_999_999, 0, -2), 10_000);
test(doesnothave, range(99_999_999_999, 0, -2), -10_000);
test(doesnothave, range(99_999_999_999, 0, -2), -9999);

test(has, range(10), 0);
test(has, range(10), 9);
test(doesnothave, range(10), 10);
test(doesnothave, range(10), -1);
test(doesnothave, range(10), 93_824);
test(doesnothave, range(10), -93_824);
test(has, range(10, 0, -1), 10);
test(has, range(10, 0, -1), 1);
test(doesnothave, range(10, 0, -1), 11);
test(doesnothave, range(10, 0, -1), 0);
test(doesnothave, range(10, 0, -1), 93_824);
test(doesnothave, range(10, 0, -1), -93_824);

test(doesnothave, range(10), {});
test(doesnothave, range(10, 0, -1), {});

test(doesnothave, range(10), []);
test(doesnothave, range(10, 0, -1), []);

test(doesnothave, range(10), null);
test(doesnothave, range(10, 0, -1), null);

test(doesnothave, range(10), 5.5);
test(doesnothave, range(10, 0, -1), 5.5);

test(doesnothave, range(10), '5');
test(doesnothave, range(10, 0, -1), '5');
