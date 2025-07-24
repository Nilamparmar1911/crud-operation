import React, { useState } from 'react'

function Updatee() {
  const [products,setProducts] = useState([
    { id: 1, name: "Laptop", price: 150000, Description: "i5 7th Generation" },
    { id: 2, name: "Mouse", price: 20000, Description: "easy type" },
    { id: 3, name: "Keyboard", price: 1000, Description: "Good Quality" },
    { id: 4, name: "Jeans", price: 3400, Description: "Cotton blend" }
  ]);
  

  const [editData,setEditData] = useState({name:"",price:"",Description:""})
  const [editId,setEditId] = useState(null) ;


  const handleEdit = (product) => {
    setEditId(product.id);
    setEditData({
      name:product.name,
      price:product.price,
      Description:product.Description
    });
  };

  const handleUpdate = () => {
    const updatedProducts = products.map((product)=>
      product.id === editId ? {...product,...editData} : product
  );
    setProducts(updatedProducts);
    setEditId(null);
    setEditData({name:"",price:"",Description:""});
    
  };
  return (
 <div>
  {editId && (
    <div>
    <input 
    value={setEditData.name}
    onChange={(e) => setEditData({...editData,name:e.target.value})}
    />
     <input 
     type='number'
    value={setEditData.price}
    onChange={(e)=>setEditData(e.target.value)}
    />
     <input 
    value={setEditData.Description}
    onChange={(e)=>setEditData(e.target.value)}
    />
    <button onClick={handleUpdate}>Update</button>
    </div>
 
  )}
      {
        products.map((product)=>(
          <div id={product.id}>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.Description}</p>
            <button onClick={()=>handleEdit(product)}>Edit</button>
          </div>
        ))}
    </div>
  )
}

export default Updatee

