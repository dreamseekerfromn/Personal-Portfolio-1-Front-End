import { useNavigate } from "react-router-dom";
import { roomListInterface } from "../interfaces/interface";

export default function Room({item}:{item:roomListInterface}){
    const nav = useNavigate();

    const handleJoinRoom = () => {
        nav(`/chat/${item.room_id}`);
    }

    return(
        <>
            <li key={item.room_id}>{item.room_name}<button onClick={handleJoinRoom}>Join</button></li>
        </>
    )
}