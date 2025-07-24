// import axios from 'axios'
// import React, { useState } from 'react'
// const Postmethod = () => {
//     const data = {
//         fname:"",
//         lname:""
//     }
// const [inputData,setInputData] = useState(data)
//  const handleInput = (event) => {
//     console.log(event.target.value);
//     setInputData({...inputData,[event.target.name]:event.target.value})   
//  }
// console.log(inputData);
// const handleSubmit = (e) => {
//   e.preventDefault();
//   axios.post("https://jsonplaceholder.typicode.com/todos",inputData)
//   .then((res)=> 
//     {console.log(res)
// }).catch((err)=>console.log(err)
// )}

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//            <input type='text' placeholder='Enter First name' name='fname' onChange={handleInput} />
//       <input type='text' placeholder='Enter Second name' name='lname' onChange={handleInput}/>
//       <button>Submit</button>
//       </form>
//     </div>
//   )
// }
// export default Postmethod


import axios from 'axios'
import React, { useState } from 'react'

const Postmethod = () => {
  const data ={
    fname:"",
    lname:""
  }
  const [inputData,setInputData] = useState(data)
  const handleInput = (event)=>{
    console.log(event.target.value);
    
    setInputData[{...inputData,[event.target.name]:event.target.value}]
    
  }
  console.log(inputData);
  const handleSubmit = (e) => {
    e.preventDefault(); 
    axios.post("https://jsonplaceholder.typicode.com/todos",inputData)
    .then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err)
      
    })

  }
    return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter First name' name='fname' onChange={handleInput}/>
        <input type='text' placeholder='Enter Last name' name='lname' onChange={handleInput}/>
        <button >Submit</button>
      </form>
    </div>
  )
}

export default Postmethod
