// src/components/AddOneByOne.jsx
import React, { useState } from 'react';

const MulAdd = () => {
  const [products, setProducts] = useState([]);
  const [suggestedProducts] = useState([
    { id: 1, name: "Smart Watch", price: "$99" },
    { id: 2, name: "Gaming Headset", price: "$59" },
    { id: 3, name: "Wireless Charger", price: "$25" },
    { id: 4, name: "Portable Speaker", price: "$45" }
  ]);
  const [index, setIndex] = useState(0);

  const handleAddProduct = () => {
    if (index < suggestedProducts.length) {
      setProducts([...products, suggestedProducts[index]]);
      setIndex(index + 1);
    } else {
      alert("All suggested products added!");
    }
  };

  return (
    <div className="p-4 border rounded shadow-md max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Suggested Products</h2>
      {products.map((product) => (
        <div key={product.id} className="border p-2 mb-2">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-sm">{product.price}</p>
        </div>
      ))}
      <button
        onClick={handleAddProduct}
        className="bg-blue-600 text-white px-4 py-2 mt-3 rounded hover:bg-blue-700"
      >
        Add Next Product
      </button>
    </div>
  );
};

export default MulAdd;
