import React from 'react'
import Socialdata from './Socialdata'
import { NavLink } from 'react-router-dom'
import Bodynavbar from './Bodynavbar'
import Bodyheadnav from './Bodyheadnav';

import { MdDelete, MdOutlineMarkAsUnread } from "react-icons/md";
import { BiArchiveIn, BiAlarmSnooze } from "react-icons/bi";

const Social = () => {
  return (
    <>
    <div>
    <Bodyheadnav />
      <Bodynavbar/>
    </div>
    {
        Socialdata.map((val, ind) =>
          <div className='primarybody'>
            <NavLink exact  to='/socialmain' style={{ textDecoration: 'none' }}>
              <div>
                <div className='d-flex '>
                  <div style={{ marginTop: '10px' }} className='d-flex mx-1'>
                    <div className='mx-1'>
                      <input type="checkbox" />
                    </div>
                    <div className='mx-2'>
                      <strong>{val.star}</strong>
                    </div>

                    <div style={{width:'5px'}}>
                      <strong className='text-black text-bold '>{val.company}</strong>
                    </div>

                    <div style={{marginLeft:'50px',width:'400px'}}>
                      <strong>{val.title}</strong>
                    </div>


                    <div className='primarydata'>
                      <p >-{val.data}</p>
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
    </>
  )
}

export default Social;
