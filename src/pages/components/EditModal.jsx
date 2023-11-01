import styles from "../../styles/EditModal.module.css";

const EditModal = (props) => {
  return (
    <div>
      <form onSubmit={props.handleEditFormSubmit} className={styles.editForm}>
        <div className="text-center m-3">
          <h3 className={styles.editTitle}>Update patient</h3>
          <h4 className={styles.editSubTitle}>
            Enter update patient information below
          </h4>
        </div>
        <div className={styles.formInputSec}>
          {props.filterColumn &&
            props.filterColumn.map((col) => (
              <div key={col.field} className={styles.editSection}>
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
        </div>

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
