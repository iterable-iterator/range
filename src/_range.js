/**
 * Yields values in a range, separated by a fixed constant called step. If
 * this step is negative, the range has to be given in reverse order, that is,
 * largest value first, smallest value second.
 *
 * @param {number} start - The starting value.
 * @param {number} stop - The stopping value.
 * @param {number} step - The step value.
 * @returns {IterableIterator<number>}
 */
export default function* _range(start, stop, step) {
	if (step < 0) {
		for (; start > stop; start += step) {
			yield start;
		}
	} else {
		for (; start < stop; start += step) {
			yield start;
		}
	}
}
