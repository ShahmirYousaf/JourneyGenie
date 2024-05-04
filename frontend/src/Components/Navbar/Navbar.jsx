import React, {useState, useContext} from 'react'
import './navbar.css'
import logo from '../../Assets/logo.png'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import { Link, useNavigate  } from 'react-router-dom';
import { AuthContext } from '../../authContext'
import Home from '../../Pages/Home/Home'

const Navbar = () => {

    const navigate = useNavigate()

    const { user, dispatch } = useContext(AuthContext) 

    const [active, setActive] = useState('navBar')
    // Function for toggling navBar
    const showNavBar = ()=>{
        setActive('navBar activeNavbar')
    }
     // Function for closing navBar
     const removeNavBar = ()=>{
        setActive('navBar')
    }

    const handleClick = async (e) => { 
        e.preventDefault(); 
        dispatch({ type: "LOGOUT" }); 
        navigate("/") 
    } 

  return (
    <section className='navBarSection'>
        <header className='header flex'>
            <div className='logoDiv'>
                <Link to="/">
                <a href='#' className="logo flex">
                    <img src={logo} alt="Error" className="icon" ></img>
                </a>
                </Link>
            </div>

            <div className={active}>
                <ul className="navLists flex">

                    <Link to="/Home">
                    <li className="navItem">
                        <a href="#" className="navLink">Home</a>
                    </li>
                    </Link>

                    <Link to="/">
                    <li className="navItem">
                        <a href="#" className="navLink">Recommendations</a>
                    </li>
                    </Link>

                    <Link to={Home}>
                    <li className="navItem">
                        <a href="#" className="navLink">About</a>
                    </li>
                    </Link>

                    <Link to="/">
                    <li className="navItem">
                        <a href="#" className="navLink">Booking</a>
                    </li>
                    </Link>

                    <button onClick={handleClick} className="btn">
                        <a href="#" > Logout </a>
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
