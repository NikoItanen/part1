const Course = ({ courses }) => {
    return (
        <div>
            {courses.map(course => (
                <div key={course.id}>
                    <Header name={course.name}/>
                    <Content parts={course.parts}/>
                </div>
            ))}
        </div>
    )
}

const Header = ({ name }) => {
    return (
        <h2>{name}</h2>
    )
}

const Content  = ({parts})  => {
    const total = parts.reduce((total, part) => total + part.exercises, 0)

    return (
    <div>
       {parts.map(part => <Part key={part.id} part={part} />)} 
       <p><strong>Total of exercises: {total}</strong></p>
    </div>
    )
}

const Part = ({part}) => {
    return (
        <p>
            {part.name}: {part.exercises}
        </p>
    )
}


export default Course