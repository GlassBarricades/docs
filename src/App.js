import AppHeader from './components/App-header';
import Home from './pages/Home';
import Bonuses from './pages/Bonuses';
import Cashless from './pages/Cashless';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppHeader />
        <main className="container-fluid d-flex flex-column align-items-center">
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/bonuses' element={<Bonuses />}/>
          <Route path="/cashless" element={<Cashless />}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
