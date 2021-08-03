/**
 * Resolve arguments for {@link range} and {@link rangeIterator}.
 *
 * @param {number} [start=0] - The starting value.
 * @param {number} stop - The stopping value.
 * @param {number} [step=1] - The step value.
 * @returns {[number, number, number]}
 */
const rangeArgs = (start, stop, step) => {
	if (stop === undefined) {
		return [0, start, 1];
	}

	if (step === undefined) {
		return [start, stop, 1];
	}

	return [start, stop, step];
};

export default rangeArgs;
