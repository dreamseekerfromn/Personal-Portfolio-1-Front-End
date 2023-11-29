import { io } from 'socket.io-client';
const URL = import.meta.env.VITE_BASE_URL2;

export const socket = io(URL);
export let socketID = '';
socket.on('connect', () => {
    socketID = socket.id
})