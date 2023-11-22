import { createContext, useContext, useEffect, useState } from "react";
import { userinfoInterface } from "../interfaces/interface";
import { useNavigate } from "react-router-dom";
import { socket } from "../api/socket";
import axios from "axios";
import { postAuth } from "../api/fetch";

type authContextProp = {
    authentication: boolean,
};

const authContextInitial = {
    authentication: false,
}

const AuthContext = createContext<authContextProp>(authContextInitial);

const AuthProvider:React.FC = (props:React.PropsWithChildren) => {
    const [userInfo, setUserInfo] = useState({});
    const nav = useNavigate();



    return(
        <AuthContext.Provider value={AuthContext}>
            <div>{props.children}</div>
        </AuthContext.Provider>
    );
}
