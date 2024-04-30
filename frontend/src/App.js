import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Booking from './Pages/Booking/Booking'
import Footer from './Components/Footer/Footer'
import CurrencyConverter from './Pages/Currency/CurrencyConverter'
import Signup from './Pages/Signup/Signup'
import Login from './Pages/Login/Login'
import LanguageTranslation from './Pages/LanguageTranslation/LanguageTranslation'

const App = () => {
  return (
    <>
     <Navbar/>
  
     <Booking/>
     
      {/* <Signup/> */}
      {/* <Login/> */}
      {/* <LanguageTranslation/> */}
    </>
  )
}

export default App;
