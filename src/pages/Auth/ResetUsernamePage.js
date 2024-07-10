import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from 'react-router-dom';

import ResetUsername from "../../components/Auth/ResetUsername";
const ResetUsernamePage = () => {
  const location = useLocation();
  const [uid, setUid] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    setUid(queryParams.get('uid'));
    setToken(queryParams.get('token'));
  }, [location.search]);

  const handleResetUsername = async (newUsername) => {
    const filledFormData = {
      uid: uid,
      token: token,
      new_username: newUsername
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/auth/users/reset_username_confirm/",
        filledFormData,
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      );
      if (response.status === 204) {
        alert("Usrename has been reset successfully, you can now log in.");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        alert(`Error in resetting username: ${error.response.data.detail}`);
      } else {
        alert("Error in resetting username, please try again.");
      }
      console.error("Error during username reset:", error);
    }
  };

  return (
    <div>
      <ResetUsername onResetUsername={handleResetUsername} />
    </div>
  );
};

export default ResetUsernamePage;
