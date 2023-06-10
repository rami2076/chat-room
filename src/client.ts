import {io, Socket} from 'socket.io-client';

const port: number = 5000;
const socket: Socket = io(`http://localhost:${port}`);

socket.on('connect', () => console.log('connect'));
