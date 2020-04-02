import React from 'react';
import PropTypes from 'prop-types';

class PollQuestion extends React.Component {
  render() {
    return (<h2>{this.props.text}</h2>);
  }
}

PollQuestion.propTypes = {
  text: PropTypes.string
};

PollQuestion.defaultProps = {
  text: "What is the question?"
};


export default PollQuestion;