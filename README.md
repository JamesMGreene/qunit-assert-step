[![Build Status](https://travis-ci.org/JamesMGreene/qunit-assert-step.png)](https://travis-ci.org/JamesMGreene/qunit-assert-step) [![NPM version](https://badge.fury.io/js/qunit-assert-step.png)](https://www.npmjs.com/package/qunit-assert-step)

# QUnit Step assertion plugin

This plugin for [QUnit](https://github.com/jquery/qunit) adds a `step` assertion method to test
the proper sequence in which the code should execute.

## Usage

```js
assert.step(expected, message);
```

Where:
 - `expected`: The expected step number (assertion sequence index)
 - `message`: Optional message, same as for other assertions


## Examples

```js
test("example test", function(assert) {
  function x() {
    assert.step(2, "function y should be called first");
  }
  function y() {
    assert.step(1);
  }
  y();
  x();
});
```

For more examples, refer to the unit tests.


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](http://gruntjs.com/).
