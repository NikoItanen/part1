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


const Stats = (props) => {
  return (
    <div>
          <p>{props.type}: {props.value}</p>
    </div>
  )
}


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

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
      <Stats type='Good' value={good} />
      <Stats type='Neutral' value={neutral} />
      <Stats type='Bad' value={bad} />
    </div>
  )
}

export default App