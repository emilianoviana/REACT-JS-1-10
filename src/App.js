import logo from './logo.svg';
import './App.css';
import Kontak from './pages/Kontak';
import Nav from './pages/Nav';
import Sejarah from './pages/Sejarah';
import Tentang from './pages/Tentang';
import Home from './pages/Home';
import Siswa from './pages/Siswa';
import Menu from './pages/Menu';

import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/kontak' element={<Kontak />} exact />
          <Route path='/sejarah' element={<Sejarah />} exact />
          <Route path='/tentang' element={<Tentang />} exact />
          <Route path='/siswa' element={<Siswa />} exact />
          <Route path='/menu' element={<Menu />} exact />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
