const Header = (props) => {
  console.log(props)
  return <h1>{props.name}</h1>
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.name} amount={props.amount} />
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.name} has {props.amount} exercises.
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
  const part1 = {
    name: 'Fundamentals of React',
    amount: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    amount: 7
  }
  const part3 = {
    name: 'State of a component',
    amount: 14
  }

  return (
    <div>
      <Header name={course} />
      <Content name={part1.name} amount={part1.amount} />
      <Content name={part2.name} amount={part2.amount} />
      <Content name={part3.name} amount={part3.amount} />
      <Total amount={part1.amount + part2.amount + part3.amount} />
    </div>
  )
}

export default App