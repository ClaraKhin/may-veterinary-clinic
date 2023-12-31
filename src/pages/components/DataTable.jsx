import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import styles from "../../styles/DataTable.module.css";
import EditModal from "./EditModal";
import AddFormData from "./AddForm";
import Image from "next/image";

import EditBtnIcon from "../../../public/resources/edit.png";
import DeleteBtnIcon from "../../../public/resources/delete.png";

const initialData = [
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
];

const DataTable = () => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const [genderSelected, setGenderSelected] = useState();
  const [query, setQuery] = useState("");
  const [sortOption, setSortOption] = useState("statusAll");
  const [breedSortOption, setBreedSortOption] = useState("breedAll");
  const [addFormData, setAddFormData] = useState([
    {
      petName: "",
      pawrent: "",
      gender: undefined,
      contact: "",
      address: "",
      status: "",
      breed: "",
      birthDate: null,
    },
  ]);

  const [tableData, setTableData] = useState(initialData);
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
      headerName: "Contact",
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
      sortable: false,
      width: 100,
      renderCell: (params) => (
        <>
          <button
            onClick={() => handleEdit(params.row)}
            className={styles.edit}
          >
            <Image src={editLogo} alt="editLogo" />
          </button>
          <button
            onClick={() => handleDelete(params.row.id)}
            className={styles.delete}
          >
            <Image src={deleteLogo} alt="deleteLogo" />
          </button>
        </>
      ),
    },
  ];

  const editLogo = EditBtnIcon;
  const deleteLogo = DeleteBtnIcon;
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("tableData"));
    if (storedData) {
      setTableData(storedData);
    }
  }, []);
  const updateLocalStorage = (data) => {
    localStorage.setItem("tableData", JSON.stringify(data));
  };
  const handleDelete = (id) => {
    const updatedRows = tableData.filter((row) => row.id !== id);
    updatedRows.forEach((row, index) => {
      row.id = index + 1;
    });
    setTableData(updatedRows);
    updateLocalStorage(updatedRows);
  };
  const handleEdit = (row) => {
    setSelectedRow(row);
    setShowEditForm(true);
  };

  const filterColumn = columns.filter((v) => v.field !== "actions");
  const handleEditInputChange = (field, value) => {
    setSelectedRow((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  const handleShowAddForm = () => {
    setShowAddForm(true);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "birthDate") {
      const date = new Date(value);
      const formattedDate = `${date.getDate()}.${
        date.getMonth() + 1
      }.${date.getFullYear()}`;
      setAddFormData((prevData) => ({
        ...prevData,
        [name]: formattedDate,
      }));
    } else {
      setAddFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  const handleGenderOptions = (event) => {
    const gender = event.target.value;
    setGenderSelected(gender);
  };

  const handleAddFormSubmit = (e) => {
    e.preventDefault();
    const newPatient = {
      ...addFormData,
      id: tableData.length + 1,
      gender: genderSelected,
    };
    setTableData([...tableData, newPatient]);
    setShowAddForm(false);
    updateLocalStorage([...tableData, newPatient]);
  };

  const handleCancelAddForm = () => {
    setShowAddForm(false);
  };
  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    Object.assign(
      tableData.find((v) => v.id == selectedRow.id),
      selectedRow
    );
    setShowEditForm(false);
    updateLocalStorage([...tableData]);
  };
  const handleEditCancel = () => {
    setShowEditForm(false);
  };

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };
  const filteredData = tableData.filter(
    (row) =>
      (sortOption === "statusAll" ||
        row.status.toLowerCase() === sortOption.toLowerCase()) &&
      (breedSortOption === "breedAll" ||
        row.breed.toLowerCase() === breedSortOption.toLowerCase()) &&
      Object.values(row.petName).some((value) =>
        String(value).toLowerCase().includes(query.toLowerCase())
      )
  );
  const statusOptions = [...new Set(tableData.map((row) => row.status))];
  const breedOptions = [...new Set(tableData.map((row) => row.breed))];

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };
  const handlebreedSortChange = (event) => {
    setBreedSortOption(event.target.value);
  };

  return (
    <div className="patientInfosDisplay">
      <h1 className={styles.tableHeading}>Patient List</h1>
      <div className={styles.patientDataIntegrate}>
        <form>
          <input
            type="text"
            name="search"
            value={query}
            onChange={handleSearch}
            className={styles.searchInput}
          />
        </form>
        <button className={styles.addPatient} onClick={handleShowAddForm}>
          + Add new patient
        </button>
      </div>
      <div className={styles.sorts}>
        <select
          onChange={handleSortChange}
          value={sortOption}
          className={styles.status}
        >
          <option value="statusAll">Stauts All</option>
          {statusOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <select
          onChange={handlebreedSortChange}
          value={breedSortOption}
          className={styles.breeds}
        >
          <option value="breedAll">Breed All</option>
          {breedOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>

      {showAddForm && (
        <AddFormData
          handleInputChange={handleInputChange}
          handleGenderOptions={handleGenderOptions}
          handleAddFormSubmit={handleAddFormSubmit}
          handleCancelAddForm={handleCancelAddForm}
        />
      )}
      {showEditForm && (
        <EditModal
          filterColumn={filterColumn}
          handleEditInputChange={handleEditInputChange}
          handleEditFormSubmit={handleEditFormSubmit}
          handleEditCancel={handleEditCancel}
          selectedRow={selectedRow}
        />
      )}
      <div className="dataDisplay mt-5" style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={filteredData}
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
export default DataTable;
