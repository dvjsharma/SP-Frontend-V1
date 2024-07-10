import React from 'react';
import OrgLogin from '../../components/Auth/OrgLogin';
import { useAuth } from '../../hooks/useAuth';

const OrgLoginPage = () => {
    const { googleLogin } = useAuth();

    const handleGoogleLogin = () => {
        googleLogin();
    };

    return (
        <div>
            <h1>Organization Login</h1>
            <OrgLogin onGoogleLogin={handleGoogleLogin} />
        </div>
    );
};

export default OrgLoginPage;
