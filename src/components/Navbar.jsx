import React, {useState} from "react";
import {Link} from 'react-router-dom';
import { RiMenu4Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import MenuItems from "./MenuItems";

function Button({text, bg, padding}) {
  return (
    <div>
      <button
        className={`
          ${padding || 'px-6 py-2'} text-sm font-semibold uppercase 
          rounded-sm text-white transition ${bg}`}
      >
        <span>{text}</span>
      </button>
    </div>
  );
}


function Navbar() {
  const [menuShow, setMenuShow] = useState(false)
  const [dropdownIndex, setDropdownIndex] = useState(null)

  // For Navbar navItems; add or remove items from navItems variable in the given format [Item, item-url, [[sub-item1, sub-item1-url], [sub-item2, sub-item2-url]]]
  const navItems = [
    ['Faculties', '/', [['Member 1', '/'], ['Member 2', '/'], ['Member 3', '/'], ['Member 4', '/'], ['Member 5', '/']]],
    ['Subjects', '/', [['Subject 1', '/'], ['Subject 2', '/'], ['Subject 3', '/'], ['Subject 4', '/'], ['Subject 5', '/']]],
    ['Classes', '/', [['Class 1', '/'], ['Class 2', '/'], ['Class 3', '/'], ['Class 4', '/'], ['Class 5', '/']]],
    ['Combo', '/', [['Combo 1', '/'], ['Combo 2', '/'], ['Combo 3', '/'], ['Combo 4', '/'], ['Combo 5', '/']]],
    ['Books', '/', [['Book 1', '/'], ['Book 2', '/'], ['Book 3', '/'], ['Book 4', '/'], ['Book 5', '/']]],
    ['Test Series', '/', [['Series 1', '/'], ['Series 2', '/'], ['Series 3', '/'], ['Series 4', '/'], ['Series 5', '/']]],
    ['Mentorship', '/'],
    ['Free Notes', '/'],
  ]

  const showMenu = () => {
    setMenuShow(prev => !prev)
  }

  return (
    <>
    <div className='fixed left-0 right-0 top-0 z-50 h-15 py-4 transition-all duration-300 bg-transparent bg-opacity-20 backdrop-blur-sm'>
      <nav className="relative flex items-center container mx-auto h-full justify-between">
        <a href="/" className=''>
          <img src="./assets/img/logo.png" alt="logo" className="object-cover sm:w-36 w-32"/>
        </a>
        <div>
          <div onClick={showMenu} className="cursor-pointer lg:hidden">
            {menuShow ? <IoMdClose className='text-3xl text-white'/> : <RiMenu4Line className='text-3xl text-white'/>}
          </div>
          <ul className={`hidden lg:flex items-center lg:space-x-5 xl:space-x-10 xl:text-lg lg:bg-transparent lg:text-md font-semibold transition-all duration-400 text-white`}>
          {navItems.map(([title, url, dropdownItems], index) => (
              <li key={index} className='relative' onMouseEnter={() => setDropdownIndex(index)} onMouseLeave={() => setDropdownIndex(null)}>
                <Link to={url} className="transition-all ease-in-out duration-200 hover:text-sky-400">{title}</Link>
                {dropdownItems && (
                  <ul className={`${dropdownIndex === index ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-6 invisible'} absolute transition-all duration-300 delay-200 ease-out top-full -left-5 z-10 bg-white shadow-md py-5 px-3 rounded font-normal w-max text-black shadow-md`}>
                    {dropdownItems.map(([dropItem, dropUrl]) => (
                      <li key={dropItem}>
                        <Link to={dropUrl} className="px-4 py-2 transition-all ease-in-out duration-200 hover:text-sky-400">
                          {dropItem}
                        </Link>
                      </li>
                    ))}
                  </ul>
            )}
              </li>
            ))}
            <li>
              <Button text="Contact Us" bg='bg-white bg-opacity-20 backdrop-blur-xl hover:sky-200'/>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div className="absolute top-16 mt-3">
      {menuShow && <MenuItems navItems={navItems}/>}
    </div>
    </>
  );
}

export default Navbar;
