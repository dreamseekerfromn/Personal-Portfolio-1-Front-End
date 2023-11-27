import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";
import { getOneRoom } from "../api/axios";
import { useAuth } from "../components/Auth";
import ChatForm from "../components/ChatForm";
import { IMessageInitProps } from "../interfaces/interface";

//import { useAuth } from "../components/Auth";
const URL = import.meta.env.VITE_BASE_URL;

export default function ChatPage(){
    //const nav = useNavigate();
    const socket = io(URL, {path: "/chat", autoConnect: false});
    socket.connect();
    console.log(socket);
    const { id } = useParams();
    const [roomName, setRoomName] = useState("");
    const auth = useAuth();
    const [ sendMessage, setSendMessage ] = useState("");
    const [ chat, setChat ] = useState([IMessageInitProps]);

    useEffect(() => {
        getOneRoom(String(id))
        .then((res) => {
            setRoomName(res.data.data.payload.room_name);
            socket.on("connection", (signal) => {
                console.log(signal);
                signal.join(roomName);
                signal.emit("a new user has joined the room");
            })
            socket.emit(`${auth.user_name} has been joined`, "Welcome");
        });

        socket.on("message", (message) => {
            setChat([...chat, message]);
        })

        if(socket){
            return () => {
                socket.disconnect();
                //nav("/lobby");
            }
        }
    },[id]);
    
    return(
        <>
            <div>
                {chat.length ? (chat.map((chat) => (<div>{chat.user_name === auth.user_name ? "Me" : chat.user_name}</div>))) : (<div>No Message</div>)}
            </div>
            <ChatForm sendMessage={sendMessage} setSendMessage={setSendMessage} />
        </>
    )
}