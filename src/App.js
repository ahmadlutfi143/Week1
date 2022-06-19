import Navigation from './components/Navigation';
import Login from './components/Login';
import Register from './components/Register';
import Detail from './components/Detail';
import Profile from './components/Profile';
import Product from './components/Product';
import Complain from './components/Complain';
import Complain2 from './components/Complain2';
import Edit from './components/Edit';
import Edit2 from './components/Edit2';
import Homepage from './components/Homepage';
import Category from './components/Category';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} ></Route>
        <Route path="/register" element={<Register />} ></Route>
        <Route path="/homepage" element={<Homepage />} ></Route>
        <Route path="/profile" element={<Profile />} ></Route>
        <Route path="/product" element={<Product />} ></Route>
        <Route path="/detail" element={<Detail />} ></Route>
        <Route path="/category" element={<Category />} ></Route>
        <Route path="/complain" element={<Complain />} ></Route>
        <Route path="/complain2" element={<Complain2 />} ></Route>
        <Route path="/edit" element={<Edit />} ></Route>
        <Route path="/edit2" element={<Edit2 />} ></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
