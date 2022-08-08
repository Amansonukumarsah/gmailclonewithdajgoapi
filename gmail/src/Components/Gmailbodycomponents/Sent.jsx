import React from 'react'
import { useState } from 'react'
import { DiGoogleDrive } from "react-icons/di"
import { BiPencil, BiMinus } from "react-icons/bi"
import { BsThreeDotsVertical } from "react-icons/bs"
import { ImCross } from "react-icons/im"
import { AiOutlineExpandAlt } from "react-icons/ai"
import { MdDelete, MdOutlineLockClock, MdInsertPhoto, MdAttachFile, MdFormatColorText, MdOutlineInsertLink, MdOutlineEmojiEmotions } from "react-icons/md";
import {Link} from 'react-router-dom'
import axios from 'axios'
const Sent = () => {
 
   const [to,setto]=useState('')
   const [sub,setsub]=useState('')
   const [data,setdata]=useState('')

//    const [msg,setmsg]=useState({
//        to:'',
//        Subject:'',
//        sentbody:''
//    })


// //    const [data,setdata]=useState([])


// const change=(e)=>{
//     const arr1={...msg}
//     arr1[e.target.id]=e.target.value
//     setmsg(arr1)
//   }
  
//   const submit=()=>{
//     setArr(msg)
//   } 

// console.log(msg)


async function post()
  {
    let formField = new FormData()
    formField.append('Title',to)
    formField.append('Company',sub)
    formField.append('Data',data)
    console.log(formField)
    await axios({
        method:'POST',
        url:'http://127.0.0.1:8000/api/sent/',
        data:formField
    }).then((response)=>{
        console.log(response.data)
    })
}

    return (
        <>
            <div className='sentbody'>


                <div className='d-flex newmessage'>
                    <div >
                        <p>New_message</p>
                    </div>
                    <div className='d-flex' style={{ marginLeft: '300px' }}>

                        <div className='sentcross'>
                            <BiMinus />
                        </div>

                        <div className='mx-2 sentcross'>
                            <AiOutlineExpandAlt/>
                        </div>

                        <div className='mx-2 sentcross' >
                            <Link to='/'>
                                <ImCross />
                            </Link>
                        </div>

                    </div>
                </div>



                <div className='tosentmessage'>
                   <label htmlFor="">
                       To: <input 
                       style={{width:'435px'}} 
                        name='to'
                        value={to}
                        onChange={(e)=>setto(e.target.value)} 
                        />
                   </label>
                </div>



                <div className='tosentmessage'>
                    <label >
                        Subject: <input 
                        style={{width:'435px'}} 
                        type="text" 
                        name='sub'
                        value={sub}
                        onChange={(e)=>setsub(e.target.value)} 
                        />
                    </label>
                </div>


                <div className='tosentmessage'>
                    <textarea
                    className='sentbodyinput' 
                    name='data'
                    value={data}
                    onChange={(e)=>setdata(e.target.value)}
                    >
                    </textarea>
                </div>


                <div className='d-flex'>

                    <div>
                        <Link to='/'>
                        <button className='btn btn-primary my-2' onClick={post} style={{ borderRadius: '9px' }} type="submit">Send</button>
                        </Link>
                    </div>
                    <div className='d-flex mx-2'>
                        <div className='my-2 sentcross'>
                            <MdFormatColorText size={20} />
                        </div>
                        <div className='my-2 mx-2 sentcross'>
                            <MdAttachFile size={20} />
                        </div>
                        <div className='my-2 mx-2 sentcross'>
                            <MdOutlineInsertLink size={20} />
                        </div>
                        <div className='my-2 mx-2 sentcross'>
                            <MdOutlineEmojiEmotions size={20} />
                        </div>
                        <div className='my-2 mx-2 sentcross'>
                            <DiGoogleDrive size={20} />
                        </div>
                        <div className='my-2 mx-2 sentcross'>
                            <MdInsertPhoto size={20} />
                        </div>
                        <div className='my-2 mx-2 sentcross'>
                            <MdOutlineLockClock size={20} />
                        </div>
                        <div className='my-2 mx-2 sentcross'>
                            <BiPencil size={20} />
                        </div>
                    </div>
                    <div className='d-flex ' style={{ marginLeft: '90px' }}>
                        <div className='my-2 sentcross'>
                            <BsThreeDotsVertical sizr={20} />
                        </div>
                        <div className='my-2 sentcross'>
                            <MdDelete size={20} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sent;


// const [data,setdata]=useState({
//     email:'',
//     contact:'',
//     feed_back:''
// })

// const change=(e)=>{
//     const arr={...data}
//     arr[e.target.id]=e.target.value
//     setdata(arr)
// } 



 // const arr=createContext()

    // const [msg, setMsg] = useState({
    //     email:'',
    //     sub:'',
    //     content:'',
    // });


    // const message =(event,data)=>{
    //     let obj = msg;
    //     obj[data] = event?.target?.value; 
    //     setMsg(obj);
    // }

    // const handleSubmit = ()=>{
    //     setArr([...arr, msg]);
    //     setMsg({
    //         email:'',
    //         sub:'',
    //         content:'',
    //     })
    //     console.log(arr);
    // }

    