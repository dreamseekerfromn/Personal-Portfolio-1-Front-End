//import { useCallback } from "react";
//import { Socket } from "socket.io-client";
import { useParams } from "react-router-dom";
import { IMessage } from "../interfaces/interface";
import { useAuth } from "./Auth";
import { Button, Form } from "react-bootstrap";
//import axios from "axios";

/**
 * LoginForm()
 * ===============================
 * 
 */
export default function ChatForm({sendMessage, setSendMessage, socket}:{sendMessage:string, setSendMessage: any, socket:any}){
    const auth = useAuth();
    const { id } = useParams();
    //const URL = import.meta.env.VITE_BASE_URL;
    /*
    const handleTextChange = useCallback((event:React.ChangeEvent<HTMLTextAreaElement>) => {
            setSendMessage(event.target.value );
            console.log(sendMessage)
        },
    [sendMessage]);*/

    const handleTextChange = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
        setSendMessage(event.target.value);
    };
    
    const submitSendMessage = async (event:React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
            const message: IMessage = {
                user_name : auth.user_name,
                message: sendMessage,
                room_id: Number(id),
            }
            console.log(message)
            /*await axios.post(`${URL}/chat`, message, {headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              }}).then((res)=>console.log(res));*/
            socket.emit("message", message);
            setSendMessage("");
    };

    return(
        <Form>
            <Form.Label>
                <Form.Control as="textarea" rows={3} id="message" name="message" placeholder="Message" maxLength={256} onChange={handleTextChange} required />
            </Form.Label>
            <Button onClick={submitSendMessage}>Send</Button>
        </Form>
    )
}