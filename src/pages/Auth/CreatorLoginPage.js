import React from "react";
import axios from "axios";
import CreatorLogin from "../../components/Auth/CreatorLogin";

const CreatorLoginPage = () => {
  const handleLogin = async (username, password) => {
    const filledFormDataLogin = {
      username: username,
      password: password,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/auth/jwt/create",
        filledFormDataLogin,
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      );
      if (response.status === 200) {
        const token = response.data.access;
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('username', response.data.username);
        sessionStorage.setItem('first_name', response.data.first_name);
        sessionStorage.setItem('last_name', response.data.last_name);
        sessionStorage.setItem('email', response.data.email);
        sessionStorage.setItem('id', response.data.id);
        sessionStorage.setItem('is_active',response.data.is_active);
        sessionStorage.setItem('is_deactivated',response.data.is_deactivated);
        alert("HAPPY JOURNEY , YOU ARE LOGGED IN");
        window.location.href = '/user-home'; 
      }
    } catch (error) {
      if (error.response && error.response.data) {
        alert(`Error in login: ${error.response.data.detail}`);
      } else {
        alert(
          "Error in login, please give your username and password correctly"
        );
      }
      console.error("Error during login:", error);
    }
  };

  const handleForgotPassword = async (email) => {
    const filledFormDataReset = {
      email: email
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/auth/users/reset_password/",
        filledFormDataReset,
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      );
      if (response.status === 204) {
        alert("Password reset link has been sent to your email");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        alert(`Error in sending reset link: ${error.response.data.detail}`);
      } else {
        alert(
          "Error in sending reset link, please check your email address"
        );
      }
      console.error("Error during password reset:", error);
    }
  };

  const handleForgotUsername = async (email) => {
    const filledUsernameReset = {
      email: email
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/auth/users/reset_username/",
        filledUsernameReset,
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      );
      if (response.status === 204) {
        alert("UserName link has been sent to your email");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        alert(`Error in sending reset link: ${error.response.data.detail}`);
      } else {
        alert(
          "Error in sending reset link, please check your email address"
        );
      }
      console.error("Error during password reset:", error);
    }
  };

  return (
    <div>
      <CreatorLogin onLogin={handleLogin} onForgotPassword={handleForgotPassword} onForgotUsername={handleForgotUsername} />
    </div>
  );
};

export default CreatorLoginPage;
