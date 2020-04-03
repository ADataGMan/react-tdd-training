import React from 'react';
import RadioButton from './RadioButton';
import CurrentChoice from './CurrentChoice';
import PropTypes from 'prop-types';

class RadioButtonGroup extends React.Component {
  render() {
    const choiceItems = this.props.choices.map(choice => {
      const { value, label } = choice;
      const checked = value === this.props.checkedValue;

      return (
        <RadioButton
          key={`radio-button-${value}`}
          label={label}
          name={this.props.name}
          value={value}
          checked={checked}
          onChange={this.props.onChange}
        />
      );
    });
    return (
      <div>
        {choiceItems}
        <CurrentChoice checked={this.props.checkedValue} />
      </div>
    );
  }
}

RadioButtonGroup.propTypes = {
  choices: PropTypes.array,
  checkedValue: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func


};

export default RadioButtonGroup;