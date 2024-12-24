import WebSocket, { WebSocketServer as Server } from 'ws';

const wss = new Server({ port: 9000 });

wss.on('connection', (ws) => {
  console.log('New client connected.');

  ws.on('message', (message) => {
    // **Convertir el mensaje a string**
    const messageString = message.toString(); 

    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(messageString); 
      }
    });
  });

  ws.on('close', () => {
    console.log('Client disconnected.');
  });
});

console.log('WebSocket server running on ws://localhost:9000');