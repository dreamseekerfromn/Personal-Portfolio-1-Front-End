import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userinfoObjProps } from "../interfaces/interface";

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
        const timeStamp = Date.now()/1000;
        setSinglePost({ ...singlePost, time_stamp: timeStamp });
        console.log(singlePost);
        createMessage(singlePost)
            .then(() => {
            console.log("create success!");
            nav("/posts");
            })
            .catch((err) => console.error(err));
    };
    return(
        <form onSubmit={handleSubmit}>
            <div className="grid">
                <label htmlFor="user_name">
                    Username
                    <input type="text" id="user_name" name="user_name" placeholder="username" onChange={handleTextChange} required />
                </label>
                <label htmlFor="user_password">
                    Password
                    <input type="text" id="user_password" name="user_password" placeholder="Password" onChange={handleTextChange} required />
                </label>
            </div>
            <small>We'll never share your email with anyone else.</small>

            <input type="submit">Submit</input>
        </form>
    )
}