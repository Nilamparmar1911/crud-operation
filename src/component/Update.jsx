// import React, { useState } from 'react';

// function Update() {
//   const [products, setProducts] = useState([
//     { id: 1, name: 'Laptop', price: 150000, description: 'Lenovo i5' },
//     { id: 2, name: 'Jeans', price: 2000, description: 'Black Formal Jeans' },
//     { id: 3, name: 'Mouse', price: 500, description: 'Wireless Mouse' }
//   ]);

//   const [editId, setEditId] = useState(null);
//   const [editData, setEditData] = useState({ name: '', price: '', description: '' });

//   const handleEdit = (product) => {
//     setEditId(product.id);
//     setEditData({
//       name: product.name,
//       price: product.price,
//       description: product.description
//     });
//   };

//   const handleUpdate = () => {
//     const updatedProducts = products.map((item) =>
//       item.id === editId ? { ...item, ...editData } : item 
//     );
//     setProducts(updatedProducts);
//     setEditId(null);
//     setEditData({ name: '', price: '', description: '' });
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-bold mb-4">React CRUD - Update Only</h1>

//       {editId && (
//         <div className="mb-4">
//           <h2 className="text-lg font-semibold">Edit Product</h2>
//           <input
//             type="text"
//             placeholder="Name"
//             value={editData.name}
//             onChange={(e) => setEditData({ ...editData, name: e.target.value })}
//             className="border p-1 mr-2"
//           />
//           <input
//             type="number"
//             placeholder="Price"
//             value={editData.price}
//             onChange={(e) => setEditData({ ...editData, price: Number(e.target.value) })}
//             className="border p-1 mr-2"
//           />
//           <input
//             type="text"
//             placeholder="Description"
//             value={editData.description}
//             onChange={(e) => setEditData({ ...editData, description: e.target.value })}
//             className="border p-1 mr-2"
//           />
//           <button onClick={handleUpdate} className="bg-yellow-500 text-white px-3 py-1">
//             Update
//           </button>
//         </div>
//       )}

//       {/* Product List */}
//       {products.map((product) => (
//         <div key={product.id} className="border p-3 mb-3">
//           <p><strong>Name:</strong> {product.name}</p>
//           <p><strong>Price:</strong> {product.price}</p>
//           <p><strong>Description:</strong> {product.description}</p>
//           <button
//             onClick={() => handleEdit(product)}
//             className="bg-blue-500 text-white px-3 py-1 mt-2"
//           >
//             Edit
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Update;

import React, { useState } from 'react';

function Update() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 150000, Description: "i5 7th Generation" },
    { id: 2, name: "Mouse", price: 20000, Description: "easy type" },
    { id: 3, name: "Keyboard", price: 1000, Description: "Good Quality" },
    { id: 4, name: "Jeans", price: 3400, Description: "Cotton blend" }
  ]);

  const [editData, setEditData] = useState({ name: "", price: "", Description: "" });
  const [editId, setEditId] = useState(null);

  const handleEdit = (product) => {
    setEditId(product.id);
    setEditData({
      name: product.name,
      price: product.price,
      Description: product.Description
    });
  };

  const handleUpdate = () => {
    const updatedProducts = products.map((product) =>
      product.id === editId ? { ...product, ...editData } : product
    );
    setProducts(updatedProducts);
    setEditId(null);
    setEditData({ name: "", price: "", Description: "" });
  };

  return (
    <div>
      {editId && (
        <div>
          <input
            value={setEditData.name}
            onChange={(e) => setEditData({ ...editData, name: e.target.value })}
          />
          <input
            type="number"
            value={setEditData.price}
            onChange={(e) => setEditData(e.target.value)}
          />
          <input
            value={setEditData.Description}
            onChange={(e) => setEditData(e.target.value )}
          />
          <button onClick={handleUpdate}>Update</button>
        </div>
      )}

      {products.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <p>{product.Description}</p>
          <button onClick={() => handleEdit(product)}>Edit</button>
        </div>
      ))}
    </div>
  );
}

export default Update;



