import styles from "../../styles/AddForm.module.css";
export default function AddFormData(props) {
  return (
    <form className={styles.addForm}>
      <div className={styles.headings}>
        <h3 className={styles.formHeading}>Add New Patient</h3>
        <h4 className={styles.formSubHeading}>
          Enter new patient information below
        </h4>
      </div>
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
          <div className={styles.gender}>
            <div className={styles.female}>
              <input
                type="radio"
                name="gender"
                value="female"
                id="female"
                onSelect={props.genderSelected === "female"}
                onChange={props.handleGenderOptions}
              />
              <label className={styles.female}>Female</label>
            </div>
            <div className={styles.male}>
              <input
                type="radio"
                name="gender"
                value="male"
                id="male"
                onSelect={props.genderSelected === "male"}
                onChange={props.handleGenderOptions}
              />
              <label className={styles.male}>Male</label>
            </div>
          </div>

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
          <input
            type="date"
            name="birthDate"
            onChange={props.handleInputChange}
            className={styles.date}
          />
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
