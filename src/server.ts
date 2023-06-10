import http from 'http';
import socketio from 'socket.io';
import {Message} from "./model/message";

const server: http.Server = http.createServer();
const io: socketio.Server = new socketio.Server(server);

const portNumber: number = 5000;

// Start Http server.
server.listen(portNumber, () : void => {
    console.log(`app listening on port ${portNumber}`);
});

// Establish socket connection.
io.on('connection', (socket: socketio.Socket) => {
    console.log('connect');

    let counter: number = 0;

    // Receive data from client via yyy event.
    socket.on('yyy', (data: Message): void => {
        console.log(`type: ${typeof data}   data: ${data.message}`);
    });

    // Send message to client via xxx event.
    setInterval((): void => {
        const data: Message = {
            message: `client message ${counter++}`
        }
        socket.emit('xxx', data);
    }, 1000);
});
