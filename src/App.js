import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header';
import CoinPage from './Pages/CoinPage';
import HomePage from './Pages/HomePage';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/coin/:id' element={<CoinPage />} />
      </Routes>
    </>
  );
}

export default App;
