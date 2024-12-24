import WebSocket, { WebSocketServer as Server } from 'ws';

// const PORT = 8080; // Change this to your desired port number
// const wss = new Server({ port: PORT }, () => {
//   console.log(`WebSocket server running on ws://localhost:${PORT}`);
// });

// wss.on('connection', (ws) => {
//   console.log('New client connected');

//   ws.on('message', (message) => {
//     console.log(`Received: ${message}`);
//     // Broadcast message to all clients
//     wss.clients.forEach((client) => {
//       if (client.readyState === WebSocket.OPEN) {
//         client.send(message);
//       }
//     });
//   });

//   ws.on('close', () => {
//     console.log('Client disconnected');
//   });

//   ws.on('error', (error) => {
//     console.error('WebSocket error:', error);
//   });
// });
// const WebSocket = require('ws');

const wss = new Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('New client connected.');

  ws.on('message', (message) => {
    console.log('Received:', message);
    // Enviar el mensaje a todos los clientes conectados
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.on('close', () => {
    console.log('Client disconnected.');
  });
});

console.log('WebSocket server running on ws://localhost:8080');
