import { useState } from 'react'



const Header = (props) => {
  return (
  <div>
    <h1>{props.text}</h1>
  </div>
  )
}


// Vastaa yksittäisten palautteenantopainikkeen muodostamisesta.
const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

const Statistics = props => {

  if (props.good + props.neutral + props.bad == 0) {
    return (
        <p>No Feedback Given</p>
    )
  }
  return (
    <div>
      <StatisticLine text='Good' value={props.good} />
      <StatisticLine text='Neutral' value={props.neutral} />
      <StatisticLine text='Bad' value={props.bad} />
      <StatisticLine text='All' value={props.good + props.neutral + props.bad} />
      <StatisticLine text='Average' value={(props.good - props.bad)/(props.good + props.neutral + props.bad)} />
      <StatisticLine text='Positive' value={props.good/(props.good + props.neutral + props.bad)*100} />
    </div>
  )
}

const StatisticLine = (props) => {
  return (
    <p>{props.text}: {props.value}</p>
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