import React from 'react';
import PropTypes from 'prop-types';

class PollHeader extends React.Component {
  render() {
    return (
      <h1>{this.props.text}</h1>
    );
  }
}

PollHeader.propTypes = {
  text: PropTypes.string
};

PollHeader.defaultProps = {
  text: "Welcome to the Poll!"
};

export default PollHeader;