import { roomListInterface, userinfoInterface } from "../interfaces/interface";
import axios from "axios";
const serverURL = import.meta.env.VITE_BASE_URL;

export async function postAuth(body:userinfoInterface){
    console.log(body)
    return await axios.post(`${serverURL}/user/login`, body);
}

export async function postNewUser(body:userinfoInterface){
    return await axios.post(`${serverURL}/user`, body);
}

export async function postNewRoom(body:roomListInterface){
    return await axios.post(`${serverURL}/rooms`, body);
}

export async function getRooms(){
    return await axios.get(`${serverURL}/rooms`);
}