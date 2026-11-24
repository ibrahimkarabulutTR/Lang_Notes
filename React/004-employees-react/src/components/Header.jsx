export default function Header({onOpenModal}) {
	return(
		<div className="table-title">
			<div className="row">
				<div className="col-sm-6">
					<h2>Manage <b>Employees</b></h2>
					{/* <h2>{title.split(' ')[0]} <b>{title.split(' ')[1]}</b></h2> */}
					{/* {title} */}
				</div>
				<div className="col-sm-6">
					{/* <button onClick={func} className="btn btn-success">
						<i className="material-icons">&#xE147;</i>
						<span>Change Head</span>
					</button> */}
					<button onClick={onOpenModal} className="btn btn-success">
						<i className="material-icons">&#xE147;</i>
						<span>Add New Employee</span>
					</button>
					<a href="#deleteEmployeeModal" className="btn btn-danger">
						<i className="material-icons">&#xE15C;</i>
						<span>Delete</span>
					</a>
				</div>
			</div>
		</div>
	)
}