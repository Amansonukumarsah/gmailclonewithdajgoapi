import React from 'react'
import Allheadericon from './Allheadericon'
// import Primarydata from './Primarydata'
// import { useParams } from 'react-router-dom'
// import React from 'react'
// import Primarydata from './Primarydata';
import Bodyheadnav from './Bodyheadnav';
import { NavLink } from 'react-router-dom';
import { MdDelete, MdOutlineMarkAsUnread } from "react-icons/md";
import { BiArchiveIn, BiAlarmSnooze } from "react-icons/bi";
import { useState, useEffect } from 'react';
import axios from 'axios'

const Star = () => {

   const [Star,setStar]=useState([])


  
  useEffect(()=>{
    async function getsnoozdata()
    {
      try {
        const snooz = await axios.get("http://127.0.0.1:8000/api/star/")
        setStar(snooz.data)
      } catch (error) {
        console.log(error)
      }
    }
    getsnoozdata()
  },[])





  return (
    <>
      <div>
        <div>
          <Bodyheadnav />
        </div>
        <hr />
        {
        Star.map((val, ind) =>
          <div className='primarybody'>
            <NavLink exact to={`/${val.id}/`} style={{ textDecoration: 'none' }}>
              <div>
                <div className='d-flex '>
                  <div style={{ marginTop: '10px' }} className='d-flex mx-1'>
                    <div className='mx-1'>
                      <input type="checkbox" />
                    </div>
                    <div className='mx-2'>
                      <strong></strong>
                    </div>

                    <div style={{width:'5px'}}>
                      <strong className='text-black text-bold '>{val.Company}</strong>
                    </div>

                    <div style={{marginLeft:'150px',width:'100px'}}>
                      <strong>{val.Title}</strong>
                    </div>


                    <div className='primarydata'>
                      <p >-{val.Data}</p>
                    </div>
                  </div>
                </div>
              </div>
            </NavLink>
            <hr />
            <div className='primaryhover'>
              <div className='d-flex primarylogo'>
                <div className='mx-1 but'>
                  <button className='btn btn-success'><BiArchiveIn /></button>
                </div>
                <div className='mx-1 but'>
                  <button className='btn btn-danger'><MdDelete /></button>
                </div>
                <div className='mx-1 but'>
                  <button className='btn btn-success'><MdOutlineMarkAsUnread /></button>
                </div>
                <div className='mx-1 but'>
                  <button className='btn btn-success' ><BiAlarmSnooze /></button>

                </div>
              </div>
            </div>
          </div>
        )
      }
      </div>
    </>
  )
}

export default Star;