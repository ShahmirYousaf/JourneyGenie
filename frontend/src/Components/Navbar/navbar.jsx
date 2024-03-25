import React from 'react'
import './navbar.css'
import logo from '../../Assets/logo.png'

const navbar = () => {
  return (
    <section className='navBarSection'>
        <header className='header flex'>
            <div className='logoDiv'>
                <a href='#' className='logo flex'>
                    <img src={logo} alt="Error" className='logoImage' ></img>
                </a>
            </div>

            <div className='navBar'>
                <ul className="navLists flex">
                    <li className="navItem">
                        <a href="#" className="navLink">Home</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">Destinations</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">About</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">Login</a>
                    </li>

                    <button className="btn">
                        <a href="" > Signup </a>
                    </button>
                </ul>
            </div>
        </header>
    </section>
  )
}

export default navbar
