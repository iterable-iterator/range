import rangeArgs from './rangeArgs.js';
import forwardRangeIterator from './forwardRangeIterator.js';
import backwardRangeIterator from './backwardRangeIterator.js';

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
const rangeIterator = (start, stop, step) => {
	[start, stop, step] = rangeArgs(start, stop, step);
	return step < 0
		? backwardRangeIterator(start, stop, step)
		: forwardRangeIterator(start, stop, step);
};

export default rangeIterator;
