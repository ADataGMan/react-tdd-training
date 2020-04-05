import React from 'react';
import TestUtils from 'react-dom/test-utils';
import CurrentChoice from '../src/components/CurrentChoice.js';
import TestWrapper from '../src/components/TestWrapper.js';


describe('Current Choice', function () {
  var component;
  beforeEach(function () {
    component = TestUtils.renderIntoDocument(
      <TestWrapper>
        <CurrentChoice checked="Answer 1" />
      </TestWrapper>
    );
  });

  it('renders without problems', function () {
    expect(component).toEqual(jasmine.anything());
  });

  it('prints a message', function () {
    var actual = TestUtils
      .findRenderedDOMComponentWithClass(component, 'currentSelection')
      .textContent;
    var expected = 'Current selection: Answer 1';
    expect(actual).toEqual(expected);
  });
});