import { createContext, useContext, useState } from "react";
import { userinfoInterface } from "../interfaces/interface";
//import { useNavigate } from "react-router-dom";
//import { socket } from "../api/socket";
import { postAuth } from "../api/axios";
import { useNavigate } from "react-router-dom";

type authContextProp = {
    authenticated: boolean,
    user_name: string|undefined,
    user_id: number|undefined,
    user_email: string|undefined,
    setAuthenticated: (newState: boolean) => void,
    setUserEmail: (newState: string) => void,
    setUserName: (newState:string) => void,
    setUserID: (newState:number) => void,
    loginUser: (input:userinfoInterface) => void,
    logOut: () => void,
};

const authContextInitial = {
    authenticated: false,
    user_name: "",
    user_id: 0,
    user_email: "",
    setAuthenticated: () => {},
    setUserEmail: () => {},
    setUserName:()=>{},
    setUserID:()=>{},
    loginUser: () => {},
    logOut: () => {},
}

export const AuthContext = createContext<authContextProp>(authContextInitial);

export const AuthProvider = (props:React.PropsWithChildren) => {
    const nav = useNavigate();
    const [authenticated, setAuthenticated] = useState(authContextInitial.authenticated);
    const [user_email, setUserEmail] = useState(authContextInitial.user_email);
    const [user_name, setUserName] = useState(authContextInitial.user_name);
    const [user_id, setUserID] = useState(authContextInitial.user_id);

    const loginUser = (input:userinfoInterface) => {
        console.log(input);
        postAuth(input)
            .then((res) => {
                console.log(res);
                return res;
            })
            .catch((err)=>{
                console.log(err);
            })
    }

    const logOut = () => {
        /** erase all info in the context hook */
        setAuthenticated(false);
        setUserEmail("");
        setUserID(0);
        setUserName("");

        /** back to login page */
        nav("/");
    }

    return(
        <AuthContext.Provider value={{authenticated, setAuthenticated, user_email, setUserEmail, user_name, setUserName, setUserID, user_id, loginUser, logOut}}>
            <div>{props.children}</div>
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext);
}