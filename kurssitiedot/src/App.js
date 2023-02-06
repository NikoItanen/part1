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
      <Part part={props.parts[0].name} amount={props.parts[0].exercises} />
      <Part part={props.parts[1].name} amount={props.parts[1].exercises} />
      <Part part={props.parts[2].name} amount={props.parts[2].exercises} />
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
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total amount={course.parts[0].exercises+course.parts[1].exercises+course.parts[2].exercises} />
    </div>
  )
}

export default App