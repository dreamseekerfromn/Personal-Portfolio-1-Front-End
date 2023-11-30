import { useNavigate } from "react-router-dom";
import { roomListInterface } from "../interfaces/interface";
import { ListGroup, Button } from "react-bootstrap";

/**
 * Room()
 * =======================================
 * Render Single list item for room list.
 * 
 * @param param0 
 * @returns 
 */
export default function Room({item}:{item:roomListInterface}){
    const nav = useNavigate();

    const handleJoinRoom = () => {
        nav(`/chat/${item.room_id}`);
    }

    return(
        <>
            <ListGroup.Item key={item.room_id} className="list-wrapper">
                {item.room_name}
                <br />
                <Button onClick={handleJoinRoom}>Join</Button>
            </ListGroup.Item>
        </>
    )
}