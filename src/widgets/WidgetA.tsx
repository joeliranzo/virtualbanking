import React, { useState } from 'react';
import { sendMessage } from '../utils/communication';

const WidgetA: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleSend = () => {
    if (inputValue.trim() !== '') {
      sendMessage(inputValue); // Enviamos el mensaje al mecanismo de comunicación
      setInputValue(''); // Limpiamos el campo de entrada
    }
  };

  return (
    <div style={{ border: '1px solid black', padding: '20px', maxWidth: '300px' }}>
      <h3>Widget A</h3>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a message"
        style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
      />
      <button onClick={handleSend} style={{ width: '100%', padding: '5px' }}>
        Send
      </button>
    </div>
  );
};

export default WidgetA;

