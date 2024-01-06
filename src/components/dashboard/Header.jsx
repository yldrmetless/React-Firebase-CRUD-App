import React from "react";
import Logout from "../logout/Logout";


const Header = ({ setIsAdding, setIsAuthenticated }) => {
  return (
    <header className="mt-16">
      <h1 className="font-medium text-3xl">User Management Software</h1>
      <div style={{ marginTop: "30px", marginBottom: "18px" }}>
        <button 
            onClick={() => setIsAdding(true)} className="bg-green-500 w-[160px] h-[50px] font-medium text-lg text-white border-2 border-green-500 hover:bg-transparent hover:border-green-500 hover:text-green-500 transition-all duration-200"
        >
                Add User
        </button>

        <Logout setIsAuthenticated={setIsAuthenticated} />
      </div>
    </header>
  );
};

export default Header;
