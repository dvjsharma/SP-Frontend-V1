import { useState } from 'react';
import { loginService, signupService, googleLoginService } from '../services/authService';

export const useAuth = () => {
    const [user, setUser] = useState(null);

    const login = async (email, password) => {
        try {
            const userData = await loginService(email, password);
            setUser(userData);
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    const signup = async (email, password) => {
        try {
            const userData = await signupService(email, password);
            setUser(userData);
        } catch (error) {
            console.error('Signup failed', error);
        }
    };

    const googleLogin = async () => {
        try {
            const userData = await googleLoginService();
            setUser(userData);
        } catch (error) {
            console.error('Google login failed', error);
        }
    };

    return {
        user,
        login,
        signup,
        googleLogin,
    };
};
