import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userinfoObjProps } from "../interfaces/interface";
import { postAuth } from "../api/fetch";

/**
 * LoginForm()
 * ===============================
 * 
 */
export default function LoginForm(){
    const nav = useNavigate();
    const [userInfo, setUserInfo] = useState(userinfoObjProps);
    
    const handleTextChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setUserInfo({ ...userInfo, [event.target.id]: event.target.value });
    };
    
    const handleSubmit = (event:React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        postAuth(userInfo)
            .then(() => {
            console.log("create success!");
            nav("/posts");
            })
            .catch((err) => console.error(err));
    };

    return(
        <form onSubmit={handleSubmit}>
            <div className="grid">
                <label htmlFor="user_email">
                    E-Mail
                    <input type="email" id="user_email" name="user_name" placeholder="username" maxLength={40} onChange={handleTextChange} required />
                </label>
                <label htmlFor="user_password">
                    Password
                    <input type="text" id="user_password" name="user_password" placeholder="Password" maxLength={40} onChange={handleTextChange} required />
                </label>
            </div>
            <input type="submit" />
        </form>
    )
}