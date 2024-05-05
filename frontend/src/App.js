import React from 'react'
import { BrowserRouter as Router, Route, Switch, Routes} from 'react-router-dom';
import './App.css'
import { useContext } from "react"; 
import { AuthContext } from "./authContext"; 
// import CreateReview from './Pages/CreateReview/CreateReview';
// import Signup from './Pages/Signup/Signup'
// import Home from './Pages/Home/Home'
// import Login from './Pages/Login/Login'
// import View from './Pages/View/View'
import ChatBot from './Pages/ChatBot/ChatBot';

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
  //   <Router> 
  //   <Routes> 
  //     <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} /> 
  //     <Route path="/login" element={<Login/>} /> 
  //     <Route path="/register" element={<Signup/>} /> 
  //     <Route path="/create" element={<ProtectedRoute><CreateReview/></ProtectedRoute>} /> 
  //     <Route path="/view/:id" element={<ProtectedRoute><View/></ProtectedRoute>} /> 
  //   </Routes> 
  // </Router> 
  <>

  <ChatBot/>

  </>
  );
}

export default App;
