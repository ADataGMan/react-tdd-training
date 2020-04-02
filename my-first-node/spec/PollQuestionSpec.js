import React from 'react';
import TestUtils from 'react-dom/test-utils';
import PollQuestion from '../src/components/PollQuestion.js';

describe('PollQuestion', function () {
  it('renders without problems', () => {
    const test = TestUtils.renderIntoDocument(<PollQuestion />);
    expect(test).toEqual(jasmine.anything());
  });
});