import React, { useState } from 'react';
function Crud() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: 150000 },
    { id: 2, name: 'Mouse', price: 10000 },
    { id: 3, name: 'Keyboard', price: 30000 },
  ]);
  const [editData, setEditData] = useState({ name: '', price: '' });
  const [editId, setEditId] = useState(null);

  // Remove item
  const handleRemove = (id) => {
    const removedList = products.filter((product) => product.id !== id);
    setProducts(removedList);
  };

  // Set item to edit
  const handleEdit = (product) => {
    setEditId(product.id);
    setEditData({ name: product.name, price: product.price });
  };

  // Handle input change
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setEditData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  // Handle input change
    const handleChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    setEditData({
      ...editData,
      [fieldName]: fieldValue,
    });
  };

  // Save updated item
  const handleUpdate = () => {
    const updatedProducts = products.map((product) =>
      product.id === editId ? { ...product, ...editData } : product
    );
    setProducts(updatedProducts);
    setEditId(null);
    setEditData({ name: '', price: '' });
  };

  return (
    <div className="text-center">
      <h1>Product List</h1>

      {editId && (
        <div>
          <input
            name="name"
            value={editData.name}
            onChange={handleChange}
          />
          <input
            name="price"
            value={editData.price}
            onChange={handleChange}
          />
          <button onClick={handleUpdate}>Update</button>
        </div>
      )}

      {products.map((item) => (
        <div key={item.id}>
          <p>{item.id}</p>
          <p>{item.name}</p>
          <p>{item.price}</p>
          <button
            className="bg-danger text-white"
            onClick={() => handleRemove(item.id)}
          >
            Remove
          </button>
          <button
            className="bg-primary text-white ms-3"
            onClick={() => handleEdit(item)}
          >
            Update
          </button>
        </div>
      ))}
    {products.length === 0 && <h1 className='text-danger mt-5 font-bold'>No Data Available</h1>}      
    </div>
  );
}
export default Crud;




