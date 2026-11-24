export default function EmployeeItem({props, onEditClick}) {
  function handleEditClick() {
    onEditClick(props)
  }

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
      <td>{props.gender}</td>
      <td>{props.department}</td>
      <td>
        <button onClick={handleEditClick} className="edit"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></button>
        <button className="delete" ><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></button>
      </td>
    </tr>
  )
}