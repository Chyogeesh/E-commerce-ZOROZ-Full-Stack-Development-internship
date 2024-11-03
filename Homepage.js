// src/components/Homepage.js
import React, { useEffect, useState } from 'react';
import { fetchFeaturedProducts } from '../api';

function Homepage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchFeaturedProducts().then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Welcome to Mock eCommerce</h1>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Homepage;
