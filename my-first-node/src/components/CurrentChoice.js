import React from 'react';
import PropTypes from 'prop-types';

class CurrentChoice extends React.Component {
  render() {
    return (
      <div className="currentSelection">Current selection: {this.props.checked}</div>
    );
  }
}

CurrentChoice.propTypes = {
  checked: PropTypes.string
};

export default CurrentChoice;