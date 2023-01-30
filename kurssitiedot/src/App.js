const Header = (props) => {
  return (
  <div>
    <h1>
    {props.name}
    </h1>
  </div>
  )

}

const Content = (props) => {
  return (
    <div>
      <p>
        {props.part} has {props.amount} exercises.
      </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises: {props.amount}
      </p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name={course} />
      <Content part={part1} amount={exercises1} />
      <Content part={part2} amount={exercises2} />
      <Content part={part3} amount={exercises3} />
      <Total amount={exercises1 + exercises2 +exercises3} />
    </div> 
  )
}

export default App