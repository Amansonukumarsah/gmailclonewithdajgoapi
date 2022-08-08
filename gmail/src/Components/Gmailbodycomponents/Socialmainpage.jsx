import React from 'react'
import { GrCheckbox } from "react-icons/gr";
import { IoMdRefresh } from "react-icons/io";
import { AiOutlineMore } from "react-icons/ai";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsInputCursor } from "react-icons/bs";
import { FcBusinesswoman} from "react-icons/fc";
import { useParams } from 'react-router-dom';

import { useEffect } from 'react';
import { useState } from 'react';
import Socialdata from './Socialdata';

import  Message from './Message'
const Socialmainpage = () => {
    const {id}=useParams()
  
  const [company,setcompany]=useState()
  const [data,setdata]=useState()
  const [title,settitle]=useState()

  useEffect(()=>{
    {
      Socialdata.map((val,ind)=>{
        if(val.id===2)
        {
          setcompany(val.company)
          setdata(val.data)
          settitle(val.title)
        }
       
      })
    }
  },[])


  // var x=id
  // Primarydata.map((val,ind)=>{
  //         if(val.id===x)
  //         {
  //           console.log(val.title)
  //         }
  //       })

  
  return (
   <>
    <div>
       <Message/>
    </div>
   <br />
      <div className="container-fluid">
        <div className="row">
          <div className="col-10">
             <h4 className='mx-5'>{title}</h4>
          </div>
          <div className="col-2">
              <small>logo</small>
          </div>
        </div>
      </div>
      <br />
      <div className='d-flex'>
        <div>
        <FcBusinesswoman size={40}/>
        </div>
        <div className='mx-2'>
          <small>{company}</small>
        </div>
      </div>
      <div>
      <br /><br />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-8 offset-2">
            <p className='font-bold'>Hii Aman,<br /> {data}</p>
          </div>
        </div>
      </div>
      <div className='my-5 text-center'>
        <button className='btn btn-primary mx-2'>Reply</button>
        <button className='btn btn-primary mx-2'>Forward</button>
      </div>    
   </>
  )
}

export default Socialmainpage;
