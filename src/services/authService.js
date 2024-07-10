import axios from 'axios';

export const loginService = async (email, password) => {
    const response = await axios.post('/api/v1/auth/login', { email, password });
    return response.data;
};

export const signupService = async (email, password) => {
    const response = await axios.post('/api/v1/auth/signup', { email, password });
    return response.data;
};

export const googleLoginService = async () => {
    //yahan pe passwport.js se karvaunga 
    const response = await axios.get('/api/v1/auth/google');
    return response.data;
};
