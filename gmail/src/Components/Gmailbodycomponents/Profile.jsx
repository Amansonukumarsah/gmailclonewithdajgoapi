import React from 'react'
import {Link} from 'react-router-dom'
import aman from './Imagedata/Aman.jpg'
import { NavLink } from 'react-router-dom'
import { ImCross } from "react-icons/im"

const Profile = () => {
  return (
    <>
      <div className='profile'>
        <div className='text-center my-2'>
          <div className='amanimg'>
            <img src={aman} alt="" srcset="" />
          </div>
          <div>
             <small>Aman Kumar Sah</small>
             <p>amankumarshah8102@gmail.com</p>
          </div>
          <div className='manage'>
            <NavLink to='' style={{textDecoration:'none'}}>
              <p>Manage Your Account</p>
            </NavLink>
          </div>
           <hr />
          <div>
              <h4>Add Another Account</h4>
          </div>

          <hr />
          <div className='Sign'>
            <NavLink to='' style={{textDecoration:'none'}}>
              <ul>
                <li>
                  Sign_Out
                </li>
              </ul>
            </NavLink>
          </div>
          <hr />
        </div>
         <div className='mx-5 d-flex'>
           <p>
            copy right...
           </p>
           <div className='mx-5'>
           <Link to='/'>
             <ul>
              <li>
                <ImCross />
              </li>
             </ul>
           </Link>
           </div>
         </div>
      </div>
    </>
  )
}

export default Profile;