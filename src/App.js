import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header'
import HomePage from './Pages/HomePage'
import CoinPage from './Pages/CoinPage'

function App() {

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route path='/' component={HomePage} />
        <Route path='/coins/:id' component={CoinPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
