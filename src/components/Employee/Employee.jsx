import './Employee.css'

function Employee({employee}) {
  return (
    <li>
        <h3>{employee.name}</h3>
        <h4>{employee.position}</h4>
        <p>{employee.description}</p>
    </li>
  )
}

export default Employee