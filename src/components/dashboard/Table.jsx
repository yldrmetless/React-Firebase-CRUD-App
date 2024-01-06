import React from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";


const Table = ({ employees, handleEdit, handleDelete }) => {


  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Age</th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {employees ? (
            employees.map((employee, i) => (
              <tr key={i}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.userName} </td>
                <td>{employee.email}</td>
                <td>{employee.age}</td>
                <td className="text-right">
                  <button
                    onClick={() => handleEdit(employee.id)}
                    className="text-xl w-[45px] h-[45px] flex items-center justify-center bg-sky-500 text-white border-2 border-sky-500 hover:border-sky-500 hover:bg-transparent hover:text-sky-500 transition-all duration-200"
                  >
                    <FiEdit/>
                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete(employee.id)}
                    className="text-xl flex items-center justify-center w-[45px] h-[45px] bg-red-500 text-white border-2 border-red-500 hover:border-red-500 hover:bg-transparent hover:text-red-500 transition-all duration-200 font-medium"
                  >
                    <MdDelete/>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
