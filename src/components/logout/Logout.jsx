import React from "react";
import { getAuth, signOut } from "firebase/auth";

const Logout = ({ setIsAuthenticated }) => {
  const handleLogout = () => {
    const auth = getAuth();

    signOut(auth)
      .then(() => {
        Swal.fire({
          icon: "question",
          title: "Logging Out",
          text: "Are you sure you want to log out?",
          showCancelButton: true,
          confirmButtonText: "Yes",
        }).then((result) => {
          if (result.value) {
            Swal.fire({
              timer: 1500,
              showConfirmButton: false,
              willOpen: () => {
                Swal.showLoading();
              },
              willClose: () => {
                setIsAuthenticated(false);
              },
            });
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <button
      style={{ marginLeft: "12px" }}
      className="bg-red-500 w-[160px] h-[50px] font-medium text-lg text-white border-1 border-red-500 hover:bg-transparent hover:border-red-500 hover:text-red-500 transition-all duration-200 muted-button"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default Logout;
