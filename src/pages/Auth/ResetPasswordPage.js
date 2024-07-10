import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from 'react-router-dom';
import ResetPassword from "../../components/Auth/ResetPassword";

const ResetPasswordPage = () => {
  const location = useLocation();
  const [uid, setUid] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    setUid(queryParams.get('uid'));
    setToken(queryParams.get('token'));
  }, [location.search]);

  const handleResetPass = async (newPassword) => {
    const filledFormData = {
      uid: uid,
      token: token,
      new_password: newPassword
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/auth/users/reset_password_confirm/",
        filledFormData,
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      );
      if (response.status === 204) {
        alert("Password has been reset successfully, you can now log in.");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        alert(`Error in resetting password: ${error.response.data.detail}`);
      } else {
        alert("Error in resetting password, please try again.");
      }
      console.error("Error during password reset:", error);
    }
  };

  return (
    <div>
     
      <ResetPassword onResetPass={handleResetPass} />
    </div>
  );
};

export default ResetPasswordPage;
