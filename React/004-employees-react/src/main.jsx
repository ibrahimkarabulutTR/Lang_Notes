import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

function App() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: 'David Hary',
      email: 'davidhary@gmail.com',
      address: 'Lorem ipsum dolor sit amet.',
      phone: '(123) 456 7777'
    }
  ])
  return (
    <div className="container">
      <div className="table-wrapper">
        <Header />
        {
          employees.map((item, index) => (
            <EmployeeList key={index} prop={item} />
          ))
        }
      </div>
    </div>
  )
}

function Header() {
  return(
    <div className="table-title">
      <div className="row">
        <div className="col-sm-6">
          <h2>Manage <b>Employees</b></h2>
        </div>
        <div className="col-sm-6">
          <a href="#addEmployeeModal" className="btn btn-success">
            <i className="material-icons">&#xE147;</i>
            <span>Add New Employee</span>
          </a>
          <a href="#deleteEmployeeModal" className="btn btn-danger">
            <i className="material-icons">&#xE15C;</i>
            <span>Delete</span>
          </a>
        </div>
      </div>
    </div>
  )
}

function EmployeeList({prop}) {
  console.log('emp', prop)
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>
            <span className="custom-checkbox">
              <input type="checkbox" id="selectAll" />
              <label htmlFor="selectAll"></label>
            </span>
          </th>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <EmployeeItem props={prop} />
      </tbody>
    </table>
  )
}

function EmployeeItem({props}) {
  return (
    <tr>
      <td>
        <span className="custom-checkbox">
          <input type="checkbox" id="checkbox1" name="options[]" value="1" />
          <label htmlFor="checkbox1"></label>
        </span>
      </td>
      <td>{props.name}</td>
      <td>{props.email}</td>
      <td>{props.address}</td>
      <td>{props.phone}</td>
      <td>
        <a className="edit"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
        <a className="delete" ><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
      </td>
    </tr>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
