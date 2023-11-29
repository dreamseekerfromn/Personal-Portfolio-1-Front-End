import { useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";
import Button from 'react-bootstrap/Button';
import { Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { userinfoObjProps } from "../interfaces/interface";
import { deleteAccount, getUser, putExistingUser } from "../api/axios";

export default function Profile(){
    const nav = useNavigate();
    const auth = useAuth();
    const [userInfo, setUserInfo] = useState(userinfoObjProps);

    const handleTextChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setUserInfo({ ...userInfo, [event.target.id]: event.target.value });
    };

    const handleChangeProfile = (event:React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        putExistingUser(String(auth.user_id), userInfo)
        .then((json) => {
            auth.setUserName(json.data.data.payload.user_name);
            nav('/lobby');
        })
    };

    const handleEraseAccount = () => {
        deleteAccount(String(auth.user_id))
        .then(() => {
            auth.logOut();
        })
    };

    useEffect(() => {
        getUser(String(auth.user_id))
        .then((json) => {
            setUserInfo({...json.data.data.payload});
        }).catch((err)=> console.log(err));
    },[])

    return(
        <Form onSubmit={handleChangeProfile}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control id="user_email" value={userInfo.user_email} type="email" placeholder="Enter email" onChange={handleTextChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control className="text-muted" id="user_password" type="password" placeholder="Password" value={userInfo.user_password}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Username</Form.Label>
                <Form.Control id="user_name" placeholder="Password" value={userInfo.user_name} onChange={handleTextChange}/>
            </Form.Group>

            <Button variant="primary" type="submit" >
                Update
            </Button>
            <Button variant="warning" type="button" onClick={handleEraseAccount}>
                Delete Account
            </Button>
        </Form>
    )
}