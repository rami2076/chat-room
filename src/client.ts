import {io, Socket} from 'socket.io-client';
import {Message} from "./model/message";

// Initialize socket connection.
const port: number = 5000;
const socket: Socket = io(`http://localhost:${port}`);

// Establishing socket connection.
socket.on('connect', () : void => {
    console.log('connect');
});

// Receive data from server via xxx event.
socket.on('xxx', (data: Message): void => {
    console.log(`type: ${typeof data}   data: ${data.message}`);
});

// Send message to server via yyy event
let counter: number = 0;
setInterval((): void => {
    const data: Message = {
        message: `client message ${counter++}`
    }
    socket.emit('yyy', data);
}, 1000);
