import React, { useEffect, useState } from 'react';
import { onMessage } from '../utils/communication';

const WidgetB: React.FC = () => {
  const [receivedMessages, setReceivedMessages] = useState<string[]>([]);

  useEffect(() => {
    // Registrar un callback para manejar los mensajes recibidos
    onMessage((message) => {
      setReceivedMessages((prevMessages) => [...prevMessages, message]);
    });
  }, []);

  return (
    <div style={{ border: '1px solid black', padding: '20px', maxWidth: '300px' }}>
      <h3>Widget B</h3>
      <ul>
        {receivedMessages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetB;
