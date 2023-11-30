import React from 'react'
import logo from "../assets/images/Logo.png"
import NavBar from './NavBar'


export const Header = () => {
  return (
    <header className="bg-pink-500 flex place-content-between items-center">

    <div >
     <img src={logo} alt="Logo" className="w-32 h-32"/>
    </div>

    <NavBar/>

    </header>
  )
}


