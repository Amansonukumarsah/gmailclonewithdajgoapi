import React from 'react'
import { MdDelete, MdOutlineMarkAsUnread,MdOutlineAddTask,MdOutlineDriveFileMove,MdLabel } from "react-icons/md";
import { BiArchiveIn, BiAlarmSnooze } from "react-icons/bi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { RiSpam2Fill } from "react-icons/ri";
// import { GrCheckbox } from "react-icons/gr";
// import { IoMdRefresh } from "react-icons/io";
import { AiOutlineMore } from "react-icons/ai";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsInputCursor } from "react-icons/bs";
import { useState, useEffect } from 'react';


async function del1(id) {
  fetch(`http://127.0.0.1:8000/api/primary/${id}/`, {
   method: 'DELETE'
 }).then((result) => {
   result.json().then((resp) => {
     console.warn(resp)
   })
 })
 alert('This data is deleted parmanently ,so please be carefull')

}


export const Message = ({dataid}) => {
  // console.log('aman',dataid)
  return (
    <div className='border-bottom'>
      <div className='d-flex bodyheadnav'>
        <ul>
          <li className='d-flex' style={{ marginTop: '9px' }}>
            {
               
            }
            <AiOutlineArrowLeft size={20} />
          </li>
        </ul>

        <ul>
          <li style={{ marginTop: '9px' }}>
            <BiArchiveIn size={20} />
          </li>
        </ul>

        <ul>
          <li style={{ marginTop: '9px' }}>
            <RiSpam2Fill size={20} />
          </li>
        </ul>
          
        <ul>
          <li style={{ marginTop: '9px' }}>
            <MdDelete size={20} onClick={()=>del1(dataid)} />
          </li>
        </ul>
        <div className='border mx-1'></div>
        <ul>
          <li style={{ marginTop: '9px' }}>
            <MdOutlineMarkAsUnread size={20} />
          </li>
        </ul>

        <ul>
          <li style={{ marginTop: '9px' }}>
            <BiAlarmSnooze size={20} />
          </li>
        </ul>
        
        <ul>
          <li style={{ marginTop: '9px' }}>
            <MdOutlineAddTask size={20} />
          </li>
        </ul>
        <div className='border mx-1'></div>
        <ul>
          <li style={{ marginTop: '9px' }}>
            <MdOutlineDriveFileMove size={20} />
          </li>
        </ul>

        <ul>
          <li style={{ marginTop: '9px' }}>
            <MdLabel size={20} />
          </li>
        </ul>

        <ul>
          <li style={{ marginTop: '9px' }}>
            <AiOutlineMore size={20} />
          </li>
        </ul>

        <div className='d-flex messagenav'>
          <p style={{ marginTop: '9px' }} className='text-black'>1-50 0f 525</p>
          <ul>
            <li style={{ marginTop: '9px' }}>
              <FaChevronLeft />
            </li>
          </ul>

          <ul>
            <li style={{ marginTop: '9px' }}>
              <FaChevronRight />
            </li>
          </ul>
        </div>

        <ul>
          <li style={{ marginTop: '9px' }}>
            <BsInputCursor size={20} />
          </li>
        </ul>

      </div>
      </div>
  )
}

export default Message