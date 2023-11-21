import { useNavigate } from "react-router-dom";
import { userinfoInterface } from "../interfaces/interface";
import { useEffect } from "react";

export default function Home({userInfo}:{userInfo:userinfoInterface}){
    const nav = useNavigate();

    useEffect(() => {
        if(!userInfo["user_name"]){
            nav("/login");
        }
    },[]);

    
}