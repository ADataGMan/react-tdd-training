import React from 'react';
import PollHeader from '../components/PollHeader';
import PollQuestion from '../components/PollQuestion';
import RadioButtonGroup from '../components/RadioButtonGroup';
import PollSubmitButton from '../components/PollSubmitButton';

class PollContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      header: "Welcome to the poll!",
      question: "Which food is the best?",
      checkedValue: '',
      correctAnswer: "Salsa & Chips"
    };
    this.setCheckedValue = this.setCheckedValue.bind(this);
  }

  setCheckedValue(value) {
    this.setState({
      checkedValue: value
    });
  }

  render() {
    var rowStyle = {
      backgroundColor: '#dadada',
      border: '1px solid black',
      borderRadius: '6px',
      padding: '10px'
    };

    const choices = [
      { value: "Pizza", label: "Pizza" },
      { value: "Cheeseburger", label: "Cheeseburger" },
      { value: "Salsa & Chips", label: "Salsa & Chips" },
      { value: "Chicken Manicotti", label: "Chicken Manicotti" }
    ];

    return (
      <div className="container">
        <div className="jumbotron">
          <PollHeader text={this.state.header} />
        </div>
        <div className="row" style={rowStyle}>
          <div className="col-sm-4 col-sm-offset-4">
            <form>
              <PollQuestion text={this.state.question} />
              <RadioButtonGroup
                name='answer'
                checkedValue={this.state.checkedValue}
                choices={choices}
                onChange={this.setCheckedValue}
              />
              <PollSubmitButton />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PollContainer;