import React from 'react'
import { NavLink } from "react-router-dom";
import { MdStayPrimaryPortrait,MdOutlineSocialDistance } from "react-icons/md";
import { FaTag } from "react-icons/fa";
import { useState } from 'react';
const Bodynavbar = () => {
    const [data,setdata]=useState()
    const [social,setsocial]=useState()
    const active=()=>{
         setdata(data)
    }

    const activesocila=()=>{
        setsocial(social)
    }
  return (
    <>
     <div className='d-flex bodynavbar'>

         <ul onClick={active} className={data?'active':'deactive'}>
            <li className='d-flex'>
                <NavLink style={{textDecoration:'none'}} exact to='/'>
                    <div  className='d-flex link'>
                        <MdStayPrimaryPortrait/>
                        <p>Primary</p>
                    </div>
                </NavLink>
            </li>
         </ul>

         <ul onclick={activesocila} className={social?'socialactive':'deactive'}>
            <li className='d-flex'>
            <NavLink style={{textDecoration:'none'}} exact to='/social'>
                    <div   className='d-flex link'>
                        <MdOutlineSocialDistance/>
                        <p>Social</p>
                    </div>
            </NavLink>
            </li>
         </ul>

         <ul>
            <li className='d-flex'>
            <NavLink style={{textDecoration:'none'}} to='/promotion'>
                <div    className='d-flex link'>
                    <FaTag/>
                    <p>Promotion</p>
                </div>
                </NavLink>
            </li>
         </ul>

     </div>
    </>
  )
}
export default Bodynavbar;