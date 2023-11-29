import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOneRoom } from "../api/axios";
import { useAuth } from "../components/Auth";
import ChatForm from "../components/ChatForm";
import { IMessageInitProps } from "../interfaces/interface";
import { socket, socketID } from "../api/socket";
//import { useAuth } from "../components/Auth";

export default function ChatPage(){

    const nav = useNavigate();
    socket.emit('connection', "hello world");
    const { id } = useParams();
    const [roomName, setRoomName] = useState("");
    const auth = useAuth();
    const {user_name} = auth;
    const [ sendMessage, setSendMessage ] = useState("");
    const [ chat, setChat ] = useState([IMessageInitProps]);

    socket.on("message", (message) => {
        console.log("hi")
        setChat([...chat, message]);
    })

    useEffect(() => {
        if(!auth.authenticated){
            nav('/');
        }
        socket.onAny((event, ...args) => {
            console.log(event, args);
          });
    },[]);

    useEffect(() => {
        socket.onAny((event, ...args) => {
            console.log(event, args);
          });
        getOneRoom(String(id))
        .then((res) => {
            setRoomName(res.data.data.payload.room_name);
            
            socket.connect();
            socket.on("connect", () => {
                console.log(socket.id); // x8WIv7-mJelg7on_ALbx
            });
            socket.emit("join",{user_name, roomName}, (error:any) => { if(error) alert(error)});
            socket.emit('message',`${auth.user_name} has been joined`);
        });
    },[id]);
    
    useEffect(()=>{
        socket.on("message", (message) => {
            setChat([...chat, message]);
        })
    },[chat]);

    return(
        <>
            <div>
                {chat.length ? (chat.map((chat) => (<div><span>{chat.user_name === auth.user_name ? "Me" : chat.user_name}</span> <span>{chat.message}</span></div>))) : (<div>No Message</div>)}
            </div>
            <ChatForm sendMessage={sendMessage} setSendMessage={setSendMessage} socket={socket}/>
        </>
    )
}