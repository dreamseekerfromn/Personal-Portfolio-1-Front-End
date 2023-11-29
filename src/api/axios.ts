import { roomListInterface, userinfoInterface } from "../interfaces/interface";
import axios from "axios";
const serverURL = import.meta.env.VITE_BASE_URL;

export async function postAuth(body:userinfoInterface){
    console.log(body)
    return await axios.post(`${serverURL}/user/login`, body);
}

export async function postNewUser(body:userinfoInterface){
    return await axios.post(`${serverURL}/user`, body, {headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }});
}

export async function postNewRoom(body:roomListInterface){
    return await axios.post(`${serverURL}/rooms`, body, {headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }});
}

export async function putExistingUser(id:string, body:userinfoInterface){
    return await axios.put(`${serverURL}/user/${id}`, body, {headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    }})
}

export async function getUser(id:string){
    return await axios.get(`${serverURL}/user/${id}`);
}

export async function getRooms(){
    return await axios.get(`${serverURL}/rooms`);
}

export async function getOneRoom(id:string){
    return await axios.get(`${serverURL}/rooms/${id}`);
}

export async function deleteAccount(id:string){
    return await axios.delete(`${serverURL}/user/${id}`);
}