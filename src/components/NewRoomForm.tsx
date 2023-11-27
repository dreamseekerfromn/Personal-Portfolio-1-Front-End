import { useState } from "react";
import { postNewRoom } from "../api/axios";
import { roomListObjProps } from "../interfaces/interface";
import { useNavigate } from "react-router-dom";

/**
 * NewRoomForm()
 * ================================
 * a component to render a form for creating a room.
 * 
 * @returns {ReactComponentElement}
 */
export default function NewRoomForm(){
    const [roomName, setRoomName] = useState(roomListObjProps);
    const nav = useNavigate();

    const handleTextChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setRoomName({ ...roomName, [event.target.id]: event.target.value });
    };

    const handleSubmit = (event:React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        postNewRoom(roomName)
            .then(() => {
            console.log("create success!");
            nav(0);
            })
            .catch((err) => console.error(err));
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="user_email">
                    Room Name
                    <input type="text" id="room_name" name="room_name" placeholder="room_name" maxLength={255} onChange={handleTextChange} required />
                </label>
                <button type="submit">Create New Room</button>
            </form>
        </div>
    )
}