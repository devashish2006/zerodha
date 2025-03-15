import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const BeforeHome = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  // console.log("asbsuh")
  // useEffect(() => {
  //   const verifyCookie = async () => {
  //     try {
  //       // If no token in cookies, redirect to login
  //       if (!cookies.token) {
  //         navigate("/login");
  //         return; // Exit early
  //       }

  //       // Verify user authentication via backend
  //       const { data } = await axios.post(
  //         "http://localhost:8080",
  //         {},
  //         { withCredentials: true }
  //       );

  //       const { status, user } = data;

  //       if (status) {
  //         setUsername(user);
  //         toast(`Hello ${user}`, {
  //           position: "top-right",
  //         });

  //         // Call the onAuthenticated function to signal that authentication succeeded
          
         
  //         setUsername(user);
  //           // Redirect to port 3001 after successful authentication
  //         window.location.href = "http://localhost:3001"; // Use this to switch context
         
        
  //       } else {
  //         // Remove the cookie and redirect to login if not authenticated
  //         removeCookie("token");
  //         navigate("/login");
  //       }
  //     } catch (error) {
  //       console.error("Error verifying cookie", error);
  //       navigate("/login");
  //     }
  //   };

  //   verifyCookie();
  // }, [ ]);

  return (
    <div className="home_page">
      <h4>
        Welcome <span>{username}</span>
      </h4>
    </div>
  );
};

export default BeforeHome;
