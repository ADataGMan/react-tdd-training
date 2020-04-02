import React from 'react';
import PollHeader from '../components/PollHeader';
import PollQuestion from '../components/PollQuestion';
import PollAnswer from '../components/PollAnswer';
import PollSubmitButton from '../components/PollSubmitButton';

class PollContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      header: "Welcome to the poll!",
      question: "Which food is the best?",
      answer1: "Pizza",
      answer2: "Cheeseburger",
      answer3: "Salsa & Chips",
      correctAnswer: "Salsa & Chips"
    };
  }
  render() {
    return (
      <div className="container">
        <div className="col-sm-4 col-sm-offset-4">
          <PollHeader text={this.state.header} />
          <form>
            <PollQuestion text={this.state.question} />
            <PollAnswer text={this.state.answer1} />
            <PollAnswer text={this.state.answer2} />
            <PollAnswer text={this.state.answer3} />
            <PollSubmitButton />
          </form>
        </div>
      </div>
    );
  }
}

export default PollContainer;