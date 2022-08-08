import React from 'react'
import { NavLink } from 'react-router-dom'
// import Promotiondata from './Promotiondata';
import Bodynavbar from './Bodynavbar'
import Bodyheadnav from './Bodyheadnav';
import Promotiondata from './Promotiondata';
import { MdDelete, MdOutlineMarkAsUnread } from "react-icons/md";
import { BiArchiveIn, BiAlarmSnooze } from "react-icons/bi";
import  Message from './Message'
import { useEffect,useState } from 'react';
import axios from 'axios'
const Sentbody = () => {
const [sent,setsent]=useState([])





  useEffect(()=>{
    async function sentgetdata(){
      try {
        const sentdata=await axios.get('http://127.0.0.1:8000/api/sent/')
        console.log(sentdata.data)
        setsent(sentdata.data)
      } catch (error) {
        console.log(error)
      }
    }
    sentgetdata()
  },[])
  
  return (
    <>
    <div>
    <Bodyheadnav />
    </div>
    {
      sent .map((val, ind) =>
          <div className='primarybody'>
            <NavLink exact to='#' style={{ textDecoration: 'none' }}>
              <div>
                <div className='d-flex '>
                  <div style={{ marginTop: '10px' }} className='d-flex mx-1'>
                    <div className='mx-1'>
                      <input type="checkbox" />
                    </div>
                    <div className='mx-2'>
                      <strong>{val.Company}</strong>
                    </div>

                    <div style={{width:'100px'}}>
                      <strong className='text-black text-bold '>{val.subject}</strong>
                    </div>

                    <div style={{marginLeft:'100px',width:'400px'}}>
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
                  <button className='btn btn-success'><BiAlarmSnooze /></button>

                </div>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default Sentbody;




// import React from 'react'

// const Sentbody = () => {
//   return (
//     <div>Sentbody</div>
//   )
// }

// export default Sentbody 