(function(factory) {

  // NOTE:
  // All techniques except for the "browser globals" fallback will extend the
  // provided QUnit object but return the isolated API methods

  // For AMD: Register as an anonymous AMD module with a named dependency on "qunit".
  if (typeof define === "function" && define.amd) {
    define(["qunit"], factory);
  }
  // For Node.js
  else if (typeof module !== "undefined" && module && module.exports && typeof require === "function") {
    module.exports = factory(require("qunitjs"));
  }
  // For CommonJS with `exports`, but without `module.exports`, like Rhino
  else if (typeof exports !== "undefined" && exports && typeof require === "function") {
    var qunit = require("qunitjs");
    qunit.extend(exports, factory(qunit));
  }
  // For browser globals
  else {
    factory(QUnit);
  }

}(function(QUnit) {

	var api = {

		/**
		 * Check the sequence/order
		 *
		 * @example test('Example unit test', function(assert) { assert.step(1); setTimeout(function () { assert.step(3); start(); }, 100); assert.step(2); stop(); });
		 * @param Number expected The excepted step within the test()
		 * @param String message (optional)
		 */
		step: function(expected, message) {
			if (typeof message === "undefined") {
				message = "step " + expected;
			}

			// If this is the first time that `assert.step` has been called for the
			// current test, set its initial `step` counter to `0`
			if (typeof QUnit.config.current.step === "undefined") {
				QUnit.config.current.step = 0;
			}

			// increment internal step counter
			QUnit.config.current.step++;

			var actual = QUnit.config.current.step;
			QUnit.push(QUnit.equiv(actual, expected), actual, expected, message);
		}

	};


  QUnit.extend(QUnit.assert, api);

  return api;
}));
