import test from 'ava';

import {range as rangeObject, rangeIterator} from '#module';

const macro = (t, {range}, items, expected) => {
	t.deepEqual(Array.from(range(...items)), expected);
};

macro.title = (title, {name}, items, expected) =>
	title ?? `list(${name}(${items})) = ${JSON.stringify(expected)}`;

for (const range of [
	{name: 'range', range: rangeObject},
	{name: 'rangeIterator', range: rangeIterator},
]) {
	test(macro, range, [3], [0, 1, 2]);
	test(macro, range, [3, 6], [3, 4, 5]);

	test(macro, range, [0, 0, 1], []);
	test(macro, range, [1, 1, 1], []);
	test(macro, range, [0, 1, 1], [0]);
	test(macro, range, [0, 1, 2], [0]);
	test(macro, range, [0, 7, 1], [0, 1, 2, 3, 4, 5, 6]);
	test(macro, range, [7, 0, -1], [7, 6, 5, 4, 3, 2, 1]);
}
