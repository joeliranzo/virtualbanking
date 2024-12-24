const socket = new WebSocket('ws://localhost:8080'); // Cambiar por el puerto correspondiente

// Evento de conexión
socket.onopen = () => {
  console.log('WebSocket connection established.');
};

// Evento de error
socket.onerror = (error) => {
  console.error('WebSocket error:', error);
};

// Función para enviar mensajes
export const sendMessage = (message: string) => {
  if (socket.readyState === WebSocket.OPEN) {
    socket.send(message);
  } else {
    console.error('WebSocket is not open.');
  }
};

// Función para registrar un listener de mensajes
export const onMessage = (callback: (message: string) => void) => {
  socket.onmessage = (event) => {
    callback(event.data);
  };
};
