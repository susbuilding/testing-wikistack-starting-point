const assert = require('assert');
const expect = require('chai').expect;
const chai = require('chai');
const spies = require('chai-spies');

chai.use(spies);

describe('Simple confirmation', function() {
	it('sums 2 + 2', function() {
		expect(2+2).to.equal(4);
	})
})

describe('Testing asynchronous functions', function() {
	it('tests that setTimeOut of 1000 ms takes approx 1000 ms', function(done) {
		var start = new Date();

		setTimeout(function(){
			var timeElapsed = new Date() - start;
			expect(timeElapsed).to.be.closeTo(1000, 5);
			done();
		}, 1000);

	});
})

describe('Testing Spy On', function() {

	it('confirms that forEach is run once for every element in the array', function() {
		var arr = [1, 2, 3];

		function plusOne(num) {
				num += 1;
		}

		plusOne = chai.spy.on(plusOne);

		arr.forEach(plusOne);

		expect(plusOne).to.have.been.called.exactly(3);
	})
})


