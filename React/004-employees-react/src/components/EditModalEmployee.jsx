import { useEffect, useState } from "react";

export default function EditEmployeeModal({isOpen, triggerModal, selectedEmployee, onEditEmployee}) {
	
	console.log("employee: "+selectedEmployee)
	
	
	const [formData, setFormData] = useState({
      name: '',
      email: '',
      address: '',
      phone: '',
      gender: '',
      department: ''
    })
	
	console.log("formData: "+formData)
	
	useEffect(() => {
		if(selectedEmployee) {
			setFormData(selectedEmployee)
		}
	}, [selectedEmployee])
	
	
	function handleChange(e) {
    const {name, value} = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
	
  function clearModal() {
    triggerModal()
    setFormData({
      name: '',
      email: '',
      address: '',
      phone: '',
      gender: '',
      department: ''
    })
  }
  
  function handleSubmit(e) {
    e.preventDefault()
    onEditEmployee(formData)
    triggerModal()
    setFormData({
      name: '',
      email: '',
      address: '',
      phone: '',
      gender: '',
      department: ''
    })
  }
	
	if(!isOpen){ return null;}
	return(
		<>
			<div id="addEmployeeModal" className="modal fade show">
				<div className="modal-dialog">
					<div className="modal-content">
						<form onSubmit={handleSubmit}>
							<div className="modal-header">
								<h4 className="modal-title">Edit Employee</h4>
								<button onClick={clearModal}  type="button" className="close" data-dismiss="modal" >&times;</button>
							</div>
							<div className="modal-body">
								<div className="form-group">
									<label htmlFor='name'>Name</label>
									<input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
								</div>
								<div className="form-group">
									<label htmlFor='email'>Email</label>
									<input type="text" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
								</div>
								<div className="form-group">
									<label htmlFor='address'>Address</label>
									<input type="text" className="form-control" name="address" value={formData.address} onChange={handleChange} required />
								</div>
								<div className="form-group">
									<label htmlFor='phone'>Phone</label>
									<input type="text" className="form-control" name="phone" value={formData.phone} onChange={handleChange} required />
								</div>
								<div className="form-group">
									<label htmlFor="">Gender</label>
									<div>
										<label>
											<input type="radio" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleChange} />
											Male
										</label>
										<label>
											<input type="radio" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleChange} />
											Female
										</label>
									</div>
								</div>
								<div className="form-group">
									<label>Department</label>
									<div>
										<select name="department" value={formData.department} onChange={handleChange}>
											<option value="" disabled>Select Department</option>
											<option value="Finance">Finance</option>
											<option value="HR">HR</option>
											<option value="Development">Development</option>
										</select>
									</div>
								</div>
							</div>
							<div className="modal-footer">
								<button onClick={clearModal} type="button" className="btn btn-default">Cancel</button>
								<button type="submit" className="btn btn-success">Save Changes</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div className="modal-backdrop fade show">

			</div>
		</>
	)
}