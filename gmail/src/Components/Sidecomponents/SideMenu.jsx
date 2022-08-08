import React from 'react'
// import Sidedata from './Sidedata'
// import useState from 'react'
import { FaJoint } from "react-icons/fa"
import { FcBusinessman, FcPlus } from "react-icons/fc"
import { MdMeetingRoom, MdOutlineExpandMore } from "react-icons/md"
import { ImHangouts } from "react-icons/im"
import { AiOutlinePlus } from "react-icons/ai"
import { NavLink } from 'react-router-dom'
import { FiInbox } from "react-icons/fi";
import { FaTelegramPlane, FaLessThan, FaSnapchatSquare } from "react-icons/fa";
import { AiOutlineStar, AiFillSchedule, AiOutlineFall } from "react-icons/ai";
import { BiAlarmSnooze } from "react-icons/bi";
import { MdLabelImportant, MdDelete } from "react-icons/md";
import { useState } from 'react'
const SideMenu = ({ sidenav, setsidenav, ovr, setovr }) => {

  const [data, setdata] = useState(false)
  const [star, setstar] = useState(false)
  const [sooz, setsooz] = useState(false)
  const [sen, setsent] = useState(false)
  const [draft, setdraft] = useState(false)
  const [spam, setspam] = useState(false)
  const [imp, setimp] = useState(false)
  const [chat, setchat] = useState(false)
  const [sech, setsech] = useState(false)
  const [all, setall] = useState(false)

  const [sidehover, setsidehover] = useState(false)

  const inbox = () => {
    setsooz(false)
    setsent(false)
    setspam(false)
    setdraft(false)
    setall(false)
    setsech(false)
    setchat(false)
    setstar(false)
    setdata(true)
    setimp(false)
  }

  const stareed = () => {
    setsooz(false)
    setsent(false)
    setspam(false)
    setdraft(false)
    setall(false)
    setsech(false)
    setchat(false)
    setstar(true)
    setdata(false)
    setimp(false)
  }

  const snoozed = () => {
    setsooz(true)
    setsent(false)
    setspam(false)
    setdraft(false)
    setall(false)
    setsech(false)
    setchat(false)
    setstar(false)
    setdata(false)
    setimp(false)
  }

  const Sent = () => {
    setsooz(false)
    setsent(true)
    setspam(false)
    setdraft(false)
    setall(false)
    setsech(false)
    setchat(false)
    setstar(false)
    setdata(false)
    setimp(false)
  }


  const Spam = () => {
    setsooz(false)
    setsent(false)
    setspam(true)
    setdraft(false)
    setall(false)
    setsech(false)
    setchat(false)
    setstar(false)
    setdata(false)
    setimp(false)
  }


  const Drafts = () => {
    setsooz(false)
    setsent(false)
    setspam(false)
    setdraft(true)
    setall(false)
    setsech(false)
    setchat(false)
    setstar(false)
    setdata(false)
    setimp(false)
  }

  const Important = () => {
    setsooz(false)
    setsent(false)
    setspam(false)
    setdraft(false)
    setall(false)
    setsech(false)
    setchat(false)
    setstar(false)
    setdata(false)
    setimp(true)
  }


  const Chats = () => {
    setsooz(false)
    setsent(false)
    setspam(false)
    setdraft(false)
    setall(false)
    setsech(false)
    setchat(true)
    setstar(false)
    setdata(false)
    setimp(false)
  }


  const Secheduled = () => {
    setsooz(false)
    setsent(false)
    setspam(false)
    setdraft(false)
    setall(false)
    setsech(true)
    setchat(false)
    setstar(false)
    setdata(false)
    setimp(false)
  }

  const allmails = () => {
    setsooz(false)
    setsent(false)
    setspam(false)
    setdraft(false)
    setall(true)
    setsech(false)
    setchat(false)
    setstar(false)
    setdata(false)
    setimp(false)
  }



  const [side, setside] = useState(true)
  const [sidedata, setsidedata] = useState('Less')

  const sidedisplay = () => {
    if (sidedata === 'Less') {
      setside(false)
      setsidedata('More')
    }
    else {
      setside(true)
      setsidedata('Less')
    }
  }

  // const [comp, setcomp] = useState(false)
  // const compose=()=>{
  //   setcomp(true)
  // }
  // const [data,setdata]=useState()
  // const change=(e)=>{
  //  console.log(e.target.value)
  // }
  // console.log(data)

  const [ov, setov] = useState(false)
  const [ou, setou] = useState(false)


  const over = () => {
    setovr(true)
    // setou(false)
  }

  const out = () => {
    setovr(false)
    // setov(false)
  }

  return (
    <>

      {
        sidenav ?

          <div>

            <NavLink style={{ textDecoration: 'none' }} to='/sent'>
              <div className='d-flex compose'>
                <div>
                  <FcPlus size={30} />
                </div>
                <div>
                  <p>Compose</p>
                </div>
              </div>
            </NavLink>


            <div className='sidemenubar text-center'>


              <NavLink style={{ textDecoration: 'none' }} to='/'>
                <ul onClick={inbox} className={data ? 'inactive' : 'deactive'}>
                  <li className='d-flex text-center'>
                    <div>
                      <small><FiInbox size={20} /></small>
                    </div>
                    <div className='mx-2'>
                      <p >inbox</p>
                    </div>
                  </li>
                </ul>
              </NavLink>

              <NavLink style={{ textDecoration: 'none' }} to='/star'>
                <ul onClick={stareed} className={star ? 'inactive' : 'deactive'}>
                  <li className='d-flex text-center'>
                    <div>
                      <small><AiOutlineStar size={20} /></small>
                    </div>
                    <div className='mx-2'>
                      <p >Starred</p>
                    </div>
                  </li>
                </ul>
              </NavLink>


              <NavLink style={{ textDecoration: 'none' }} to='/Snoozed' >
                <ul onClick={snoozed} className={sooz ? 'inactive' : 'deactive'}>
                  <li className='d-flex text-center'>
                    <div>
                      <small><BiAlarmSnooze size={20} /></small>
                    </div>
                    <div className='mx-2'>
                      <p >Snoozed</p>
                    </div>
                  </li>
                </ul>
              </NavLink>

              <NavLink style={{ textDecoration: 'none' }} to='/Sentbody'>
                <ul onClick={Sent} className={sen ? 'inactive' : 'deactive'}>
                  <li className='d-flex text-center'>
                    <div>
                      <small><FaTelegramPlane size={20} /></small>
                    </div>
                    <div className='mx-2'>
                      <p >Sent</p>
                    </div>
                  </li>
                </ul>
              </NavLink>

              <NavLink style={{ textDecoration: 'none' }} to='/spam'>
                <ul onClick={Spam} className={spam ? 'inactive' : 'deactive'}>
                  <li className='d-flex text-center'>
                    <div>
                      <small><MdDelete size={20} /></small>
                    </div>
                    <div className='mx-2'>
                      <p >Spam</p>
                    </div>
                  </li>
                </ul>
              </NavLink>


              <NavLink style={{ textDecoration: 'none' }} to=''>
                <ul onClick={Drafts} className={draft ? 'inactive' : 'deactive'}>
                  <li className='d-flex text-center'>
                    <div>
                      <small><FiInbox size={20} /></small>
                    </div>
                    <div className='mx-2'>
                      <p >Drafts</p>
                    </div>
                  </li>
                </ul>
              </NavLink>



              <NavLink style={{ textDecoration: 'none' }} to=''>
                <ul>
                  <li onClick={sidedisplay} className='d-flex text-center'>
                    <div>
                      {
                        side ? <small><FaLessThan size={20} /></small> : <small><MdOutlineExpandMore size={20} /></small>
                      }
                    </div>
                    <div className='mx-2'>
                      <p >{sidedata}</p>
                    </div>
                  </li>
                </ul>
              </NavLink>


              <div className={side ? 'sideless' : 'sidemore'}>
                <NavLink style={{ textDecoration: 'none' }} to=''>
                  <ul onClick={Important} className={imp ? 'inactive' : 'deactive'}>
                    <li className='d-flex text-center'>
                      <div>
                        <small><MdLabelImportant size={20} /></small>
                      </div>
                      <div className='mx-2'>
                        <p >Important</p>
                      </div>
                    </li>
                  </ul>
                </NavLink>



                <NavLink style={{ textDecoration: 'none' }} to=''>
                  <ul onClick={Chats} className={chat ? 'inactive' : 'deactive'}>
                    <li className='d-flex text-center'>
                      <div>
                        <small><FaSnapchatSquare size={20} /></small>
                      </div>
                      <div className='mx-2'>
                        <p >Chats</p>
                      </div>
                    </li>
                  </ul>
                </NavLink>



                <NavLink style={{ textDecoration: 'none' }} to=''>
                  <ul onClick={Secheduled} className={sech ? 'inactive' : 'deactive'}>
                    <li className='d-flex text-center'>
                      <div>
                        <small><AiFillSchedule size={20} /></small>
                      </div>
                      <div className='mx-2'>
                        <p >Scheduled</p>
                      </div>
                    </li>
                  </ul>
                </NavLink>



                <NavLink style={{ textDecoration: 'none' }} to=''>
                  <ul onClick={allmails} className={all ? 'inactive' : 'deactive'}>
                    <li className='d-flex text-center'>
                      <div>
                        <small><AiOutlineFall size={20} /></small>
                      </div>
                      <div className='mx-2'>
                        <p >All Mail</p>
                      </div>
                    </li>
                  </ul>
                </NavLink>


              </div>




            </div>
            <hr />

            <div>
              <p>MEET</p>
              <ul className='meet'>

                <li className='d-flex'>
                  <div>
                    <MdMeetingRoom />
                  </div>
                  <div className='mx-2'>
                    <p>New Meeting</p>
                  </div>
                </li>
              </ul>
              <ul className='meet'>

                <li className='d-flex'>
                  <div>
                    <FaJoint />
                  </div>
                  <div className='mx-2'>
                    <p>Join Meeting</p>
                  </div>
                </li>
              </ul>
            </div>

            <hr />

            <div>
              <p>HANGOUT</p>
              <ul className='hangout'>
                <li className='d-flex'>
                  <div>
                    <FcBusinessman />
                  </div>
                  <div className='mx-2'>
                    <p>AMAN</p>
                  </div>
                  <div style={{ marginLeft: '60px' }}>
                    <AiOutlinePlus />
                  </div>
                </li>
              </ul>
            </div>

            <hr />

            <div>
              <ul>
                <li className='d-flex' style={{ height: '50px' }}>

                </li>
              </ul>
            </div>

            <hr />

            <div>
              <ul>
                <li className='d-flex'>
                  <FcBusinessman />
                  <ImHangouts />
                </li>
              </ul>
            </div>

          </div>


          :
          <div
            onMouseOver={over}
            onMouseOut={out}
          >

            <NavLink style={{ textDecoration: 'none' }} to='/sent'>
              {
                ovr ? <div className='d-flex compose'>
                  <div>
                    <FcPlus size={30} />
                  </div>
                  <div>
                    <p>Compose</p>
                  </div>
                </div>
                  :
                  <div style={{ marginLeft: '31px', marginTop: '5px' }}>
                    <div>
                      <FcPlus size={30} />
                    </div>
                  </div>
              }
            </NavLink>


            <div className='sidemenubar'>

              <NavLink style={{ textDecoration: 'none' }} to='/'>
                <ul onClick={inbox} className={data ? 'inactive' : 'deactive'}>


                  {
                    ovr ?
                      <li className='d-flex text-center'>
                        <div>
                          <small><FiInbox size={20} /></small>
                        </div>
                        <div className='mx-2'>
                          <p >inbox</p>
                        </div>
                      </li>
                      :
                      <li >
                        <div>
                          <small><FiInbox size={20} /></small>
                        </div>
                      </li>
                  }
                </ul>
              </NavLink>

              <NavLink style={{ textDecoration: 'none' }} to='/star'>
                <ul onClick={stareed} className={star ? 'inactive' : 'deactive'}>
                {
                    ovr ?
                      <li className='d-flex text-center'>
                        <div>
                        <small><AiOutlineStar size={20} /></small>
                        </div>
                        <div className='mx-2'>
                          <p >Starred</p>
                        </div>
                      </li>
                      :
                      <li >
                        <div>
                        <small><AiOutlineStar size={20} /></small>
                        </div>
                      </li>
                  }
                </ul>
              </NavLink>


              <NavLink style={{ textDecoration: 'none' }} to='/Snoozed' >
                <ul onClick={snoozed} className={sooz ? 'inactive' : 'deactive'}>
                {
                    ovr ?
                      <li className='d-flex text-center'>
                        <div>
                        <small><BiAlarmSnooze size={20} /></small>
                        </div>
                        <div className='mx-2'>
                          <p >Snoozed</p>
                        </div>
                      </li>
                      :
                      <li >
                        <div>
                        <small><BiAlarmSnooze size={20} /></small>
                        </div>
                      </li>
                  }
                </ul>
              </NavLink>

              <NavLink style={{ textDecoration: 'none' }} to='/Sentbody'>
                <ul onClick={Sent} className={sen ? 'inactive' : 'deactive'}>
                {
                    ovr ?
                      <li className='d-flex text-center'>
                        <div>
                        <small><FaTelegramPlane size={20} /></small>
                        </div>
                        <div className='mx-2'>
                          <p >Sent</p>
                        </div>
                      </li>
                      :
                      <li >
                        <div>
                        <small><FaTelegramPlane size={20} /></small>
                        </div>
                      </li>
                  }
                </ul>
              </NavLink>

              <NavLink style={{ textDecoration: 'none' }} to='/spam'>
                <ul onClick={Spam} className={spam ? 'inactive' : 'deactive'}>
                {
                    ovr ?
                      <li className='d-flex text-center'>
                        <div>
                        <small><MdDelete size={20} /></small>
                        </div>
                        <div className='mx-2'>
                          <p >Spam</p>
                        </div>
                      </li>
                      :
                      <li >
                        <div>
                        <small><MdDelete size={20} /></small>
                        </div>
                      </li>
                  }
                </ul>
              </NavLink>


              <NavLink style={{ textDecoration: 'none' }} to=''>
                <ul onClick={Drafts} className={draft ? 'inactive' : 'deactive'}>
                {
                    ovr ?
                      <li className='d-flex text-center'>
                        <div>
                        <small><FiInbox size={20} /></small>
                        </div>
                        <div className='mx-2'>
                          <p >Draft</p>
                        </div>
                      </li>
                      :
                      <li >
                        <div>
                        <small><FiInbox size={20} /></small>
                        </div>
                      </li>
                  }
                </ul>
              </NavLink>



              <NavLink style={{ textDecoration: 'none' }} to=''>
                <ul>

                {
                    ovr ?
                      <li className='d-flex text-center' onClick={sidedisplay}>
                        <div>
                        {
                        side ? <small><FaLessThan size={20} /></small> : <small><MdOutlineExpandMore size={20} /></small>
                      }
                        </div>
                        <div className='mx-2'>
                          <p >Less</p>
                        </div>
                      </li>
                      :
                      <li onClick={sidedisplay}>
                        <div>
                        {
                        side ? <small><FaLessThan size={20} /></small> : <small><MdOutlineExpandMore size={20} /></small>
                      }
                        </div>
                      </li>
                  }
                </ul>
              </NavLink>


              <div className={side ? 'sideless' : 'sidemore'}>
                <NavLink style={{ textDecoration: 'none' }} to=''>
                  <ul onClick={Important} className={imp ? 'inactive' : 'deactive'}>
                  {
                    ovr ?
                      <li className='d-flex text-center'>
                        <div>
                        <small><MdLabelImportant size={20} /></small>
                        </div>
                        <div className='mx-2'>
                          <p >Important</p>
                        </div>
                      </li>
                      :
                      <li >
                        <div>
                        <small><MdLabelImportant size={20} /></small>
                        </div>
                      </li>
                  }
                  </ul>
                </NavLink>



                <NavLink style={{ textDecoration: 'none' }} to=''>
                  <ul onClick={Chats} className={chat ? 'inactive' : 'deactive'}>
                  {
                    ovr ?
                      <li className='d-flex text-center'>
                        <div>
                        <small><FaSnapchatSquare size={20} /></small>
                        </div>
                        <div className='mx-2'>
                          <p >Chats</p>
                        </div>
                      </li>
                      :
                      <li >
                        <div>
                        <small><FaSnapchatSquare size={20} /></small>
                        </div>
                      </li>
                  }
                  </ul>
                </NavLink>



                <NavLink style={{ textDecoration: 'none' }} to=''>
                  <ul onClick={Secheduled} className={sech ? 'inactive' : 'deactive'}>
                  {
                    ovr ?
                      <li className='d-flex text-center'>
                        <div>
                        <small><AiFillSchedule size={20} /></small>
                        </div>
                        <div className='mx-2'>
                          <p >Schedule</p>
                        </div>
                      </li>
                      :
                      <li >
                        <div>
                        <small><AiFillSchedule size={20} /></small>
                        </div>
                      </li>
                  }
                  </ul>
                </NavLink>



                <NavLink style={{ textDecoration: 'none' }} to=''>
                  <ul onClick={allmails} className={all ? 'inactive' : 'deactive'}>

                  {
                    ovr ?
                      <li className='d-flex text-center'>
                        <div>
                        <small><AiOutlineFall size={20} /></small>
                        </div>
                        <div className='mx-2'>
                          <p >Allmails</p>
                        </div>
                      </li>
                      :
                      <li >
                        <div>
                        <small><AiOutlineFall size={20} /></small>
                        </div>
                      </li>
                  }
                  </ul>
                </NavLink>
              </div>

            </div>


            <hr />

            <div>
              <p>MEET</p>
              <ul className='meet'>
              {
                    ovr ?
                      <li className='d-flex text-center'>
                        <div>
                        <small><MdMeetingRoom size={20} /></small>
                        </div>
                        <div className='mx-2'>
                          <p >New Meeting</p>
                        </div>
                      </li>
                      :
                      <li >
                        <div>
                        <small><MdMeetingRoom size={20} /></small>
                        </div>
                      </li>
                  }

              </ul>
              <ul className='meet'>
              {
                    ovr ?
                      <li className='d-flex text-center'>
                        <div>
                        <small><FaJoint size={20} /></small>
                        </div>
                        <div className='mx-2'>
                          <p >Join Meeting</p>
                        </div>
                      </li>
                      :
                      <li >
                        <div>
                        <small><FaJoint size={20} /></small>
                        </div>
                      </li>
                  }
              </ul>
            </div>

            <hr />

            <div>
              <p>HANGOUT</p>
              <ul className='hangout'>

              {
                    ovr ?
                      <li className='d-flex text-center'>
                        <div>
                        <small><FcBusinessman size={20} /></small>
                        </div>
                        <div className='mx-2'>
                          <p >AMAN</p>
                        </div>
                      </li>
                      :
                      <li >
                        <div>
                        <small><FcBusinessman size={20} /></small>
                        </div>
                      </li>
                  }
              </ul>
            </div>

            <hr />

            <div>
              <ul>
                <li className='d-flex' style={{ height: '50px' }}>

                </li>
              </ul>
            </div>

            <hr />

            <div>
              <ul>
                <li className='d-flex'>
                  <FcBusinessman />
                  <ImHangouts />
                </li>
              </ul>
            </div>


          </div>

      }

    </>
  )
}

export default SideMenu;