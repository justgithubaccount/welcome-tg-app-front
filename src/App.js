import { useEffect } from 'react';
import './App.css';

const tg = window.Telegram.WebApp;

function App() {

  // Метод сообщает о том что приложение полностью проинициализировано
  useEffect( () => {
    tg.ready();
  }, [])

  const onClose = () => {
    tg.Close;
  }

  return (
    <div className="App">       
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
