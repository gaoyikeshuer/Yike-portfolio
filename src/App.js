import './App.scss';
import {  Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
//注意Route的“/”符号
function App() {
  return (
    <>
    <Routes>
      <Route path ="/Yike-portfolio" element = {<Layout />}>
      <Route index element ={<Home />} /> 
      <Route path="/Yike-portfolio/about" element ={<About />} /> 
      <Route path="/Yike-portfolio/painting" element ={<About />} /> 
      </Route>

    </Routes>
    </>
  );
};

export default App;
