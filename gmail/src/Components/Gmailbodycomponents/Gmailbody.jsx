import React from 'react'
import {  Route, Routes } from 'react-router-dom';
import Social from './Social';
import Primary from './Primary';
import Promotion from './Promotion';
import Bodyheadnav from './Bodyheadnav';
import Primarymainpage from './Primarymainpage'; 
import  Promotionmainpage from './Promotionmainpage';
import Socialmainpage from './Socialmainpage';
import Sent from './Sent';
import Sentbody from './Sentbody';
import Profile from './Profile';
import Snoozed from './Snoozed';
import Star from './Star';
import Spam from './Spam';
import { useState } from 'react';
const Gmailbody = ({arr, setArr,snooz,setsnoozed}) => {
  // const [snooz,setsnoozed]=useState([])
  return (
    <>
      <div>
       
      </div>
      <div>
        <Routes>
          <Route exact path="/" element={<Primary snooz = {snooz} setsnoozed ={setsnoozed}  />} />
          <Route exact path="/social" element={<Social />} />
          <Route/>
          <Route exact path="/socialmain" element={<Socialmainpage/>}></Route>
          <Route exact path="/promotion" element={<Promotion />} />
          <Route exact path="/:id/" element={<Primarymainpage  />}></Route>
          <Route exact path="/Promotionmainpage" element={<Promotionmainpage/>}></Route>
          <Route exact path="/sent" element={<Sent  arr = {arr} setArr ={setArr} />}></Route>
          <Route exact path="/Sentbody" element={<Sentbody  arr = {arr} setArr ={setArr} />}></Route>
          <Route exact path="/Snoozed" element={<Snoozed  snooz = {snooz} setsnoozed ={setsnoozed} />}></Route>
          <Route exact path="/profile" element={<Profile />}></Route>
          <Route exact path="/star" element={<Star />}></Route>
          <Route exact path="/spam" element={<Spam />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default Gmailbody;
