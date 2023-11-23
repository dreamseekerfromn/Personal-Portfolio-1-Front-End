import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { postNewUser } from '../api/axios';
import { userinfoObjProps } from '../interfaces/interface';


export default function NewUserForm(){
    const nav = useNavigate();
    const [userInfo, setUserInfo] = useState(userinfoObjProps);
    const [confirmPw, setConfirmPw] = useState("");
    const handleTextChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setUserInfo({ ...userInfo, [event.target.id]: event.target.value });
    };
    const handleConfirmPwChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPw(event.target.value);
    }
    
    const handleSubmit = (event:React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(confirmPw === userInfo.user_password){
            postNewUser(userInfo)
                .then(() => {
                console.log("create success!");
                nav("/");
                })
                .catch((err) => console.error(err));
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <div className="grid">
                <label htmlFor="user_email">
                    E-Mail
                    <input type="email" id="user_email" name="user_name" placeholder="username" maxLength={40} onChange={handleTextChange} required />
                </label>
                <label htmlFor="user_email">
                    Username
                    <input type="text" id="user_name" name="user_name" placeholder="username" maxLength={40} onChange={handleTextChange} required />
                </label>
                <label htmlFor="user_password">
                    Password
                    <input type="text" id="user_password" name="user_password" placeholder="Password" maxLength={40} onChange={handleTextChange} required />
                </label>
                <label htmlFor="user_password">
                    Confirm Password
                    <input type="text" id="user_password2" name="user_password2" placeholder="Password" maxLength={40} onChange={handleConfirmPwChange} required />
                </label>
            </div>
            <input type="submit"/>
        </form>
    );
}