// import React from 'react'
// import { useState } from 'react'

// function Add() {
//   const [list,setList] = useState(["Laptop","Mouse"])
//   const handleAdd = () => setList([...list,"keyboard","fvfv"])
//   return (
//     <div>
//       <h1>List of Item</h1>
//       {
//         list.map((e)=>(
//           <p key={e}>{e}</p>
//         ))
//       }
//       <button style={{
//         backgroundColor:"black",
//         color:"white",
//         borderRadius:"5px"
//       }} onClick={handleAdd}>Add</button>
//     </div>
//   )
// }

// export default Add


//*** Multiple data add */
import React, { useState } from 'react';

const Add = () => {
  const [list, setList] = useState(["Laptop", "Mouse"]);
  const [itemsToAdd] = useState(["Charger", "Keyboard", "Monitor", "Printer"]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAdd = () => {
    if (currentIndex < itemsToAdd.length) {
      setList([...list, itemsToAdd[currentIndex]]);
      setCurrentIndex(currentIndex + 1);
    } else {
      alert("No more items to add!");
    }
  };

  return (
    <div>
      <h1>List of items</h1>
      {list.map((e) => (
        <p key={e}>{e}</p>
      ))}

      <button
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "10px",
          textAlign: "center"
        }}
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
};

export default Add;
