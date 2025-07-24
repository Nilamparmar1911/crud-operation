import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.log('Error fetching products', error));
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {products.map(product => (
        <div key={product.id} className="border p-4 rounded shadow">
           <img src={product.image} alt={product.title} className="h-20 w-20 object-cover mx-auto mb-2" />
          <h2 className="font-semibold">{product.title}</h2>
          <p className="text-green-600">${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
