import React from 'react';

function CurrentChoice(props) {
  return (
    <div className="currentSelection">Current selection: {this.props.checked}</div>
  );
}

export default CurrentChoice;