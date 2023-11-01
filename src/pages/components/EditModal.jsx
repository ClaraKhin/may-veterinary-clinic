import React from "react";
import styles from "../../styles/EditModal.module.css";

const EditModal = (props) => {
  return (
    <div>
      <form onSubmit={props.handleEditFormSubmit} className={styles.editForm}>
        {props.filterColumn &&
          props.filterColumn.map((col) => (
            <div key={col.field}>
              <label htmlFor={col.field} className={styles.label}>
                {col.headerName}:{" "}
              </label>
              {col.field === "id" ? (
                <input
                  type="text"
                  id={col.field}
                  name={col.field}
                  className={styles.inputField}
                  value={props.selectedRow[col.field]}
                  readOnly
                />
              ) : (
                <input
                  type="text"
                  id={col.field}
                  name={col.field}
                  className={styles.inputField}
                  value={props.selectedRow[col.field]}
                  onChange={(e) =>
                    props.handleEditInputChange(col.field, e.target.value)
                  }
                />
              )}
            </div>
          ))}
        <div className={styles.editBtns}>
          <button
            type="submit"
            onClick={props.handleEditFormSubmit}
            className={styles.updateBtn}
          >
            Edit
          </button>
          <button
            onClick={props.handleEditCancel}
            className={styles.updateCancelBtn}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
export default EditModal;
