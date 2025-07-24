import React, { useEffect, useState } from 'react'
import { BiPlusMedical } from 'react-icons/bi';
import { FaMinus } from 'react-icons/fa';

function State() {
    const [count,setCount] = useState(0)

    useEffect(()=>{
      document.title = count;
    })
  return (
    <>
    <div className='container d-flex ps-3'>
      <button onClick={() => setCount(count+1)}>
        <BiPlusMedical className="icon"/>
      </button>
    
      <h1>{count}</h1>
      <button onClick={() => (count === 0 ? setCount(0) : setCount(count-1))}>
        <FaMinus className = "icon minus_icon" />
      </button>
    </div>
    </>
  )
}

export default State


//*USESTATE OBJECT*//

// import React, { useState } from 'react';
// function State() {
//   const [formData,setFormdata] = useState({
//     name:"",
//     email:"",
//     password:"",
//     confirm_password:"",
//   })
//   const handleInput = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;

//     setFormdata((prev) => {
//       return { ...prev, [name]:value}
//     });
    
//   }
//   return (
//     <>
//      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//       <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '400px' }}>
//         <h3 className="text-center mb-4">Create Account</h3>
//         <form>
//           <div className="mb-3">
//             <label className="form-label">Name</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Enter your name"
//               name='name'
//               value={formData.name}
//               onChange={handleInput}
//             />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Email</label>
//             <input
//               type="email"
//               name='email'
//               className="form-control"
//               placeholder="Enter your email"
//               value={formData.email}
//               onChange={handleInput}
//             />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Password</label>
//             <input
//               type="password"
//               name='password'
//               className="form-control"
//               placeholder="Enter your password"
//               value={formData.password}
//               onChange={handleInput}
//             />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Confirm Password</label>
//             <input
//               type="password"
//               name='confirm_password'
//               className="form-control"
//               placeholder="Re-enter your password"
//               value={formData.confirm_password}
//               onChange={handleInput}
//             />
//           </div>

//           <div className="d-grid">
//             <button type="submit" className="btn btn-primary">
//               Create Account
//             </button>
//           </div>
//         </form>
//       </div>
//         </div>
//       <p className='text-center'>{`My Name is ${formData.name} and Email is ${formData.email}`}</p>
//   </>
//   );
// }
// export default State;


