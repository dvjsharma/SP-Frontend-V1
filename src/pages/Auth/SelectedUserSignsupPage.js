import React from 'react'
import SelectedUserSignup from '../../components/Auth/SelectedUserSignup';
import { useAuth } from '../../hooks/useAuth';
const SelectedUserSignsupPage = () => {
    const { signup } = useAuth();

    const handleSignup = (email, password) => {
        signup(email, password);
    };

    return (
        <div>
            <h3>Selected User Signup</h3>
            <SelectedUserSignup onSignup={handleSignup} />
        </div>
    );
};

export default SelectedUserSignsupPage;