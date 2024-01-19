// import { Component } from 'react';
// import css from './App.module.css';
import { FeedBackContainer } from './FeedBackContainer/FeedBackContainer';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section ';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const positivePercentageFeedback = () => {
    return Math.round((good / countTotalFeedback()) * 100) || 0;
  };

  const addFeedback = option => {
    if (option === good) setGood(prev => prev + 1);
    if (option === neutral) setNeutral(prev => prev + 1);
    if (option === bad) setBad(prev => prev + 1);
  };

  return (
    <>
      <FeedBackContainer>
        <Section title=" Please leave feedback">
          <FeedbackOptions
            options={Object.keys({ good, neutral, bad })}
            onLeaveFeedback={addFeedback}
          ></FeedbackOptions>
        </Section>
        <Section title=" Statistics">
          {countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={positivePercentageFeedback()}
            ></Statistics>
          ) : (
            <Notification message=" ☹️ There is no feedback"></Notification>
          )}
        </Section>
      </FeedBackContainer>
    </>
  );
};

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   countTotalFeedback = () => {
//     return Object.values(this.state).reduce(
//       (acc, currentValue) => acc + currentValue,
//       0
//     );
//   };

//   positivePercentageFeedback = () => {
//     const { good } = this.state;
//     return Math.round((good / this.countTotalFeedback()) * 100) || 0;
//   };

//   Addfeedback = stateValue => {
//     this.setState(prevstate => ({
//       [stateValue]: prevstate[stateValue] + 1,
//     }));
//   };
//   render() {
//     const { good, neutral, bad } = this.state;

//     return (
//       <>
//         <FeedBackContainer>
//           <Section title=" Please leave feedback">
//             <FeedbackOptions
//               options={Object.keys(this.state)}
//               onLeaveFeedback={this.Addfeedback}
//             ></FeedbackOptions>
//           </Section>
//           <Section title=" Statistics">
//             {this.countTotalFeedback() ? (
//               <Statistics
//                 good={good}
//                 neutral={neutral}
//                 bad={bad}
//                 total={this.countTotalFeedback()}
//                 positivePercentage={this.positivePercentageFeedback()}
//               ></Statistics>
//             ) : (
//               <Notification message=" ☹️ There is no feedback"></Notification>
//             )}
//           </Section>
//         </FeedBackContainer>
//       </>
//     );
//   }
// }
