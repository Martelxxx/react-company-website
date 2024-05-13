import './Staff.css'
import Employee from '../Employee/Employee'

function Staff({employees}) {
  return (
    <>
      <h1>Staff</h1>
      {employees.map((employee, i)=>(
        <Employee key={i} employee={employee} />
      ))}
    </>
  )
}

export default Staff