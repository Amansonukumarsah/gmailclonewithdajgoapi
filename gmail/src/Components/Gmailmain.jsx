import React from 'react'
import './Css/Gmail.css'
import Menu from './Navbar/Menu'
import SideMenu from './Sidecomponents/SideMenu'
import Gmailbody from './Gmailbodycomponents/Gmailbody'
// import { useState } from 'react'
const Gmailmain = ({ arr, setArr, snooz, setsnoozed, sidenav, setsidenav, ovr, setovr }) => {

  return (
    <>
      <div>
        <Menu sidenav={sidenav} setsidenav={setsidenav} />
      </div>
      {
        sidenav ? <div className="container-fluid">
          <div className="row">
            <div className="col-2 sidemenu">
              <SideMenu
                sidenav={sidenav}
                setsidenav={setsidenav}
                ovr={ovr}
                setovr={setovr}
              />
            </div>
            <div className="col-10">
              <Gmailbody arr={arr} setArr={setArr} snooz={snooz} setsnoozed={setsnoozed} sidenav={sidenav} setsidenav={setsidenav} />
            </div>
          </div>
        </div>
          :
          <div className="container-fluid">
            {
              ovr ?
                  <div className="row">

                    <div className="col-2 sidemenu">
                      <SideMenu sidenav={sidenav} setsidenav={setsidenav}
                        ovr={ovr}
                        setovr={setovr}
                      />
                    </div>

                    <div className="col-10">
                      <Gmailbody arr={arr} setArr={setArr} snooz={snooz} setsnoozed={setsnoozed} sidenav={sidenav} setsidenav={setsidenav} />
                    </div>

                  </div>
                :
                  <div className="row">

                    <div className="col-1 sidemenu">
                      <SideMenu sidenav={sidenav} setsidenav={setsidenav}
                        ovr={ovr}
                        setovr={setovr}
                      />
                    </div>

                    <div className="col-11">
                      <Gmailbody arr={arr} setArr={setArr} snooz={snooz} setsnoozed={setsnoozed} sidenav={sidenav} setsidenav={setsidenav} />
                    </div>
                  </div>
            }
          </div>
      }
    </>
  )
}

export default Gmailmain;
