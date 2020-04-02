import React from 'react';
import TestUtils from 'react-dom/test-utils';
import PollHeader from '../src/components/PollHeader.js';

describe('PollHeader', function () {
  it('renders without problems', () => {
    const test = TestUtils.renderIntoDocument(<PollHeader />);
    expect(test).toEqual(jasmine.anything());
  });
});