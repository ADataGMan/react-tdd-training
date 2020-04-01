import React from 'react';
import TestUtils from 'react-dom/test-utils';
import SayHello from '../src/scripts/SayHello.js';

describe('Greet', function () {
  it('renders without problems', () => {
    const sayhello = TestUtils.renderIntoDocument(<SayHello name="World" />);
    expect(sayhello).toEqual(jasmine.anything());
  });
});