import {useState} from 'react'

import Header from './components/Header'
import AddEmployeeModal from './components/AddEmployeeModal'
import EditModalEmployee from './components/EditModalEmployee'
import EmployeeList from './components/EmployeeList'

export default function App() {
	const [employees, setEmployees] = useState([
		{
			id: 1,
			name: 'David Hary',
			email: 'davidhary@gmail.com',
			address: 'Lorem ipsum dolor sit amet.',
			phone: '(123) 456 7777',
			gender: 'Male',
			department: 'Development'
		}
	])

	function toggleModal() {
		setAddModal(!addModal)
	}

	const [addModal, setAddModal] = useState(false)

	function addEmployee(newEmployee) {
			setEmployees(prevEmployee => [
				...prevEmployee,
				{
					...newEmployee,
					id: Math.max(...prevEmployee.map(emp => emp.id), 0) + 1

				}

			]
		)
	}

	const [editModal, setEditModal] = useState(false)
	function toggleEditModal() {
		setEditModal(!editModal)
		setSelectedEmployee(null)
	}
	const [selectedEmployee, setSelectedEmployee] = useState(null)
	function editClick(employee) {
		setEditModal(!editModal)
		setSelectedEmployee(employee)
	}
	function editEmployee(updatedEmployee) {
		setEmployees(prevEmployee => 
			prevEmployee.map(emp=> 
				emp.id === updatedEmployee.id ? updatedEmployee : emp
			)
		)
	}

	return (
		<div>
			{/* <div className="container"> */}
			<div className="table-wrapper">
				<Header onOpenModal={toggleModal}/>
				{/* <Header title={title} func={changeHeader} /> */}
				<EmployeeList employees={employees} onEditClick={editClick} />
				<AddEmployeeModal isOpen={addModal} triggerModal={toggleModal} onAddEmployee={addEmployee}/>
				<EditModalEmployee isOpen={editModal} triggerModal={toggleEditModal} selectedEmployee={selectedEmployee} onEditEmployee={editEmployee} />
			</div>
		</div>
	)
}