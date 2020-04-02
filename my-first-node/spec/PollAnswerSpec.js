import React from 'react';
import TestUtils from 'react-dom/test-utils';
import PollAnswer from '../src/components/PollAnswer.js';

describe('PollAnswer', function () {
  it('renders without problems', () => {
    const test = TestUtils.renderIntoDocument(<PollAnswer />);
    expect(test).toEqual(jasmine.anything());
  });
});