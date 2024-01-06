import React, { useState } from "react";
import Swal from "sweetalert2";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

const Add = ({ employees, setEmployees, setIsAdding, getEmployees }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [date, setDate] = useState("");

  const handleAdd = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !salary || !date) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const newEmployee = {
      firstName,
      lastName,
      email,
      salary,
      date,
    };

    employees.push(newEmployee);

    try {
      await addDoc(collection(db, "employees"), {
        ...newEmployee,
      });
    } catch (error) {
      console.log(error);
    }

    setEmployees(employees);
    setIsAdding(false);
    getEmployees();

    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `${firstName} ${lastName}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container mt-16">
      <form onSubmit={handleAdd}>
        <h1 className="text-3xl font-medium">Add Employee</h1>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="salary">Salary ($)</label>
        <input
          id="salary"
          type="number"
          name="salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <div style={{ marginTop: "30px" }}>
          <input type="submit" value="Add" className="bg-green-500 w-[160px] h-[50px] font-medium text-lg text-white border-2 border-green-500 hover:bg-transparent hover:border-green-500 hover:text-green-500 transition-all duration-200" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button bg-red-500 w-[160px] h-[50px] font-medium text-lg text-white border-2 border-red-500 hover:bg-transparent hover:border-red-500 hover:text-red-500 transition-all duration-200"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Add;
