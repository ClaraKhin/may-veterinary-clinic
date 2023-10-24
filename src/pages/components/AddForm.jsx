import styles from "../../styles/AddForm.module.css";
export default function AddFormData(props) {
  return (

      
      <form className={styles.addForm}>
        <div className={styles.formData}>
          <div className={styles.firstSection}>
            <input
              type="text"
              name="petName"
              onChange={props.handleInputChange}
              placeholder="Enter your Pet Name"
              className={styles.inputData}
            />
            <input
              type="text"
              name="pawrent"
              onChange={props.handleInputChange}
              placeholder="Enter the Pet's pawrent"
              className={styles.inputData}
            />
            <input
              type="radio"
              name="gender"
              value="female"
              onSelect={props.genderSelected === "female"}
              onChange={props.handleGenderOptions}
            />
            <label className={styles.female}>Female</label>
            <input
              type="radio"
              name="gender"
              value="male"
              onSelect={props.genderSelected === "male"}
              onChange={props.handleGenderOptions}
            />
            <label className={styles.male}>Male</label>
            <input
              type="text"
              name="contact"
              onChange={props.handleInputChange}
              placeholder="Enter your phone number"
              className={styles.inputData}
            />
            <input
              type="text"
              name="address"
              onChange={props.handleInputChange}
              placeholder="Enter you Address"
              className={styles.address}
            />
          </div>
          <div className={styles.secondSection}>
            <input
              type="text"
              name="status"
              onChange={props.handleInputChange}
              placeholder="Enter your pet status"
              className={styles.inputData}
            />
            <input
              type="text"
              name="breed"
              onChange={props.handleInputChange}
              placeholder="Enter your pet's breed"
              className={styles.inputData}
            />
            <input type="date" name="date" className={styles.date} />
          </div>
        </div>

        <div className={styles.btns}>
          <button
            type="submit"
            onClick={props.handleAddFormSubmit}
            className={styles.saveBtn}
          >
            Save
          </button>
          <button
            onClick={props.handleCancelAddForm}
            className={styles.cancelBtn}
          >
            Cancel
          </button>
        </div>
      </form>
  
  );
}
