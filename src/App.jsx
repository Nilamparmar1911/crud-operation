// import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { EmployeData } from './component/EmplyoyeData'

// function App() {
//   const [data,setData] = useState([])
//   const [firstname,setFirstname] = useState("")
//   const [lastname,setLastname] = useState("")
//   const [age,setAge] = useState(0)
//   const [id,setId] = useState(0)

//   useEffect(()=>{
//     setData(EmployeData)
//   },[])

//   const handleEdit = (id)=>{
//     const dt = data.filter(item => item.id === id);
//     if(dt !== undefined)
//     {
//       setId(id);
//       setFirstname(dt[0].firstname);
//       setLastname(dt[0].lastname);
//       setAge(dt[0].age);
//     }
//   }
//     const handleDelete = (id)=>{
//     if(id > 0) {
//       if(window.confirm("Are you sure to delete this item")){
//         const dt = data.filter(item =>item.id !== id);
//         setData(dt);
//       }
//     }
//   }

//   const handleSave = () =>{
   
//   }

//   const handleClear = ()=>{
//       setId(0);
//       setFirstname('');
//       setLastname('');
//       setAge('');
//   }
//   return (
//     <>
//       <div className='App'>
//         <div style={{display:"flex", justifyContent:"center", marginTop:"10px", marginBottom:"10px"}}>
//           <div>
//             <label>First Name:
//               <input type='text' placeholder='Enter First name' onChange={(e)=>setFirstname(e.target.value)} value={firstname}/>
//             </label>
//           </div>
//            <div>
//             <label>Last Name:
//               <input type='text' placeholder='Enter Last name'  onChange={(e)=>setLastname(e.target.value)} value={lastname}/>
//             </label>
//           </div>
//           <div>
//             <label>Age:
//               <input type='text' placeholder='Enter Age'  onChange={(e)=>setAge(e.target.value)} value={age}/>
//             </label>
//           </div>
//          <button className='btn btn-primary' onClick={()=>handleSave(item.id)}>Save</button>&nbsp;
//          <button className='btn btn-danger' onClick={()=>handleClear(item.id)}>Clear</button>
//         </div>
//       <table className='table table-hover'>
//         <thead>
//           <tr>
//             <td>Sr no.</td>
//             <td>Id</td>
//             <td>First Name</td>
//             <td>Last Name</td>
//             <td>Age</td>
//             <td>Action</td>
//           </tr>
//         </thead>
//         <tbody>
//          {
//           data.map((item,index)=>{
//             return(
//             <tr key={index}>
//               <td>{index + 1}</td>
//               <td>{item.id}</td>
//                <td>{item.firstname}</td>
//                 <td>{item.lastname}</td>
//                  <td>{item.age}</td>
//                  <td>
//                   <button className='btn btn-primary' onClick={()=>handleEdit(item.id)}>Edit</button>&nbsp;
//                   <button className='btn btn-danger' onClick={()=>handleDelete(item.id)}>Delete</button>
//                  </td>
//             </tr>
//             )
//           })
//          }
//          </tbody>
//       </table>
//        </div>
//     </>
//   )
// }

// export default App

import React from 'react'
import Add from './component/Add'
import MulAdd from './component/MulAdd'
import Getapi from './component/Getapi'
import Todo from './component/Todo'
import Create from './component/Create'
import Remove from './component/Remove'
import DemoCreate from './component/DemoCreate'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DemoRead from './component/DemoRead'
import Updatee from './component/Update'
import Postapi from './component/Postapi'
import Update from './component/Updatee'
import Postmethod from './component/Postmethod'
import Crud from './component/Crud'
import State from './component/State'
import Clearup from './component/Clearup'

function App() { 
  return (
    <div>
       {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<DemoCreate />}></Route>
        <Route path="/demoread" element={<DemoRead/>}></Route>
      </Routes>
    </BrowserRouter> */}
    <Crud/>
    {/* <Updatee/> */}
      {/* <Add /> */}
      {/* <MulAdd /> */}
      {/* <Getapi/> */}
      {/* <Home /> */}
      {/* <Todo /> */}
      {/* <Create/> */}
      {/* <Remove /> */}
    {/* <Postapi /> */}
    {/* <Postmethod /> */}


    {/* <State /> */}
    {/* <Clearup /> */}
    </div>
  )
}

export default App
