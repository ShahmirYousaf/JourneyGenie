import React, {useState} from 'react'
import './navbar.css'
import logo from '../../Assets/logo.png'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import Home from '../../Pages/Home/Home'
import Login from '../../Pages/Login/Login'
import Signup from '../../Pages/Signup/Signup'

const Navbar = () => {

    const [active, setActive] = useState('navBar')
    // Function for toggling navBar
    const showNavBar = ()=>{
        setActive('navBar activeNavbar')
    }
     // Function for closing navBar
     const removeNavBar = ()=>{
        setActive('navBar')
    }

  return (
    <section className='navBarSection'>
        <header className='header flex'>
            <div className='logoDiv'>
                <a href='#' className="logo flex">
                    <img src={logo} alt="Error" className="icon" ></img>
                </a>
            </div>

            <div className={active}>
                <ul className="navLists flex">
                    <li className="navItem">
                        <a href={<Home/>} className="navLink">Home</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">Destinations</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">About</a>
                    </li>

                    <li className="navItem">
                        <a href={<Login/>} className="navLink">Login</a>
                    </li>

                    <button className="btn">
                        <a href={<Signup/>} > Signup </a>
                    </button>
                </ul>
                <div onClick={removeNavBar} className="closeNavBar">
                    <AiFillCloseCircle className="icon"/>
                </div>
            </div>

            <div onClick={showNavBar} className="toggleNavBar">
                <TbGridDots className="icon"/>
            </div>

        </header>
    </section>
  )
}

export default Navbar
