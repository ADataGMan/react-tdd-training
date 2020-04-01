import React from 'react';
import PropTypes from 'prop-types';

class SayHello extends React.Component {
  render() {
    return (<h1>Hello, {this.props.name}</h1>);
  }
}

SayHello.propTypes = {
  name: PropTypes.string
};

export default SayHello;