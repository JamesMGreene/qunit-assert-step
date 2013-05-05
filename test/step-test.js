QUnit.module("qunit-assert-step plugin unit tests");

QUnit.test("step", function(assert) {
  QUnit.expect(3);

  assert.step(1, "step starts at 1");
  setTimeout(function() {
    QUnit.start();
    assert.step(3);
  }, 100);
  assert.step(2, "before the setTimeout callback is run");
  QUnit.stop();
});

QUnit.test("step counter resets", function(assert) {
  QUnit.expect(1);

  assert.step(1, "each test has its own step counter");
});
