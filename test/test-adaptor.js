/*global describe, it */
const assert = require('assert');
const path = require('path').posix; // eslint-disable-line no-unused-vars

const jsMinifierAdapter = require('../index.js');

describe('mojl-terser tests', async () => {
	it('should minify scripts', async () => {
		
		let source = `
			// Add two numbers
			function add(addend1, addend2) {
				return addend1 + addend2;
			}

			// Subtract one number from another
			function subtract(minuend, subtrahend) {
				return minuend - subtrahend;
			}
		`;
		
		let actual = await jsMinifierAdapter(source);
		let expected = /^function add\((\w),(\w)\)\{return \1\+\2}function subtract\((\w),(\w)\)\{return \3-\4}$/;
		assert(expected.test(actual));

	});
});

