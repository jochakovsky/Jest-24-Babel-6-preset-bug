const Foo = require('../src/foo');

test('bar returns "baz"', () => {
  const foo = new Foo();
  expect(foo.bar()).toBe('baz');
});
