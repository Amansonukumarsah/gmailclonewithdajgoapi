import React from 'react'
import { FaBars,FaTh,FaQuestionCircle,FaSlidersH,FaSearch } from 'react-icons/fa';
import { FcBusinesswoman} from "react-icons/fc";
import logo from './Navimage/logo.png'
import { NavLink } from 'react-router-dom';
import { useEffect,useState } from 'react';
const Menu = ({sidenav, setsidenav}) => {
const [data,setdata]=useState(false)
const [facolor,setfacolor]=useState(true)
  const menufabar=()=>{
    if(data==false)
    {
      setdata(true)
      setfacolor(false)
      setsidenav(false)
    }
    else{
      setdata(false)
      setfacolor(true)
      setsidenav(true)
    }

  }
  return (
    <>
    <div>
        <div className='d-flex menu'>

            <ul className='my-3 mainmenu'>
              <li onClick={menufabar} className={facolor?'fahover':'fanothover'}>
                <FaBars size={25} />
              </li>
            </ul>

            <ul className='my-2 mainmenu'>
              <li>
                <img src={logo} alt="logo" />
              </li>
            </ul>

            <ul className='my-2 mainmenu' style={{marginLeft:'40px'}}>
              <li className='d-flex fasearch'>
                  <div className='mx-2 my-2' >
                    <FaSearch size={20} />
                  </div>
                <div className='d-flex search' style={{marginLeft:'-60px'}}>
                  <input className='inputsearch' type='search' placeholder='search mail...' />
                </div>
                <div className='mx-2 my-2'>
                  <FaSlidersH size={20} />
                </div>
              </li>
            </ul>


            <ul className='my-2 mainmenu' style={{marginLeft:'25%'}}>
              <li>
                <FaQuestionCircle size={25}/>
              </li>
            </ul>

            <ul className='my-2 mainmenu'>
              <li>
                <FaTh size={25}/>
              </li>
            </ul>
             
             <NavLink to='/profile'>
               <ul className='my-2 mainmenu'>
                <li>
                  <FcBusinesswoman size={25}/>
                </li>
              </ul>
             </NavLink>

        </div>
    </div>
    </>
  )
}

export default Menu;