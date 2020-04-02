import React from 'react';
import TestUtils from 'react-dom/test-utils';
import PollSubmitButton from '../src/components/PollSubmitButton.js';

describe('PollSubmitButton', function () {
  it('renders without problems', () => {
    const test = TestUtils.renderIntoDocument(<PollSubmitButton />);
    expect(test).toEqual(jasmine.anything());
  });
});