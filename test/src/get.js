import test from 'ava';

import {range} from '../../src/index.js';

const get = (t, items, key, value) => {
	t.is(items.get(key), value);
};

get.title = (title, items, key, value) =>
	title ?? `${items}.get(${key}) is ${value}`;

const throws = (t, items, key) => {
	t.throws(() => items.get(key));
};

throws.title = (title, items, key) => title ?? `${items}.get(${key}) throws`;

for (const i of range(10)) test(get, range(10), i, i);

test(get, range(10, 0, -1), 0, 10);
test(get, range(10, 0, -1), 1, 9);
test(get, range(10, 0, -2), 1, 8);
test(get, range(10, 0, -3), 1, 7);

test(throws, range(0), 0);
test(throws, range(10), -1);
test(throws, range(10), 10);
test(throws, range(10), -11738927);
test(throws, range(10), 10123701);

test(throws, range(-12890981238, 81979238179), null);
test(throws, range(-12890981238, 81979238179), 0.5);

test(get, range(0, 1, 2), 0, 0);
test(throws, range(0, 1, 2), 1);
