import { userinfoInterface } from "../interfaces/interface";
import axios from "axios";
const serverURL = import.meta.env.VITE_BASE_URL;

export async function postAuth(body:userinfoInterface){
    return await axios.post(`${serverURL}/users/login`, body);
}

export async function postNewUser(body:userinfoInterface){
    return await axios.post(`${serverURL}/users`, body);
}