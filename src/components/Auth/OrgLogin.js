import React from 'react';
import GoogleButton from 'react-google-button'

const OrgLogin = ({ onGoogleLogin }) => {
    return (
        <div>
            <GoogleButton
  onClick={() => { console.log('Google button clicked') }}
/>
            <button onClick={onGoogleLogin}>Login with Google</button>
        </div>
    );
};

export default OrgLogin;
