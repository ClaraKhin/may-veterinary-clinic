import React, { use, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import styles from "../../styles/DataTable.module.css";

export const DataTable = () => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [rows, setRows] = useState([
    {
      id: 1,
      petName: "Milo",
      status: "allergy",
      pawrent: "Thae Nu San",
      breed: "Beagle",
      gender: "Male",
      birthDate: "1.5.2021",
      contact: "09797122499",
      address: "တိုက်(၅)၊ အခန်း(၀၀၅)၊ လှိုင်သီရိအိမ်ရာ, Hlaing, Yangon",
    },
    {
      id: 2,
      petName: "MJ",
      status: "allergy",
      pawrent: "Nay Chi Lin",
      breed: "Spaniel",
      gender: "Female",
      birthDate: "18.6.2021",
      contact: "09784517545",
      address: "ခြံအမှတ်(၅)၊ စံပယ်ခြံ(၂)လမ်း၊ Hlaing, Yangon",
    },
    {
      id: 3,
      petName: "Lu Lu",
      status: "picky eater",
      pawrent: "Pink Pink",
      breed: "Golden Retriever",
      gender: "Female",
      birthDate: "2.5.2021",
      contact: "09794781245",
      address: "တိုက်(1A)၊ အခန်း(၀၀၅)၊ Gems Condo, Hlaing, Yangon",
    },
    {
      id: 4,
      petName: "Sky",
      status: "picky eater",
      pawrent: "Kyaw Myo Oo",
      breed: "Golden Retriever",
      gender: "Male",
      birthDate: "1.5.2021",
      contact: "09979458712",
      address: "တိုက်(၅)၊ အခန်း(၂၁)၊ စမ်းချောင်းရိပ်မွန်, Sanchaung, Yangon",
    },
    {
      id: 5,
      petName: "Amy",
      status: "picky eater",
      pawrent: "Fredy",
      breed: "Golden Retriever",
      gender: "Female",
      birthDate: "1.5.2021",
      contact: "09254200154",
      address: "ခြံအမှတ်(၃၅)၊ မြယာကုန်း(၃)လမ်း၊ Mayangone, Yangon",
    },
    {
      id: 6,
      petName: "Zori",
      status: "picky eater",
      pawrent: "Jack",
      breed: "Shintzu",
      gender: "Female",
      birthDate: "1.8.2021",
      contact: "09784587125",
      address: "တိုက်(1A)၊ အခန်း(၀၀၅)၊ မြကန်သာအိမ်ရာ၊ Kamayut, Yangon",
    },
  ]);
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "petName", headerName: "Pet Name", width: 150 },
    {
      field: "status",
      headerName: "Status",
      width: 90,
    },
    {
      field: "pawrent",
      headerName: "Pawrent",
      width: 150,
    },
    {
      field: "breed",
      headerName: "Breed",
      width: 160,
    },
    {
      field: "gender",
      headerName: "Gender",
      width: 80,
    },
    {
      field: "birthDate",
      headerName: "Date Of Birth",
      width: 100,
    },
    {
      field: "contact",
      headerName: "Contact Phone No",
      width: 160,
    },

    {
      field: "address",
      headerName: "Address",
      width: 420,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 100,
      renderCell: (params) => (
        <>
          <button onClick={() => handleEdit(params.row)}>Edit</button>
          <button onClick={() => handleDelete(params.row.id)}>Delete</button>
        </>
      ),
    },
  ];

  const handleDelete = (id) => {
    const updatedRows = rows.filter((row) => row.id !== id);
    setRows(updatedRows);
  };
  const handleEdit = (row) => {
    setSelectedRow(row);
    setShowEditForm(true);
  };
  const handleEditInputChange = (field, value) => {
    setSelectedRow((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    setShowEditForm(false);
  };

  return (
    <div className="patientInfosDisplay">
      <h1 className={styles.tableHeading}>Patient List</h1>
      <div className={styles.patientDataIntegrate}>
        <form>
          <input type="search" name="search" className={styles.searchInput} />
          <button type="submit">Search</button>
        </form>
        <button className={styles.addPatient}>+ Add new patient</button>
      </div>
      {showEditForm && (
        <div className={styles.editForm}>
          <h2>Edit Patient</h2>
          <form onSubmit={handleEditFormSubmit}>
            {columns.map((col) => (
              <div key={col.field}>
                <label htmlFor={col.field}>{col.headerName}</label>
                {col.field === "id" ? (
                  <input
                    type="text"
                    id={col.field}
                    name={col.field}
                    value={selectedRow[col.field]}
                    readOnly // Set the input as read-only
                  />
                ) : (
                  <input
                    type="text"
                    id={col.field}
                    name={col.field}
                    value={selectedRow[col.field]}
                    onChange={(e) =>
                      handleEditInputChange(col.field, e.target.value)
                    }
                  />
                )}
              </div>
            ))}
            <button type="submit">Save Changes</button>
          </form>
        </div>
      )}
      <div className="dataDisplay mt-5" style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </div>
  );
};
