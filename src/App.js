import logo from './logo.svg';
import './App.scss';
import {  Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
//注意Route的“/”符号
function App() {
  return (
    <>
    <Routes>
      <Route path ="/Yike-portfolio" element = {<Layout />} >
      <Route index element ={<Home />} /> 
      </Route>

    </Routes>
    </>
  )
}

export default App;
