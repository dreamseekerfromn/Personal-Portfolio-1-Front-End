import { useEffect, useState } from "react";
import { roomListObjProps } from "../interfaces/interface";
import { getRooms } from "../api/axios";
import Room from "./Room";
import NewRoomForm from "./NewRoomForm";
import { useAuth } from "./Auth";
import { useNavigate } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
export default function RoomList(){
    const [rooms, setRooms] = useState([roomListObjProps]);
    const nav = useNavigate();
    const auth = useAuth();
    useEffect(()=>{
        if(!auth.authenticated){
            nav('/');
        }
        getRooms()
            .then((res) => {
                //console.log(res.data.data)
                setRooms([...res.data.data.payload]);
            }).catch((err) => { console.log(err)})
    }),[];

    return(
        <>
            <NewRoomForm />
            
            <div>
                <ListGroup>
                    {rooms.map((elem) => <Room item={elem} />)}
                </ListGroup>
            </div>  
        </>
    )
}