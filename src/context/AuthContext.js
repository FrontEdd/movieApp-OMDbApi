import { createContext, useState } from "react";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    
    function logIn(user, pass) {
        if (user === "admin" && pass === "1234") {
            const authUser = {
                user: user,
                name: "Edgar Razuri",
            }
            setUser(authUser)
            return true;
        };
        return false;
    };
    function logOut() {
        setUser({});
    }; 
    function isAuth() {
        console.log(user);
        return user.name ? true : false;
    }
    return (
        <AuthContext.Provider value={{ user, logIn, logOut, isAuth }} >
            {children}
        </AuthContext.Provider >
    )
};