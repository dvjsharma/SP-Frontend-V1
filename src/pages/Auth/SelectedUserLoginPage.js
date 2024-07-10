import React from 'react';
import SelectedUserLogin from '../../components/Auth/SelectedUserLogin';
import { useAuth } from '../../hooks/useAuth';

const SelectedUserLoginPage = () => {
    const { login } = useAuth();

    const handleLogin = (email, password) => {
        login(email, password);
    };

    return (
        <div>
            <h3>Selected User Login</h3>
            <SelectedUserLogin onLogin={handleLogin} />
        </div>
    );
};

export default SelectedUserLoginPage;
