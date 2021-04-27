import _range from './_range.js';

/**
 * Yields values in a range, separated by a fixed constant called step. If this
 * step is negative, the range has to be given in reverse order, that is,
 * largest value first, smallest value second. Both the starting value and the
 * step value are optional. By default the starting value is <code>0</code>.
 * The default for the step value is <code>1</code>.
 *
 * @param {number} [start=0] - The starting value.
 * @param {number} stop - The stopping value.
 * @param {number} [step=1] - The step value.
 * @returns {IterableIterator<number>}
 */
export default function range(start, stop, step) {
	if (stop === undefined) {
		return _range(0, start, 1);
	}

	if (step === undefined) {
		return _range(start, stop, 1);
	}

	return _range(start, stop, step);
}
