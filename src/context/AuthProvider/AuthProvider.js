import { getAuth } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import App from '../../App';

export const AuthContext = createContext()
const auth = getAuth(App)


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const authInfo = {user}
    return (
        <AuthContext.Provider value = {authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;