import React from 'react';
import ReactDOM from 'react-dom';

declare global {
  interface Window {
    WidgetA: React.ComponentType;
    WidgetB: React.ComponentType;
  }
}

const App = () => {
  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      <div>
        <h2>Widget A</h2>
        {/* Usar la variable global para renderizar el widget */}
        {React.createElement(window.WidgetA)}
      </div>
      <div>
        <h2>Widget B</h2>
        {/* Usar la variable global para renderizar el widget */}
        {React.createElement(window.WidgetB)}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
