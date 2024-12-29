import {React,useState,useEffect} from "react";
import AuthContext from "./AuthContext";
import Cookies from 'js-cookie';

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
   

    useEffect(() => {
        // Check if token exists in cookies and set authentication state
        const jwtToken = Cookies.get('jwt_token');
        if (jwtToken !== undefined){
            setIsAuthenticated(true);
        }
        else{
            setIsAuthenticated(false)
        }
        
    }, []); // Empty dependency array ensures this effect runs only once

       
    

    // Function to log in
    const login = (token) => {
        Cookies.set('jwt_token', token, { expires: 5 }); 
        setIsAuthenticated(true);
       
      };

    // Function to log out
    const logout = () => {
        Cookies.remove('jwt_token');
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ login, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};
