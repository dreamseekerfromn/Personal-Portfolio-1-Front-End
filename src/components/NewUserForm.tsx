import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { postNewUser } from '../api/axios';
import { userinfoObjProps } from '../interfaces/interface';
import { Form, Button } from 'react-bootstrap';

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
        <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control id="user_email" value={userInfo.user_email} type="email" placeholder="Enter email" onChange={handleTextChange} maxLength={40} required/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Username</Form.Label>
                    <Form.Control id="user_name" placeholder="Username" value={userInfo.user_name} onChange={handleTextChange} maxLength={40} required/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control className="text-muted" id="user_password" type="password" placeholder="Password" value={userInfo.user_password} onChange={handleTextChange} required/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control className="text-muted" id="user_password2" type="password" placeholder="Password" value={userInfo.user_password} onChange={handleConfirmPwChange} required/>
                </Form.Group>
            <Button variant="primary" type="submit" >
                Create New Account
            </Button>
        </Form>
    );
}