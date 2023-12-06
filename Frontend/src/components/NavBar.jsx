import React from 'react'
import burgerMenu from "../assets/images/icon-menu.svg"

const NavBar = () => {
  return (
    <>

      <ul className=' hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:text-[16px] sm:items-center'>
        <li><a href="#">Home</a></li>
        <li><a href="#">Popular</a></li>
        <li><a href="#"></a>Categorias</li>
        <li><a href="#"></a>Trending</li>
      </ul>
      
      <img className='w-10 h-4 cursor-pointer sm:hidden' src={burgerMenu} alt="Menu amburguesa" />

    </>
  )
}

export default NavBar
