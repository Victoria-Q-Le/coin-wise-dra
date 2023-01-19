import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import CoinPage from './Pages/CoinPage';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index path='/' element={<HomePage />} />
        <Route path='/coin/:id' element={<CoinPage />} />
      </Routes>
    </>
  );
}

export default App;
