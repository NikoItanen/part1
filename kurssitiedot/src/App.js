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
      <Part part={props.parts[0].name} amount={props.parts[0].amount} />
      <Part part={props.parts[1].name} amount={props.parts[1].amount} />
      <Part part={props.parts[2].name} amount={props.parts[2].amount} />
    </div>
  )
}

const Part = (props) => {
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
  const parts = [
    {name: 'Fundamentals of React', amount: 10},
    {name: 'Using props to pass data', amount: 7 },
    {name: 'State of a component', amount: 14 },
  ];

  return (
    <div>
      <Header name={course} />
      <Content parts={parts} />
      <Total amount={parts[0].amount + parts[1].amount + parts[2].amount} />
    </div>
  )
}

export default App