import { useCallback } from "react";
import { IMessage } from "../interfaces/interface";
import { useAuth } from "./Auth";
import axios from "axios";

/**
 * LoginForm()
 * ===============================
 * 
 */
export default function ChatForm({sendMessage, setSendMessage}:{sendMessage:string, setSendMessage: any}){
    const auth = useAuth();
    const URL = import.meta.env.VITE_BASE_URL2;
    const handleTextChange = useCallback((event:React.ChangeEvent<HTMLTextAreaElement>) => {
            setSendMessage(event.target.value );
        },
    [sendMessage]);
    
    const submitSendMessage = async (event:React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (sendMessage){
            const message: IMessage = {
                user_name : auth.user_name,
                message: sendMessage,
            }
            await axios.post(`${URL}/chat`, message);
            setSendMessage("");
        };
    };

    return(
        <form>
            <div className="grid">
                <label htmlFor="message">
                    Message
                    <textarea id="message" name="message" placeholder="Password" maxLength={256} onChange={handleTextChange} required />
                </label>
            </div>
            <button type="submit" onClick={submitSendMessage}>Send</button>
        </form>
    )
}