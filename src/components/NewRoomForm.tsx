import { useState } from "react";
import { postNewRoom } from "../api/axios";
import { roomListObjProps } from "../interfaces/interface";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

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
        <div className="form-wrapper">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="room_name">
                    <Form.Label>Room Name</Form.Label>
                    <Form.Control id="room_name" name="room_name" placeholder="Room name" onChange={handleTextChange} maxLength={255} required/>
                </Form.Group>
                <Button type="submit">Create New Room</Button>
            </Form>
        </div>
    )
}