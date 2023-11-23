import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../components/Auth";

export default function Home(){
    const nav = useNavigate();
    const auth = useAuth();
    useEffect(() => {
        if(!auth.authenticated){
            nav("/login");
        }
        else{
            console.log("Entered to the dashboard");
        }
    },[]);

    return(
        <div>
            <h1>Welcome</h1>
        </div>
    )
}