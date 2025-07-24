// import React, { useEffect, useState } from 'react';
// function Create() {
//   const [product, setProduct] = useState([
//     {
//       id: 1,
//       name: "Laptop",
//       price: 60000
//     },
//     {
//       id: 2,
//       name: "Mouse",
//       price: 40000
//     },
//     {
//       id: 3,
//       name: "Keyboard",
//       price: 10000
//     }
//   ]);

//   return (
//     <div>
//       <h1>API Create Data</h1>
//       {
//         product.map((item) => (
//           <div key={item.id}>
//             <h1>{item.name}</h1>
//             <h1>{item.price}</h1>
//           </div>
//         ))
//       }
//     </div>
//   );
// }

// export default Create;


//Using fetch api

import React, { useEffect, useState } from 'react';
import axios from 'axios';
function Create() {
const [product,setProduct] = useState([])
useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => setProduct(res.data))
    .catch(err => console.log("feching data",err));
},[]);
  return (
    <div>
      <h1>API Create Data</h1>
      {
        product.map((item) => (
          <div key={item.id} className='d-flex'>
            <h1>{item.name}</h1>
            <h1>{item.username}</h1>
            <h1>{item.email}</h1>
             <h1>{item.address.city}</h1>
          </div>
        ))
      }
    </div>
  );
}

export default Create;
