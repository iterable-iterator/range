import assert from 'assert';

/**
 * Yields values in a range, separated by a fixed negative constant called
 * step. The range has to be given in reverse order, that is, largest value
 * first, smallest value second. This is an iterator that preserves state
 * accross calls.
 *
 * @param {number} start - The starting value.
 * @param {number} stop - The stopping value.
 * @param {number} step - The step value (<0).
 * @returns {IterableIterator<number>}
 */
export default function* backwardRangeIterator(start, stop, step) {
	assert(step < 0);
	for (; start > stop; start += step) yield start;
}
