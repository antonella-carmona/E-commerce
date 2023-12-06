import React from 'react'
import logo from "../assets/images/logo-removebg-preview.png"
import NavBar from './NavBar'


export const Header = () => {
  return (
    <header className=" flex place-content-between items-center bg-gray-200 p-4">

    <div >
     <img src={logo} alt="Logo" className="w-32 h-32 font-bold"/>
    </div>

    <NavBar/>

    </header>
  )
}


