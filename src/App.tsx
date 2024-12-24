import WidgetA from './widgets/WidgetA';
import WidgetB from './widgets/WidgetB';

function App() {
  return (
    <div className="App" style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      <WidgetA />
      <WidgetB />
    </div>
  );
}

export default App;
