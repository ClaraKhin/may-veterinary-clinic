import styles from "../../styles/EditModal.module.css";

export default function EditModal(props) {
  return (
    <div className={styles.container}>
      <h2>Edit Patient</h2>
      <form onSubmit={props.handleEditFormSubmit}>
        {props.filterColumn.map((col) => (
          <div key={col.field}>
            <label htmlFor={col.field}>{col.headerName} </label>
            {col.field === "id" ? (
              <input
                type="text"
                id={col.field}
                name={col.field}
                value={props.selectedRow[col.field]}
                readOnly // Set the input as read-only
              />
            ) : (
              <input
                type="text"
                id={col.field}
                name={col.field}
                value={props.selectedRow[col.field]}
                onChange={(e) =>
                  props.handleEditInputChange(col.field, e.target.value)
                }
              />
            )}
          </div>
        ))}
        <div>
          <button type="submit" onClick={props.handleEditFormSubmit}>
            Save Changes
          </button>
          <button onClick={props.handleEditCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
