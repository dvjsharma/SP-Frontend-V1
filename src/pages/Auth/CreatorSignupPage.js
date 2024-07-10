import React, { useState, useEffect } from 'react';
import CreatorSignup from '../../components/Auth/CreatorSignup';
import axios from 'axios';
import { Button, Typography } from '@mui/material';

const CreatorSignupPage = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    password: ''
  });
  const [flag,setFlag] = useState(false);

  const [resendTimer, setResendTimer] = useState(30);
  const [showResendButton, setShowResendButton] = useState(false);

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setShowResendButton(true);
    }
  }, [flag , resendTimer]);

  const handleSignup = async (firstName, lastName, userName, email, password) => {
    const filledFormData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      username: userName,
      password: password
    };
    setFormData(filledFormData);
    try {
      const response = await axios.post('http://127.0.0.1:8000/auth/users/', filledFormData, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      alert('Activation link sent to your email');
      setFlag(true);
      setResendTimer(30);
      setShowResendButton(false);
    } catch (error) {
      alert('Error in signup: password should be greater than 8 characters, email and username must be unique');
      console.error(error);
    }
  };

  const handleResendActivation = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/auth/users/resend_activation/', { email: formData.email }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      alert('Activation link resent to your email');
      setResendTimer(30);
      setShowResendButton(false);
    } catch (error) {
      alert('Error in resending activation link');
      console.error(error);
    }
  };

  return (
    <div>
      
      <CreatorSignup onSignup={handleSignup} />
      {flag && !showResendButton && resendTimer > 0 && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <Typography variant="body2" color="textSecondary">
          Resending option in {resendTimer} seconds
        </Typography>
        </div>
      )}
      {flag && showResendButton && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
          <Button variant="outlined" onClick={handleResendActivation}>
            Resend Activation Link
          </Button>
        </div>
      )}
    </div>
  );
};

export default CreatorSignupPage;
