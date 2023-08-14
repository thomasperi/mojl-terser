/*global describe, it */
const assert = require('assert');
const fs = require('fs'); // eslint-disable-line no-unused-vars
const path = require('path').posix; // eslint-disable-line no-unused-vars
const DirectoryTester = require('../DirectoryTester.js');
const { name, cloneRun } = new DirectoryTester(__filename);

// to-do: use real mojl release
const Mojl = require('../../git-mojl');
const jsMinifierAdaptor = path.join(__dirname, '../index.js');

describe(name, async () => {

	it('should minify scripts', async () => {
		await cloneRun(async (base, box) => { // eslint-disable-line no-unused-vars
			const mojl = new Mojl({
				jsMinifierAdaptor
			});
			await mojl.build();
			
			const after = box.snapshot();
			const pattern = /^function add\((\w),(\w)\)\{return \1\+\2}function subtract\((\w),(\w)\)\{return \3-\4}$/;
			assert(pattern.test(after['dist/site.js']));
			
		});
	});

});

