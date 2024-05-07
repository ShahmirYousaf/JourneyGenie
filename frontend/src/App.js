import React from 'react'
import { BrowserRouter as Router, Route, Switch, Routes} from 'react-router-dom';
import './App.css'
import { useContext } from "react"; 
import { AuthContext } from "./authContext"; 

//------------ PAGES -----------//

import Signup from './Pages/Signup/Signup'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import View from './Pages/View/View'
import ChatBot from './Pages/ChatBot/ChatBot';
import CreateReview from './Pages/CreateReview/CreateReview'
import Recommendation from './Pages/Recommendation/Recommendation';
import Booking from './Pages/Booking/Booking'
import LanguageTranslation from './Pages/LanguageTranslation/LanguageTranslation'
import CurrencyConverter from './Pages/Currency/CurrencyConverter';
// import WeatherForecast from './Pages/WeatherForecast/WeatherForecast'
// import AboutUs from './Pages/AboutUs/AboutUs'

const App = () => {

  // const { user } = useContext(AuthContext); 

  // const ProtectedRoute = ({ children }) => { 
  //   if (!user) { 
  //     return <Login/>; 
  //   } else { 
  //     return children; 
  //   } 
  // }; 

  return (
    <Router> 
      <Routes> 
        {/* <Route path="/" element={<ProtectedRoute> <Home/> </ProtectedRoute>} />  */}
        <Route path="/" element={ <Home/> } />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Login/Signup" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} /> 
        <Route path="/Signup/Login" element={<Signup/>} />
        <Route path="/Recommendation" element={<Recommendation/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Booking" element={<Booking/>} />
        <Route path="/Currency" element={<CurrencyConverter/>} />
        <Route path="/LanguageTranslation" element={<LanguageTranslation/>} />
        <Route path="/ChatBot" element={<ChatBot/>} />
        {/* <Route path="/Weather" element={<WeatherForecast/>} /> */}
        {/* <Route path="/AboutUs" element={<AboutUs/>} /> */}
        {/* <Route path="/create" element={<ProtectedRoute><CreateReview/></ProtectedRoute>} /> 
        <Route path="/view/:id" element={<ProtectedRoute><View/></ProtectedRoute>} />  */}
      </Routes> 
    </Router> 


  
  
  );
}

export default App;
