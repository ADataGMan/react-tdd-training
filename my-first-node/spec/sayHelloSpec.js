var sayHello = require('../src/sayHello.js');

describe('Greet', function () {
  it('Concats Hello and a name', function () {
    var actual = sayHello.greet('World');
    var expected = 'Hello, World';
    expect(actual).toEqual(expected);
  });
  it('Concats Hello and no name', function () {
    var actual = sayHello.greet();
    var expected = 'Hello, Friend';
    expect(actual).toEqual(expected);
  });
});