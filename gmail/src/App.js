import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Gmailmain from './Components/Gmailmain'
import React,{useState} from 'react'
const App = () => {
  const [arr, setArr] = useState([]);
  const [snooz,setsnoozed]=useState(1)
  const [sidenav,setsidenav]=useState(true)
  const [ovr,setovr]=useState(false)


  return (
    <>
       <div>
         <Gmailmain sidenav={sidenav} setsidenav={setsidenav} 
         arr = {arr} 
         setArr ={setArr} 
         snooz = {snooz} 
         setsnoozed ={setsnoozed}
         ovr={ovr}
         setovr={setovr}
         />
       </div>
    </>
  )
}

export default App;
