import axios from 'axios'
import React, { useState } from 'react'

function Postapi() {
    const [email,setEmail] = useState("")
    const handleSubmit = async (e) => {
      e.preventDefault();
      try{
        const res = await axios.post("https://683965f76561b8d882b03b9b.mockapi.io/crud/crud-ope",{
          email,
        });
        console.log("Response",res.data);
      }catch(err){
        console.log("error",err);
      }
    };
  return (
    <div>
      <form onSubmit={handleSubmit}>
          <input type='text'
          name='email'
          placeholder='Enter Name'
          value={email}
          onChange={(e)=>setEmail(e.target.value)}/>
      <button>Send</button>
      </form>
    </div>
  )
}
export default Postapi


// POST-API with login-form
//  import React, { useState } from 'react'
 
//  function Postapi() {
//   const [email,setEmail] = useState("")
//   const [password,setPassword] = useState("")
//    return (
//      <div>
//        <form onSubmit={handlSubmit}>
//         <input type='text'
//         name='email'
//         ></input>
//        </form>
//      </div>
//    )
//  }
 
//  export default Postapi
 