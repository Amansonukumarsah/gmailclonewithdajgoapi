import React, { startTransition } from 'react'
// import Primarydata from './Primarydata';
import Bodynavbar from './Bodynavbar'
import { NavLink } from 'react-router-dom';
import Bodyheadnav from './Bodyheadnav';
import { MdDelete, MdOutlineMarkAsUnread } from "react-icons/md";
import { BiArchiveIn, BiAlarmSnooze } from "react-icons/bi";
import { useState, useEffect } from 'react';
import { AiOutlineStar } from "react-icons/ai";
import axios from 'axios'
import Message from './Message'
const Primary = () => {

  const [primarydata, setprimary] = useState([])
  const [data, setdata] = useState({})
  const [title, settitle] = useState('')
  const [starcolor,setstarcolr]=useState(true)
  const [inp,setinp]=useState(true)



  async function snoozpost(id) {
    try {
      const arr = await axios.get(`http://127.0.0.1:8000/api/primary/${id}/`)
      setdata(arr.data)
      alert('this file is send to the Snoozed folder')
      await axios({
        method: 'POST',
        url: 'http://127.0.0.1:8000/api/snooz/',
        data: arr.data
      }).then((response) => {
        console.log(response.data)
      })
      fetch(`http://127.0.0.1:8000/api/primary/${id}/`, {
        method: 'DELETE'
      }).then((result) => {
        result.json().then((resp) => {
          console.warn(resp)
        })
      })
    } catch (error) {
      console.log(error)
    }

  }



  async function del(id) {
    try {
      const arr = await axios.get(`http://127.0.0.1:8000/api/primary/${id}/`)
      setdata(arr.data)
      alert('this file is send to the Spam folder')
      await axios({
        method: 'POST',
        url: 'http://127.0.0.1:8000/api/spam/',
        data: arr.data
      }).then((response) => {
        console.log(response.data)
      })
      fetch(`http://127.0.0.1:8000/api/primary/${id}/`, {
        method: 'DELETE'
      }).then((result) => {
        result.json().then((resp) => {
          console.warn(resp)
        })
      })
    } catch (error) {
      console.log(error)
    }

  }



  async function star1(id) {
     setstarcolr(true)
     fetch(`http://127.0.0.1:8000/api/star/${id}/`, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
      })
    })

  }


  async function star(id) {
    setstarcolr(false)
   try {
     const arr = await axios.get(`http://127.0.0.1:8000/api/primary/${id}/`)
     setdata(arr.data)
     alert('this file is send to the star folder')

     await axios({
       method: 'POST',
       url: 'http://127.0.0.1:8000/api/star/',
       data: arr.data
     }).then((response) => {
       console.log(response.data)
     })


   } catch (error) {
     console.log(error)
   }

 }




  useEffect(() => {
    async function getdata() {
      try {
        const arr = await axios.get('http://127.0.0.1:8000/api/primary/')
        setprimary(arr.data)
        //  console.log(arr.data)
      } catch (error) {
        console.log(error)
      }
    }
    getdata()
  }, [])


  // dispatchSetState({
  //   setprimary(data)
  // }) 

  // }
  // useEffect(()=>{
  //   setprimary(data)
  // },[])

const [inp1,setinp1]=useState(false)
const [dataid,setdataid]=useState()

const input=(id)=>{
  if(inp1==false)
  {
    setinp(false)
    setinp1(true)
  }
  if(inp1==true)
  {
    setinp(true)
    setinp1(false)
  }
  setdataid(id)
}
// console.log(dataid)
  return (
    <>
      <div>
        {
          inp?<Bodyheadnav />:<Message dataid={dataid}/>
        }
        <Bodynavbar />
      </div>
      {
        primarydata.map((val, ind) =>
          <div className='primarybody'>

            <div>

              <div className='d-flex'>

                <div className='d-flex mx-1'>

                  <div className='mx-1'>
                    <input onClick={()=>input(val.id)} type="checkbox" />
                  </div>

                  <div  className='mx-2'>
                    {
                      starcolor?
                        <strong  onClick={()=>star(val.id)} ><AiOutlineStar /></strong>
                      :
                      <strong  onClick={()=>star1(val.id)} className='star'><  AiOutlineStar size={25} /></strong>
                    }
                    
                  </div>

                </div>

                <div className='d-flex'>

                  <NavLink exact to={`/${val.id}/`} style={{ textDecoration: 'none' }}>

                    <div className='d-flex'>

                      <div className='d-flex'>
                        <div style={{width:'120px'}}>
                          <strong className='text-black text-bold '>{val.Company}</strong>
                        </div>

                        <div className='mx-2'>
                          <strong>{val.Title}</strong>
                        </div>

                      </div>

                      <div className='primarydata'>
                        <p >-{val.Data}</p>
                      </div>


                    </div>




                  </NavLink>

                </div>

              </div>
            </div>
            <hr />

            <div className='primaryhover'>
              <div className='d-flex primarylogo'>
                <div className='mx-1 but'>
                  <button className='btn btn-success'><BiArchiveIn /></button>
                </div>
                <div className='mx-1 but'>
                  <button className='btn btn-danger' onClick={() => del(val.id)}><MdDelete /></button>
                </div>
                <div className='mx-1 but'>
                  <button className='btn btn-success'><MdOutlineMarkAsUnread /></button>
                </div>
                <div className='mx-1 but'>
                  <button className='btn btn-success' onClick={() => snoozpost(val.id)}><BiAlarmSnooze /></button>

                </div>
              </div>
            </div>

          </div>
        )
      }
    </>
  )
}

export default Primary;






{/* <div className="container-fluid ">
              <div className="row">
                <div className="col-2">
                  <div className='d-flex' style={{ marginTop: '5px', padding: '0px', marginLeft: '0px' }}>
                    <input style={{ fontSize: '15px', marginTop: '7px' }} type="checkbox" />
                    <p className='heading mx-1 text-bold text-black' style={{ fontSize: '15px' }}>{val.company}</p>
                  </div>
                </div>
                <div className="col-10">
                  <div className='d-flex'>
                    <div>
                      <strong className='text-bold text-black'>{val.title}</strong>
                    </div>
                    <div>
                    <p className='text-bold text-black'>{val.title}</p>
                    </div>
                  </div>
                </div>
              </div>

            </div> */}
