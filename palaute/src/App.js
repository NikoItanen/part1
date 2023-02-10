import { useState } from 'react'



const Header = (props) => {
  return (
  <div>
    <h1>{props.text}</h1>
  </div>
  )
}

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

const Statistics = props => {
    return (
      <div>
        <p>Good: {props.good}</p>
        <p>Neutral: {props.neutral}</p>
        <p>Bad: {props.bad}</p>
        <p>All: {props.good + props.neutral + props.bad}</p>
        <p>Average: {(props.good - props.bad)/(props.good + props.neutral + props.bad)}</p>
        <p>Positive: {props.good/(props.good + props.neutral + props.bad)*100} %</p>
      </div>
    )
  }



const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const goodPoints = 1
  const neutralPoints = 0
  const badPoints = -1

  const handleGoodClick = () => {
    console.log('good')
    setGood(good + 1)

  }
  const handleNeutralClick = () => {
    console.log('neutral')
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    console.log('bad')
    setBad(bad + 1)
  }

  



  return (
    <div>
      <Header text={'Give Feedback'} />
      <Button handleClick={handleGoodClick} text='Good'/>
      <Button handleClick={handleNeutralClick} text='Neutral'/>
      <Button handleClick={handleBadClick} text='Bad'/>
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App