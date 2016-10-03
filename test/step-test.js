(function( module, test ) {

  module("qunit-assert-step plugin unit tests");

  test("step", function(assert) {
    var done;

    assert.expect(3);

    assert.step(1, "step starts at 1");
    setTimeout(function() {
      assert.step(3, "inside of the setTimeout callback");
      done();
    }, 13);
    assert.step(2, "before the setTimeout callback is run");

    done = assert.async();
  });

  test("step counter resets", function(assert) {
    assert.expect(1);

    assert.step(1, "each test has its own step counter");
  });

})( QUnit.module, QUnit.test );
