import './App.css';
import { useEffect } from 'react';
import { useTelegram } from "./hooks/useTelegram";

function App() {
  // Используем созданный хук 
  const { tg, onToggleButton } = useTelegram();

  // Метод сообщает о том что приложение полностью проинициализировано
  useEffect(() => {
    tg.ready;
  }, [])

  return (
    <div className="App">
      <button onClick={onToggleButton}>Toogle</button>
    </div>
  );
}

export default App;