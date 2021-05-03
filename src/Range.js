import assert from 'assert';

export default class Range {
	/**
	 * Constructor.
	 *
	 * @param {number} start
	 * @param {number} stop
	 * @param {number} step
	 * @param {number} length
	 */
	constructor(start, stop, step, length) {
		assert(Number.isInteger(start));
		assert(Number.isInteger(stop));
		assert(Number.isInteger(step));
		assert(Number.isInteger(length));
		this.start = start;
		this.stop = stop;
		this.step = step;
		this.length = length;
	}

	/**
	 * @returns {string}
	 */
	toString() {
		return `range(${this.start}, ${this.stop}, ${this.step})`;
	}

	/**
	 * Get.
	 *
	 * @param {number} i
	 * @returns {number}
	 */
	get(i) {
		if (!Number.isInteger(i)) throw new Error('IndexError');
		if (i < 0) throw new Error('IndexError');
		if (i >= this.length) throw new Error('IndexError');
		return this.start + i * this.step;
	}
}
