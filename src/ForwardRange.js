import assert from 'assert';

import Range from './Range.js';
import forwardRangeIterator from './forwardRangeIterator.js';

export default class ForwardRange extends Range {
	/**
	 * Constructor.
	 *
	 * @param {number} start
	 * @param {number} stop
	 * @param {number} step
	 */
	constructor(start, stop, step) {
		assert(step !== 0);
		assert(step > 0);
		super(
			start,
			stop,
			step,
			start >= stop ? 0 : 1 + Math.floor((stop - start - 1) / step),
		);
	}

	/**
	 * @returns {IterableIterator<number>}
	 */
	[Symbol.iterator]() {
		return forwardRangeIterator(this.start, this.stop, this.step);
	}

	/**
	 * Has.
	 *
	 * @param {number} x
	 * @returns {boolean}
	 */
	has(x) {
		if (!Number.isInteger(x)) return false;
		if (x >= this.stop) return false;
		if (x < this.start) return false;
		return (x - this.start) % this.step === 0;
	}
}
