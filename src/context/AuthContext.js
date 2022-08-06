import { createContext, useState } from "react";
import Config from "../config";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    
    const userStorage = JSON.parse(localStorage.getItem("movieapp.user")) || {};
    const [user, setUser] = useState(userStorage);
    
    function logIn(username, pass) {
        const { authUsers } = Config;
        const authUser = authUsers.find((user) => 
            user.username === username && user.pass === pass
        )
        if (authUser !== undefined) {
            localStorage.setItem("movieapp.user", JSON.stringify(authUser));
            setUser(authUser);
            return true;
        }
        return false;
    };
    function logOut() {
        localStorage.removeItem("movieapp.user");
		setUser({});
		window.location.href = "/";
    }; 
    function isAuth() {
        return user.name ? true : false;
    }
    return (
        <AuthContext.Provider value={{ user, logIn, logOut, isAuth }} >
            {children}
        </AuthContext.Provider >
    )
};