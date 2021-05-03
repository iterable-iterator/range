import assert from 'assert';

/**
 * Yields values in a range, separated by a fixed positive constant called
 * step. This is an iterator that preserves state accross calls.
 *
 * @param {number} start - The starting value.
 * @param {number} stop - The stopping value.
 * @param {number} step - The step value (>0).
 * @returns {IterableIterator<number>}
 */
export default function* forwardRangeIterator(start, stop, step) {
	assert(step > 0);
	for (; start < stop; start += step) yield start;
}
