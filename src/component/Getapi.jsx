// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function Getapi() {
//   const [users, setUsers] = useState([]);

  //json converter
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(response => response.json())
//       .then(data => setUsers(data))
//       .catch(error => console.log("Error fetching users", error));
//   }, []);

//with axios to get api
// useEffect(()=>{
//     axios.get("https://jsonplaceholder.typicode.com/users")
//     .then(response => setUsers(response.data))
//     .catch(error => console.log("error is fetching",error));
// },[])

// useEffect(()=>{
//     axios.get("https://jsonplaceholder.typicode.com/posts")
//     .then(response => setUsers(response.data))
//     .catch(error => console.log("error fetching is ",error))
// })
//   return (
//     <div>
//       <h1>Get API</h1>
//       <ul>
//         {users.map(user => (
//           <li key={user.id}>
//             {user.name} ({user.email})
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default Getapi;


import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Getapi() {
  const [users,setUsers] = useState([])
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(Response => setUsers(Response.data))
    .catch(error => console.log('ERROR FETCHING',error));
  })
  return (
    <div>
      <h1>Get api</h1>
      {
        users.map(user => (
        <li key={user.id} >
            {user.name} ({user.email})  ({user.company.name}) ({user.website}) ({user.phone})
        </li>
        ))
      }
    </div>
  )
}
export default Getapi
