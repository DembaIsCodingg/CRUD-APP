import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import UpdateProduits from './UpdateProduits';
import CreateProduits from './CreateProduits';
import Produits from './Produits';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Produits />}></Route>
          <Route path="/create" element={<CreateProduits />}></Route>
          <Route path="/update/:id" element={<UpdateProduits />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
