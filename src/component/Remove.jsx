// import React, { useState } from 'react';
 
// function Remove() {
//   const [product, setProduct] = useState([
//     {
//       id: 1,
//       name: "Iphone",
//       price: "100000"
//     }, 
//     {
//       id: 2,
//       name: "Watch",
//       price: "1200"
//     },
//     {
//       id: 3,
//       name: "Washing Machine",
//       price: "50000"
//     }
//   ]);

//   const handleRemove = (id) => {
//     const removedList = product.filter(item => item.id !== id);
//     setProduct(removedList);

//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Product List</h1>
//       {product.map((item) => (
//         <div key={item.id} className="mb-3 p-3 border rounded">
//           <p><strong>Name:</strong> {item.name}</p>
//           <p><strong>Price:</strong> ₹{item.price}</p>
//           <button
//             onClick={() => handleRemove(item.id)}
//             className="mt-2 bg-primary text-white px-3 py-1 rounded"
//           >
//             Remove
//           </button>
//         </div>
//       ))}
//       {product.length === 0 && <p>No Products Available.</p>}
//     </div>
//   );
// }

// export default Remove;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// function Remove() {
//   const [product, setProduct] = useState([]);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
//       setProduct(response.data.slice(0, 50)); // only show first 50 for brevity
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const handleRemove = async (id) => {
//     try {
//       await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
//       setProduct(prev => prev.filter(item => item.id !== id));
//     } catch (error) {
//       console.error("Error deleting product:", error);
//     }
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Product List</h1>
//       {product.map((item) => (
//         <d iv key={item.id} className="mb-3 p-3 border rounded">
//           <p><strong>Title:</strong> {item.title}</p>
//           <p><strong>ID:</strong> {item.id}</p>
//           <button
//             onClick={() => handleRemove(item.id)}
//             className="mt-2 bg-primary text-white px-3 py-1 rounded"
//           >
//             Remove
//           </button>
//         </d>
//       ))}
//       {product.length === 0 && <p>No Products Available.</p>}
//     </div>
//   );
// }

// export default Remove;

// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// function Remove() {
//   const [product,setProduct] = useState([])

//   const fetchProducts = async () => {
//       const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
//       setProduct(prev => response.data.slice(0,100))
//   }

//   useEffect(()=>{
//     fetchProducts();
//   },[])

//   const handleRemove = async (id) => {
//     try{
//       axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
//      setProduct(prev => prev.filter (item => item.id !== id))
//     }catch(error){
//       console.error("error fetching delete data",error)
//     }
//   }
//   return (
//     <div className='text-center'>
//       <h1>Product List</h1>
//       {
//         product.map((item)=>(
//           <div key={item.id}>
//             <p>ID : {item.id}</p>
//             <p>TITLE : {item.title}</p>
//             <button className='bg-primary' onClick={()=> handleRemove(item.id)}>Remove</button>
//           </div>
//         ))
//       }
//     </div>
//   )
// }
// export default Remove


import axios from 'axios'
import React, { useEffect, useState } from 'react'
function Remove() {
  const [product,setProduct] = useState([])

  const fetchProducts = async () =>{
    const resp = await axios.get("https://jsonplaceholder.typicode.com/users")
    setProduct(prev => resp.data.slice(0,10))
  }
  useEffect(()=>{
    fetchProducts();
  },[])

  const handleRemove = async(id) => {
    try{
      axios.delete(`https://jsonplaceholder.typicode.com/users ${id}`)
      setProduct(prev => prev.filter(item => item.id!==id))
    }catch(error){
      console.log("error is:",error);
      
    }
  }
     
  

  return (
    <div>
      <h1>Delete Data From the API</h1>
      <table border={1}>
        <thead>
         <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
          <td>Company Name</td>
          <td>Operation</td>
         </tr>
        </thead>
        <tbody>
          {
            product.map((item)=>(
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.company.name}</td>
                <td><button onClick={()=> handleRemove(item.id)}>Remove</button></td>
              </tr>
            ))
          }
        </tbody>
        
      </table>
    </div>
  )

}
export default Remove;
