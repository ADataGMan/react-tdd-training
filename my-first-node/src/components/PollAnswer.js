import React from 'react';
import PropTypes from 'prop-types';

class PollAnswer extends React.Component {
  render() {
    return (
      <div>
        <label><input type="radio" /> <span>{this.props.text}</span></label>
      </div>
    );
  }
}

PollAnswer.propTypes = {
  text: PropTypes.string
};

PollAnswer.defaultProps = {
  text: "Answer"
};

export default PollAnswer;