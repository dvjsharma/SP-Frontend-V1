//NO REQUIREMENT OF ADMIN , CREATOR IS ADMIN BASICALLY 


// import React, { useState } from 'react';

// const AdminLogin = ({ onLogin }) => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Call the onLogin function passed as a prop
//         onLogin(email, password);
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label>Email:</label>
//                 <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                 />
//             </div>
//             <div>
//                 <label>Password:</label>
//                 <input
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//             </div>
//             <button type="submit">Login</button>
//         </form>
//     );
// };

// export default AdminLogin;
