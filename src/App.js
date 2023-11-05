import './App.css';
import { useEffect } from 'react';
import { useTelegram } from "./hooks/useTelegram";
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';
import Form from './components/Form/Form';

function App() {
  // Используем созданный хук 
  const {onToggleButton, tg} = useTelegram();

  // Метод сообщает о том что приложение полностью проинициализировано
  useEffect(() => {
    tg.ready;
  }, [])

  // Создаем две страницы которые будут открываться по двум маршрутам
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<ProductList />} />
        <Route path={'form'} element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;