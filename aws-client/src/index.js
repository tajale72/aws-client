import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './component/Login/Login';
import SignUp from './component/Signup/Signup';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Items from './component/Items/Items';
import About from './component/About/About';
import Home from './component/Home/Home';
import Menu  from './component/Menu/Menu';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Router>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/menu" element={<Menu />} />
      <Route exact path="/items" element={<Items />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<SignUp />} />
    </Routes>
   </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
